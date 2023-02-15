import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Dog} from "../shared/models/Dog";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{
  doggies: Dog[] = [];
  displayedColumns: string[] = ['name', 'type', 'property'];

  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<Dog>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.doggies.length);
    this.doggies.push(this.doggies[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.doggies.pop();
    this.table.renderRows();
  }

  ngOnInit(): void {
    this.doggies = this.fetchDoggos();
  }

  fetchDoggos(): Dog[] {
    let doggos: Dog[] = [];

    doggos.push(new Dog('Jack', 'Dober', 'Runs faster'));
    doggos.push(new Dog('Julie', 'German Shepperd', 'Eats well'));

    return doggos;
  }

}
