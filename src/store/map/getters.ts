import { GetterTree } from 'vuex';
import { MapSate } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<MapSate, StateInterface> = {
    someGetter( /* state */ ) {
        // return true;
    }
}



export default getters;