<template>
  <div class="page">
    <h3>{{ $t('searchPage.title') }}</h3>
    <div class="list-container">
      <div class="search-list">
        <div class="search-field">
          <h4>Поиск по авторам:</h4>
          <tag-list :tags="getAuthTags" @tags-changed="updateTags($event)"/>
        </div>

        <div class="search-field">
          <h4>Поиск по названию:</h4>
          <tag-list :tags="getTitleTags"  @tags-changed="updateTags($event)"/>
        </div>

        <div class="search-field">
          <h4>Поиск по ключвым словам:</h4>
          <tag-list :tags="getWordsTags"  @tags-changed="updateTags($event)"/>
        </div>
      </div>
      <div class="card-list">
        <card
          v-for="card in cards"
          v-bind:key="card.title"
          :authors="card.authors"
          :author_cor="card.author_cor"
          :title="card.title"
          :keywords="card.keywords"
        ></card>
      </div>
    </div>

    <span>Для тестов!</span>
    <button v-on:click='ckeckRequest'>Проверить запрос</button>
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
