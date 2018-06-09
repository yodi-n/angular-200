import {
    HttpClient,
    HttpClientModule
} from '@angular/common/http';
// CORE DEPS
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// MATERIAL DESIGN MODULES
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PeopleAppComponent } from './app.component';

import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home';
import { PeopleComponent } from './people';
import { AddDialogComponent } from './people/add-dialog/add-dialog.component';
import { CardComponent } from './shared/card';
import { FormComponent } from './shared/form';
import { NaPipe } from './shared/na-pipe';
import { PeopleService } from './shared/people-service';
import { UpdateComponent } from './update';

@NgModule({
    imports:         [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatIconModule,
        MatListModule,
        HttpClientModule,
        MatDialogModule,
        APP_ROUTES,
        ReactiveFormsModule
    ],
    declarations:    [
        PeopleAppComponent,
        HomeComponent,
        PeopleComponent,
        CardComponent,
        AddDialogComponent,
        FormComponent,
        UpdateComponent,
        NaPipe
    ],
    entryComponents: [AddDialogComponent],
    providers:       [HttpClient, PeopleService],
    bootstrap:       [
        PeopleAppComponent
    ]
})
export class AppModule {
}
