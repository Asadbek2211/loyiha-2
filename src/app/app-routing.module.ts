import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './destinations/destinations.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FlightsComponent } from './flights/flights.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';



const routes: Routes = [
  {path:'destinations' , component:DestinationsComponent},
  {path:'hotels' , component:HotelsComponent},
  {path:'flights' , component:FlightsComponent},
  {path:'bookings' , component:BookingsComponent},
  {path:'login' , component:LoginComponent},
  {path:'sign-up' , component:SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
