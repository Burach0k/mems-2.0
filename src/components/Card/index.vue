<template>
  <div class="card">
    <div class="card-header">
      <font-awesome-icon icon="book" class="icon file-alt article-icon" />
    </div>
    <div class="card-body">
      <div>
        <span>Заголовок:</span>
        <p class="title">{{ title }}</p>
      </div>
      <div>
        <span>Авторы:</span>
        <p class="authors">{{ cardAuthors }}</p>
      </div>
      <div>
        <span>Авторы2:</span>
        <p class="authors-cor">{{ cardAuthorCor }}</p>
      </div>
      <div>
        <span>Ключевые слова:</span>
        <p class="keywords">{{ cardKeywords }}</p>
      </div>
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.card {
  display: flex;
  width: 100%;
  height: 90px;

  margin: 10px 0;

  border-radius: 10px;

  cursor: pointer;
}

span {
  font-weight: 700;
}

.card:hover {
  box-shadow: 0px 0px 19px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: inline-flex;
  width: 90px;
  height: 100%;

  opacity: 0.7;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  background-image: -webkit-linear-gradient(30deg, #0d0d0d, #eaf205);
  background-image: linear-gradient(30deg, #0d0d0d, #eaf205);

  justify-content: center;
  align-items: center;
}

.card-body {
  height: 100%;
  width: 100%;

  padding: 8px;

  border: 1px solid #eaf205;
  border-left: none;
  box-sizing: border-box;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.article-icon {
  font-size: 35px;
  color: rgba(255, 255, 255, 0.863);
}

.title,
.authors-cor,
.authors,
.keywords {
  display: inline-block;
  margin: 0;
}
</style>
