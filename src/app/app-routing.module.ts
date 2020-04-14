import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataRenderComponent } from './components/data-render/data-render.component';

const routes: Routes = [
  { path: '', component: DataRenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
