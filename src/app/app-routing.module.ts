import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CabinsComponent } from './cabins/cabins.component';
import { OutdooradventureComponent } from './outdooradventure/outdooradventure.component';
import { OutdooradventuredetailsComponent } from './outdooradventuredetails/outdooradventuredetails.component';
import { EatanddrinkComponent } from './eatanddrink/eatanddrink.component';
import { EatanddrinkdetailsComponent } from './eatanddrinkdetails/eatanddrinkdetails.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { EntertainmentdetailsComponent } from './entertainmentdetails/entertainmentdetails.component';
import { CabindetailsComponent } from './cabindetails/cabindetails.component';

import { FaqComponent } from './faq/faq.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';



const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'cabins', component: CabinsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Outdooradventure', component: OutdooradventureComponent },
  { path: 'outdooradventuredetails', component: OutdooradventuredetailsComponent },
  { path: 'Eatanddrink', component: EatanddrinkComponent },
  { path: 'Eatanddrinkdetails', component: EatanddrinkdetailsComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'entertainmentdetails', component: EntertainmentdetailsComponent },
  { path: 'cabins/:id', component: CabindetailsComponent },

  { path: 'faq', component: FaqComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent },
  { path: 'termsandconditions', component: TermsandconditionsComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
