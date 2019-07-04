<template>
  <div class="app-container">
    <el-form>
      <el-form-item>
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
            prop="type">
          </el-table-column>
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="Formato seleccionado">

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
import Forms from '@/data/forms'
export default {
  data() {
    return {
      tableData: forms,
      selectedForms: []
    }
  },
  computed: {
    ...mapGetters([
      'forms'
    ])
  },
  methods: {
    handleSelectionChange(val) {
      this.selectedForms = val;
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

