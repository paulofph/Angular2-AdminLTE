import { Component, OnInit } from '@angular/core';

// models
import { Journey } from './../../models/journey.model'
import { Trip } from './../../models/trip.model'

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
	private departureTrip1: Trip;
	private arrivalTrip1: Trip;
	private departureTrip2: Trip;
	private arrivalTrip2: Trip;

	constructor() {

	}

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

		this.departureTrip1 = {
			"id": 1,
			"destinationAirport": "Aeroporto Internacional Logan",
			"departureAirport": "Aeroporto Humberto Delgado",
			"arrivalDate": "25/05/2018",
			"arrivalTime": "10h55m",
			"departureDate": "25/05/2018",
			"departureTime": "13h30m",
			"flightCode": "TP250"
		}

		this.arrivalTrip1 = {
			"id": 2,
			"destinationAirport": "Aeroporto Humberto Delgado",
			"departureAirport": "Aeroporto Internacional Logan",
			"arrivalDate": "30/05/2018",
			"arrivalTime": "18h40m",
			"departureDate": "31/05/2018",
			"departureTime": "6h00m",
			"flightCode": "TP562"
		}

		this.departureTrip2 = {
			"id": 3,
			"destinationAirport": "Aeroporto Internacional Tom Jobim",
			"departureAirport": "Aeroporto Humberto Delgado",
			"arrivalDate": "10/07/2018",
			"arrivalTime": "10h55m",
			"departureDate": "10/07/2018",
			"departureTime": "13h30m",
			"flightCode": "TP250"
		}

		this.arrivalTrip2 = {
			"id": 4,
			"destinationAirport": "Aeroporto Humberto Delgado",
			"departureAirport": "Aeroporto Internacional Tom Jobim",
			"arrivalDate": "24/07/2018",
			"arrivalTime": "18h40m",
			"departureDate": "25/07/2018",
			"departureTime": "6h00m",
			"flightCode": "TP562"
		}

		this.journeys = [{
			"id": 1,
			"destinationCity": "Boston",
			"destinationCoutry": "USA",
			"departureTrip": this.departureTrip1,
			"arrivalTrip": this.arrivalTrip1,
		},
		{
			"id": 1,
			"destinationCity": "Rio de Janeiro",
			"destinationCoutry": "BR",
			"departureTrip": this.departureTrip2,
			"arrivalTrip": this.arrivalTrip2,
		}];
	}
}
