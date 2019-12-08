<template>
  <div class="page">
    <h3>{{ $t('searchPage.title') }}</h3>
    <div class="list-container">
      <div class="search-list">
        <div>
          <div class="search-field">
            <tag-list label='Поиск по авторам: ' :tags="getAuthTags" @tags-changed="updateTags($event)" />
          </div>

          <div class="search-field">
            <tag-list label='Поиск по названию: ' :tags="getTitleTags" @tags-changed="updateTags($event)" />
          </div>

          <div class="search-field">
            <tag-list label='Поиск по ключвым словам: ' :tags="getWordsTags" @tags-changed="updateTags($event)" />
          </div>
        </div>
      </div>
      <div class="card-list">
        <card
          v-for="card in cards"
          v-bind:key="card.title"
          :authors="card.authors"
          :author_cor="card.author_cor[0]"
          :title="card.title"
          :keywords="card.keywords"
          :email="card.email"
          :year="card.year"
          :number="card.number"
        ></card>
      </div>
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
  padding: 30px 5px;
}
.search-field h4 {
  margin: 5px 0;
}
.list-container {
  display: flex;
}
.search-list {
  min-width: 450px;
}
.search-list > div {
  position: sticky;
  top: 30px;
}
.card-list {
  margin-left: 15px;
  flex-grow: 1;
}
</style>
