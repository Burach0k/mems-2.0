<template>
  <div class="page">
    <h3>{{$t('searchPage.title')}}</h3>
    <div class="search-field">
      <h4>Поиск по авторам:</h4>
      <tag-list :tags="authTags" :value="authTag" />
    </div>

    <div class="search-field">
      <h4>Поиск по дисциплинам:</h4>
      <tag-list :tags="discTags" :value="discTag" />
    </div>

    <div class="search-field">
      <h4>Поиск по дате:</h4>
      <tag-list :tags="dateTags" :value="dateTag" />
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
h3 {
  text-align: center;
  padding: 8px;
}
.search-field {
  color: rgba(0, 0, 0, 0.527);
  padding: 5px;
}
.search-field h4 {
  margin: 5px 0;
}
</style>