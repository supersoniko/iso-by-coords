import {GeoMap} from 'countries-maritime-10m-extended';

export enum CountryISO {
	ALPHA_2 = 'A2',
	ALPHA_3 = 'A3'
}

export interface ConfigureCountryOptions {
	iso: CountryISO;
}

interface Options {
	type: string;
	coordinates: [number, number];
}

export interface GeoJsonPolygonLookup {
	getContainers(options: Options): GeoMap;
}

export interface GeoJsonPolygonLookupConstructable {
	new (map: GeoMap): GeoJsonPolygonLookup;
}
