export enum CountryISO {
	ALPHA_2 = 'A2',
	ALPHA_3 = 'A3'
}

export interface ConfigureCountryOptions {
	iso: CountryISO;
	map: GeoMap;
}

interface Options {
	type: string;
	coordinates: [number, number];
}

interface FeatureProperties {
	A2: string;
	A3: string;
}

interface Geometry {
	coordinates: [number, number][];
	type: string;
}

export interface Feature {
	geometry: Geometry;
	type: string;
	properties: FeatureProperties;
}

export interface GeoMap {
	type: string;
	features: Feature[];
}

export interface GeoJsonPolygonLookup {
	getContainers(options: Options): GeoMap;
}

export interface GeoJsonPolygonLookupConstructable {
	new (map: GeoMap): GeoJsonPolygonLookup;
}
