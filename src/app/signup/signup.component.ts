import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators  } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstname: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(4)]],
      lastname: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(4)]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]],
    });
  }

  get firstname() { return this.userForm.get('firstname'); }
  get lastname() { return this.userForm.get('lastname'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }


  onSubmit(){
    if(this.userForm.valid){
      alert('User form is valid!!')
      console.log(this.userForm.value)
    } else {
      alert('User form is not valid!!')
    }
  }
}
