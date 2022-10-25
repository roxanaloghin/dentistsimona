<template>
  <div>
    <!-- <header-section :photoHeader="expertise.photoHeader.photoExpertiseHeader"> </header-section> -->
    <div class="section">
      <div class="container">
        <!-- <h3 class="title">About me</h3>
        <card>
          <h5 class="description" v-html="expertise.aboutMe"></h5>
        </card> -->

        <h3 class="title text-center">Areas of expertise</h3>

        <tabs-section></tabs-section>

        <div class="row">
          <div class="col-md-6 ml-auto mr-auto">
            <h3 class="title text-center">My Portfolio</h3>
          </div>
          <card>
            <tabs
              pills
              class="nav-align-center"
              tab-content-classes="gallery"
              tab-nav-classes="nav-pills-just-icons"
              type="primary"
            >
              <tab-pane title="Root canal retreatment">
                <i slot="label" class="now-ui-icons design_image"> </i>
                <image-section :indexArea="1" :indexSkill="2"></image-section>
              </tab-pane>

              <tab-pane
                title="Indirect restorations(Inlay, Onlay, Overlay in composite, EMAX)"
              >
                <i slot="label" class="now-ui-icons location_world"></i>
                <image-section :indexArea="2" :indexSkill="1"></image-section>
              </tab-pane>

              <tab-pane title="Smile Makeover">
                <i slot="label" class="now-ui-icons sport_user-run"></i>
                <image-section :indexArea="2" :indexSkill="6"></image-section>
              </tab-pane>
            </tabs>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from "@/components";
import TabsSection from "./components/Tabs";
import ImageSection from "./components/ImageSection";
// import HeaderSection from "./HeaderSection";
import { Card } from "@/components";
import expertiseData from "../data/expertise";

export default {
  name: "profile",
  bodyClass: "landing-page",
  components: {
    Card,
    Tabs,
    TabPane,
    TabsSection,
    ImageSection,
    // HeaderSection,
  },
  data() {
    return {
      expertise: expertiseData.expertise,
    };
  },
    mounted() {
    window.scrollTo(450,450);
  },
};
</script>
<style>
</style>
