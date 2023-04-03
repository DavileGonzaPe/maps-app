import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { MapSate } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const mapModule: Module<MapSate, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default mapModule;