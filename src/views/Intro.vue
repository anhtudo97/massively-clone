<template>
  <transition name="slide">
    <div id="intro" :style="[y > 160 ? hidden : visible]">
      <h1>This is
        <br>Massively
      </h1>

      <p>
        A free, fully responsive HTML5 + CSS3 site template designed by
        <a
          href="https://twitter.com/ajlkn"
        >@ajlkn</a>
        for
        <a href="https://html5up.net">HTML5 UP</a>

        <br>and released for free under the
        <a
          href="https://html5up.net/license"
        >Creative Commons license</a>
        .
      </p>

      <ul class="actions">
        <li>
          <a href="#header" class="button icon solo fa-arrow-down scrolly">Continue</a>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      y: 0,
      visible: {
        visibility: "visible",
        opacity: "1",
        transform: "translateY(-2rem)",
        transition: "opacity 0.5s ease, transform 0.5s ease, visibility 0.5s"
      },
      hidden: {
        visibility: "hidden",
        opacity: "0",
        transform: "translateY(0)",
        transition: "opacity 0.5s ease, transform 0.5s ease, visibility 0.5s"
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
.slide-enter {
  opacity: 0;
  /* transform: translateY(20px); */
}

.slide-enter-active {
  transition: opacity 1s;
  animation: slide-in 1s ease-out forwards;
}

/* leave */

.slide-leave {
}

.slide-leave-active {
  transition: opacity 1s;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-move {
  transition: transform 1s;
}

/* key frames */

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
