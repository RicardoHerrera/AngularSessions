import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  //contactusForm = new FormGroup({
  //  firstname: new FormControl(''),
  //  lastname: new FormControl('')
  //});

  contactusForm = this.fb.group({
    person: this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
    }),
    email: ['', [Validators.required, Validators.email]],
    message: ['']
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if(this.contactusForm.valid) {
      console.log(this.contactusForm.value);
    }
    else {
      alert('Formulario no Valido');
    }    
  }

  cleanValues() {
    this.contactusForm.reset();
  }

  updateValues() {
    this.contactusForm.patchValue({
      person: {
        firstname: "James",
        lastname: "Huiza",
      },
      email: "jameshuiza@dominio.com",
      message: "Mensaje de Prueba"
    });
  }

  ngOnInit(): void {
  }

}
