<template>
  <div class="about">
    <h1 v-if="access != ''">About Page</h1>
    <h1 v-else>Looks like you are not Logged in!</h1>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "About",
  computed: mapState(["access"]),
};
</script>
