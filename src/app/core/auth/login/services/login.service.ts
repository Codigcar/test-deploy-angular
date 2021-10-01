import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonProfileResponse } from '../model/personProfileResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = "http://localhost:8080/api/v1/personprofiles";

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<PersonProfileResponse[]>(this.url);
  }
  register(personProfile: PersonProfileResponse){
    return this.http.post(this.url, personProfile);
  }
}
