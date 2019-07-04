<template>
  <div class="app-container">
    <el-form>
      <el-form-item label="Asignar formularios">
        <el-table
          ref="multipleTable"
          :data="forms.slice(((currentpage-1)*perpagetable), ((currentpage-1)*perpagetable)+perpagetable)"
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
        <el-pagination
          style=""
          background
          layout="prev, pager, next"
          :total="forms.length"
          :current-page.sync="currentpage"
          :page-size="perpagetable">
        </el-pagination>
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
    <span>{{ censo }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Forms from '@/data/forms'
export default {
  data() {
    return {
      censo: {
        fechaRegistro: new Date(),
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
      'forms'
    ])
  },
  methods: {
    handleSelectionChange(val) {
      this.censo.formulariosId = val.map(form => form.id);;
    },
    onSubmit(){

    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

