<template>
  <div>
    <navbar />
    <contact />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Contact from "../components/Contact/Contact.vue";

export default {
  name: "Home",

  components: {
    Navbar,
    Contact,
  },
};
</script>