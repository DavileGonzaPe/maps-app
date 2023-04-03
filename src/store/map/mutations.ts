import { MutationTree } from 'vuex';
import { MapSate } from './state';
import Mapboxgl from 'mapbox-gl';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<MapSate> = {
    setMap( state, map: Mapboxgl.Map) {
        state.map = map;
    },

    setPlaceMarkers( state, places: Feature[] ) {
        //Borrar marcadores
        state.markers.forEach( marker => marker.remove() );
        state.markers = [];

        if (state.map) {
            //Crear los nuevos marcadores
            for (const place of places) {
                const [ longitude, latitude ] = place.center;

                const popup = new Mapboxgl.Popup()
                    .setLngLat( [ longitude, latitude ] )
                    .setHTML(`
                        <h4>${ place.text }</h4>
                        <p>${ place.place_name }</p>
                    `)                
                    
                const marker = new Mapboxgl.Marker()
                    .setLngLat( [ longitude, latitude ] )
                    .setPopup( popup )
                    .addTo( state.map );
                
                state.markers.push( marker );
            }
        }        
    },

    setRoutePolyline( state, coords: number[][] ){
        const start = coords[0];
        const end = coords[ coords.length - 1 ];

        //Definir los bounds
        const bounds = new Mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [start[0], start[1]]
        );
        
        //Agreamos cada punto al bounds
        for (const coord of coords) {
            const newCoord: [number, number] = [coord[0], coord[1]];
            bounds.extend( newCoord );
        }

        state.map?.fitBounds( bounds, {
            padding: 300
        });

        //Polyline
        const sourceData: Mapboxgl.AnySourceData = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords,
                        }
                    }
                ]
            }
        };

        if ( state.map?.getLayer('RouteString') ) {
            state.map.removeLayer('RouteString');
            state.map.removeSource('RouteString');
        }

        state.map?.addSource( 'RouteString', sourceData );

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round',
            },
            paint: {
                'line-color': 'black',
                'line-width': 3
            }
        })
    }
}


export default mutation;