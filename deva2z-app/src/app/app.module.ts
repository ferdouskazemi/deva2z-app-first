import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarGridComponent } from './components/navbar-grid/navbar-grid.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServiceComponent } from './pages/service/service.component';
import { TeamComponent} from './pages/team/team.component'
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';

// components
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'  
import { HomeComponent } from './pages/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';

@NgModule({
  declarations: [
    AppComponent,
    NavbarGridComponent,
    AboutUsComponent,
    ServiceComponent,
    GalleryComponent,
    FaqComponent,
    ContactComponent,
    TeamComponent,
    HomeComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'team', component: TeamComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: HomeComponent },
    ]),
    NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
