import { Component, importProvidersFrom } from '@angular/core';
import {WeatherService} from '../../services/weather.service'

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css'],
})
export class PaginaComponent {
  constructor(
    private meteorologia: WeatherService, 
  ){}

  getWeatherData() {
    this.meteorologia.getWeather('braga').subscribe(
      (response) => {
        console.log(response); // Corpo da resposta da API
      },
      (error) => {
        console.error(error);
        // Lida com erros caso ocorram
      }
    );
  }
}
