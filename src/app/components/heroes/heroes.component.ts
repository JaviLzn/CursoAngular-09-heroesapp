import { Heroe } from './../../interfaces/heroe.interface';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any;

  constructor( private _heroesService: HeroesService) {
    this._heroesService.obtenerHeroes().subscribe(data => {
      console.log(data);
      this.heroes = data;
    });
  }

  ngOnInit() {
  }

  borrarHeroe( key$: string ){
    this._heroesService.borrarHeroe(key$).subscribe( respuesta =>{

      if ( respuesta ){
        console.error(respuesta);
      } else {
        delete this.heroes[key$];
      }



    })
  }

}
