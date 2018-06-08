import {
    Component,
    OnInit
} from '@angular/core';
import { PeopleService } from '../shared/people-service';

@Component({
    selector:    'sfeir-home',
    templateUrl: 'home.component.html',
    styleUrls:   ['home.component.css']
})
export class HomeComponent implements OnInit {
    private person: any;

    constructor(private _peopleService: PeopleService) {
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._peopleService.fetch()
            .subscribe(people => this.person = people[0]);
    }

    /**
     * Returns random people
     */
    random() {
        this._peopleService.fetchRandom()
            .subscribe(person => this.person = person);
    }
}
