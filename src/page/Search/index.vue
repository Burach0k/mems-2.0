<template>
  <div class="page">
    <h3>{{ $t('searchPage.title') }}</h3>
    <div class="list-container">
      <div class="search-list">
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
      <div class="card-list">
        <card
          v-bind:key="card.id"
          v-for="card in cards"
          :authors="card.authors"
          :author_cor="card.author_cor"
          :title="card.title"
          :keywords="card.keywords"
        ></card>
      </div>
    </div>

    <span>Для тестов!</span>
    <input v-model="testObject" />
    <button v-on:click='ckeckTestData'>Проверить данные</button>
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
.list-container {
  display: flex;
}
.card-list {
  margin-left: 15px;
  flex-grow: 1;
}
</style>
