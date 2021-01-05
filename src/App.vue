<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import firebase from "./utilities/firebase";

const defaultLayout = "default";

export default defineComponent({
  setup() {
    const { currentRoute } = useRouter();

    const layout = computed(
      () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
    );

    return {
      layout,
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {}
    };
  },
  mounted() {
      firebase.default.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        // No user is signed in.
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
});
</script>
