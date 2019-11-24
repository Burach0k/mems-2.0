<template>
  <div class="tags">
    <span>{{ label }}</span>

    <input placeholder="Ввести тег" class="input-tag" v-model="tagInput" v-on:keyup.13="addTag" />
    <br />

    <font-awesome-icon icon="hashtag" class="icon" v-if="tags.length > 0" />
    <div class="tag" v-for="(tag, index) in tagList" v-bind:key="tag">
      {{ tag }}
      <font-awesome-icon icon="times" class="delete-icon" @click="deleteTag(index)" />
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.icon {
  width: 20px;
  color: #0d0d0d;
}
.delete-icon {
  font-size: 14px;
}
.input-tag {
  padding: 3px 5px;
  font-size: 17px;
  width: 120px;

  border: none;
  border-bottom: 1px solid;
}
.tag {
  padding: 3px 6px;
  border-radius: 5px;
  font-size: 17px;
  background-color: #f2e205;
  margin: 3px;
}
span {
  font-size: 17px;
  min-width: 208px;
  display: inline-block;
  margin-bottom: 20px;
}
</style>
