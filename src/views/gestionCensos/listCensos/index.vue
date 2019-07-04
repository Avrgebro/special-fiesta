<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <el-button
          style="float: right;"
          type="success"
          @click="$router.push('nuevo_censo')"
          >
          + Nuevo censo
        </el-button>
      </el-header>
      
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
          label="Viviendas"
          prop="viviendas">
        </el-table-column>
        <el-table-column
          label="Efectivas"
          prop="vivEncuestadas">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot-scope="scope">
            <el-button v-if="scope.row.estado == '0'"
              size="mini"
              @click="handleView(scope.$index, scope.row)">Ver</el-button>
            <el-button v-else
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Editar</el-button>
            <el-button
              size="mini"
              @click="console.log(scope.row)">Aplicar a vivienda</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="float: right;"
        background
        layout="prev, pager, next"
        :total="censos.length"
        :current-page.sync="currentpage"
        :page-size="perpagetable">
      </el-pagination>

    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      search: '',
      currentpage: 1,
      perpagetable: 5
    }
  },
  computed: {
    ...mapGetters([
      'censos'
    ])
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleView(index, row) {
      console.log(index, row);
    }
  },
  }
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

