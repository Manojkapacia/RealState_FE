import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule} from  '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { PropertiesComponent } from './view/properties/properties.component';
import { ContactComponent } from './view/contact/contact.component';
import { SinglePropertyComponent } from './view/single-property/single-property.component';
import { AboutComponent } from './view/about/about.component';
import { SingleAgentComponent } from './view/single-agent/single-agent.component';
  import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PropertiesComponent,
    ContactComponent,
    SinglePropertyComponent,
    AboutComponent,
    SingleAgentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
