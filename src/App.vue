<template>
  <!-- Wrapper -->
  <div id="wrapper" class="fade-in">
    <transition name="slide">
      <router-view name="intro"/>
    </transition>
    
    <!-- Header -->
    <!-- <header id="header" :style="[y < 160 ? hidden : visible]">
      <a href="index.html" class="logo">Massively</a>
    </header> -->
    <router-view name="header"/>

    <!-- Nav -->
    <nav id="nav">
      <ul class="links">
        <router-link active-class="active" to="/" tag="li" exact>
          <a>This is Massively</a>
        </router-link>
        <router-link to="/generic" tag="li">
          <a>Generic Page</a>
        </router-link>
        <router-link to="/elements" tag="li">
          <a>Elements Reference</a>
        </router-link>
      </ul>
      <ul class="icons">
        <li>
          <a href="#" class="icon fa-twitter">
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon fa-facebook">
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon fa-instagram">
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" class="icon fa-github">
            <span class="label">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
    <router-view/>
    <!-- Footer -->
    <footer id="footer">
      <section>
        <form method="post" action="#">
          <div class="fields">
            <div class="field">
              <label for="name">Name</label>
              <input type="text" name="name" id="name">
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="text" name="email" id="email">
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </div>
          </div>
          <ul class="actions">
            <li>
              <input type="submit" value="Send Message">
            </li>
          </ul>
        </form>
      </section>
      <section class="split contact">
        <section class="alt">
          <h3>Address</h3>
          <p>1234 Somewhere Road #87257
            <br>Nashville, TN 00000-0000
          </p>
        </section>
        <section>
          <h3>Phone</h3>
          <p>
            <a href="#">(000) 000-0000</a>
          </p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <a href="#">info@untitled.tld</a>
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <ul class="icons alt">
            <li>
              <a href="#" class="icon alt fa-twitter">
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon alt fa-facebook">
                <span class="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon alt fa-instagram">
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon alt fa-github">
                <span class="label">GitHub</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>

    <!-- Copyright -->
    <div id="copyright">
      <ul>
        <li>&copy; Untitled</li>
        <li>
          Design:
          <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style src="./assets/main.css">
</style>

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

