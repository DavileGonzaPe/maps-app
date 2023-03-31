import { defineComponent, onMounted, ref, watch } from "vue"
import { usePlacesStore } from '@/composables/usePlacesStore';
import Mapboxgl from "mapbox-gl";
    
export default defineComponent ({
    name: 'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>();
        const { isUserLocationReady, userLocation } = usePlacesStore();

        const initMap = async () => {
            if (mapElement.value && userLocation.value) {
                await Promise.resolve();
                const map = new Mapboxgl.Map({
                    container: mapElement.value, // container ID
                    style: 'mapbox://styles/mapbox/streets-v12', // style URL
                    center: userLocation.value, // starting position [lng, lat]
                    zoom: 15, // starting zoom
                    });
            }
            
        }

        onMounted(() => {
            if ( isUserLocationReady.value ) {
                return initMap();                
            }
        });

        watch( isUserLocationReady, ( newValue ) => {
            if ( isUserLocationReady.value ) {
                initMap();
            }
        })

        return {
            isUserLocationReady,
            mapElement,
        }
    }
});
    