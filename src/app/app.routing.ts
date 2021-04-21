// IMPORTAR MÓDULOS DEL ROUTER
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// IMPORTAR COMPONENTES
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

// ARRAY DE RUTAS

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent},
    {path: '**', component: LoginComponent}
]

//EXPORTAR CONFIGURACIÓN
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);