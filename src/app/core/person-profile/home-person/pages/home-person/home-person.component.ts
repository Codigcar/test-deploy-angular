import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-home-person',
  templateUrl: './home-person.component.html',
  styleUrls: ['./home-person.component.scss']
})
export class HomePersonComponent implements OnInit {

  test:any = "https://www.google.com/";

  id:number = 0;

  listProducts:any = 
  [{
    "id": 1,
    "business_name": "Aibox",
    "district": "Mexico",
    "address": "374 Merry Way",
    "email": "kwilcher0@businessinsider.com",
    "description": "error: undefined method `id' for nil:NilClass",
    "photo": "https://robohash.org/iurenesciuntincidunt.png?size=600x600&set=set1"
  }, {
    "id": 2,
    "business_name": "Realpoint",
    "district": "China",
    "address": "824 Dryden Junction",
    "email": "callcock1@mediafire.com",
    "description": "error: undefined method `id' for nil:NilClass",
    "photo": "https://robohash.org/voluptatemutsaepe.png?size=600x600&set=set1"
  }, {
    "id": 3,
    "business_name": "Eamia",
    "district": "Portugal",
    "address": "96936 Bowman Alley",
    "email": "ncobleigh2@mysql.com",
    "description": "error: undefined method `id' for nil:NilClass",
    "photo": "https://robohash.org/commodinequebeatae.png?size=600x600&set=set1"
  }, {
    "id": 4,
    "business_name": "Edgepulse",
    "district": "Indonesia",
    "address": "792 Stephen Plaza",
    "email": "dpetrovic3@ezinearticles.com",
    "description": "error: undefined method `id' for nil:NilClass",
    "photo": "https://robohash.org/adipisciquiasaepe.png?size=600x600&set=set1"
  }, {
    "id": 5,
    "business_name": "Oyoyo",
    "district": "Mauritania",
    "address": "138 Reindahl Court",
    "email": "dsoitoux4@eventbrite.com",
    "description": "error: undefined method `id' for nil:NilClass",
    "photo": "https://robohash.org/quiaoccaecatiet.png?size=600x600&set=set1"
  }, {
    "id": 6,
    "business_name": "Wordpedia",
    "district": "China",
    "address": "0605 Grover Drive",
    "email": "sarrell5@de.vu",
    "description": "error: undefined method `id' for nil:NilClass",
    "photo": "https://robohash.org/quisquamvoluptascommodi.png?size=600x600&set=set1"
  }, {
    "id": 7,
    "business_name": "Rhybox",
    "district": "France",
    "address": "1 Pleasure Road",
    "email": "lcourtenay6@yahoo.com",
    "description": "error: undefined method `id' for nil:NilClass",
    "photo": "https://robohash.org/ducimusdelectussequi.png?size=600x600&set=set1"
  }, {
    "id": 8,
    "business_name": "Thoughtbridge",
    "district": "Canada",
    "address": "116 Monument Drive",
    "email": "shanwell7@wisc.edu",
    "description": "error: undefined method `id' for nil:NilClass",
    "photo": "https://robohash.org/ipsamquisquia.png?size=600x600&set=set1"
  }, {
    "id": 9,
    "business_name": "Yozio",
    "district": "Lithuania",
    "address": "5356 Commercial Crossing",
    "email": "tbottle8@mtv.com",
    "description": "error: undefined method `id' for nil:NilClass",
    "photo": "https://robohash.org/impeditevenieteaque.png?size=600x600&set=set1"
  }, {
    "id": 10,
    "business_name": "Youopia",
    "district": "Peru",
    "address": "4614 Graceland Circle",
    "email": "ssueter9@opera.com",
    "description": "error: undefined method `id' for nil:NilClass",
    "photo": "https://robohash.org/nihilutquo.png?size=600x600&set=set1"
  }]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectedVeterinary(businessId:any) {
    this.router.navigate([ `personProfiles/business/${businessId}`]);

  }

}
