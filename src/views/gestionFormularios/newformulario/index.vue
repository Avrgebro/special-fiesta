<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      
      <el-form-item label="Nombre">
        <el-input v-model="form.nombre" placeholder="Nombre del formulario" maxlength="70" show-word-limit/>
      </el-form-item>
      <el-form-item label="Tipo">
        <el-radio-group v-model="form.tipo">
          <el-radio label="Residente" />
          <el-radio label="Vivienda" />
        </el-radio-group>
      </el-form-item>
      
      <el-form-item label="Preguntas">
        <div>
          
          <el-table
            :data="form.preguntas.slice(((currentpage-1)*perpagetable), ((currentpage-1)*perpagetable)+perpagetable)"
            style="width: 100%">
            <el-table-column
              label="Pregunta"
              prop="pregunta">
            </el-table-column>
            <el-table-column
              label="Tipo"
              prop="tipoPregunta">
            </el-table-column>
            <el-table-column
              label="Clave"
              prop="clave">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header">
                <el-button
                  size="mini"
                  type="success"
                  @click="dialogVisible = true">Nueva Pregunta</el-button>
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            style="float: right;"
            background
            layout="prev, pager, next"
            :total="form.preguntas.length"
            :current-page.sync="currentpage"
            :page-size="perpagetable">
          </el-pagination>
        </div>
      </el-form-item>
      <el-form-item style="float: right;">
        <el-button type="primary" @click="onSubmit">Guardar</el-button>
        <el-button @click="$router.push('lista_formularios')">Cancelar</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="Agregar pregunta"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :show-close="false">
      <el-form>
        <el-form-item label="Pregunta">
          <el-input v-model="newquestion.pregunta" />
        </el-form-item>
        <el-form-item label="Llave">
          <el-input v-model="newquestion.clave" />
        </el-form-item>
        <el-form-item label="Tipo">
          <el-radio-group v-model="newquestion.tipoPregunta">
            <el-radio label="Valor" />
            <el-radio label="Fecha" />
            <el-radio label="Opciones" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Opciones" v-if="newquestion.tipoPregunta == 'Opciones'">
          <el-tag
            :key="tag"
            v-for="tag in newquestion.opciones"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="newquestion.inputVisible"
            v-model="newquestion.inputValue"
            ref="saveTagInput"
            size="mini"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ Opcion</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleDialogSave()">Guardar</el-button>
        <el-button @click="handleDialogClose()">Cancelar</el-button>
      </span>
    </el-dialog>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      formularios: [],
      form: {
        nombre: '',
        tipo: 'Residente',
        estado: 'Activo',
        preguntas: [],
      },
      newquestion: {
        pregunta: '',
        clave: '',
        tipoPregunta: 'Valor',
        opciones: [],
        inputVisible: false,
        inputValue: ''
      },
      currentpage: 1,
      perpagetable: 5,
      dialogVisible: false
      
    }
  },
  computed: {
    ...mapGetters([
      'nextformid'
    ])
  },
  mounted() {
    var edit = this.$route.params.edit
    if(edit){
      this.form = this.$route.params.data 
    }
  },
  methods: {
    ...mapMutations('user',['ADD_FORM']),

    onSubmit() {// Guardar el formulario nuevo
      this.formularios.push(this.form)
      this.$store.dispatch('StoreFormulario',this.formularios).then(response => {
        this.$message('submit!')
      })
      //this.ADD_FORM(this.form)
    },
    handleDelete(index, row) {// Eliminar una pregunta de la tabla
      this.form.preguntas.splice(index, 1)
    },
    handleDialogClose() {// Cerrar el dialog sin guardar la nueva pregunta
      this.dialogVisible = false
      this.cleanQuestionState()
    },
    handleDialogSave() {// Cerrar el dialog y guardar la nueva pregunta
      this.dialogVisible = false
      var nq = {}
      nq.pregunta = this.newquestion.pregunta
      nq.clave = this.newquestion.clave
      nq.tipoPregunta = this.newquestion.tipoPregunta
      nq.opciones = this.newquestion.opciones

      this.form.preguntas.push(nq)
      this.cleanQuestionState()
    },
    cleanQuestionState() {// volver los valores a 0
      this.newquestion.pregunta = ''
      this.newquestion.clave = ''
      this.newquestion.tipoPregunta = 'Valor'
      this.newquestion.opciones = []
      this.newquestion.inputVisible = false
      this.inputValue = ''
    },
    handleClose(tag) {
      this.newquestion.opciones.splice(this.newquestion.opciones.indexOf(tag), 1);
    },
    showInput() {
      this.newquestion.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.newquestion.inputValue;
      if (inputValue) {
        this.newquestion.opciones.push(inputValue);
      }
      this.newquestion.inputVisible = false;
      this.newquestion.inputValue = '';
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.el-tag + .el-tag {
    margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>

