<template>
  <div>
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Get in touch</h2>
        <p class="description">Contact us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="First Name..."
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email Here..."
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Type a message..."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg"
                >Send Message</n-button
              >
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
