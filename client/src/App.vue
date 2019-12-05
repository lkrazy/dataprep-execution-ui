<template lang="pug">
  #app
    a-layout#app-layout
      a-layout-content#app-content
        router-view
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  #app-header
    background-color transparent
  #app-layout
    min-height 100vh
  #app-content
    min-height 100%
  .transparent-bg
    background transparent
.flex
  display flex
.justify-content-end
  display flex
  justify-content flex-end
.align-items-end
  display flex
  align-items flex-end
.align-items-center
  display flex
  align-items center
</style>
