import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterServieService } from '../../shared/service/register-servie.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    address2: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
  });

  constructor(private regServiceObj: RegisterServieService) {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  getApiCall() {
    this.regServiceObj.getData().subscribe(result => console.log(result)
    )
  }
  updateNameState() {
    this.profileForm.patchValue({
      name: 'Sajeed',
      state: 'Value1'
    })



    // this.profileForm.setValue({
    //   name: '',
    //   email: '',
    //   password: '',
    //   address: '',
    //   address2: '',
    //   city: '',
    //   state: '',
    //   zip: '',
    // })
  }
}
