<template>
  <div>
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
        <!-- <div v-for="(image, index) in skill.images" :key="index"> -->
        <div class="col-md-10 ml-auto mr-auto">
          <div class="row collections">
            <div class="col-md-6">
              <img :src="skill.images[0]" class="img-raised" />
              <img :src="skill.images[1]" class="img-raised" />
            </div>
            <div class="col-md-6">
              <img :src="skill.images[2]" class="img-raised" />
              <img :src="skill.images[3]" class="img-raised" />
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import expertiseData from "../../data/expertise";

export default {
  components: {},
  props: ["indexArea", "indexSkill"],
  methods: {
    filteredImages(indexArea,indexSkill) {
      let matchesArea = Object.keys(this.expertise.areas).filter((area) => {
        return area.id.match(indexArea);
      });

       let matchesSkill = Object.keys(this.matchesArea).filter((skill) => {
        return skill.id.match(indexSkill);
      });


      return matchesSkill.map((m) => ({ images: this.images }));
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
