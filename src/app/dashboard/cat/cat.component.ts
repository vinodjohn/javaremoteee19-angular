import {Component, OnInit} from '@angular/core';
import {Cat} from "../../shared/models/Cat";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  cats: Cat[] = [];

  ngOnInit(): void {
    this.cats.push(new Cat('Caesar', 'Persian', 'black'));
  }

}
