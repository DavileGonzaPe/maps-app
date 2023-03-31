import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRnb256YWxlenBlcmV6ODEiLCJhIjoiY2xmd2RoamNsMDJ0ZTNjbzk1cTV5bmo5NyJ9.hSZux6zOenlV7TDy4amnaw';

if (!navigator.geolocation) {
    throw new Error('Tu navegador no soporta el GeoLocation')    
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
