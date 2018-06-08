import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector:    'sfeir-home',
    templateUrl: 'home.component.html',
    styleUrls:   ['home.component.css']
})
export class HomeComponent implements OnInit {
    name: string;

    /* Better way :
    private _name: string;
    get name(): string {
        return this._name;
    }
    */

    constructor() {
        this.name = 'Angular 2';
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }
}
