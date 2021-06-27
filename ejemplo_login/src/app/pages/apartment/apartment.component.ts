import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  apartment = {projectId: 1};
  project = {name: ""};

  constructor(private readonly apartmentService: ApartmentService, private readonly projectService:ProjectService, private activateRoute: ActivatedRoute) { }

  getApartmentById(id: number){
    this.apartmentService.getApartments().subscribe((rest: any) => {
      this.apartment = rest.data.filter((item: { id: number; }) => item.id == id);
      console.log(this.apartment);
    })
  }

  getProjectById(id: number){
    this.projectService.getProjects().subscribe((rest: any) => {
      this.project = rest.data.filter((item: { id: number; }) => item.id == id);
      console.log(this.project);
    })
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      if (params.id){
        this.getApartmentById(params.id);
        this.getProjectById(this.apartment.projectId);
      }
    });
  }
}