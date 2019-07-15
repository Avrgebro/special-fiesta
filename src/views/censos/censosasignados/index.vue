<template>
  <div class="app-container">
    <el-container>
      <el-main>
        <el-row>
          <span>Censos:</span>
        </el-row>
        <el-row>
          <el-table
            :data="listaCensos.slice(((currentpage-1)*perpagetable), ((currentpage-1)*perpagetable)+perpagetable)"
            style="width: 100%">
            <el-table-column
              label="Periodo"
              prop="periodo">
            </el-table-column>
            <el-table-column
              label="Creado"
              prop="fechaRegistro"
              sortable>
            </el-table-column>
            <el-table-column
              label="Estado"
              prop="estado"
              sortable>
            </el-table-column>
            <el-table-column
              align="right">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleAns(scope.$index, scope.row)">Aplicar a Familia</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            style="float: right;"
            background
            layout="prev, pager, next"
            :total="listaCensos.length"
            :current-page.sync="currentpage"
            :page-size="perpagetable">
          </el-pagination>
        </el-row>
      </el-main>
    </el-container>

    <el-dialog title="Seleccionar familia" :visible.sync="showDialog">
      <el-table 
        :data="listaFamilias"
        highlight-current-row
        @current-change="handleCurrentChange">
        <el-table-column type="index"></el-table-column>
        <el-table-column property="nombreContacto" label="Contacto"></el-table-column>
        <el-table-column property="direccion" label="Direccion"></el-table-column>
        <el-table-column property="telefonoContacto" label="Telefono"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      currentpage: 1,
      perpagetable: 5,
      listaCensos: [],
      listaFamilias: [],
      showDialog: false,
      currentselection: null
    }
  },
  mounted() {
    this.$store.dispatch('GetCensos').then(response => {
      this.listaCensos = this.$store.state.censos
    })

    this.$store.dispatch('getFams').then(response => {
      this.listaFamilias = response.data
      console.log(this.listaFamilias)
    })
  },
  computed: {
    ...mapGetters(['censos', 'forms'])
  },
  methods: {
    ...mapMutations('user', ['ADD_CENSO']),
    handleAns(index, row) {
      //this.$router.push({name: 'ver_censo', params: {edit: true, data: row}})
      this.showDialog = true
      this.currentselection = row
    },
    handleCurrentChange(val){
      this.$router.push({name: 'ver_censo', params: {edit: true, data: this.currentselection}})
    }

  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

