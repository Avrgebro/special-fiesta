<template>
  <div class="app-container">
    <el-container>
      <el-main>
        <el-row>
          <span>Censos asignados:</span>
        </el-row>
        <el-row>
          <el-table
            :data="censos.slice(((currentpage-1)*perpagetable), ((currentpage-1)*perpagetable)+perpagetable)"
            style="width: 100%">
            <el-table-column
              label="Periodo"
              prop="periodo">
            </el-table-column>
            <el-table-column
              label="Creado"
              prop="fechaRegistro"
              sortable>
            </el-table-column>
            <el-table-column
              label="Estado"
              prop="estado"
              sortable>
            </el-table-column>
            <el-table-column
              align="right">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleAns(scope.$index, scope.row)">Responder</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
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

