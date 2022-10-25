<template>
  <div>
    <div>
      <!-- Nav tabs -->
      <card>
        <tabs
          centered
          type="neutral"
          tab-nav-wrapper-classes="card-header"
          tab-content-classes="card-body text-center"
          data-background-color="orange"
        >
          <tab-pane v-for="(area, index) in expertise.areas" :key="index">
            <template slot="label">
              <i class="now-ui-icons business_badge"></i>
              <span v-html="area.title"> </span>
            </template>
            <ul class="list-group list-group-flush skillRow">
              <li
                class="list-group-item"
                v-for="(skill, index) in area.skills"
                :key="index"
              >
                <div class="d-flex bd-highlight">
                  <div
                    class="p-2 flex-grow-1 bd-highlight"
                    v-html="skill.title"
                  ></div>
                  <el-popover
                    data-placement="top"
                    width="500"
                    height="500"
                    trigger="hover"
                    v-show="skill.images.length > 0"
                  >
                    <carousel-section
                      :indexSkill="skill.id"
                      :indexArea="area.id"
                    ></carousel-section>
                    <el-button slot="reference">
                      <i
                        slot="label"
                        class="now-ui-icons design_image p-2 bd-highlight"
                      ></i>
                    </el-button>
                  </el-popover>

                  <i
                    slot="label"
                    class="now-ui-icons travel_info p-2 bd-highlight"
                  ></i>
                </div>
              </li>
            </ul>
          </tab-pane>
        </tabs>
      </card>
    </div>
  </div>
</template>
<script>
import { Card, Tabs, TabPane } from "@/components";
import CarouselSection from "./CarouselSection";
import JavascriptComponents from "./JavascriptComponents";
import { Button, Modal, FormGroupInput } from "@/components";
import { Popover, Tooltip, DatePicker } from "element-ui";
import expertiseData from "../../data/expertise";

export default {
  name: "Content",
  components: {
    CarouselSection,
    Card,
    Tabs,
    TabPane,
    // JavascriptComponents,
    // Modal,
    [Button.name]: Button,
    [Popover.name]: Popover,
    [Tooltip.name]: Tooltip,
    [DatePicker.name]: DatePicker,
    [FormGroupInput.name]: FormGroupInput,
  },
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
<style lang="scss">
.tab-content.tab-content-padding {
  padding: 20px;
}
#javascriptComponents {
  .modal-buttons,
  .popover-buttons,
  .tooltip-buttons {
    .btn + .btn {
      margin-left: 3px;
    }
  }
}

.skillRow :hover {
  background-color: #f96332;
  cursor: pointer;

}
</style>
