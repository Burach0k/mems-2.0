<template>
  <div>
    <span v-bind:class="{ requred: requred }">{{name}}</span>
    <new-select :options="options" @input="emitInput($event)"/>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
div {
  position: relative;
  height: 38px;
  font-size: 18px;
}
span {
  z-index: 10;
  position: absolute;
  left: 10px;
  top: -10px;

  padding: 0 5px;

  background-color: #fff;
  color: rgba(0, 0, 0, 0.411);
  font-size: 16px;
}
.requred::after {
  content: "*";
  color: red;
}
</style>