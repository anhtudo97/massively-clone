<template>
  <header id="header" :style="[y < 160 ? hidden : visible]">
    <a href="index.html" class="logo">Massively</a>
  </header>
</template>

<script>
export default {
  data() {
    return {
      y: 0,
      visible: {
        visibility: "visible !important",
        opacity: "1 !important",
        transform: "translateY(-2rem) !important",
        transition:
          "opacity 0.5s ease, transform 0.5s ease, visibility 0.5s !important"
      },
      hidden: {
        visibility: "hidden !important",
        opacity: "0 !important",
        transform: "translateY(0) !important",
        transition:
          "opacity 0.5s ease, transform 0.5s ease, visibility 0.5s !important"
      }
    };
  },
  methods: {
    handleScroll() {
      this.y = window.scrollY;
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
</style>