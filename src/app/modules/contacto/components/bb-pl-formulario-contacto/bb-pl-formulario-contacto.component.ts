import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bb-pl-formulario-contacto',
  templateUrl: './bb-pl-formulario-contacto.component.html',
  styleUrls: ['./bb-pl-formulario-contacto.component.scss']
})
export class BbPlFormularioContactoComponent {
  form =new FormGroup({
    nombre:new FormControl <string>('',{validators:Validators.required}),
    email:new FormControl <string>('',{validators:[Validators.required,Validators.email]}),
    mensaje:new FormControl <string>('',{validators:Validators.required})

  })
  constructor(){

  }

  enviarFormulario(){
    console.log(this.form)
    if(this.form.valid){
      console.log(this.form.value)
    }else{
     this.form.markAllAsTouched
    }
    
  }

  get nombre():FormControl{
    return this.form.controls.nombre
  }

  get email():FormControl{
    return this.form.controls.email
  }

  get mensaje():FormControl{
    return this.form.controls.mensaje
  }

}
