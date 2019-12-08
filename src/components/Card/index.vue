<template>
  <div class="card">
    <div class="card-header">
      <font-awesome-icon icon="book" class="icon file-alt article-icon" />
    </div>
    <div class="card-body">
      <div>
        <p class="title">{{ title }}</p>
      </div>
      <div>
        <span class="sub-header">Авторы :</span>
        <span 
        :class="[author === author_cor ? 'author-cor' : '']" 
         v-for="(author,index) in authors" :key="index">{{ author }},</span>
      </div>
      <div>
        <span class="sub-header">Ключевые слова:</span>
          <span v-for="(keyword,index) in keywords" :key="index">{{ keyword }},</span>
      </div>
      <div>
        <span class="sub-header">Электронная почта:</span>
        <span>{{ email }}</span>
      </div>
      <div>
        <span class="sub-header">Номер журнала:</span>
        <span>{{ number }}</span>
      </div>
      <div>
        <span class="sub-header">Год издания:</span>
        <span>{{ year }}</span>
      </div>
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.card {
  display: inline-flex;
  width: 100%;

  margin: 10px 0;

  border-radius: 10px;

  cursor: pointer;
}

.card:hover {
  box-shadow: 0px 0px 19px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: inline-flex;
  width: 90px;
  height: auto;

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
.card-body div {
  display: inline-flex;
  width:100%;
  flex-wrap: wrap;
  padding: 8px 0;
}
.sub-header {
  min-width: 180px;
}

.card-body span{
  white-space: nowrap;
  margin-right: 4px;
}

.card-body span:last-child{
  margin-right: 0px;
}

.article-icon {
  font-size: 35px;
  color: rgba(255, 255, 255, 0.863);
}

.author-cor {
  font-weight: bold;
}
</style>
