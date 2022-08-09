import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupDocument } from '@models/sup-documents/sup-document.model';
import { SupdocumentForm } from '@modules/sup-documents/types/supdocument-form.model';
import { BaseService } from '@services/base.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SupDocumentsService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }

    getDocuments(clientId: string): Observable<SupDocument[]> {
        return this.http.get<SupDocument[]>(`api/v1/supdocuments/${clientId}`);
    }

    getSignedDocuments(clientId: string): Observable<SupDocument[]> {
        return this.http.get<SupDocument[]>(`api/v1/supdocuments/${clientId}?$filter=Status eq 'SIGNED'`);
    }
    createSupdocument(clientId: string, data: SupdocumentForm): Observable<SupDocument> {
        console.log('service post called');
        return this.http.post<SupDocument>(`api/v1/supdocuments/${clientId}`, data);
    }
    deleteSupdocument(clientId: string, supdocumentId: string): Observable<any> {
        console.log('service delete called');
        return this.http.delete<any>(`api/v1/supdocuments/${supdocumentId}/${clientId}`);
    }
}
