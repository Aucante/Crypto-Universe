<template>
  <div>
    <navbar />
    <card />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Card from "./../components/Home/Card.vue";

export default {
  name: "Home",

  components: {
    Card,
    Navbar,
  },
};
</script>