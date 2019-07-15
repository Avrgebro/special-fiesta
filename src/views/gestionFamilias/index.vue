<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <span>Gestión de familias</span>
        <el-button
          style="float: right;"
          type="success"
          @click="dialogVisible = true"
          >
          + Nueva familia
        </el-button>
      </el-header>
      <el-main>
        <el-table
          :data="fams.filter(data => !search || data.nombreContacto.toLowerCase().includes(search.toLowerCase())).slice(((currentpage-1)*perpagetable), ((currentpage-1)*perpagetable)+perpagetable)"
          style="width: 100%; float: right;">
          <el-table-column
            label="Nombre Contacto"
            prop="nombreContacto">
          </el-table-column>
          <el-table-column
            label="Telefono Contacto"
            prop="telefonoContacto">
          </el-table-column>
          <el-table-column
            label="Direccion"
            prop="direccion">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header">
              <input
                v-model="search"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                type='success'
                @click="handleEdit(scope.$index, scope.row)">Editar</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="float: right;"
          background
          layout="prev, pager, next"
          :total="fams.length"
          :current-page.sync="currentpage"
          :page-size="perpagetable">
        </el-pagination>
      </el-main>
    </el-container>
    <el-dialog
      title="Nueva familia"
      :visible.sync="dialogVisible"
      width="30%"
      :show-close="false">
      <el-container>
        <el-main>
          <el-form :model="postfam">
            <el-row :gutter="5">
              <el-col :span="12">
                <el-form-item label="Nombre Contacto">
                  <el-input v-model="postfam.nombreContacto"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Telefono Contacto">
                  <el-input v-model="postfam.telefonoContacto"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            
            <el-row :gutter="5">
              <el-col :span="12">
                <el-form-item label="Direccion">
                  <el-input v-model="postfam.direccion"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Email">
                  <el-input v-model="postfam.email"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="5">
              <el-col :span="12">
                <el-form-item label="Activo">
                  <el-switch v-model="postfam.activo"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-main>
      </el-container>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleDialogSave()">Guardar</el-button>
        <el-button @click="handleDialogClose()">Cancelar</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { stringify } from 'querystring';
export default {
  data() {
    return {
      currentpage: 1,
      perpagetable: 5,
      search:'',
      dialogVisible: false,
      fams: [],
      postfam: {
        activo: true,
        nombreContacto: '',
        direccion: '',
        telefonoContacto: '',
        idRol: 1,
        personaId: 1,
        familiaId: null
      }
    }
  },
  mounted() {
    this.getFams()
  },
  computed: {
  },
  methods: {
    handleEdit(index, fam) {
      this.postfam = fam
      this.dialogVisible = true
    },
    handleDialogSave(){
      console.log(this.postfam)
      this.dialogVisible = false

      if(this.postfam.familiaId == null){//nueva familia
        this.$store.dispatch('storeFamilia', this.postfam).then(response => {
          if(response.status === 200) {
            this.getFams()
            this.$message('Familia agregada satisfactoriamente!')
          } else {
            this.$message('OOPSS!! estamos teniendo problemas en este momento');
          }
        })
        .catch(() => {
          this.$message('OOPSS!! estamos teniendo problemas en este momento');
        })
      }
    },
    handleDialogClose(){
      this.dialogVisible = false
      this.postfam.activo = true
      this.postfam.direccion = ''
      this.postfam.nombreContacto = ''
      this.postfam.email = ''
      this.postfam.idRol = 1
      this.postuser.familiaId = null

    },
    getFams() {
      this.$store.dispatch('getAllFams').then(response => {
        if(response.status === 200) {
          // console.log('GAAAA')
          this.fams = response.data
        } else {
          // console.log('gaaa2')
          this.$message('OOPSS!! estamos teniendo problemas en este momento');
        }
        // console.log(response)
      })
      .catch(() => {
        this.$message('OOPSS!! estamos teniendo problemas en este momento');
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>