import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }

  getProjects(){
    return this.http.get('/api/project/GetProjects');
  }

  getProyectos(){
    return this.http.get('https://localhost:4000/api/Project/GetProjects');
  }
}