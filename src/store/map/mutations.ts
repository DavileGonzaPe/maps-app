import { MutationTree } from 'vuex';
import { MapSate } from './state';
import Mapboxgl from 'mapbox-gl';


const mutation: MutationTree<MapSate> = {
    setMap( state, map: Mapboxgl.Map) {
        state.map = map;
    }
}


export default mutation;