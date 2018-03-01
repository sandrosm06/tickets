import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './components/home.component';
import { AddVenueComponent } from './components/add_venue.component';
import { AddEventComponent } from './components/add_event.component';
import { ConfigurationsComponent } from './components/configurations.component';
import { AddConfigurationsComponent } from './components/add_configurations.component';
import { ArtistComponent } from './components/artist.component';
import { AddSectionComponent } from './components/add_section.component';
import { AddRowsComponent } from './components/add_rows.component';
import { GenerateTicketsComponent } from './components/generate_tickets.component';
import { ValidatorComponent } from './components/validator.component';
import { VenuesComponent } from './components/venues.component';


const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'venues', component: VenuesComponent},
	{path: 'add-venue', component: AddVenueComponent},
	{path: 'add-event/:idVenue', component: AddEventComponent},
	{path: 'add-configurations/:idEvent', component: AddConfigurationsComponent},
	{path: 'configurations', component: ConfigurationsComponent},
	{path: 'artist', component: ArtistComponent},
	{path: 'add-sections/:idEvent', component: AddSectionComponent},
	{path: 'add-rows/:idEvent', component: AddRowsComponent},
	{path: 'generate-tickets/:idEvent', component: GenerateTicketsComponent},
	{path: 'validator/:qrCode', component: ValidatorComponent}
	


	
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
