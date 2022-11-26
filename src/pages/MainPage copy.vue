<template>
  <div>
    <header-section :photoHeader="expertise.photoHeader.photoExpertiseHeader">
    </header-section>

    <div class="row">
      <card>
        <tabs
          pills
          class="nav-align-center"
          tab-content-classes="gallery"
          tab-nav-classes="nav-pills-just-icons"
          type="primary"
        >
          <div v-for="(menu, index) in expertise.landingPageMenu" :key="index">
            <tab-pane>
              <i slot="label">
                <el-tooltip
                  class="nav-item"
                  :content="menu.menu"
                  placement="top"
                >
                  <!-- <img
                    :src="menu.image"
                    alt="Thumbnail Image"
                    class="rounded-circle img-fluid img-raised"
                    @click="setComponent(menu.pageName)"
                  /> -->
                  <i
                    class="now-ui-icons sport_user-run"
                    @click="setComponent(menu.pageName)"
                  />
                </el-tooltip>
              </i>
              <component :is="selectedComponent" />
            </tab-pane>
          </div>
        </tabs>
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
