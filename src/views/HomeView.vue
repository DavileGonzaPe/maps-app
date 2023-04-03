<template>
  <MapView></MapView>
  <SearchBar></SearchBar>
  <MyLocationButton></MyLocationButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlacesStore } from '@/composables';
import MapView from '@/components/mapview/MapView.vue';
import MyLocationButton from '@/components/my-location-button/MyLocationButton.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';

export default defineComponent({
  name: 'HomeView',
  components: { MapView, MyLocationButton, SearchBar },
  setup() {
      usePlacesStore();
  },
});
</script>
