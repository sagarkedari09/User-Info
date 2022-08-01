import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interface/app.types';
import { userDetails } from 'src/app/mock-backend/mockBackend';
import { SharingService } from 'src/app/Services/sharing.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  userData!: any;
  profileForm!: any;
  index = 0;
  data: any;
  updatedInfo: any;
  newUser: any;
  id:any
    constructor(
    private fb: FormBuilder,
    private sharingService: SharingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      address: new FormControl('', [Validators.required]),
    });
    this.setFormValue();
    this.userData = this.sharingService.getData();
    console.log(this.userData);
  }
  setFormValue() {
    this.index = Number(localStorage.getItem('position'));
    this.profileForm.patchValue(this.sharingService.getData() || '');
  }
  onSave(profileForm: any) {
    this.sharingService.updateData(profileForm.value)
    console.log(profileForm.value);
    // if (localStorage.length) {
    //   this.data = localStorage.getItem('data');
    //   this.id=localStorage.getItem('id')
      
    //   console.log(JSON.parse(this.data))
    //   JSON.parse(this.data).map((obj: { position: any; })=>{
    //     if(obj.position===JSON.parse(this.id)){
    //       obj=profileForm.value
    //       localStorage.setItem('data',JSON.stringify(obj))
    //       console.log(obj);
    //     }
    //   })
      
      
    //   // console.log(this.data);
    //   // this.updatedInfo = JSON.parse(this.data).push(profileForm.value);
    //   // localStorage.setItem('data', this.updatedInfo);
    // }else{
   
    //   userDetails.push(profileForm.value);
    //   this.newUser = userDetails;
    //   localStorage.setItem('data',JSON.stringify(this.newUser))
      
    // }

    

    
    // userDetails[userDetails.length-1].position = userDetails.length
    this.router.navigate(['userList']);
  }
}
