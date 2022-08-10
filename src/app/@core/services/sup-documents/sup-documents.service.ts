import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileModel } from '@models/file.model';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupdocumentForm } from '@modules/sup-documents/types/supdocument-form.model';
import { BaseService } from '@services/base.service';
import { extend, merge } from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
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
        Processing: false
    }

    private mapFile(res: HttpResponse<Blob>): FileModel {
        const file: FileModel = {
          blob: res.body ? res.body : undefined,
        };

        const disposition = res.headers.get('Content-Disposition');
        if (!disposition) {
          // either the disposition was not sent, or is not accessible
          //  (see CORS Access-Control-Expose-Headers)
          return file;
        }
        const utf8FilenameRegex = /filename\*=UTF-8''([\w%\-\.]+)(?:; |$)/;
        const asciiFilenameRegex = /filename=(["'])(.*?[^\\])\1(?:; |$)/;

        let fileName = '';
        if (utf8FilenameRegex.test(disposition)) {
          const exec = utf8FilenameRegex.exec(disposition);
          if (exec) {
            fileName = decodeURIComponent(exec[1]);
          } else {
            return file;
          }
        } else {
          const matches = asciiFilenameRegex.exec(disposition);
          if (matches != null && matches[2]) {
            fileName = matches[2];
          }
        }
        file.name = fileName;
        return file;
      }


    getDocuments(clientId: string): Observable<SupDocument[]> {
        return this.http.get<SupDocument[]>(`api/v1/supdocuments/${clientId}`);
    }

    getSignedDocuments(clientId: string): Observable<SupDocument[]> {
        return this.http.get<SupDocument[]>(`api/v1/supdocuments/${clientId}?$filter=Status eq 'SIGNED'`);
    }
    createSupdocument(clientId: string, data: SupdocumentForm): Observable<SupDocument> {
        console.log('service post called');
        return this.http.post<SupDocument>(`api/v1/supdocuments/${clientId}`, merge(true, this._SupportDocumentModel, data));
    }

    deleteSupdocument(clientId: string, supdocumentId: string): Observable<any> {
        return this.http.delete<any>(`api/v1/supdocuments/${supdocumentId}/${clientId}`);
    }

    downloadSupdocument(clientId: string, supdocumentId: string): Observable<FileModel> {
        console.log('service download called');
        return this.http.get<Blob>(`api/v1/supdocuments/download/${supdocumentId}/${clientId}`,
        { responseType: 'blob' as 'json', observe: 'response' }
        )
        .pipe(
            map((response) => this.mapFile(response)),
            map((result) => ({ ...result, name: result.name || `supdocument.PDF` }))
          );
    ;
    }
}
