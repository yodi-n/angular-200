import { Component } from '@angular/core';

@Component({
    selector:    'sfeir-app',
    templateUrl: 'app.component.html',
    styleUrls:   ['app.component.css']
})
export class PeopleAppComponent {
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
}
