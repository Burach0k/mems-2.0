<template>
  <div class="header">
    <router-link to="/">
      <img
        src="https://i-love-png.com/images/hive-hexagon-pngac3-4bf0-853a-871b34ab102f_11111.png"
        class="logo"
      />
    </router-link>

    <div>
      <div class="routing">
        <router-link to="/" v-if="$route.name !== 'Registration'">{{$t('header.home')}}</router-link>
        <router-link to="/search" v-if="$route.name !== 'Registration'">{{$t('header.search')}}</router-link>

        <router-link to="/login" class='my-profile' v-if="$route.name !== 'Registration'">
          <font-awesome-icon icon="user" class="icon" />
        </router-link>

        <div class="languages-container">
          {{$t('header.languages')}}
          <div class="language-list">
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
      </div>
    </div>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>

<style scoped>
.header {
  display: flex;

  height: 100px;

  padding: 0 20px;

  justify-content: space-between;
  align-items: center;

  background-color: #0d0d0d;
}
.logo {
  width: 70px;
  height: 70px;
}
.routing {
  display: flex;
}
.routing a {
  margin: 0 3px;
  padding: 10px 15px;

  border-radius: 3px;
  background-color: #f2e205;

  color: #0d0d0d;
  font-size: 18px;
  text-decoration: none;
}
.routing a:hover {
  background-color: #0d0d0d;
  color: #f2e205;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.languages {
  position: absolute;
  top: 20px;
}
.languages .active {
  border-bottom: 2px solid black;
}
.languages-container {
  position: relative;
  border: 2px solid #f2e205;
  padding: 10px;

  text-align: center;
  align-items: center;
  display: flex;

  margin-left: 3px;

  border-radius: 3px;
  color: #f2e205;
}

.languages-container:hover .language-list {
  display: flex;
  flex-direction: column;
}

.language-list {
  position: absolute;
  top: 40px;
  right: 0;
  left: 0;

  display: none;
  height: 85px;

  background-color: #0d0d0d;
  border-radius: 3px;
}

.language-list .flag:hover,
.language-list .active .flag {
  opacity: 0.99;
}

.language-list .flag {
  height: 50px;
  margin: -6px 0;

  opacity: 0.3;
}

.my-profile .icon {
  color: #0d0d0d;
}
.routing .my-profile:hover .icon{
  color: #f2e205;
}
</style>