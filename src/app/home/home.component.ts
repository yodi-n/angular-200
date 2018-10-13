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
    private person: any;

    constructor(private _http: HttpClient) {}

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._http.get(`${BASE_URL}/api/peoples`)
            .subscribe(people => this.person = people[0]);
    }

    /**
     * Returns random people
     */
    random() {
        this._http.get(`${BASE_URL}/api/peoples/random`)
            .subscribe(person => this.person = person);
    }


    /**
     * @name HomeComponent
     * @type { Getter }
     * @description Getter of the private var person
     * @return { any } this.person
     */
    get Person(): any {
      return this.person;
    }
}
