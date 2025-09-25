import { Routes } from '@angular/router';
import { Documentation } from '../pages/documentation/documentation';
import { Crud } from '../pages/crud/crud';
import { Member } from '../member/member';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'user', component: Member },
    { path: '**', redirectTo: '/notfound' }
] as Routes;