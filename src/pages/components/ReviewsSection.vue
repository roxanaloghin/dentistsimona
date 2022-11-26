<template>
  <div class="section-story-overview">
    <div class="row">
      <div class="col-md-6">
        <div
          class="image-container image-left"
          :style="{
            backgroundImage: `url(${testimonials.images[0]})`,
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
            backgroundImage: `url(${testimonials.images[1]})`,
          }"
        ></div>
      </div>
      <div class="col-md-5">
        <!-- First image on the right side, above the article -->
        <div
          class="image-container image-right"
          :style="{
            backgroundImage: `url(${testimonials.images[2]})`,
          }"
        ></div>
        <h3 v-html="testimonialsData.title"></h3>
        <div
          v-for="(testimonial, index) in testimonials.testimonials"
          :key="index"
        >
          <card>
            <div class="new-typography-line">
              <blockquote>
                <p class="new-blockquote blockquote-primary blockquote">
                  {{ testimonial.message }}
                  <br />
                  <br />
                  <small> - {{ testimonial.author }} </small>
                </p>
              </blockquote>
            </div>
            <!-- <p>{{ paragraph }}</p> -->
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
import expertiseData from "../../data/expertise";
import testimonialsData from "../../data/testimonials";
import { Card } from "@/components";

export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  props: ["testimonials"],
  data() {
    return {
      expertise: expertiseData.expertise,
      testimonialsData: testimonialsData,

      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>
<style scoped>
.section-story-overview p.new-blockquote {
  width: fit-content;
  min-height: 180px;
  text-align: left;
  position: initial;
  top: 376px;
  right: 155px;
  z-index: 0;
}
.new-typography-line {
  padding-left: 0%;
  margin-bottom: 35px;
  position: relative;
  display: block;
  width: 100%;
}
</style>
