<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <span>Gestion de usuarios</span>
        <el-button
          style="float: right;"
          type="success"
          @click="dialogVisible = true"
          >
          + Nuevo usuario
        </el-button>
      </el-header>
      <el-main>
        <el-table
          :data="users.filter(data => !search || data.usuario.toLowerCase().includes(search.toLowerCase())).slice(((currentpage-1)*perpagetable), ((currentpage-1)*perpagetable)+perpagetable)"
          style="width: 100%; float: right;">
          <el-table-column
            label="Nombres"
            prop="nombres">
          </el-table-column>
          <el-table-column
            label="A. Paterno"
            prop="apePaterno">
          </el-table-column>
          <el-table-column
            label="Usuario"
            prop="usuario">
          </el-table-column>
          <el-table-column
            label="Rol"
            prop="idRol">
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
          :total="users.length"
          :current-page.sync="currentpage"
          :page-size="perpagetable">
        </el-pagination>
      </el-main>
    </el-container>
    <el-dialog
      title="Nuevo usuario"
      :visible.sync="dialogVisible"
      width="30%"
      :show-close="false">
      <el-container>
        <el-main>
          <el-form :model="postuser">
            <el-row :gutter="5">
              <el-col :span="8">
                <el-form-item label="Nombres">
                  <el-input v-model="postuser.nombres"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Ap. Paterno">
                  <el-input v-model="postuser.apePaterno"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Ap. Materno">
                  <el-input v-model="postuser.apeMaterno"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="5">
              
              <el-col :span="12">
                <el-form-item label="Usuario">
                  <el-input v-model="postuser.usuario"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Contraseña">
                  <el-input v-model="postuser.password" show-password></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            
            <el-row :gutter="5">
              <el-col :span="12">
                <el-form-item label="E-mail">
                  <el-input v-model="postuser.email"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Fecha Nacimiento">
                  <el-date-picker
                    v-model="postuser.fecNacimiento"
                    type="date"
                    placeholder="Pick a day">
                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="5">
              <el-col :span="12">
                <el-form-item label="Rol">
                  <el-select v-model="postuser.idRol" placeholder="Rol">
                    <el-option
                      v-for="item in roles"
                      :key="item.id"
                      :label="item.rol"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Activo">
                  <el-switch v-model="postuser.activo"></el-switch>
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
      roles: [
        {
          id: 1,
          rol: 'Admin'
        },
        {
          id: 2,
          rol: 'Encuestador'
        },
        {
          id: 3,
          rol: 'Cliente'
        }
      ],
      currentpage: 1,
      perpagetable: 5,
      search:'',
      dialogVisible: false,
      users: [],
      postuser: {
        activo: true,
        apeMaterno: '',
        apePaterno: '',
        email: '',
        fecNacimiento: '',
        idRol: 1,
        nombres: '',
        password: '',
        personaId: 1,
        usuario: '',
        usuarioId: null
      }
    }
  },
  mounted() {
    this.getUsers()
  },
  computed: {
  },
  methods: {
    handleEdit(index, user) {
      // this.postuser = user

      this.postuser.activo = user.activo
      this.postuser.apeMaterno = user.apeMaterno
      this.postuser.apePaterno = user.apePaterno
      this.postuser.email = user.email
      this.postuser.fecNacimiento = user.fecNacimiento
      this.postuser.idRol = user.idRol
      this.postuser.nombres = user.nombres
      this.postuser.password = user.password
      this.postuser.personaId = user.personaId
      this.postuser.usuario = user.usuario
      this.postuser.usuarioId = user.usuarioId

      this.dialogVisible = true
      console.log(this.postuser)
    },
    handleDialogSave(){
      // console.log(this.postuser)
      this.dialogVisible = false

      if(this.postuser.usuarioId == null){//nuevo usuario
        console.log('nuevo')
        this.$store.dispatch('createUser', this.postuser).then(response => {
          if(response.status === 200) {
            this.getUsers()
            this.handleDialogClose()
          } else {
            this.$message('OOPSS!! estamos teniendo problemas en este momento');
          }
        })
        .catch(() => {
          this.$message('OOPSS!! estamos teniendo problemas en este momento');
        })
        // this.postuser.activo = true
        // this.postuser.apeMaterno = ''
        // this.postuser.apePaterno = ''
        // this.postuser.email = ''
        // this.postuser.fecNacimiento = ''
        // this.postuser.idRol = 1
        // this.postuser.nombres = ''
        // this.postuser.password = ''
        // this.postuser.personaId = null
        // this.postuser.usuario = ''
        // this.postuser.usuarioId = null
      } else {
        console.log('editar')
        this.$store.dispatch('editUser', this.postuser).then(response => {
          if(response.status === 200) {
            console.log(response.data)
            this.getUsers()
            this.handleDialogClose()
          } else {
            this.$message('Error al actualizar el usuario')
          }
        })
        .catch(() => {
          this.$message('OOPSS!! estamos teniendo problemas en este momento')
        })
      }

      // this.handleDialogClose()
    },
    handleDialogClose(){
      this.dialogVisible = false
      this.postuser.activo = true
      this.postuser.apeMaterno = ''
      this.postuser.apePaterno = ''
      this.postuser.email = ''
      this.postuser.fecNacimiento = ''
      this.postuser.idRol = 1
      this.postuser.nombres = ''
      this.postuser.password = ''
      this.postuser.personaId = null
      this.postuser.usuario = ''
      this.postuser.usuarioId = null

    },
    getUsers() {
      this.$store.dispatch('getUsers').then(response => {
        if(response.status === 200) {
          // console.log('GAAAA')
          this.users = response.data
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

