<script setup lang="ts">

import { ref } from 'vue'

let valor_A = ref<number | undefined>(undefined);
let valor_B = ref<number | undefined>(undefined);

interface Formulario {
  data: {
    rangeSlider: number[];
  }
}

const mostrarRangeslider = ($form: Formulario) => {
  valor_A.value = $form.data.rangeSlider[0];
  valor_B.value = $form.data.rangeSlider[1];
}

</script>


<template>
  <h2> Range Slider</h2>
  <Vueform>
    <SliderElement 
    name="rangeSlider" 
    :default="[
      30,
      70,
    ]" 
    :min="15"
    :max="125"
    :step="5"
    label="Range slider" />

    <ButtonElement 
    name="submit" 
    button-label="Submit" 
    @click="mostrarRangeslider" />
  </Vueform>
  <p v-if="typeof valor_A == 'number' && typeof valor_B == 'number'">Los valores introducidos son 
    <strong>{{ valor_A}}</strong> y <strong>{{ valor_B }}</strong></p>
</template>


<style scoped>
h2,
p {
  text-align: center;
}
</style>
