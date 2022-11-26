<template>
  <!-- <div class="section" id="carousel">
    <div class="container">
      <div class="title">
        <h4>Carousel</h4>
      </div>
      <div class="row justify-content-center">
        <div class="col-8"> -->
          <el-carousel>
            <div
              v-for="(area, index) in expertise.areas.filter(
                (area) => area.id == indexArea
              )"
              :key="index"
            >
              <div
                v-for="(skill, index) in area.skills.filter(
                  (skill) => skill.id == indexSkill
                )"
                :key="index"
              >
                <div v-for="(image, index) in skill.images" :key="index">
                  <el-carousel-item>
                    <img class="d-block" :src="image" alt="First slide" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>{{image}}</h5>
                    </div>
                  </el-carousel-item>
                </div>
              </div>
            </div>
          </el-carousel>
        <!-- </div>
      </div>
    </div>
  </div> -->
</template>
<script>
import { Carousel, CarouselItem } from "element-ui";
import expertiseData from "../../data/expertise";

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
  },
  props: ["indexArea", "indexSkill"],
  data() {
    return {
      expertise: expertiseData.expertise,
      modals: {
        classic: false,
        mini: false,
      },
      pickers: {
        datePicker: "",
      },
    };
  },
};
</script>
<style>
</style>
