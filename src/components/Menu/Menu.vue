<template>
  <div class="menu-fixed">
    <div id="logo" class="logo-class">
        <img src="@/assets/img/logo.png"/>
        <span>{{ $t('basic.dreamMaker') }}</span>
    </div>
    <div class="menu-class">
        <div id="menuBtnGroup" class="menu-btns">
            <div class="menu-btn" :data-text="$t('basic.homePage')">
                <img src="@/assets/svg/home.svg"/>
                <div class="bottom-line"></div>
            </div>
            <div class="menu-btn" :data-text="$t('basic.serve')">
                <img src="@/assets/svg/serve.svg"/>
                <div class="bottom-line"></div>
            </div>
        </div>
    </div>
  </div>
</template>
<script src="./Menu.js"/>
<style scoped lang="less" src="./Menu.less"/>
