<template>
  <div class="App" />
</template>

<script>
// import gmapsInit from "./utils/gmaps";

// export default {
//   name: "App",
//   async mounted() {
//     try {
//       const google = await gmapsInit();
//       const geocoder = new google.maps.Geocoder();
//       const map = new google.maps.Map(this.$el);

//       geocoder.geocode(
//         { address: "Meidling, 1120 Vienna, Austria" },
//         (results, status) => {
//           if (status !== "OK" || !results[0]) {
//             throw new Error(status);
//           }
//           const locations = [
//             {
//               position: {
//                 lat: 48.16091,
//                 lng: 16.38333,
//               },
//             },
//             {
//               position: {
//                 lat: 48.17427,
//                 lng: 16.32962,
//               },
//             },
//             // ...
//           ];
//           map.setCenter(results[0].geometry.location);
//           map.fitBounds(results[0].geometry.viewport);
//           const markerClickHandler = (marker) => {
//             map.setZoom(13);
//             map.setCenter(marker.getPosition());
//           };
//           const markers = locations.map((location) => {
//             const marker = new google.maps.Marker({ ...location, map });
//             marker.addListener("click", () => markerClickHandler(marker));
//             return marker;
//           });
//         }
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   },
// };
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.App {
  height: 100vh;
}
</style>