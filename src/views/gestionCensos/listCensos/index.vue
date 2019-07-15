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
        :data="listaCensos.slice(((currentpage-1)*perpagetable), ((currentpage-1)*perpagetable)+perpagetable)"
        style="width: 100%" v-if="viewCensos">
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
        v-if="viewCensos"
        style="float: right;"
        background
        layout="prev, pager, next"
        :total="listaCensos.length"
        :current-page.sync="currentpage"
        :page-size="perpagetable">
      </el-pagination>

    </el-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      search: '',
      currentpage: 1,
      perpagetable: 5,
      listaCensos: null,
      viewCensos: false
    }
  },
  created: function () {
    this.$store.dispatch('GetCensos').then(response => {
      this.listaCensos = this.$store.state.censos
      this.viewCensos = true
    })
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

