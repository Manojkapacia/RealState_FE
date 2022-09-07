import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './view/about/about.component';
import { ContactComponent } from './view/contact/contact.component';
import { HomeComponent } from './view/home/home.component';
import { PropertiesComponent } from './view/properties/properties.component';
import { SingleAgentComponent } from './view/single-agent/single-agent.component';
import { SinglePropertyComponent } from './view/single-property/single-property.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'about/agent', component : SingleAgentComponent},
  {path : 'properties', component : PropertiesComponent},
  {path : 'properties/singleProperty', component : SinglePropertyComponent},
  {path : 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
