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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    InboxComponent,
    ComposeComponent,
    OutboxComponent,
    FoiledComponent,
    TrashComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
