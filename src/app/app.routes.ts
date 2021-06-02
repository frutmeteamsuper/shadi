import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,

	PagoComponent,
	PrincipalComponent,
	ShadibannerComponent,
	ShadibestsellerComponent,
	ShadidiscountComponent,
	ShadifooterComponent,
	ShadimostwantedComponent,
	ShadisliderComponent,
	ShaditopComponent,
	ShadishopComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:PrincipalComponent},
	{path:'shadibanner',component:ShadibannerComponent},
	{path:'shadibestseller',component:ShadibestsellerComponent},
	{path:'shadidiscount',component:ShadidiscountComponent},
	{path:'shadifooter',component:ShadifooterComponent},
	{path:'shadimostwanted',component:ShadimostwantedComponent},
	{path:'shadislider',component:ShadisliderComponent},
	{path:'shaditop',component:ShaditopComponent},
	{path:'shadishop',component:ShadishopComponent},

	{path:'pago',component:PagoComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

