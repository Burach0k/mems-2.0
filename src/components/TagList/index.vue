<template>
  <div class="tags">
    <font-awesome-icon icon="hashtag" class="icon" />
    <tag-list v-model="value" :tags="tags" @tags-changed="newTags => tags = newTags" />
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.tags > div {
  display: inline-block;
}
.icon {
  color: #5c6bc0;
}
</style>