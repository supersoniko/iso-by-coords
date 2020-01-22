import {CountryISO} from '../typings';
import configureCountryIso from '../index';
import map from './map.geo.json';

describe('configureCountryIso Alpha 2', (): void => {
	const {getIsoCodes} = configureCountryIso({
		iso: CountryISO.ALPHA_2,
		map: map as any
	});

	it('should return [BE]', () => {
		// Prepare
		const expectedCountries = ['BE'];

		// Execute
		const countries = getIsoCodes(50.95148037338329, 5.350969164113395);

		// Assert
		expect(countries).toEqual(expectedCountries);
	});
});

describe('configureCountryIso Alpha 2', (): void => {
	const {getIsoCodes} = configureCountryIso({
		iso: CountryISO.ALPHA_3,
		map: map as any
	});

	it('should return [BEL]', () => {
		// Prepare
		const expectedCountries = ['BEL'];

		// Execute
		const countries = getIsoCodes(50.95148037338329, 5.350969164113395);

		// Assert
		expect(countries).toEqual(expectedCountries);
	});
});
