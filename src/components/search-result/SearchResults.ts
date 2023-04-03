import { defineComponent, ref } from 'vue';
import { useMapStore, usePlacesStore } from '@/composables';
import { Feature } from '@/interfaces/places';

export default defineComponent ({
    name: 'SearchResults',
    setup() {
        const { isLoadingPlaces, places } = usePlacesStore();
        const { map } = useMapStore();
        const activePlace = ref('');

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
            }
        }
    }
});