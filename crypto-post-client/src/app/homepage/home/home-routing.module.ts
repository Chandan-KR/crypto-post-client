import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent } from 'src/app/compose/compose.component';
import { FoiledComponent } from 'src/app/foiled/foiled.component';
import { InboxComponent } from 'src/app/inbox/inbox.component';
import { OutboxComponent } from 'src/app/outbox/outbox.component';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { TrashComponent } from 'src/app/trash/trash.component';
import { ViewContentComponent } from 'src/app/view-content/view-content.component';
import { HomepageComponent } from '../homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
   {path:'inbox',component:InboxComponent},
  {path:'compose',component:ComposeComponent},
  {path:'foiled',component:FoiledComponent},
  {path:'trash',component:TrashComponent},
  {path:'outbox',component:OutboxComponent},
  {path:'settings',component:SettingsComponent},
  {path:'veiw',component:ViewContentComponent}
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
