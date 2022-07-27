import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/app.types';
import { Router } from '@angular/router';

let userData:any=[
  {position:1, name:'Sagar', email:'sk@gmail.com', contact:9900987673, address:"Baramati, Pune"},
  {position:2, name:'Tejas', email:'tejaa@gmail.com', contact:9290026733, address:"Viman Nagar, Pune"},
  {position:3, name:'Vikas', email:'Vikas@gmail.com', contact:9160957653, address:"Lucknow, Uttar Pradesh"},
  {position:4, name:'Pavan', email:'pkale@gmail.com', contact:9180949071, address:"Baramati, Pune"},
  {position:5, name:'Viraj', email:'vpatil@gmail.com', contact:9115581623, address:"Pimpri, Pune"}
]

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  userArray!:IUser
  columnsToBeDisplayed:string[]=['position', 'name', 'email', 'contact', 'address','edit', 'delete']
  dataSource=userData

  deleteUser(element: IUser){
    console.log(element)
    this.userArray=userData.filter((ele: IUser )=>ele!==element)
    this.dataSource=this.userArray
  }

  editUser(element: IUser){
    this.router.navigate(['newUser'])
    
  }

}
