<template>
  <div>
    <span>{{name}}</span>
    <new-select :options="options" />
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
div {
  position: relative;
}
span {
  z-index: 10;
  position: absolute;
  left: 10px;
  top: -10px;

  padding: 0 5px;

  background-color: #fff;
  color: rgba(0, 0, 0, 0.411);
}
</style>