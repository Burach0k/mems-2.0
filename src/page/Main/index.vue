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
        <tag-list :tags="tags" :value="tag" />
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
}
</style>