import { Component, OnInit } from '@angular/core';

// models
import { Journey } from './../../models/journey.model'

@Component({
	selector: 'app-admin-content',
	templateUrl: './admin-content.component.html',
	styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {
	linechart: morris.GridChart;
	areaChart: morris.GridChart;
	donutChart: morris.DonutChart;
	private journeys: Journey[];

	constructor() { }

	ngOnInit() {
		this.areaChart = Morris.Area({
			element: 'revenue-chart',
			resize: true,
			data: [
				{ y: '2018-01', item1: 2666 },
				{ y: '2018-02', item1: 2778 },
				{ y: '2018-03', item1: 4912 },
				{ y: '2018-04', item1: 3767 },
				{ y: '2018-05', item1: 6810 },
				{ y: '2018-06', item1: 5670 },
				{ y: '2018-07', item1: 4820 },
				{ y: '2018-08', item1: 15073 },
				{ y: '2018-09', item1: 10687 },
				{ y: '2018-10', item1: 8432 },
				{ y: '2018-11', item1: 8432 },
				{ y: '2018-12', item1: 8432 }
			],
			xkey: 'y',
			ykeys: ['item1'],
			labels: ['Item 1'],
			lineColors: ['#a0d0e0'],
			hideHover: 'auto'
		});

		this.journeys = [{
			"id": 1,
			"destinationCity": "Boston",
			"destinationCoutry": "USA",
			"destinationAirport": "Aeroporto Internacional de Logan",
			"departureAirport": "Aeroporto Humberto Delgado",
			"departureDate": "25/03/2018",
			"departureTime": "10h50m"
		}];
	}
}
