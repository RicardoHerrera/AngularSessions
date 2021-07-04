import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }

  getProject() {
    return this.http.get('/api/project/GetProject');
  }
}