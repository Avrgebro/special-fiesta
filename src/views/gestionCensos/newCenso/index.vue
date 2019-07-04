<template>
  <div class="app-container">
    <el-form>
      <el-form-item label="Asignar formularios">
        <el-table
          ref="multipleTable"
          :data="forms"
          style="width: 50%; display: inline-block;"
          @selection-change="handleSelectionChange">
          
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
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Forms from '@/data/forms'
export default {
  data() {
    return {
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
  computed: {
    ...mapGetters([
      'forms',
      'nextcensoid'
    ])
  },
  methods: {
    ...mapMutations('user', ['ADD_CENSO']),
    handleSelectionChange(val) {
      this.censo.formulariosId = val.map(form => form.id);;
    },
    onSubmit(){
      this.censo.estado = this.censo.estado == true ? '1' : '0'
      var id = this.nextcensoid
      this.censo.id = id
      console.log(this.censo)
      this.ADD_CENSO(this.censo)
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

