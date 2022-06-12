import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServerComponent } from './components/server/server.component';
import { StudentComponent } from './components/student/student.component';


const appRoutes: Routes=[
  {path:'',component:HomeComponent},
  {path:'student/:id',component:StudentComponent},
  {path:'student/:id/:name',component:StudentComponent},
  {path:'student',component:StudentComponent},
  {path:'server',component:ServerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
