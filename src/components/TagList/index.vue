<template>
  <div class="tags">
    <font-awesome-icon icon="hashtag" class="icon" />
    <tag-list  v-model="value" :tags="tags" @tags-changed="tagsChanged($event)" />
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.icon {
  width: 20px;
  color: #0D0D0D;
}
</style>