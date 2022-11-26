<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot="navbar-menu">
        <div v-for="(menu, index) in expertise.landingPageMenu" :key="index">
          <li class="nav-item">
            <router-link :to="menu.link">
              <i class="now-ui-icons arrows-1_cloud-download-93"></i>
              <p v-html="menu.menu"></p>
            </router-link>
          </li>
        </div>
        <li class="nav-item">
          <a
            class="nav-link"
            rel="tooltip"
            title="Follow us on Twitter"
            data-placement="bottom"
            href="https://twitter.com/CreativeTim"
            target="_blank"
          >
            <i class="fab fa-twitter"></i>
            <p class="d-lg-none d-xl-none">Twitter</p>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            rel="tooltip"
            title="Like us on Facebook"
            data-placement="bottom"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
            <p class="d-lg-none d-xl-none">Facebook</p>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            rel="tooltip"
            title="Follow us on Instagram"
            data-placement="bottom"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
            <p class="d-lg-none d-xl-none">Instagram</p>
          </a>
        </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import expertiseData from "../data/expertise";

export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  components: {
    Navbar,
    [Popover.name]: Popover,
  },

  data() {
    return {
      expertise: expertiseData.expertise,
    };
  },
};
</script>

<style scoped></style>
