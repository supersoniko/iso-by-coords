# iso-by-coords

![npm](https://img.shields.io/npm/v/iso-by-coords)
![NPM](https://img.shields.io/npm/l/iso-by-coords)
![David](https://img.shields.io/david/supersoniko/iso-by-coords.svg)

## Usage

### TypeScript

```javascript
import configureCountryIso from 'iso-by-coords';
import {CountryISO} from 'iso-by-coords/lib/typings';
import getMap from 'countries-maritime-10m-extended';

const {getIsoCodes: getIsoCodesAlpha2} = configureCountryIso({
	iso: CountryISO.ALPHA_2,
	map: getMap()
});

const {getIsoCodes: getIsoCodesAlpha3} = configureCountryIso({
	iso: CountryISO.ALPHA_3,
	map: getMap()
});

getIsoCodesAlpha2(50.95148037338329, 5.350969164113395); // returns  [BE]
getIsoCodesAlpha3(50.95148037338329, 5.350969164113395); // returns [BEL]
```

### JavaScript

```javascript
const configureCountryIso = require('iso-by-coords').default;
const getMap = require('countries-maritime-10m-extended');

const {getIsoCodes: getIsoCodesAlpha2} = configureCountryIso({
	iso: 'A2',
	map: getMap()
});

const {getIsoCodes: getIsoCodesAlpha3} = configureCountryIso({
	iso: 'A3',
	map: getMap()
});

getIsoCodesAlpha2(50.95148037338329, 5.350969164113395); // returns  [BE]
getIsoCodesAlpha3(50.95148037338329, 5.350969164113395); // returns [BEL]
```
