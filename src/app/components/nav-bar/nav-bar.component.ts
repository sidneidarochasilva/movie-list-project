import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  radioModel = 'Middle';
  radioModelDisabled = 'Middle';
  modelGroupDisabled = false;
  form: FormGroup;



  constructor(private formBuilder: FormBuilder, private router: Router) {

    this.form = this.formBuilder.group({
      name: []
    })

  }


  ngOnInit(): void {
  }

  onSubmit() {

    this.router.navigate([`/home/${this.form.value.name}`])

  }


}
