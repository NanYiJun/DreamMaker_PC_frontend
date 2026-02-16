<template>
  <div class="menu-fixed">
    <div class="logo-class">
        <img src="@/assets/img/logo.png"/>
        <span>{{ $t('basic.dreamMaker') }}</span>
    </div>
    <div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
  props: {
  }
}
</script>

<style scoped lang="less">
.menu-fixed{
    position: fixed;
    overflow: hidden;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to right, rgb(255, 136, 0), rgb(255, 0, 234),rgb(0, 17, 255), rgb(0, 255, 242), rgb(255, 136, 0));
    background-size: 200% 200%;
    animation: gradient-move 3s linear infinite;
    @keyframes gradient-move {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 200% 200%;
        }
    }
}
.logo-class{
    height: 60px;
    display: flex;
    align-items: center;
    padding: 10px;
    font-family: 'pixel';
    cursor: pointer;
    background: rgba(206, 206, 206, 0.5);
    box-shadow: 1px 0px 5px 1px inset #ffffff;
    backdrop-filter: blur(10px);
}
.logo-class img{
    height: 40px;
    margin-right: 5px;
}
</style>
