import { IsFocusableConfig } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/app.types';
import { userDetails } from '../mock-backend/mockBackend';

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  id: any;
  dataIndex!: number;
  data!: IUser;
  userInfo: any;

  constructor() {}

  setData(objIndex: number) {
    this.dataIndex = objIndex;
    let userData = localStorage.getItem('data')
    if(userData){
      let userArray = JSON.parse(userData)
      this.data = userArray[this.dataIndex];
    }
    
  }
  getData() {
    return this.data;
  }
  updateData(profileForm: any) {
    // if(localStorage.length){
    //   let userArray:any=localStorage.getItem('data')
    //   userArray[this.dataIndex] = profileForm
    //   localStorage.setItem('data',JSON.stringify(userArray))
    // }else{
    //   userDetails.push(profileForm);
    //   localStorage.setItem('data', JSON.stringify(userDetails));
    // }
    localStorage.length
      ? (userDetails[this.dataIndex] = profileForm)
      : userDetails.push(profileForm);
    localStorage.setItem('data', JSON.stringify(userDetails));
  }
  deleteData(objIndex: number) {
    this.userInfo = localStorage.getItem('data');
    let users = JSON.parse(this.userInfo);
    users.splice(objIndex, 1);
    console.log('updated users', users);
    localStorage.setItem('data', JSON.stringify(users));
  }
}
