<template>
  <div>
    <header-section :photoHeader="expertise.photoHeader.photoExpertiseHeader">
    </header-section>
    <div class="row">
      <card>
        <navbar
          position="sticky"
          type="primary"
          :transparent="transparent"
          :color-on-scroll="colorOnScroll"
          menu-classes="ml-auto"
        >
          <template slot="navbar-menu">
            <div
              v-for="(menu, index) in expertise.landingPageMenu"
              :key="index"
            >
              <li class="nav-item" @click="setComponent(menu.pageName)">
                <a class="nav-link">
                  <i class="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>{{ menu.menu }}</p>
                </a>
              </li>
            </div>
          </template>
        </navbar>
        <component :is="selectedComponent" />
        <homepage v-show="hideMainPageComponent == false"></homepage>
      </card>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from "@/components";
import TabsSection from "./components/Tabs";
import ImageSection from "./components/ImageSection";
import HeaderSection from "./HeaderSection";
import { Card } from "@/components";
import expertiseData from "../data/expertise";
import Appoitement from "./Appoitement";
import Articles from "./Articles";
import Expertise from "./Expertise";
import Homepage from "./Homepage";
import Location from "./Location";
import Questions from "./Questions";
import Testimonials from "./Testimonials";
import MainPage from "./MainPage";
import { Popover, Tooltip, DatePicker } from "element-ui";
import { DropDown, Navbar, NavLink } from "@/components";

export default {
  name: "profile",
  bodyClass: "landing-page",
  components: {
    Navbar,
    Card,
    Tabs,
    TabPane,
    HeaderSection,
    Appoitement,
    Articles,
    Expertise,
    Homepage,
    Location,
    Questions,
    Testimonials,
    MainPage,
    [Tooltip.name]: Tooltip,
  },
  props: {
    selectedComponent: {},
    hideMainPageComponent: {
      type: Boolean,
      default: false,
    },

    transparent: Boolean,
    colorOnScroll: Number,
  },
  methods: {
    setComponent(name) {
      this.selectedComponent = name;
      this.hideMainPageComponent = true;
    },
  },
  data() {
    return {
      expertise: expertiseData.expertise,
    };
  },
};
</script>
<style>
</style>
