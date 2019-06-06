import { APPDB } from './src/app/app.db';

const hotel = APPDB.hotels.filter(hotel => hotel.code == 'SGH');
console.log(`hotel.name=${hotel[0].name}`);
