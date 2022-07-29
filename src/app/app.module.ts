import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './custom-components/user-list/user-list.component';
import { NewUserComponent } from './custom-components/new-user/new-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { SharingService } from './Services/sharing.service';
import { SearchFilterPipe } from './custom-pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NewUserComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
