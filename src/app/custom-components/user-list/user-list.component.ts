import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/interface/app.types';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/Services/sharing.service';
import { userDetails } from 'src/app/mock-backend/mockBackend';
import { MatTableDataSource } from '@angular/material/table';

// const userInfo=
// [
//   {position:1, name:'Sagar', email:'sk@gmail.com', contact:9900987673, address:"Baramati, Pune"},
//   {position:2, name:'Tejas', email:'tejaa@gmail.com', contact:9290026733, address:"Viman Nagar, Pune"},
//   {position:3, name:'Vikas', email:'Vikas@gmail.com', contact:9160957653, address:"Lucknow, Uttar Pradesh"},
//   {position:4, name:'Pavan', email:'pkale@gmail.com', contact:9180949071, address:"Baramati, Pune"},
//   {position:5, name:'Viraj', email:'vpatil@gmail.com', contact:9115581623, address:"Pimpri, Pune"}
// ]

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  searchValue!:string
  constructor(private router:Router, private sharingService:SharingService) { }

  ngOnInit(): void {
  
    // this.sharingService.storeData()
    // console.log(localStorage.getItem('data'))
    this.data=localStorage.getItem('data')
    this.dataSource= new MatTableDataSource(JSON.parse(this.data))
    // console.log(this.data)

  }
  data! : any
  userToChange:any
  userData:any
  index!:number
  userArray!:IUser[]
  editUserArray:Array<any>=[]
  // data!:IUser 
  columnsToBeDisplayed:string[]=[ 'name', 'email', 'phone', 'address','edit', 'delete']
  
  deleteUser(element: IUser){
    console.log(element.position)
    console.log(this.data)
    this.data=localStorage.getItem('data')
    this.userData = JSON.parse(this.data).filter((ele: IUser )=> ele.position!==element.position)    
    localStorage.setItem('data',JSON.stringify(this.userData))
    this.dataSource=this.userData
  }

  editUser(objIndex: number){
    this.data=localStorage.getItem('data')
    // this.userToChange=JSON.parse(this.data).filter((ele:IUser)=>ele.position===element.position)
    console.log(this.userToChange)
    this.sharingService.setData(objIndex)
    // userToChange=localStorage.getItem('data')
    this.router.navigate(['newUser'])
    
    // localStorage.setItem(`position`, `${element.position}`)
        
  }
  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

}
