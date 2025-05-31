import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Portrait } from './portrait.model';
import { CsrfService } from '../csrf.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PortraitService {
    private folderImgLength = 5;
    private selectedPortrait?: Portrait;
    public portraits: Portrait[] = [];
    

    //TODO CAMBIAR URL DE LA API
    private apiUrl = environment.apiUrl + '/posts';
  
    constructor(private http: HttpClient, private csrfService: CsrfService) {
        for (let i = 0; i < this.folderImgLength; i++) {
            this.portraits.push({
                _id: i.toString(),
                src: "img/characters/humano/explorador/humano-explorador-" + i + ".png",
                alt: "Portrait " + i
            });
        }
    }

}
