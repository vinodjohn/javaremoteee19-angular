import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { DogFormComponent } from './dog-form/dog-form.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {DashboardModule} from "./dashboard/dashboard.module";
import {RouterModule, Routes} from "@angular/router";
import {CatComponent} from "./dashboard/cat/cat.component";

const appRoutes: Routes = [
  {
    path: 'dog',
    component: DogComponent
  },
  {
    path: 'create-dog',
    component: DogFormComponent
  },
  {
    path: 'cat',
    component: CatComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    DogFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    DashboardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
