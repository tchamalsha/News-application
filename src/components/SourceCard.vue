<template>
  <div class="col-md-3">
    <div class="card source-card mb-3">
      <div class="card-body d-grid align-items-between">
        <div>
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">{{ description }}</p>
          <p>
            <small class="text-muted">{{ category }}</small>
          </p>
        </div>
        <div class="d-flex justify-content-end">
          <router-link :to="{ name: 'SelectedSource', query: { name: name } }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="20px"
            >
              <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    id: Number,
    name: String,
    description: String,
    category: String,
    url: String,
  },
  computed: {
    formattedDescription() {
      return this.description.substring(0, 20) + "...";
    },
  },
};
</script>

<style scoped>
.card.source-card {
  box-shadow: 0 0 20px 8px #d0d0d0;
  min-height: 10rem;
}
.card .card-text {
  font-size: 0.8rem;
  display: -webkit-inline-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card .card-title {
  color: #4e3c36;
}
</style>
