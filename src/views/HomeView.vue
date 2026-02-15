<template>
  <div class="home">
    <HelloWorld :msg="msg"/>
    {{ $t('basic.homePage') }}
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: '首页'
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
