<template>
  <component
    :is="res === null ? TelaInicio : TelaResultado"
    :a="a"
    :b="b"
    :res="res"
    @consultar="run"
    @consultar-novamente="reiniciar"
  />
</template>

<script setup>
import { ref } from "vue";
import rand from "./logic/rand";
import TelaInicio from "./components/TelaInicio.vue";
import TelaResultado from "./components/TelaResultado.vue";

const a = ref("");
const b = ref("");
const res = ref(null);
function run(opcoes) {
  a.value = opcoes.a;
  b.value = opcoes.b;
  res.value = rand(a.value, b.value);
}

function reiniciar() {
  a.value = "";
  b.value = "";
  res.value = null;
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shrikhand&display=swap");
h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 400px;
}
</style>
