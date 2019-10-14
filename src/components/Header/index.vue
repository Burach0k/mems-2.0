<template>
  <div>
    <div class="header">
      <p class="name">-------------------------ХЭДЕР---------------------</p>
    </div>

    <slot name="routing"></slot>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.header {
  display: flex;

  height: 90px;

  padding: 0 20px;

  justify-content: space-between;
  align-items: center;

  background-color: bisque;
}
.name {
  margin: 0;
}
.icon {
  width: 120px;
  height: 60px;
}
</style>