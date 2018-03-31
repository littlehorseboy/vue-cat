<template>
  <div ref="map" class="map">
    <div ref="button"></div>
  </div>
</template>

<script>
import { loadModules } from 'esri-loader';

export default {
  name: 'Home',
  mounted: function () {
    loadModules([
      'esri/map'
    ])
    .then(([
      Map,
    ]) => {
      const map = new Map(this.$refs.map, {
        center: [-56.049, 38.485],
        basemap: 'gray',
      });
    })
    .catch(err =>{
      console.log(err);
    });
  },
};
</script>

<style>
.map {
  height: 100%;
}
</style>
