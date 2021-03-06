import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Params } from '@angular/router'
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects = [];
  apartments = [];
  showProjects = true;

  constructor(private readonly projectService: ProjectService,
              private readonly apartmentService: ApartmentService,
              private activateRoute: ActivatedRoute) { }

  getProjects() {
    this.projectService.getProject().subscribe((rest: any) => {
      this.projects = rest.data;
      console.log(this.projects);
    })
  }

  getProjectById(id: number) {
    this.projectService.getProject().subscribe((rest: any) => {
      this.projects = rest.data.filter((item : { id: number; }) => item.id == id );
      console.log(this.projects);
    })
  }

  getApartmentsByProject(id: number) {
    this.apartmentService.getApartments().subscribe((rest: any) => {
      this.apartments = rest.data.filter((item: { projectId: number; }) => item.projectId == id);
    })
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.getProjectById(params.id);
        this.getApartmentsByProject(params.id);
        this.showProjects = false
      } else {
        this.getProjects();
      }
    })
  }
}