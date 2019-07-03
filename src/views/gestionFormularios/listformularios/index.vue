<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <el-button
          style="float: right;"
          type="success"
          @click="$router.push('nuevo_formulario')"
          >
          + Nuevo formulario
        </el-button>
      </el-header>
      
      <el-table
        :data="tableData.filter(data => !search || data.formname.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%; float: right;">
        <el-table-column
          label="Formularios"
          prop="formname">
        </el-table-column>
        <el-table-column
          label="Tipo"
          prop="type">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header">
            <el-input
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
      

    </el-container>
  </div>
</template>

<script>
import Forms from '@/data/forms'
export default {
  data() {
    return {
      tableData: Forms.forms,
      search: '',
    }
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
      this.$router.push({name: 'detalle_formulario', params: {data: row}})
    }
  },
  }
</script>

<style scoped>

</style>

