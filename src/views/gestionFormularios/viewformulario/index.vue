<template>
  <div class="app-container">
    <questionaire :mode="qmode" :data="qdata" />
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

