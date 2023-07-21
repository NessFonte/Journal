<template>
  <div v-if="entry" class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-5 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-5">{{ month }}</span>
      <span class="text-info mx-1 fs-5">{{ year }}</span>
    </div>

    <div>
      <input type="file" @change="onSelectedImage" ref="imageSelector" v-show="false" accept="image/png, image/jpeg">

      <button v-if="entry.id" class="btn btn-danger mx-2" @click="onDeleteEntry">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-dark" @click="onSelectImage">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  
  <hr>

  <div v-if="entry" class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedió hoy?" v-model="entry.text"></textarea>
  </div>

  <Fab icon="fa-save" @on-click="saveEntry"/>

  <img v-if="localImage" class="img-thumbnail" :src="localImage" alt="entry-picture">
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import getDate from '@/modules/daybook/helpers/getDate.js'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      entry: null,
      localImage: null,
      file: null,
    }
  },

  props: {
    id: {
      type: String,
      required: true,
    }
  },

  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue')),
  },

  computed: {
    ...mapGetters('journal', ['getEntryById']),

    day() {
      const {day} = getDate(this.entry.date)
      return day
    },

    month() {
      const {month} = getDate(this.entry.date)
      return month
    },

    year() {
      const {year} = getDate(this.entry.date)
      return year
    },
  },

  methods: {
    ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),

    loadEntry() {
      let entry 

      if(this.id === 'new'){
        entry = {
          text: '',
          date: new Date().getTime()
        }
      }
      else {
        entry = this.getEntryById(this.id)
        if(!entry) return this.$router.push({name: 'no-entry'})
      }
      this.entry = entry
    },

    async saveEntry() {
      new Swal({
        title: 'Espere por favor',
        allowOutsideClick: false,
      })
      Swal.showLoading()

      if(this.entry.id) {
        await this.updateEntry(this.entry)
      }
      else {
        const id = await this.createEntry(this.entry)
        this.$router.push({name: 'entry', params: {id}})
      }

      Swal.fire('Guardado', 'Entrada registrada con éxito', 'success')

    }, 

    async onDeleteEntry() {
      const result = await Swal.fire({
        title: '¿Está seguro?',
        text: 'Una vez borrado, no se puede recuperar',
        showDenyButton: true,
        confirmButtonText: 'Si, estoy seguro'
      })
      
      if(result.isConfirmed) {
        new Swal ({
          title: 'Espere por favor',
          allowOutsideClick: false,
        })
        Swal.showLoading()
        await this. deleteEntry(this.entry)
        this.$router.push({name: 'no-entry'})

        Swal.fire('Eliminado', 'Entrada eliminada con éxito', 'success')
      } 
    },

    onSelectedImage(event) {
      const file = event.target.files[0]
      if(!file) {
        return
      }

      this.file = file

      const fr = new FileReader()
      fr.onload = () => this.localImage = fr.result
      fr.readAsDataURL(file)
    }, 

    onSelectImage() {
      this.$refs.imageSelector.click()
    }
  },

  created() {
    this.loadEntry() 
  },

  watch: {
    id() {
      this.loadEntry()
    }
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