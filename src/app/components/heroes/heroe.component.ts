import { Heroe } from './../../interfaces/heroe.interface';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

 heroe: Heroe = {
   nombre: '',
   bio: '',
   casa: 'Marvel'
 };

  constructor() { }

  ngOnInit() {
  }

  guardar() {
  console.log(this.heroe);

  }

}
