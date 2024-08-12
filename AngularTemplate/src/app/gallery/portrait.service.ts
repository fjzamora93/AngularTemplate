import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Portrait } from './portrait.model';
import { CsrfService } from '../csrf.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PortraitService {

    private selectedPortrait?: Portrait;
    public portraits: Portrait[] = [
        {
            "_id": "1",
            "src": "img/characters/humano/explorador/humano-explorador-0.png",
            "alt": "Eric"
        },
        {
            "_id": "2",
            "src": "img/characters/humano/explorador/humano-explorador-1.png",
            "alt": "John"
        },
        {
            "_id": "3",
            "src": "img/characters/humano/explorador/humano-explorador-2.png",
            "alt": "Mark"
        },
        {
            "_id": "4",
            "src": "img/characters/humano/explorador/humano-explorador-3.png",
            "alt": "Steve"
        }
    ];
    

    //TODO CAMBIAR URL DE LA API
    private apiUrl = environment.apiUrl + '/posts';
  
    constructor(private http: HttpClient, private csrfService: CsrfService) {}

}
