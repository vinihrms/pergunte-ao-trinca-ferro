<template>
  <CabecalhoPagina />
  <ResultadosGerados />
</template>

<script>
import CabecalhoPagina from "./CabecalhoPagina.vue";
import ResultadosGerados from "./ResultadosGerados.vue";

export default {
  name: "TelaResultado",
  components: {
    CabecalhoPagina,
    ResultadosGerados,
  },
};
</script>

<style scoped></style>
