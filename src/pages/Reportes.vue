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
                <b-collapse class="card" aria-id="contentIdForA11y3">
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
                        <ul>
                          <li v-for="columna in columnas" :key="columna.id">
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
                    <a class="card-footer-item md-layout-item md-size-33">Generar</a>
                  </footer>
                </b-collapse>

                <b-collapse class="card" aria-id="contentIdForA11y3" v-if="isDataReady">
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
                    <div class="content">
                        
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
                    <a class="card-footer-item md-layout-item md-size-33">Generar</a>
                  </footer>
                </b-collapse>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import Data from './Data/Baseline'
export default{
  data () {
    return {
      columnas: Data.columnas,
      dependencias: Data.dependencias,
      selectedcols: [],
      isDataReady: false

    }
  },
  methods: {
    build () {
      
    }
  }
}

</script>

<style>
ul {
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
}

li {
  list-style-type: none;
}
</style>
