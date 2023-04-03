import { defineComponent, ref, watch } from 'vue';
import { useMapStore, usePlacesStore } from '@/composables';
import { Feature } from '@/interfaces/places';

export default defineComponent ({
    name: 'SearchResults',
    setup() {
        const { isLoadingPlaces, places, userLocation } = usePlacesStore();
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();
        const activePlace = ref('');

        watch( places, ( newPlaces ) => {
            activePlace.value = '';
            setPlaceMarkers( newPlaces );
        });

        return {
            activePlace,
            isLoadingPlaces,
            places,

            onPlaceClicked: ( place: Feature ) => {
                activePlace.value = place.id;
                
                const [ longitude, latitude ] = place.center;

                map.value?.flyTo({
                    center: [ longitude, latitude ],
                    zoom: 14,
                })
            },

            getRouteDirections: ( place: Feature ) => {
                if (userLocation.value) {
                    
                    const [ longitude, latitude ] = place.center;
                    const [ startLongitude, startLatitude ] = userLocation.value;

                    const start: [number, number] = [ startLongitude, startLatitude ];
                    const end: [number, number] = [ longitude, latitude ];
                    
                    getRouteBetweenPoints( start, end );
                }
            }
        }
    }
});