<script setup lang="ts">
import Text from './components/Text.vue'
import Slider from './components/Slider.vue'
import RangeSlider from './components/RangeSlider.vue'
import Toggle from './components/Toggle.vue'
import DateRange from './components/DateRange.vue'
import DateTime from './components/Datetime.vue'
import ImageUpload from './components/ImageUpload.vue'
import Multi_ImageUpload from './components/Multi-ImageUpload.vue'
import Signature from './components/Signature.vue'

import { ref } from 'vue'

interface Formulario {
  data: {
    tags: string[]; 
  }
}

let listaElementosSeleccionados = ref<string[]>([])

const mostrarValores = ($form: Formulario) => {
  console.log($form.data.tags);
  listaElementosSeleccionados.value = $form.data.tags;
}

const componentesFormulario: Record<string, any> = {
  Text: Text,
  DateTime: DateTime,
  DateRange: DateRange,
  Slider: Slider,
  RangeSlider: RangeSlider,
  Toggle: Toggle,
  ImageUpload: ImageUpload,
  Multi_ImageUpload: Multi_ImageUpload,
  Signature: Signature
}
</script>

<template>
  <h1 class="titulo-degradado">Formularios VueForm</h1>
  <div class="contenedor-formulario">
    <h2>Selecciona qué formularios quieres probar</h2>
    <Vueform>
      <TagsElement
        name="tags"
        :close-on-select="false"
        :search="true"
        :items="[
          { value: 'Text', label: 'Text' },
          { value: 'DateTime', label: 'DateTime' },
          { value: 'DateRange', label: 'DateRange' },
          { value: 'Slider', label: 'Slider' },
          { value: 'RangeSlider', label: 'RangeSlider' },
          { value: 'Toggle', label: 'Toggle' },
          { value: 'ImageUpload', label: 'ImageUpload' },
          { value: 'Multi_ImageUpload', label: 'Multi_ImageUpload' },
          { value: 'Signature', label: 'Signature' },
        ]"
        label="Formularios disponibles:"
        input-type="search"
        autocomplete="off"
      />
      <ButtonElement name="submit" button-label="Aceptar" @click="mostrarValores" />
    </Vueform>
  </div>

  <div v-for="item in listaElementosSeleccionados" :key="item" class="contenedor-formulario">
    <component :is="componentesFormulario[item]" />
  </div>
</template>

<style scoped>

h1{
  text-align: center;
}

.contenedor-formulario {
  padding: 10px;
  border: 1px solid rgb(95, 95, 95);
  border-radius: 5px;
  margin: 10px auto;
  max-width: 600px;
  background-color: rgb(232, 232, 232);
}

.titulo-degradado {
  font-size: 2em;
  background-image: linear-gradient(to right, #07c6a0, #06977a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  text-align: center;
}
</style>