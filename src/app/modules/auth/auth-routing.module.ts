import { AuthLogonOldComponent } from './views/auth-logon-old/auth-logon-old.component';
import { AuthLogonComponent } from './views/auth-logon/auth-logon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './views/auth/auth.component';


const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'logon',
                component: AuthLogonComponent
            },
            {
                path: 'old',
                component: AuthLogonOldComponent
            }
        ]
    },
    { path: '', redirectTo: '/auth/logon', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }
