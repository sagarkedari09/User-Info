import { IsFocusableConfig } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/app.types';
import { userDetails } from '../mock-backend/mockBackend';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  id:any
  dataIndex!: number;
  data!:IUser

  constructor() { }
  

  setData(objIndex:number){
    this.dataIndex=objIndex
    this.data=userDetails[this.dataIndex]
  }
  getData(){
    return this.data
  }
  updateData(profileForm:any){
    (localStorage.length) ? userDetails[this.dataIndex]=profileForm: userDetails.push(profileForm)
    localStorage.setItem('data',JSON.stringify(userDetails))
  }
}
