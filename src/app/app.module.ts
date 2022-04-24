import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CabinsComponent } from './cabins/cabins.component';
import { ContactComponent } from './contact/contact.component';
import { OutdooradventureComponent } from './outdooradventure/outdooradventure.component';
import { OutdooradventuredetailsComponent } from './outdooradventuredetails/outdooradventuredetails.component';
import { EatanddrinkComponent } from './eatanddrink/eatanddrink.component';
import { EatanddrinkdetailsComponent } from './eatanddrinkdetails/eatanddrinkdetails.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { EntertainmentdetailsComponent } from './entertainmentdetails/entertainmentdetails.component';
import { CabindetailsComponent } from './cabindetails/cabindetails.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { FaqComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CabinsComponent,
    ContactComponent,
    OutdooradventureComponent,
    OutdooradventuredetailsComponent,
    EatanddrinkComponent,
    EatanddrinkdetailsComponent,
    EntertainmentComponent,
    EntertainmentdetailsComponent,
    CabindetailsComponent,
    SitemapComponent,
    PrivacypolicyComponent,
    TermsandconditionsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
