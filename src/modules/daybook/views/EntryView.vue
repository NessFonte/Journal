<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-5 fw-bold">20</span>
      <span class="mx-1 fs-5">Mayo</span>
      <span class="text-info mx-1 fs-5">2023, sábado</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-dark">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  
  <hr>

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedió hoy?"></textarea>
  </div>

  <Fab icon="fa-save"/>

  <img class="img-thumbnail" src="../assets/vue.jpg" alt="entry-picture">
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  }
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  resize: none;

  &:focus {
    outline: none
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 100px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>