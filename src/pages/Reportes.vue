<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Reportes e informacion</h4>
            <p class="category">la aaarita</p>
          </md-card-header>
          <md-card-content>
            <div class="md-layout">
              <div class="md-layout-item">
                <b-collapse class="card" aria-id="contentIdForA11y3" :open="collapseOpenControls.columns">
                  <div
                    slot="trigger"
                    slot-scope="props"
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3"
                  >
                    <p class="card-header-title">
                      Control de reportes
                    </p>
                    <a class="card-header-icon">
                      <b-icon :icon="props.open ? 'caret-up' : 'caret-down'">
                      </b-icon>
                    </a>
                  </div>
                  <div class="card-content">
                    <div class="content">
                        <ul class="collist">
                          <li v-for="columna in columnas" :key="columna.id" class="colitem">
                            <b-checkbox v-model="selectedcols"
                                :native-value="columna.id">
                                {{ columna.nombre }}
                            </b-checkbox> 
                          </li> 
                        </ul>
                    </div>
                  </div>
                  <footer class="card-footer md-layout">
                    <div class="card-footer-item md-layout-item md-size-66">
                      <b-tabs type="is-toggle-rounded">
                        <b-tab-item label="datos1"></b-tab-item>
                        <b-tab-item label="datos2"></b-tab-item>
                        <b-tab-item label="datos3"></b-tab-item>
                        <b-tab-item label="datos4"></b-tab-item>
                      </b-tabs>
                    </div>
                    <a class="card-footer-item md-layout-item md-size-33" v-on:click="generar">Generar</a>
                  </footer>
                </b-collapse>
                

                <b-collapse class="card" aria-id="contentIdForA11y3" v-if="isDataReady" :open="collapseOpenControls.filters">
                  <div
                    slot="trigger"
                    slot-scope="props"
                    class="card-header"
                    role="button"
                    aria-controls="contentIdForA11y3"
                  >
                    <p class="card-header-title">
                      Filtro de datos
                    </p>
                    <a class="card-header-icon">
                      <b-icon :icon="props.open ? 'caret-up' : 'caret-down'">
                      </b-icon>
                    </a>
                  </div>
                  <div class="card-content">
                    <div class="content md-layout">
                      <b-field label="Fecha inicio" class="md-layout-item md-size-15">
                        <b-datepicker
                            icon="calendar">
                        </b-datepicker>
                      </b-field>
                      <b-field label="Fecha fin" class="md-layout-item md-size-15">
                        <b-datepicker
                            icon="calendar">
                        </b-datepicker>
                      </b-field>

                      <b-dropdown>
                          <button class="button" slot="trigger">
                              <span>Dropdown</span>
                              <b-icon icon="caret-down"></b-icon>
                          </button>

                          <b-dropdown-option>Action</b-dropdown-option>
                          <b-dropdown-option>Another action</b-dropdown-option>
                          <b-dropdown-option>Something else</b-dropdown-option>
                      </b-dropdown>
                      
                    </div>
                  </div>
                  <footer class="card-footer md-layout">
                    <div class="card-footer-item md-layout-item md-size-66">
                    </div>
                    <a class="card-footer-item md-layout-item md-size-33">Aplicar</a>

                  </footer>
                </b-collapse>
                
              </div>
            </div>
            <div class="md-layout bordered">
              <div class="md-layout-item">
                <b-table
                    :data="data"
                    :paginated="true"
                    per-page="5"
                    current-page.sync="1"
                    :pagination-simple="pagination"
                    default-sort-direction="asc"
                    default-sort="user.first_name"
                    aria-next-label="Next page"
                    aria-previous-label="Previous page"
                    aria-page-label="Page"
                    aria-current-label="Current page">

                    <template slot-scope="props">
                        <b-table-column field="id" label="ID" width="40" sortable numeric>
                            {{ props.row.id }}
                        </b-table-column>

                        <b-table-column field="user.first_name" label="First Name" sortable>
                            {{ props.row.user.first_name }}
                        </b-table-column>

                        <b-table-column field="user.last_name" label="Last Name" sortable>
                            {{ props.row.user.last_name }}
                        </b-table-column>

                        <b-table-column field="date" label="Date" sortable centered>
                            <span class="tag is-success">
                                {{ new Date(props.row.date).toLocaleDateString() }}
                            </span>
                        </b-table-column>

                        <b-table-column label="Gender">
                            <b-icon pack="fas"
                                :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                            </b-icon>
                            {{ props.row.gender }}
                        </b-table-column>
                    </template>
                </b-table>
              </div>
            </div>
            <div class="bordered" id="grid-container" ref="GridContainer">
              

              <grid-layout :layout.sync="layout"
                         :col-num="coln"
                         :row-height="rowh"
                         :is-draggable="true"
                         :is-resizable="true"
                         :margin="[10, 10]"
                         :use-css-transforms="true"
            >
                <grid-item v-for="item in chartSelected" :key="item.i"
                           :x="item.x"
                           :y="item.y"
                           :w="item.w"
                           :h="item.h"
                           :i="item.i"
                        >
                        <!--<GChart
                          type="ColumnChart"
                          :data="chartData"
                          :options="{width: (colw*item.w - 10 - 2 - item.w), height: (rowh*item.h + 10 * (item.h-1.3))}"
                        />-->
                        <span>{{ item.i }}</span>
                </grid-item>
            </grid-layout>
                  
            </div>
          </md-card-content>
        </md-card>

      </div>
    </div>
  </div>
</template>

<script>
import Data from './Data/Baseline'
import Chats from './Data/Charts'
import Layout from './Data/Layout'

import VueGridLayout from 'vue-grid-layout';
const data = require('./Data/sample.json')

export default{
  name: 'Reportes',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data () {
    return {
      columnas: Data.columnas,
      dependencias: Data.dependencias,
      selectedcols: [],
      isDataReady: false,
      collapseOpenControls: {
        columns: false,
        filters: false
      },
      date: new Date(),
      data,
      data2: null,
      pagination: true,
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350]
      ],
      chartOptions: {
        width: 400,
        title: 'Company Performances',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      },
      layout: Layout.layout,
      chartSelected:[{"x":0,"y":0,"w":2,"h":2,"i":"0"},],
      rowh: 50,
      coln: 10,
      colw: 0
    }
  },
  methods: {
    generar () {
      this.isDataReady = !this.isDataReady;
      this.collapseOpenControls.columns = false;

      this.data2 = new google.visualization.arrayToDataTable(this.chartData);

      console.log(this.$refs.GridContainer.clientWidth)
    }
  },
  mounted() {
    this.colw = this.$refs.GridContainer.clientWidth/10;
  }
}

</script>

<style>
.collist {
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
}

li {
  list-style-type: none;
}

.bordered {
  border: 1px solid #ccc!important;
  margin-top: 10px;
}

/*** EXAMPLE ***/
#content {
    width: 100%;
}

.vue-grid-layout {
    background: #eee;
}

.layoutJSON {
    background: #ddd;
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
}

.eventsJSON {
    background: #ddd;
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
    height: 100px;
    overflow-y: scroll;
}

.columns {
    -moz-columns: 120px;
    -webkit-columns: 120px;
    columns: 120px;
}



/*.vue-resizable-handle {
    z-index: 5000;
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
    background-position: bottom right;
    padding: 0 3px 3px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: se-resize;
}*/

.vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
}

.vue-grid-item.resizing {
    opacity: 0.9;
}

.vue-grid-item.static {
    background: #cce;
}

.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}

.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}

.vue-grid-item .minMax {
    font-size: 12px;
}

.vue-grid-item .add {
    cursor: pointer;
}

.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}


</style>
