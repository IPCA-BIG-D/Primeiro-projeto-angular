
import { HttpClient } from '@angular/common/http';

export class WeatherComponent {
  constructor(private http: HttpClient) { }

  

  getWheather(loc: String){
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=f7ffc2750eeb4ccc822194041232806&q=${loc}&aqi=no` ;


      this.http.get(apiUrl).subscribe(
  (response) => {
    console.log(response);
    // Aqui você pode processar a resposta do corpo (body) como desejar
  },
  (error) => {
    console.error(error);
    // Lida com erros caso ocorram
  }
);
  }


}
