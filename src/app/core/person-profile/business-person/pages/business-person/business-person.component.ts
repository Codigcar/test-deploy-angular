import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-business-person',
  templateUrl: './business-person.component.html',
  styleUrls: ['./business-person.component.scss']
})
export class BusinessPersonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  listServices: any[] = [{
    "id": 1,
    "name": "Melly",
    "description": "dapibus duis at velit eu est congue elementum in hac",
    "photo": "http://dummyimage.com/233x100.png/dddddd/000000"
  }, {
    "id": 2,
    "name": "Nyssa",
    "description": "luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec",
    "photo": "http://dummyimage.com/220x100.png/dddddd/000000"
  }, {
    "id": 3,
    "name": "Marie",
    "description": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus",
    "photo": "http://dummyimage.com/229x100.png/dddddd/000000"
  }, {
    "id": 4,
    "name": "Rip",
    "description": "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam",
    "photo": "http://dummyimage.com/185x100.png/dddddd/000000"
  }, {
    "id": 5,
    "name": "Delphine",
    "description": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
    "photo": "http://dummyimage.com/130x100.png/5fa2dd/ffffff"
  }, {
    "id": 6,
    "name": "Ofilia",
    "description": "et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet",
    "photo": "http://dummyimage.com/225x100.png/ff4444/ffffff"
  }, {
    "id": 7,
    "name": "Dorri",
    "description": "nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque",
    "photo": "http://dummyimage.com/164x100.png/dddddd/000000"
  }, {
    "id": 8,
    "name": "Chris",
    "description": "sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
    "photo": "http://dummyimage.com/246x100.png/dddddd/000000"
  }, {
    "id": 9,
    "name": "Ros",
    "description": "varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices",
    "photo": "http://dummyimage.com/183x100.png/5fa2dd/ffffff"
  }, {
    "id": 10,
    "name": "Stanly",
    "description": "nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
    "photo": "http://dummyimage.com/165x100.png/dddddd/000000"
  }]

  selectedService(serviceId:any): void{
    this.router.navigate([ `personProfiles/business/1/citas`]);
  }

}
