<template>
  <div>
    <span v-bind:class="{ requred: requred }">{{name}}</span>
    <input :value="value" :type="type" @input.prevent="emitInput($event)"/>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
div {
  position: relative;

  display: block;
  padding: 5px 5px;
  margin: 12px 0;

  border: 1px solid rgba(0, 0, 0, 0.411);
  border-radius: 4px;
  
  text-align: left;
  background-color: #fff;
}
span {
  position: absolute;
  left: 10px;
  top: -10px;

  padding: 0 5px;

  background-color: #fff;
  border-radius: 3px;
  color: rgba(0, 0, 0, 0.411);
}
input {
  width: 100%;
  height: 25px;
  font-size: 18px;
  border: none;
  outline:none;
}
.requred::after {
  content: "*";
  color: red;
}
</style>