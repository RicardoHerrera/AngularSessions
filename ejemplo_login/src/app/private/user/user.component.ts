import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm = this.fb.group({
    loginUsuario: ['', Validators.required],
    passwordUsuario: ['', Validators.required],
    idPerfil: ['', Validators.required],
    nombres: [''],
    apellidoPaterno: [''],
    apellidoMaterno: [''],
    documentoIdentidad: ['']
  });

  constructor(private fb : FormBuilder, private readonly userService : UserService) { }

  userInsert(data){
    this.userService.setUserInsert(data).subscribe((rest :any) => {
      if(rest.isSuccess)
      {
        console.log(rest);
      }
      else
      {
        console.log("No se generaron registros");
      }
    })
  }

  onSubmit(){
    if(this.userForm.valid)
    {
      this.userInsert(this.userForm.value);
    }
  }

  ngOnInit(): void {
  }

}
