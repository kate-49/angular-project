import {NgModule} from "@angular/core";
import {AppComponent} from "./app/app.component";
import {HomepageComponent} from "./app/homepage/homepage.component";
import {AngularNotesComponent} from "./app/angular-notes/angular-notes.component";
import {CatalogComponent} from "./app/catalog/catalog.component";
import {SiteHeaderComponent} from "./app/site-header/site-header.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppComponent,
    HomepageComponent,
    AngularNotesComponent,
    CatalogComponent,
    SiteHeaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
