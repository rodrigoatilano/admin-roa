// Rutas
import { RouterModule, Routes } from '@angular/router';

// page main
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

const appRutes: Routes = [

    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NopagefoundComponent },


];
export const APP_ROUTES = RouterModule.forRoot( appRutes, { useHash: true });
