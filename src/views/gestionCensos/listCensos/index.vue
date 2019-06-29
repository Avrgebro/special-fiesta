<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <el-button
          style="float: right;"
          type="success"
          @click="$router.push('nuevo_censo')"
          >
          Nuevo censo
        </el-button>
      </el-header>
      
      <el-table
        :data="tableData.filter(data => !search || data.estado.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          label="Periodo"
          prop="periodo">
        </el-table-column>
        <el-table-column
          label="Creado"
          prop="creado"
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
          prop="efectivas">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="Buscar por nombre"/>
          </template>
          <template slot-scope="scope">
            <el-button v-if="scope.row.estado == 'Cerrado'"
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
      

    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        periodo: '200903',
        creado: new Date(2003, 1, 10),
        estado: 'Cerrado',
        viviendas: '120',
        efectivas: '120'
      }, {
        periodo: '200906',
        creado: new Date(2003, 1, 10),
        estado: 'Cerrado',
        viviendas: '110',
        efectivas: '110'
      }, {
        periodo: '201505',
        creado: new Date(2003, 1, 10),
        estado: 'Cerrado',
        viviendas: '106',
        efectivas: '106'
      }, {
        periodo: '201706',
        creado: new Date(2003, 1, 10),
        estado: 'Cerrado',
        viviendas: '100',
        efectivas: '100'
      }, {
        periodo: '201812',
        creado: new Date(2003, 1, 10),
        estado: 'Cerrado',
        viviendas: '130',
        efectivas: '130'
      }, {
        periodo: '201907',
        creado: new Date(2003, 1, 10),
        estado: 'Abierto',
        viviendas: '',
        efectivas: ''
      }, {
        periodo: '201910',
        creado: new Date(2003, 1, 10),
        estado: 'Abierto',
        viviendas: '',
        efectivas: ''
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
    }
  },
  }
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

