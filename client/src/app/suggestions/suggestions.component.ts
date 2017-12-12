import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  zoom: number = 25;
  lat: number = 40.392467;
  lng: number = -3.697553;
  constructor() { }

  ngOnInit() {
  }

}
