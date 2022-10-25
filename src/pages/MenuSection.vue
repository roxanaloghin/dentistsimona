<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="row">
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
import HeaderSection from "./HeaderSection";
import { Card } from "@/components";
import expertiseData from "../data/expertise";

export default {
  name: "profile",
  bodyClass: "landing-page",
  components: {
    Card,
    Tabs,
    TabPane,
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
