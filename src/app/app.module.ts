import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductAlertsComponent,
        ProductAlertsComponent,
        ProductListComponent,
        TopBarComponent,
    ],
    imports: [
        BrowserModule,
        MatIconModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: ProductListComponent },
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { };