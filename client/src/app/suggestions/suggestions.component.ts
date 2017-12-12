import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  constructor() { }

  zoom: number = 13;
  //Mapa1
  lat1: number = 40.421623;
  lng1: number = -3.720285;
  //Mapa2
  lat2: number = 40.425688;
  lng2: number = -3.668940;
  //Mapa3
  lat3: number = 40.398565;
  lng3: number = -3.705014;
  //Mapa4
  lat4: number = 40.345390;
  lng4: number = -3.815870;
  //Mapa5
  lat5: number = 40.427278;
  lng5: number = -3.670093;

  ngOnInit() {
  }

}
