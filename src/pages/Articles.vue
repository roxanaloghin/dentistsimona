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
            <h2 class="title">Articles</h2>
            <card>
              <h5 class="description" v-html="expertise.profile"></h5>
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
              <div
                class="image-container"
                :style="{
                  backgroundImage: `url(${expertise.landingPageImages[1]})`,
                }"
              ></div>
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
import expertiseData from "../data/expertise";
import { Card } from "@/components";
import ContactSection from "./ContactSection";
import FindmoreSection from "./FindmoreSection";
import HeaderSection from "./HeaderSection";

export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    Card,
    // HeaderSection,
    // ContactSection,
    // FindmoreSection,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
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
.image-background {
  width: 600px;
  height: 600px;
  object-fit: fit;
}
.bg {
  background-color: #f96332;
}
.left {
  position: absolute;
  top: 50%;
  left: 84%;
  z-index: 2;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: left;
  padding: 0 15px;
  width: 100%;
  max-width: 880px;
}
</style>
