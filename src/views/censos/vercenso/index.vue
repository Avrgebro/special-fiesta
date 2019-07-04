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
      censo: this.$route.params.data
    }
  },
  computed: {
    ...mapGetters(['forms']),
    formsAsigned: function () {
      // `this` points to the vm instance
      return this.forms.filter(form => form.id in this.censo.formulariosId);
    }

  },
  methods: {
    handleAns(index, row) {
      this.$router.push({name: 'responder_censos', params: {edit: true, data: row, prev: this.censo}})
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

