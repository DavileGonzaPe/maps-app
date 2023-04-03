import { GetterTree } from 'vuex';
import { MapSate } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<MapSate, StateInterface> = {
    isMapReady( state ) {
        return !!state.map;
    }
}



export default getters;