<template>
  <svg class="ico" :class="'ico-' + name">
    <use :xlink:href="xlink"/>
  </svg>
</template>

<script>
  export default {
    props: ['name'],
    computed: {
      xlink () {
        return require('../assets/img/svg/'+ this.name +'.svg')
      }
    }
  }
</script>
