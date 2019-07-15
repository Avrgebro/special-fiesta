<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <el-button
          style="float: right;"
          type="success"
          @click="$router.push('editor_formulario')"
          >
          + Nuevo formulario
        </el-button>
      </el-header>
      
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())).slice(((currentpage-1)*perpagetable), ((currentpage-1)*perpagetable)+perpagetable)"
        style="width: 100%; float: right;" v-if="viewTable">
        <el-table-column
          label="Formularios"
          prop="nombre">
        </el-table-column>
        <el-table-column
          label="Tipo"
          prop="tipo">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header">
            <input
              v-model="search"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleView(scope.$index, scope.row)">Ver</el-button>
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Editar</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Eliminar</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-if="viewTable"
        style="float: right;"
        background
        layout="prev, pager, next"
        :total="tableData.length"
        :current-page.sync="currentpage"
        :page-size="perpagetable">
      </el-pagination>

    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
//import Forms from '@/data/forms'
export default {
  data() {
    return {
      tableData: null,
      search: '',
      currentpage: 1,
      perpagetable: 5,
      viewTable: false
    }
  },
  created: function () {
    this.$store.dispatch('GetFormularios').then(response => {
      console.log(JSON.stringify(this.$store.state.formularios))
      this.tableData = this.$store.state.formularios
      this.viewTable = true
    })
  },
  computed: {
    ...mapGetters([
      'forms'
    ])
  },
  methods: {
    handleEdit(index, row) {
      // console.log(index, row);
      this.$router.push({name: 'editor_formulario', params: {edit: true, data: row}})
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm('Seguro que desa eliminar el formulario?', 'Advertencia', {
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar',
          type: 'warning',
          center: true
        }).then(() => {
          this.forms.splice(index, 1)
          this.$message({
            type: 'success',
            message: 'Formulario eliminado'
          })
        }).catch(() => {
          
        })
    },
    handleView(index, row) {
      console.log(row)
      this.$router.push({name: 'detalle_formulario', params: {data: row}})
    }
  },
  }
</script>

<style scoped>

</style>

