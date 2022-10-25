<template>
  <div>
    <div class="page-header">
      <parallax class="page-header-image bg">
        <!-- :style="{ backgroundImage: `url(${expertise.photoBackground})` }" -->
        <img class="image-background" :src="photoHeader" />
      </parallax>
      <div class="left">
        <h1 class="title text-left" v-html="expertise.landingPageMoto"></h1>
        <h3 class="title text-left" v-html="expertise.name"></h3>
        <p class="category text-left" v-html="expertise.title"></p>
        <p class="category text-left" v-html="expertise.limitedPractice"></p>
        <div class="content-new">
          <div class="social-description">
            <h2>12</h2>
            <p>Years Experience</p>
          </div>
          <div class="social-description">
            <h2>79</h2>
            <p>Conferences</p>
          </div>
          <div class="social-description">
            <h2>5000</h2>
            <p>pacients</p>
          </div>
          <div class="social-description">
            <h2>40</h2>
            <p>articles</p>
          </div>
        </div>
        <div class="text-left">
          <a href="#pablo" class="btn btn-primary btn-icon btn-round">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#pablo" class="btn btn-primary btn-icon btn-round">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#pablo" class="btn btn-primary btn-icon btn-round">
            <i class="fab fa-google-plus"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from "@/components";
import TabsSection from "./components/Tabs";
import ImageSection from "./components/ImageSection";
import { Card } from "@/components";
import expertiseData from "../data/expertise";

export default {
  name: "profile",
  bodyClass: "landing-page",
  props: ["photoHeader"],
  components: {
    // Card,
    // Tabs,
    // TabPane,
    // TabsSection,
    // ImageSection,
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
