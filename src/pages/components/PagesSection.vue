<template>
  <div class="section section-pagination">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h4>Pagination</h4>
          <n-pagination
            type="primary"
            :page-count="10"
            v-model="pagination.simple"
          >
          </n-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Progress, Pagination, Badge, Tabs, TabPane } from '@/components';

export default {
  components: {
    [Progress.name]: Progress,
    [Pagination.name]: Pagination,
  },
  data() {
    return {
      pagination: {
        simple: 1,
        default: 2,
        full: 3
      }
    };
  }
};
</script>
<style></style>
