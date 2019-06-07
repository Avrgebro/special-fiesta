<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Censo Familiar</h4>
            <p class="category">Censo oficial para familias de La Garita</p>
            <p class="category">A continuación, llenar la información relacionada a los integrandes de la familia:</p>
          </md-card-header>
          <md-card-content>
              <b-field class="periodo" label="Periodo">
                <b-select class="md-layout-item" placeholder="Seleccione un periodo">
                  <option value="1">Primer trimestre</option>
                  <option value="2">Segundo trimestre</option>
                  <option value="3">Tercer trimestre</option>
                  <option value="4">Cuarto trimestre</option>
                </b-select>
              </b-field>
            <div class="md-layout">
              <div class="md-layout-item">
                <div class="vivienda">
                  <b-field label="Dirección">
                      <b-input class ="md-layout-item" placeholder="Ingrese la dirección de la vivienda" maxlength="30"></b-input>
                  </b-field>
                  <b-field label="Manzana">
                      <b-input class ="md-layout-item" placeholder="Ingrese la manzana en la que se encuentra la vivienda" maxlength="30"></b-input>
                  </b-field>
                  <b-field label="Lote">
                      <b-input class ="md-layout-item" placeholder="Ingrese el lote de la vivienda" maxlength="30"></b-input>
                  </b-field>
                </div>
              </div>
              <div class="md-layout-item">
                <div class="vivienda">
                  <b-field label="Metros cuadrados">
                      <b-input class ="md-layout-item" placeholder="Ingrese el área de la vivienda" maxlength="30"></b-input>
                  </b-field>
                  <b-field label="Construidos">
                      <b-input class ="md-layout-item" placeholder="Ingrese el área construida de la vivienda" maxlength="30"></b-input>
                  </b-field>
                  <b-field label="Jardin">
                      <b-input class ="md-layout-item" placeholder="Ingrese el área correspondiente al jadrín de la vivienda" maxlength="30"></b-input>
                  </b-field>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Detalle Familiar</h4>
            <p class="category">Ingrese el detalle de la composición familiar:</p>
          </md-card-header>
          <md-card-content>
                <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from "@/components";

export default {
  components: {
    OrderedTable,
    SimpleTable
  }
};
</script>

<style scoped>
    .tag {
        cursor: pointer;
    }
    .periodo {
      padding: 20px;
    }
    .vivienda {
      border-radius: 25px;
      border: 1.5px solid #73AD21;
      padding: 20px; 
      width: 500px;
      height: 310px; 
    }
</style>
