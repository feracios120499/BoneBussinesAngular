import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupDocument } from '@models/sup-documents/sup-document.model';
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
}
