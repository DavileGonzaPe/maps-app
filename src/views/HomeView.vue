<template>
  <MapView/>
  <SearchBar/>
  <MyLocationButton/>
  <TripDetails/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';
import MapView from '@/components/mapview/MapView.vue';
import MyLocationButton from '@/components/my-location-button/MyLocationButton.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationButton, SearchBar, TripDetails },
  setup() {
      usePlacesStore();
  },
});
</script>
