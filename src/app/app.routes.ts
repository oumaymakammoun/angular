import { Routes } from '@angular/router';
import { Member } from './member/memberComponent';
import { MemeberForm } from './memeber-form/memeber-form';

export const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  { path: 'members', component: Member },
  { path: 'create', component: MemeberForm },
  { path: 'edit/:id', component: MemeberForm }
];
