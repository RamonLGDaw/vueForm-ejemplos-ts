<script setup lang="ts">
import { ref } from 'vue'

let valor = ref<number | undefined>(undefined);
let valor2 = ref<number | undefined>(undefined);
let valor3 = ref<number | undefined>(undefined);
let valor4 = ref<number | undefined>(undefined);

interface Formulario {
    data: {
        slider: number,
        slider2: number,
        slider3: number,
        slider4: number
    }
}
const showValue = ($form: Formulario) => {
    valor.value = $form.data.slider
    valor2.value = $form.data.slider2
    valor3.value = $form.data.slider3
    valor4.value = $form.data.slider4
}

</script>

<template>
    <h2>Slider</h2>
    <Vueform>

        <SliderElement name="slider" label="Slider step = 1" :default="20" :min="0" :max="40" :step="1" />

        <SliderElement name="slider2" label="Slider step = 5" :default="20" :min="0" :max="40" :step="5" />

        <SliderElement name="slider3" label="Slider step = -1" :default="20" :min="0" :max="40" :step="-1" />

        <SliderElement name="slider4" label="slider en grados" :default="0" :step="5" :format="{
            suffix: '°',
            decimals: 0
        }" :min="-360" :max="360" tooltip-position="top" />

        <ButtonElement name="submit" button-label="Mostrar valor" @click="showValue" />
    </Vueform>
    <p v-if="typeof valor == 'number'">El valor seleccionado en <em>slider step = 1</em> es: 
    <strong>{{ valor}}</strong></p>
    <p v-if="typeof valor2 == 'number'">El valor seleccionado en <em>slider step = 5</em> es: 
    <strong>{{ valor2}}</strong></p>
    <p v-if="typeof valor3 == 'number'">El valor seleccionado en <em>slider step = -1</em> es: 
    <strong>{{ valor3}}</strong></p>
    <p v-if="typeof valor4 == 'number'">El valor en grados seleccionado es: 
        <strong>{{ valor4 }}º</strong></p>
</template>

<style scoped>
h2,
p {
    text-align: center;
}
</style>