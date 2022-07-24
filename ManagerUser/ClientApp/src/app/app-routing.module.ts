import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryComponent } from './pages/query/query.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'user/editar', component: UserComponent},
  { path: '', component: QueryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
