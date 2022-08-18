import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileModel } from '@models/file.model';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupDocumentEdit } from '@modules/sup-documents/types/supdocument-edit.model';
import { SupdocumentForm, SupdocumentSendForm } from '@modules/sup-documents/types/supdocument-form.model';
import { Recipient } from '@modules/sup-documents/types/supdocument-upload.model';
import { BaseService } from '@services/base.service';
import { merge } from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SupDocumentsService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  _SupportDocumentModel = {
    Id: 0,
    Edrpo: '',
    CreatingDate: new Date(),
    LastActiveDate: new Date(),
    FileName: 0,
    FileExt: 'pdf',
    FileSize: 0,
    FileBody: '',
    Description: '',
    Status: 'NEW',
    Processing: false,
  };

  private mapFile(res: HttpResponse<Blob>): FileModel {
    const file: FileModel = {
      blob: res.body ? res.body : undefined,
    };

    const disposition = res.headers.get('Content-Disposition');
    console.log('disposition', disposition);
    if (!disposition) {
      return file;
    }
    const utf8FilenameRegex = /filename\*=UTF-8''([\w%\-\.]+)(?:; |$)/;
    const asciiFilenameRegex = /filename=(["'])(.*?[^\\])\1(?:; |$)/;

    const fileName = '';
    // if (utf8FilenameRegex.test(disposition)) {
    //   const exec = utf8FilenameRegex.exec(disposition);
    //   console.log('exec', exec);
    //   if (exec) {
    //     fileName = decodeURIComponent(exec[1]);
    //   } else {
    //     return file;
    //   }
    // } else {
    //   const matches = asciiFilenameRegex.exec(disposition);
    //   console.log('matches', matches);
    //   if (matches != null && matches[2]) {
    //     fileName = matches[2];
    //   }
    // }
    file.name = fileName;

    file.name = disposition.split(';')[1].split('filename')[1].split('=')[1].trim();
    console.log(file.name as string);
    return file;
  }

  getDocuments(clientId: string): Observable<SupDocument[]> {
    return this.http.get<SupDocument[]>(`api/v1/supdocuments/${clientId}`);
  }

  getSignedDocuments(clientId: string): Observable<SupDocument[]> {
    return this.http.get<SupDocument[]>(`api/v1/supdocuments/${clientId}?$filter=Status eq 'SIGNED'`);
  }

  getRecipients(clientId: string): Observable<Recipient[]> {
    return this.http.get<Recipient[]>(`api/v1/supdocuments/recipients/${clientId}`);
  }

  createSupdocument(clientId: string, data: SupdocumentForm): Observable<SupDocument> {
    console.log('service post called');
    return this.http.post<SupDocument>(
      `api/v1/supdocuments/${clientId}`,
      merge(true, this._SupportDocumentModel, data)
    );
  }

  deleteSupdocument(clientId: string, supdocumentId: number[]): Observable<any> {
    return this.http.post<any>(`api/v1/supdocuments/delete/${clientId}`, supdocumentId);
  }
  sendToBank(clientId: string, data: SupdocumentSendForm, ids: string[]): Observable<any> {
    console.log(data);
    const obj = {
      Ids: ids,
      Recipients: data.Recipients,
      Message: data.Message,
    };
    return this.http.post<any>(`api/v1/supdocuments/tobank/${clientId}`, obj);
  }

  downloadSupdocument(clientId: string, supdocumentId: number): Observable<FileModel> {
    console.log('service download called');
    return this.http
      .get<Blob>(`api/v1/supdocuments/download/${supdocumentId}/${clientId}`, {
        responseType: 'blob' as 'json',
        observe: 'response',
      })
      .pipe(
        map((response) => this.mapFile(response)),
        map((result) => ({ ...result, name: (result.name as string) || `supdocument.PDF` }))
      );
  }

  getSupdocument(clientId: string, supdocumentId: number): Observable<SupDocument> {
    console.log('get supdoc service call');
    return this.http.get<SupDocument>(`api/v1/supdocuments/${supdocumentId}/${clientId}`);
  }

  updateSupdocument(clientId: string, supdocument: SupDocumentEdit): Observable<any> {
    console.log(supdocument);
    return this.http.put<any>(`api/v1/supdocuments/${clientId}`, supdocument);
  }

  getPayments(clientId: string, supdocumentId: number): Observable<any> {
    return this.http.get<any>(`api/v1/supdocuments/${clientId}/${supdocumentId}`);
  }
}
