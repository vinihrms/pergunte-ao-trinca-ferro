<template>
  <div class="resultados">
    <h2>Entre:</h2>
    <div class="form-opcoes">
      <div class="mb-3">
        <input
          type="text"
          :value="a"
          class="form-control"
          id="opcao1"
          disabled
        />
      </div>
      <span class="versus">vs</span>
      <div class="mb-3">
        <input
          type="text"
          :value="b"
          class="form-control"
          id="opcao2"
          disabled
        />
      </div>
    </div>
    <h2>O Trinca-Ferro escolheu:</h2>
    <div class="form-opcoes">
      <div class="mb-3">
        <input
          type="text"
          :value="res"
          class="form-control"
          id="resultado"
          disabled
        />
      </div>
      <button
        type="button"
        class="btn btn-success botao-consulta"
        @click="$emit('consultar-novamente')"
      >
        Fazer outra consulta
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultadosGerados",
  props: {
    a: {
      type: String,
      required: true,
    },
    b: {
      type: String,
      required: true,
    },
    res: {
      type: String,
      required: true,
    },
  },
  emits: ["consultar-novamente"],
};
</script>

<style scoped>
.resultados {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.form-opcoes {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: fit-content;
  max-width: 100%;
}

.form-opcoes .mb-3 {
  width: 220px;
  margin-bottom: 0 !important;
}

.versus {
  font-weight: bold;
}

.botao-consulta {
  flex-basis: 100%;
}
</style>
