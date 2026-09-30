import { Routes } from '@angular/router';
import { MemeberForm } from './memeber-form/memeber-form';

export const routes: Routes = [
    {
        path: 'create',
        component:  MemeberForm
    },{
        path: '',
        component:  MemeberForm
    }
];
