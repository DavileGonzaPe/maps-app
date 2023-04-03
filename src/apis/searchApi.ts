import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZGF2aWRnb256YWxlenBlcmV6ODEiLCJhIjoiY2xmd2RoamNsMDJ0ZTNjbzk1cTV5bmo5NyJ9.hSZux6zOenlV7TDy4amnaw'
    }
});

export default searchApi;