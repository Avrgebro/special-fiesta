<template>
  <div class="app-container">
    <el-form>
      <el-form-item label="Asignar formularios">
        <el-table
          v-if="viewTable"
          ref="multipleTable"
          :data="formularios"
          style="width: 50%; display: inline-block;"
          @selection-change="handleSelectionChange">
          
          <el-table-column
            label="Formulario"
            prop="nombre">
          </el-table-column>
          <el-table-column
            label="Tipo"
            prop="tipo"
            sortable>
          </el-table-column>
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
        </el-table>
        
      </el-form-item>
      <el-form-item label="Periodo del censo">
        <el-input v-model="censo.periodo" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item label="Fecha y hora de inicio">
        <el-date-picker
          v-model="censo.fechaInicio"
          type="datetime">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Estado inicial">
        <el-switch
          v-model="censo.estado"
          active-text="Abierto"
          inactive-text="Cerrado">
        </el-switch>
      </el-form-item>
      <el-form-item style="float: right;">
        <el-button type="primary" @click="onSubmit">Guardar</el-button>
        <el-button @click="$router.push('lista_censos')">Cancelar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      formularios: null,
      viewTable: false,
      censo: {
        fechaRegistro: new Date().toISOString().slice(0, 10),
        fechaInicio:'',
        periodo:'',
        estado: 0,
        viviendas: 0,
        vivEncuestadas: 0,
        formulariosId: []
      },
      currentpage: 1,
      perpagetable: 5
    }
  },
  created: function () {
    this.$store.dispatch('GetFormularios').then(response => {
      this.formularios = this.$store.state.formularios
      this.viewTable = true
    })
  },
  methods: {
    handleSelectionChange(val) {
      this.censo.formulariosId = val.map(form => form.idFormulario);;
    },
    onSubmit(){
      this.censo.estado = this.censo.estado == true ? '1' : '0'
      console.log(JSON.stringify(this.censo))
      this.$store.dispatch('StoreCenso',this.censo).then(response => {
        console.log(this.$store.state.newCenso)
      })
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

