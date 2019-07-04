<template>
  <div class="app-container">
    <questionaire :mode="qmode" :data="qdata" />
    <el-button style="float: right;" @click="$router.go(-1)">Regresar</el-button>
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
    
  }
}
</script>

<style scoped>

</style>

