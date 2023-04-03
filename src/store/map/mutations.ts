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
}


export default mutation;