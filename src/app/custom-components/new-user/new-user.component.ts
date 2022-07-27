import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  profileForm = this.fb.group({
    firstname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    phone:new FormControl('',[Validators.required, Validators.maxLength(10)]),
    address:new FormControl('',[Validators.required]),
    
})

  ngOnInit(): void {
  }
  onSave(profileForm:FormGroup){
    console.log(profileForm.value)

  }

}
