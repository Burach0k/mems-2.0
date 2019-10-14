<template>
  <div>
    <span>{{name}}</span>
    <input :placeholder="placeholder" :value="value" />
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
}
span {
  position: absolute;
  left: 10px;
  top: -10px;

  padding: 0 5px;

  background-color: #fff;
  color: rgba(0, 0, 0, 0.411);
}
input {
  width: 100%;
  height: 100%;
  border: none;
  outline:none;
}
</style>