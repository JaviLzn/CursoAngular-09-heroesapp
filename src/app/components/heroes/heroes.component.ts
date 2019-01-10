import { Heroe } from './../../interfaces/heroe.interface';
import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {


  constructor( private _heroesService: HeroesService) { }

  ngOnInit() {
  }



}
