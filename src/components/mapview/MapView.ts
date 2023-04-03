import { defineComponent, onMounted, ref, watch } from "vue"
import { usePlacesStore, useMapStore } from '@/composables';
import Mapboxgl from "mapbox-gl";
    
export default defineComponent ({
    name: 'MapView',
    setup() {
        const mapElement = ref<HTMLDivElement>();
        const { isUserLocationReady, userLocation } = usePlacesStore();
        const { setMap } = useMapStore();

        const initMap = async () => {
            if (mapElement.value && userLocation.value) {
                await Promise.resolve();
                const map = new Mapboxgl.Map({
                    container: mapElement.value, // container ID
                    style: 'mapbox://styles/mapbox/streets-v12', // style URL
                    center: userLocation.value, // starting position [lng, lat]
                    zoom: 12, // starting zoom
                });
                
                const myLocationPopup = new Mapboxgl.Popup()
                    .setLngLat( userLocation.value )
                    .setHTML(`
                        <h4>Aquí estoy</h4>
                        <p>Borreiros city</p>
                        <p>${ userLocation.value }</p>
                    `)                
                
                const myLocationMarker = new Mapboxgl.Marker()
                    .setLngLat( userLocation.value )
                    .addTo( map )
                    .setPopup( myLocationPopup );

                setMap( map );
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
    