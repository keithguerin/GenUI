import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components here
import { ResourceComponent } from './resource/resource.component';
import { ListComponent } from './list/list.component';
// import { AppComponent } from './app/app.component';

const routes: Routes = [
  // Add your routes here
  { path: '', component: ListComponent },
  { path: 'resources/:name', component: ResourceComponent },
  // { path: 'resources', component: ListComponent },
  // { path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
