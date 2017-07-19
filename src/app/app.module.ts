import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import {appRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    SearchEngineComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
