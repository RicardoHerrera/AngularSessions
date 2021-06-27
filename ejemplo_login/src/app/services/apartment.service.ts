import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private readonly http: HttpClient) { }

  getApartments(){
    return this.http.get('/api/apartment/GetApartments');
  }
}
