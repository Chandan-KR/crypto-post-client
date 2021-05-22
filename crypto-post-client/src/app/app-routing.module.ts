import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { FoiledComponent } from './foiled/foiled.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';
import { SettingsComponent } from './settings/settings.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'inbox',component:InboxComponent},
  {path:'compose',component:ComposeComponent},
  {path:'foiled',component:FoiledComponent},
  {path:'trash',component:TrashComponent},
  {path:'outbox',component:OutboxComponent},
  {path:'settings',component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
