<script setup lang="ts">
import { ref } from 'vue';

let dateTime = ref<string>('');

interface Formulario {
    data: {
        datetime: string;
    }
}

const showDateTime = ($form: Formulario) => {
    console.log(`Tipo del contenido: ${typeof $form.data.datetime}`)
    dateTime.value = $form.data.datetime

};
</script>

<template>
    <h2>DateTime</h2>
    <Vueform>
        <DateElement 
        name="datetime" 
        label="Datetime" 
        :time="true" />
        <ButtonElement 
        name="submit" 
        button-label="mostrar selección" 
        @click="showDateTime" />
    </Vueform>

    <p v-if="dateTime">La fecha y hora seleccionada es: <strong>{{ dateTime }}</strong></p>
</template>

<style scoped>
p {
    text-align: center;
}
</style>
