<template>
  <div>
    <!-- <header-section
      :photoHeader="expertise.photoHeader.photoBackgroundLandingPage"
    >
    </header-section> -->
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Location</h2>
            <card>
              <h5 class="description" v-html="locationsIntro.intro"></h5>
            </card>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                :style="{
                  backgroundImage: `url(${expertise.landingPageImages[0]})`,
                }"
              >
                <!-- First image on the left side -->
                <p
                  class="blockquote blockquote-primary"
                  v-html="expertise.landingPageBlockNote"
                ></p>
              </div>
              <!-- Second image on the left side of the article -->
              <div class="image-container">
                <!-- :style="{
                  backgroundImage: `url(${expertise.landingPageImages[1]})`,
                }"-->
                <location-section></location-section>
              </div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                :style="{
                  backgroundImage: `url(${expertise.landingPageImages[2]})`,
                }"
              ></div>
              <h3 v-html="expertise.landingPageTitle"></h3>
              <div
                v-for="(paragraph, index) in expertise.landingPageParagraphs"
                :key="index"
              >
                <card>
                  <p v-html="paragraph" />
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <findmore-section></findmore-section>
    <contact-section></contact-section> -->
  </div>
</template>

<script>
import { Button, FormGroupInput } from "@/components";
import locationData from "../data/location";
import { Card } from "@/components";
import LocationSection from "./LocationSection";
import expertiseData from "../data/expertise";

export default {
  components: {
    Card,
    // HeaderSection,
    // ContactSection,
    // FindmoreSection,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    LocationSection,
  },
  data() {
    return {
      locationsIntro: locationData,
      locations: locationData.locations,
      expertise: expertiseData.expertise,

      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
    mounted() {
    window.scrollTo(450,450);
  },
};
</script>

<style>
</style>