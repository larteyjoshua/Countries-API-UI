import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { MapComponent } from './components/map/map.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

const routes: Routes = [{
  path: '',
  component: ListComponent,
  title: 'countries API'
},
{
  path: 'map',
  component: MapComponent,
  title: 'countries map'
},
{
  path: 'details',
  component: CountryDetailsComponent,
  title: 'country Details'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
