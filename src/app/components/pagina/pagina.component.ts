import { Component, importProvidersFrom } from '@angular/core';
import {WeatherComponent} from 'src/app/weather/weather.component'

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent {
  constructor(
    private meteorologia: WeatherComponent, 
  ){}

  ngOnInit():void{
    this.meteorologia.getWheather
  }
}
