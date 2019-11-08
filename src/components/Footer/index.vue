<template>
  <div class="footer">
    <div class="first-footer">
      <div class="footer-info">
        <font-awesome-icon icon="map-marker-alt" class="icon" />
        <p>ул. Академическая, 1</p>
      </div>

      <div class="footer-info">
        <font-awesome-icon icon="tty" class="icon" />
        <p>тел. +375 17 284 19 19</p>
      </div>

      <div class="footer-info">
        <font-awesome-icon icon="mail-bulk" class="icon" />
        <p>fmvesti@mail.ru</p>
      </div>
    </div>

    <div class="second-footer">
      <p>Создано и поддерживается NEICON</p>
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.footer {
}
.first-footer {
  height: 100px;

  padding: 10px 20px;

  background-color: #0d0d0d;
}
.second-footer {
  height: 50px;

  padding: 10px 20px;

  background-color: #EAF205;
}
.second-footer p {
  text-align: center;
  font-size: 18px;
}
.footer-info {
  display: flex;
  align-content: center;
  margin: 8px 0;
}
.footer-info p {
  margin: 0;
  margin-left: 20px;

  color: #bfb304;
}
.footer-info .icon {
  width: 20px;
}
</style>