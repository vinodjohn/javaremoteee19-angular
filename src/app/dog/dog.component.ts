import {Component, Input, OnInit} from '@angular/core';
import {Dog} from "../shared/models/Dog";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit{
  @Input() dogTitle: string = '';
  @Input() doggies: Dog[] = [];

  ngOnInit(): void {
  }

}
