<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <span>Periodo: {{ censo.periodo }}</span>
      </el-header>

      <el-table
        :data="formsAsigned"
        style="width: 100%">
        <el-table-column
          label="Formulario"
          prop="name">
        </el-table-column>
        <el-table-column
          label="Tipo"
          prop="type"
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
      <br><br>

      <el-header>
        <span>Lista de Residentes</span>
      </el-header>

      <el-table
        :data="residentes.filter(data => !search || data.nombres.toLowerCase().includes(search.toLowerCase())).slice(((currentpage-1)*perpagetable), ((currentpage-1)*perpagetable)+perpagetable)"
        style="width: 100%; float: right;" v-if="viewTable">
        <el-table-column
          label="Nombres"
          prop="nombres">
        </el-table-column>
        <el-table-column
          label="Ap. Paterno"
          prop="apePaterno">
        </el-table-column>
        <el-table-column
          label="Ap. Materno"
          prop="apeMaterno">
        </el-table-column>
        <el-table-column
          label="Fec. Nacimiento"
          prop="fecNacimiento">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleView(scope.$index, scope.row)">Responder</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <el-pagination
        v-if="viewTable"
        style="float: right;"
        background
        layout="prev, pager, next"
        :total="residentes.length"
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
      censo: this.$route.params.data,
      familia: this.$route.params.fam,
      residentes: null,
      viewTable: true,
      currentpage: 1,
      perpagetable: 5,
      formResidente: []
    }
  },
  computed: {
    ...mapGetters(['forms']),
    formsAsigned: function () {
      console.log(JSON.stringify(this.censo))
      console.log(JSON.stringify(this.familia))
      this.residentes = this.familia.residentes
      // `this` points to the vm instance
      var forms = []
      for(var i=0; i < this.forms.length; i++) {
        if(this.censo.formulariosId.includes(this.forms[i].id)){
          if(this.forms[i].type === 'Vivienda') {
            forms.push(this.forms[i])
          } else {
            this.formResidente.push(this.forms[i])
          }
        }
      }

      return forms
      // return this.forms.filter(form => this.censo.formulariosId.includes(form.id));
    }

  },
  methods: {
    handleAns(index, row) {
      this.$router.push({name: 'responder_censos', params: {edit: true, data: row, prev: this.censo}})
    },
    handleView(index,row) {
      this.$router.push({name: 'ver_censo_residente', params: {edit:true, prev:this.censo, forms:this.formResidente}})
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

