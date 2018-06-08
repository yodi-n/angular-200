import { HttpClient } from '@angular/common/http';
import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    map,
    mergeMap
} from 'rxjs/operators';

const BASE_URL = 'http://localhost:9000';

@Component({
    selector:    'sfeir-update',
    templateUrl: 'update.component.html',
    styleUrls:   ['update.component.css']
})
export class UpdateComponent implements OnInit {
    person: any;

    /**
     * Component constructor
     */
    constructor(private _route: ActivatedRoute, private _router: Router, private _http: HttpClient) {
        this.person = {
            address: {}
        };
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
        this._route.params
            .pipe(
                map((params: any) => params.id),
                mergeMap((id: string) => this._http.get(`${BASE_URL}/api/peoples/${id}`))
            )
            .subscribe((person: any) => this.person = person);
    }

    submit(person: any) {
        this._http.put(`${BASE_URL}/api/peoples/${person.id}`, person)
            .subscribe(() => this._router.navigate(['/people']));
    }

    cancel() {
        this._router.navigate(['/people']);
    }

}
