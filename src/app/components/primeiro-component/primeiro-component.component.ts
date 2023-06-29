import { Component } from '@angular/core';


@Component({
  selector: 'app-primeiro-component',
  templateUrl: './primeiro-component.component.html',
  styleUrls: ['./primeiro-component.component.css']
})
export class PrimeiroComponentComponent { 
  nome: string= 'Daniel';
  idade: number= 23;
  job: string='programador';
  
}
