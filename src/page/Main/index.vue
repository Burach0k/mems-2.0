<template>
  <div class="container page">
    <div class="journal-name">
      <h4>{{$t('mainPage.journalName')}}</h4>
    </div>

    <div class="parts info">
      <h5>Том 55, № 3 (2019)</h5>

      <img src="https://vestifm.belnauka.by/public/site/images/loader/cov.jpg" />

      <div class="personal-info">
        <p>
          <font-awesome-icon icon="book" class="icon book-icon" />Открытый доступ
        </p>

        <p>
          <font-awesome-icon icon="user-lock" class="icon user-icon" />Только для подписчиков
        </p>
        <div class="tag_list">
          <font-awesome-icon icon="hashtag" class="icon" />
          <div class="tag_container" v-for="tag in tags" :key="tag.keyword">
            <div
              class="tag"
              :value="$t('mainPage.tagTooltip',{number:tag.number})"
              @click="searchByTag(tag.keyword)"
            >{{tag.keyword}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="parts">
      <h5>О журнале</h5>
      <p>
        Научно-практический рецензируемый журнал
        Научный журнал «Известия Национальной академии наук Беларуси. Серия физико-математических наук» зарегистрирован Министерством информации Республики Беларусь 18 мая 2009 г. в Государственном реестре средств массовой информации за № 392. Периодичность – 4 номера в год. Территория распространения – Республика Беларусь, зарубежные страны (по подписке и в розницу).
        В журнале публикуются результаты научных исследований, проводимых в Национальной академии наук Беларуси, других научных учреждениях и вузах республики, а также стран зарубежья в области теоретической физики, лазерной оптики и спектроскопии, физики твердого тела и полупроводников, ядерной физики, алгебры, дифференциальных уравнений, математического анализа, вычислительной математики, математической статистики, информатики. В рубрике «Ученые Беларуси» журнал отмечает юбилеи известных ученых, знакомит читателей с их биографией и трудами.
        Журнал входит в «Перечень научных изданий Республики Беларусь для опубликования результатов диссертационных исследований», включен в базу данных Российского индекса научного цитирования (РИНЦ). Содержание номеров журнала и аннотации опубликованных в нем статей размещаются на сайте издателя – belnauka.by и сайте НАН Беларуси – nasb.gov.by.
        Объем журнала – 128 с.
        Внесен в каталог подписных изданий Республики Беларусь: индекс для индивидуальной подписки – 74846, ведомственной – 748462.
      </p>
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.journal-name {
  padding: 0 20px;
  margin: 10px 0;
}
.journal-name h4 {
  margin: 0;
  padding: 10px 0;

  border-bottom: 1px solid rgba(121, 119, 119, 0.411);

  text-align: center;
  font-size: 20px;
}
.parts {
  margin: 15px 0;
  display: inline-block;
}
.parts p {
  text-align: justify;
}
.parts h5 {
  margin: 0;
  font-size: 18px;
  text-align: center;
}
.info p {
  display: inline;
  margin: 4px 0;
}
.info img {
  display: inline-block;

  width: 180px;
  height: 220px;
}
.icon {
  width: 20px;
  color: #0d0d0d;
}
.book-icon {
  color: #0d0d0d;
  padding: 0 4px;
}
.user-icon {
  color: #0d0d0d;
  padding: 0 4px;
}
.personal-info {
  display: inline-flex;
  vertical-align: top;
  flex-direction: column;
  margin-left: 10px;
  width: 500px;
}

.tag_list {
  margin-top: 7px;
}

.tag_container {
  display: inline-block;
  position: relative;
  margin: 5px 1px;
}

.tag {
  margin: 0 3px;
  padding: 5px;
  border-radius: 2px;
  display: inline;

  background-color: #eaf205;
  font-size: 16px;

  cursor: pointer;
  user-select: none;
}

.tag:hover {
  background-color: #0d0d0d;
  color: #f2e205;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.tag:hover::after {
  display: flex;
  flex-grow: 1;
  position: absolute;
  top: -8px;
  right: 50%;
  padding: 0 5px;
  transform: translate3d(50%, -100%, 0);
  min-height: 30px;
  min-width: 100px;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  opacity: 20%;
  background-color: black;
  color: white;
  border-radius: 5px;
  opacity: 80%;
  content: attr(value);
}
.tag:hover::before {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translate3d(-50%, 0%, 0);
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid black;
  opacity: 80%;
  content: '';
}
</style>