import Mapboxgl from 'mapbox-gl';

export interface MapSate {
    map?: Mapboxgl.Map;
    markers: Mapboxgl.Marker[];
    distance?: number;
    duration?: number;
}

function state(): MapSate {
    return {
        map: undefined,
        markers: [],
        distance: undefined,
        duration: undefined,
    }
}

export default state;