import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZGF2aWRnb256YWxlenBlcmV6ODEiLCJhIjoiY2xmd2RoamNsMDJ0ZTNjbzk1cTV5bmo5NyJ9.hSZux6zOenlV7TDy4amnaw'
    }
});

export default directionsApi;