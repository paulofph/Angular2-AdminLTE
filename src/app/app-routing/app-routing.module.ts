import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { AdminContentComponent } from './../admin/admin-content/admin-content.component';
import { StarterComponent } from './../starter/starter.component';
import { HomePageComponent } from './../starter/home-page/home-page.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', redirectTo: 'starter', pathMatch: 'full' },
			{
				path: 'starter',
				component: StarterComponent,
				children: [
					// {
					// 	path: '',
					// 	redirectTo: 'dashboard1',
					// 	pathMatch: 'full'
					// },
					{
						path: '',
						component: AdminContentComponent
					},
					{
						path: 'dashboard1',
						component: AdminDashboard1Component
					},
				]
			}
		])
	],

	declarations: [],
	exports: [RouterModule]
})
export class AppRoutingModule { }
