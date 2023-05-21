<template>
  <button class="btn btn-success" @click="$emit('on-click')">
    <i class="fa fa-2px" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  bottom: 20px;
  height: 50px;
  position: fixed;
  right: 20px;
  width: 50px;
}
</style>