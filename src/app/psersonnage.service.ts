import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Charcaters } from './model/characters';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PsersonnageService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Charcaters[]> {
    return this.http.get<Charcaters[]>(`${environment.URL}/characters`);
  }

  delete(character: Charcaters, id: string): Observable<Charcaters> {
    return this.http.delete<Charcaters>(`${environment.URL}/characters/`+id);
  }
  modifier(character:any,id:string): Observable<Charcaters> {
    return this.http.put<Charcaters>(`${environment.URL}/characters/${id}`, character);
  }

  create(character: Charcaters): Observable<Charcaters> {
    return this.http.post<Charcaters>(`${environment.URL}/characters`, character);
  }
}
