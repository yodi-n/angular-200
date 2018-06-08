import {
    HttpClient,
    HttpClientModule
} from '@angular/common/http';
// CORE DEPS
import { NgModule } from '@angular/core';
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
        MatDialogModule,
        HttpClientModule,
        APP_ROUTES
    ],
    declarations:    [
        PeopleAppComponent,
        HomeComponent,
        PeopleComponent,
        CardComponent,
        AddDialogComponent
    ],
    entryComponents: [AddDialogComponent],
    providers:       [HttpClient],
    bootstrap:       [
        PeopleAppComponent
    ]
})
export class AppModule {
}
