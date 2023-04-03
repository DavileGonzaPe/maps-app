import { ActionTree } from 'vuex';
import { MapSate } from './state';
import { StateInterface } from '../index';


const actions: ActionTree<MapSate, StateInterface> = {
    someAction( /*{ commit }, payload  */ ) {
        // a line to prevent linter errors
    }
}



export default actions;