import { Trip } from './trip.model';

export class Journey {
	id: number;
	destinationCity: string;
	destinationCoutry: string;
	departureTrip: Trip;
	arrivalTrip: Trip;
}