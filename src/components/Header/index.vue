<template>
  <div>
    <div class="header">
      <p class="name">-------------------------ХЭДЕР---------------------</p>

      <auth-field></auth-field>
    </div>

    <slot name="routing"></slot>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.header {
  display: flex;

  height: 160px;

  padding: 0 20px;

  justify-content: space-between;
  align-items: center;

  background-image: -webkit-linear-gradient(8deg, #dae5e7, #43b0cb);
  background-image: linear-gradient(8deg, #dae5e7, #43b0cb);
}
.name {
  margin: 0;
}
.icon {
  width: 120px;
  height: 60px;
}
</style>