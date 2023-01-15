
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  styleUrls: ['./home.component.less']

})
export class HomeComponent implements OnInit {

  awaiting: boolean = true;

  constructor() {

  }

  ngOnInit(): void {

  }


}
