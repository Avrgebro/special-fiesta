<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <span>Gestion de usuarios</span>
      </el-header>
      <el-main>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      currentpage: 1,
      perpagetable: 5
    }
  },
  computed: {
    ...mapGetters(['censos', 'forms'])
  },
  methods: {
    ...mapMutations('user', ['ADD_CENSO']),
    handleAns(index, row) {
      this.$router.push({name: 'ver_censo', params: {edit: true, data: row}})
    }

  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

