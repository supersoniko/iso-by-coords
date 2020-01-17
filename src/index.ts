import GeoJsonPolygonLookupTool from 'geojson-geometries-lookup';
import getMap, {Feature, GeoMap} from 'countries-maritime-10m-extended';
import {ConfigureCountryOptions, CountryISO} from './typings';


const configureCountryIso = (options: ConfigureCountryOptions) => {
	const map: GeoMap = getMap();
	const worldLookup = new GeoJsonPolygonLookupTool(map);

	const countryFeatureToIsoMapper = (feature: Feature) =>
		options.iso === CountryISO.ALPHA_2
			? feature.properties.A2
			: feature.properties.A3;

	return {
		getIsoCodes: (lat: number, lng: number): string[] => {
			const countries: GeoMap = worldLookup.getContainers({
				type: 'Point',
				coordinates: [lng, lat]
			});

			if (countries.features.length > 0) {
				return [...new Set(countries.features.map(countryFeatureToIsoMapper))];
			}

			return [];
		}
	};
}

export default configureCountryIso;
