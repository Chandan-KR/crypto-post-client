import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { OutboxComponent } from './outbox/outbox.component';
import { FoiledComponent } from './foiled/foiled.component';
import { TrashComponent } from './trash/trash.component';
import { SettingsComponent } from './settings/settings.component';
import { ViewContentComponent } from './view-content/view-content.component';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './homepage/home/home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    InboxComponent,
    ComposeComponent,
    OutboxComponent,
    FoiledComponent,
    TrashComponent,
    SettingsComponent,
    ViewContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
