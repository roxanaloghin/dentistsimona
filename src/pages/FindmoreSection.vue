<template>
  <div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title">Find More</h2>
        <div class="team">
          <div class="row">
            <div style="margin-top: 5px; width: 100%">
              <ul style="display: grid; grid-template-columns: repeat(3, 1fr)">
                <div
                  v-for="(menu, index) in expertise.landingPageMenu"
                  :key="index"
                >
                  <div class="col-md-4" style="width: 30%; display: inline">
                    <div class="team-player">
                      <img
                        :src="menu.image"
                        alt="Thumbnail Image"
                        class="rounded-circle img-fluid img-raised"
                      />
                      <router-link :to="menu.link">
                        <h4 class="title" v-html="menu.menu"></h4>
                      </router-link>
                        <p class="description" v-html="menu.description"></p>
                      <a
                        href="#pablo"
                        class="btn btn-primary btn-icon btn-round"
                        ><i class="fab fa-twitter"></i
                      ></a>
                      <a
                        href="#pablo"
                        class="btn btn-primary btn-icon btn-round"
                        ><i class="fab fa-instagram"></i
                      ></a>
                      <a
                        href="#pablo"
                        class="btn btn-primary btn-icon btn-round"
                        ><i class="fab fa-facebook-square"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from "@/components";
import expertiseData from "../data/expertise";

export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    
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
