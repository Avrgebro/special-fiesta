<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <el-button
          style="float: right;"
          type="success"
          @click="handleNew()"
          >
          Nuevo formulario
        </el-button>
      </el-header>
      
      <el-table
        :data="tableData.filter(data => !search || data.formname.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
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
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="Buscar por nombre"/>
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
export default {
  data() {
    return {
      tableData: [{
        formname: 'Informacion general',
        type: 'Vivienda'
      }, {
        formname: 'Servicios basicos',
        type: 'Vivienda'
      }, {
        formname: 'Informacion general',
        type: 'Residente'
      }, {
        formname: 'Educacional',
        type: 'Residente'
      }, {
        formname: 'Empleo',
        type: 'Residente'
      }, {
        formname: 'Empoderamiento',
        type: 'Residente'
      }],
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
    },
    handleNew(){
      
    }
  },
  }
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

