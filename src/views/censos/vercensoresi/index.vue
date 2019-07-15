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
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      censo: this.$route.params.prev,
      currentpage: 1,
      perpagetable: 5
    }
  },
  created: function() {
      console.log(JSON.stringify(this.formularios))
  },
  computed: {
      ...mapGetters(['forms']),
    formsAsigned: function () {
      // `this` points to the vm instance
      var forms = []
      for(var i=0; i < this.forms.length; i++) {
        if(this.censo.formulariosId.includes(this.forms[i].id)){
          if(this.forms[i].type === 'Residente') {
            forms.push(this.forms[i])
          }
        }
      }

      return forms
    }

  },
  methods: {
    handleAns(index, row) {
      this.$router.push({name: 'responder_censos', params: {edit: true, data: row, prev: this.censo}})
    },
    handleView(index,row) {
      this.$router.push({name: 'ver_censo_residente', params: {edit:true, data:row, forms:this.formResidente}})
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

