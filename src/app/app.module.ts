import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



import { AppComponent } from './app.component';

//Components
import { HomeComponent } from './components/home.component';
import { AddVenueComponent } from './components/add_venue.component';
import { VenuesComponent } from './components/venues.component';
import { AddEventComponent } from './components/add_event.component';
import { ConfigurationsComponent } from './components/configurations.component';
import { ArtistComponent } from './components/artist.component';
import { SectionsComponent } from './components/sections.component';
import { AddRowsComponent } from './components/add_rows.component';
import { AddConfigurationsComponent } from './components/add_configurations.component';
import { AddSectionComponent } from './components/add_section.component';
import { GenerateTicketsComponent } from './components/generate_tickets.component';
import { ValidatorComponent } from './components/validator.component';



//Routes
import { routing, appRoutingProviders } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddVenueComponent,
    AddEventComponent,
    ConfigurationsComponent,
    SectionsComponent,
    AddSectionComponent,
    AddRowsComponent,
    ArtistComponent,
    AddConfigurationsComponent,
    GenerateTicketsComponent,
    ValidatorComponent,
    VenuesComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivatePageComponent,
    NotFoundPageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgSelectModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
