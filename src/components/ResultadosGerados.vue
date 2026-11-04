<template>
  <div class="resultados">
    <h2>Entre:</h2>
    <form class="form-opcoes">
      <div class="mb-3">
        <input
          type="text"
          placeholder="Opcao 1"
          text
          class="form-control"
          id="opcao1"
          disabled
        />
      </div>
      <span class="versus">vs</span>
      <div class="mb-3">
        <input
          type="text"
          placeholder="Opcao 2"
          class="form-control"
          id="opcao2"
          disabled
        />
      </div>
    </form>
    <h2>O Trinca-Ferro escolheu:</h2>
    <form class="form-opcoes">
      <div class="mb-3">
        <input
          type="text"
          placeholder="Opcao 1"
          text
          class="form-control"
          id="opcao1"
          disabled
        />
      </div>
      <button type="submit" class="btn btn-success botao-consulta">
        Fazer outra consulta
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ResultadosGerados",
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
