import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {AngularNotesComponent} from "./angular-notes/angular-notes.component";
import {SiteHeaderComponent} from "./site-header/site-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent, CatalogComponent, AngularNotesComponent, SiteHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
