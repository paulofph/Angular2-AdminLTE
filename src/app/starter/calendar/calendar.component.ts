import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
	calendar: JQuery;
	constructor() { }

	ngOnInit() {
		jQuery('.calendar').daterangepicker({
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			},
			startDate: moment().subtract(29, 'days'),
			endDate: moment()
		}, function(start, end) {
			// window.alert('You chose:  ' + this.start.format('MMMM D, YYYY') + ' - ' + this.end.format('MMMM D, YYYY'));
		});
	}

}
