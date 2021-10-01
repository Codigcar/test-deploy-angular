import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PersonProfileRequest } from '../../model/personProfileRequest';
import { RegisterPersonService } from '../../services/register-person.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-person',
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.scss']
})
export class RegisterPersonComponent implements OnInit {


  constructor(private registerPersonService: RegisterPersonService, public dialog: MatDialog) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl('carlos'),
      'dni': new FormControl('12312312'),
      'phone': new FormControl('123123123'),
      'age': new FormControl('23'),
      'email': new FormControl('carlos@gmail.com'),
      'password': new FormControl(''),
    });
  }

  showTast(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
  }
  
  operar(): void {
    console.log('submit');

    let personProfle = new PersonProfileRequest();
    personProfle.name = this.form.value['name'];
    personProfle.dni = this.form.value['dni'];
    personProfle.phone = this.form.value['phone'];
    personProfle.age = this.form.value['age'];
    personProfle.email = this.form.value['email'];
    personProfle.password = this.form.value['password'];

    this.registerPersonService.register(personProfle).subscribe(data => {
      console.log('data: ', data);
      this.dialog.closeAll();
      this.showTast();
    }, (err) => {
      console.log('err: ', err);
      console.log('err: ', err.error.mensaje);

    });
  }
}
