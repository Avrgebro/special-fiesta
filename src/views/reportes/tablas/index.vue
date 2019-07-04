<template>
  <div class="app-container" style="height:90vh;">
    <el-container style="height: 100%;">
      <el-aside style="height: 100%; border-right-style: solid; border-right-width: 2px; border-right-color: #EBEEF5">
        
        <el-menu>
          <span>Columnas</span>

          <el-submenu :index="index" v-for="(coltype, index) in columns" v-bind:key="index">
            <template slot="title">
              <i class="el-icon-d-arrow-right"></i>
              <span>{{ index }}</span>
            </template>

            <el-checkbox-group v-model="checkedcols">
              <el-menu-item v-for="(col, indcol) in coltype" v-bind:key="indcol">
                <el-checkbox :label="col.nomcol">{{ col.nombre }}</el-checkbox>
              </el-menu-item>
            </el-checkbox-group>

            
          </el-submenu>

          <span>Filtros</span>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-d-arrow-right"></i>
              <span>Filtros</span>
            </template>

            <el-checkbox-group v-model="checkedfilt">
              <el-menu-item v-for="(filter, index) in filters" v-bind:key="index">
                <el-checkbox :label="filter" :disabled="filter.required" :checked="filter.required">{{ filter.text }}</el-checkbox>
              </el-menu-item>
            </el-checkbox-group>
          </el-submenu>

        </el-menu>
        
      </el-aside>
      
      <el-main>

        <el-collapse>
          <el-collapse-item title="Filtros seleccionados">
            <el-container>
              <el-main>
                <el-container>

                  <div class="filter-div" v-for="(filter, index) in checkedfilt" v-bind:key="index">
                    <div style="margin: 5px;">
                      <el-row>
                        <span class="label">{{ filter.text }}</span>
                      </el-row>

                      <el-row v-if="filter.type == 0">
                        <el-checkbox-group v-model="filterdata[filter.model]">
                          <el-checkbox 
                            v-for="(el, index) in filter.options"
                            v-bind:key="index"
                            :label="el"></el-checkbox>
                        </el-checkbox-group>
                      </el-row>

                      <el-row v-if="filter.type == 1">
                        <el-date-picker
                          v-model="filterdata[filter.model]"
                          type="daterange"
                          start-placeholder="Fecha inicio"
                          end-placeholder="Fecha Fin"
                          >
                        </el-date-picker>
                      </el-row>

                      <el-row v-if="filter.type == 2">
                        
                      </el-row>
                    </div>
                    
                  </div>

                </el-container>
              </el-main>
              <el-footer>
                <el-button style="float: right;" @click="handleGen()">Generar</el-button>
              </el-footer>
            </el-container>
          </el-collapse-item>
        </el-collapse>

        <div class="div-module">
          <h1 v-if="!edittitle">{{ title }}</h1>
          <el-input :placeholder="title" v-model="title" v-if="edittitle"></el-input>
          <i :class="edittitle ? 'el-icon-success' : 'el-icon-edit'" style="margin-left: 5px;" v-on:click="edittitle = !edittitle"></i>
        </div>

        <div class="div-module">
          <el-table
            :data="tableData"
            style="">

            <el-table-column v-for="(col, index) in checkedcols" v-bind:key="index"
              :label="col"
              :prop="col">
            </el-table-column>
            
          </el-table>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Baseline from '@/data/baseline'
import Filters from '@/data/filters'
import Registros from '@/data/registros'
export default {
  data() {
    return {
      registros: Registros.registros,
      columns: Baseline.columnas,
      depends: Baseline.dependencias,
      filters: Filters.filters,
      checkedcols: [],
      checkedfilt: [],
      title: 'Reporte personalizado',
      edittitle: false,
      tableData: [],
      filterdata: Filters.filterdata
    }
  },
  mounted(){
    /*var filter = {}
    for(var i = 0; i < this.filters.length; i++){
      if(this.filters[i].required){
        this.filterdata[this.filters[i].model] = this.filters[i].initialvalue
      }
    }*/
  },
  methods: {
    handleGen() {
      var data = []

      for(var i = 0; i < this.registros.length; i++){
        var obj = {}
        var self = this
        this.checkedcols.forEach(function(col) {
          obj[col] = self.registros[i][col]
        });
        data.push(obj)
      }

      this.tableData = data
    }
  }
}
</script>

<style>

.div-module {
  margin-top: 20px;
  display: flex;
  align-content: center;
  align-items: center;
}

h1 { 
  color: #111;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 64px;
  margin: 0 0 0;
  text-transform: uppercase; 
}

.filter-div {
  margin: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: #ced0d4
}
;
.label {
  color: #66686b;
  padding-bottom: 10px;
}

</style>

