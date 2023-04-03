<template>
  <MapView></MapView>
  <MyLocationButton></MyLocationButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';
import MapView from '@/components/mapview/MapView.vue';
import MyLocationButton from '@/components/my-location-button/MyLocationButton.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationButton},
  setup() {
      usePlacesStore();
  },
});
</script>
