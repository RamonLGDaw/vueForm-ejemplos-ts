<script setup lang="ts">
import { ref } from 'vue';

interface Formulario {
  data: {
    toggle: boolean;
  };
}

let estadoToggle = ref<boolean | undefined>(undefined);

const mostrarResultado = ($form: Formulario) => {
  estadoToggle.value = $form.data.toggle;
}
</script>

<template>
  <h2>Selector Toggle</h2>
  <Vueform>
    <ToggleElement
      name="toggle"
      text="Estado del toggle"
      :labels="{ on: 'true', off: 'false' }"
    />
    <ButtonElement
      name="submit"
      button-label="Submit"
      @click="mostrarResultado"
    />
  </Vueform>

  <p v-if="estadoToggle !== undefined">Estado del toggle: <strong>{{ estadoToggle ? 'TRUE' : 'FALSE' }}</strong></p>
</template>

<style scoped>
h2, p {
  text-align: center;
}

strong {
  color: #079276;
  font-size: 1.2rem;
}
</style>
