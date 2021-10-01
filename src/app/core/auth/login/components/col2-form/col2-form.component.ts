import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterPersonComponent } from '../../../../person-profile/register-person/pages/register-person/register-person.component';
import { LoginService } from '../../services/login.service';
import { PersonProfileResponse } from '../../model/personProfileResponse';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-col2-form',
  templateUrl: './col2-form.component.html',
  styleUrls: ['./col2-form.component.scss']
})
export class Col2FormComponent implements OnInit {

  listPersons: PersonProfileResponse[] = [];

  constructor(
    public dialog: MatDialog,
    private loginService: LoginService, private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginService.getAll()
      .subscribe(data => console.log('data: ', data))

  }

  openDialog() {
    this.dialog.open(RegisterPersonComponent, { width: '500px', height: 'auto' });
  }

  login() {
    this.router.navigate(['personProfiles']);
  }
}
