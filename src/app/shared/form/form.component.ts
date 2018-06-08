import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output
} from '@angular/core';

@Component({
    selector:    'sfeir-form',
    templateUrl: 'form.component.html',
    styleUrls:   ['form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

    @Input() model: any;
    isUpdateMode: boolean;

    @Output('cancel') cancel$: EventEmitter<any>;
    @Output('submit') submit$: EventEmitter<any>;

    constructor() {
        this.submit$ = new EventEmitter();
        this.cancel$ = new EventEmitter();
        this.model = {address: {}};
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }

    /**
     * Function to handle component update
     *
     * @param record
     */
    ngOnChanges(record) {
        if (record.model && record.model.currentValue) {
            this.model = record.model.currentValue;
            this.isUpdateMode = !!this.model;
        }
    }

    cancel() {
        this.cancel$.emit();
    }

    submit(person: any) {
        this.submit$.emit(this.model);
    }
}
