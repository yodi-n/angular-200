import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:9000';

@Component({
    selector: 'sfeir-people',
    templateUrl: 'people.component.html',
    styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {

    private _people;

    constructor(private _http: HttpClient) {}

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._http.get(`${BASE_URL}/api/peoples/`)
            .subscribe( (people) => this._people = people);
    }

    /**
     * @name PeopleComponent#people
     * @type { Getter }
     * @description Getter of the private var _people
     * @return { Array<any> } _people
     */
    get people(): Array<any> {
      return this._people;
    }
}
