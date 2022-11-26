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
            <h2 class="title">Reviews</h2>
            <card>
              <div class="new-typography-line">
                <blockquote>
                  <p class="new-blockquote blockquote-primary blockquote">
                    {{ testimonials.intro.message }}
                    <br />
                    <br />
                    <small> - {{ testimonials.intro.author }} </small>
                  </p>
                </blockquote>
              </div>
            </card>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <reviews-section :testimonials="testimonial1"></reviews-section>
        <reviews-section :testimonials="testimonial2"></reviews-section>
        <reviews-section :testimonials="testimonial3"></reviews-section>
        <reviews-section :testimonials="testimonial4"></reviews-section>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
import expertiseData from "../data/expertise";
import testimonialsData from "../data/testimonials";
import { Card } from "@/components";
import ReviewsSection from "./components/ReviewsSection.vue";
import PagesSection from "./components/PagesSection";

export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    Card,
    ReviewsSection,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      expertise: expertiseData.expertise,
      testimonials: testimonialsData.testimonials,
      testimonial1: testimonialsData.testimonials.testimonial1,
      testimonial2: testimonialsData.testimonials.testimonial2,
      testimonial3: testimonialsData.testimonials.testimonial3,
      testimonial4: testimonialsData.testimonials.testimonial4,
      testimonialsData: testimonialsData,
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
