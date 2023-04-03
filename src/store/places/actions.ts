import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { PlacesResponse } from '@/components/interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit } ) {
        // TODO: colocar loading
        navigator.geolocation.getCurrentPosition(
            (coords) => commit('setLngLat', { lng: coords.coords.longitude, lat: coords.coords.latitude }),
            (err) => {
                console.log(err);
                throw new Error('No geolocation: ');
                
            }
        );
    },

    async searchPlacesByTerm({ commit, state }, query: string) {
        
        const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });
        console.log(resp.data.features);
    }
}



export default actions;