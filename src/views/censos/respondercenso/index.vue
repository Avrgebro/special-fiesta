<template>
  <div class="app-container">
    <questionaire :mode="qmode" :data="qdata" />
    <el-button style="float: right;" @click="handleBack()">Guardar</el-button>
    <el-button style="float: right;" @click="handleBack()">Regresar</el-button>
  </div>
</template>

<script>
import Questionaire from '@/components/Questionaire'
export default {
  components: {
    Questionaire
  },
  data() {
    return {
      qmode: 'view',
      qdata: this.$route.params.data
    }
  },
  methods: {
    handleBack() {
      var prev = this.$route.params.prev
      this.$router.push({name: 'ver_censo', params: {edit: true, data: prev}})
    }
  }
}
</script>

<style scoped>

</style>