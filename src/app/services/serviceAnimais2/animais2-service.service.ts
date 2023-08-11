import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/interfaces/Animal';

@Injectable({
  providedIn: 'root'
})
export class Animais2ServiceService {
  private apiUrl = 'http://localhost:3000/animais'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl) 
  }

  getItem(id: number):Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }

}
