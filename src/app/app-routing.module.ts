import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './custom-components/new-user/new-user.component';
import { UserListComponent } from './custom-components/user-list/user-list.component';

const routes: Routes = [
  {path:'', component:NewUserComponent},
  {path:'newUser', component:NewUserComponent},
  {path:'userList', component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
