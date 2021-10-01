import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonProfileRequest } from '../model/personProfileRequest';

@Injectable({
  providedIn: 'root'
})
export class RegisterPersonService {

  
  private url: string = "http://localhost:8080/api/v1/personprofiles";

  constructor(private http:HttpClient) { }


  register(personProfile: PersonProfileRequest){
    // console.log('PersonProfileRequestService: ', personProfile);
    
    return this.http.post(this.url, personProfile);
  }
}
