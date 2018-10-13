import { HttpClient } from '@angular/common/http';
import {
    Component,
    OnInit
} from '@angular/core';

const BASE_URL = 'http://localhost:9000';

@Component({
    selector:    'sfeir-home',
    templateUrl: 'home.component.html',
    styleUrls:   ['home.component.css']
})
export class HomeComponent implements OnInit {
    private _person: any;

    constructor(private _http: HttpClient) {}

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._http.get(`${BASE_URL}/api/peoples`)
            .subscribe(people => this._person = people[0]);
    }

    /**
     * Returns random people
     */
    random() {
        this._http.get(`${BASE_URL}/api/peoples/random`)
            .subscribe(person => this._person = person);
    }

    /**
     * @name HomeComponent#person
     * @type { Getter }
     * @description Getter of the private var _person
     * @return { any } _person
     */
    get person(): any {
      return this._person;
    }
}
