import { Component } from '@angular/core';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header_color= '#E03137';
  title = 'Gestión de Tickets';
}
