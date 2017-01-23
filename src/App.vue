<template>
  <div>
    <subMenu></subMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import subMenu from 'components/Common/submenu'

export default {
  name: 'app',
  components: {
    subMenu
  }
}
</script>
