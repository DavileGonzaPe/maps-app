<template>
    <button v-if="isButtonReady"
        class="btn btn-primary"
        @click="onMyLocationClicked">
            Ir a mi ubicación
    </button>
</template>
    
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import { useMapStore } from '../../composables/useMapStore';

export default defineComponent({
    name: 'MyLocationButton',
    setup() {
        const { userLocation, isUserLocationReady } = usePlacesStore();
        const { map, isMapReady } = useMapStore();

        return {
            isButtonReady: computed<boolean>( () => isUserLocationReady.value && isMapReady.value),

            onMyLocationClicked: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14,
                })
            }
        }
    }
});
</script>

<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>