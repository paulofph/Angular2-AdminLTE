import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { AdminContentComponent } from './../admin/admin-content/admin-content.component';
import { MembersComponent } from './../starter/members/members.component';
import { StarterComponent } from './../starter/starter.component';
import { HomePageComponent } from './../starter/home-page/home-page.component';
import { CalendarComponent } from './../starter/calendar/calendar.component';
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
					{
						path: '',
						component: AdminContentComponent
					},
					{
						path: 'calendar',
						component: CalendarComponent
					},
					{
						path: 'members',
						component: MembersComponent
					},
				]
			}
		])
	],

	declarations: [],
	exports: [RouterModule]
})
export class AppRoutingModule { }
