import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../_static/people';

@Component({
    selector: 'sfeir-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  private _person: any;

  constructor() {
      this._person = PEOPLE[0];
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  get person(): any {
    return this._person;
  }
}
