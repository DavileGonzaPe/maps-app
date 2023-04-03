import { createStore } from 'vuex';

import placesModule from './places';
import { PlacesState } from './places/state';
import mapModule from './map';
import { MapSate } from './map/state';



export interface StateInterface {
  places: PlacesState,
  map: MapSate,
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    map: mapModule,
  }
})
