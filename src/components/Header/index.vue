<template>
  <div>
    <div class="header">
      <div class="languages">
        <span
          v-for=" lang in languages"
          :key="lang"
          :class="{active:lang===selectedLanguage}"
          @click.prevent="setLanguage(lang)"
        >
          <country-flag :country="lang" />
        </span>
      </div>
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

.languages .active {
  border-bottom: 2px solid black;
}
</style>