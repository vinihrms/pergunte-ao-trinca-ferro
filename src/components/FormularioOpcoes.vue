<template>
  <form class="form-opcoes">
    <div class="mb-3">
      <label for="opcao1" class="form-label">Opção 1</label>
      <input type="name" class="form-control" id="opcao1" />
    </div>
    <span class="versus">vs</span>
    <div class="mb-3">
      <label for="opcao2" class="form-label">Opção 2</label>
      <input type="name" class="form-control" id="opcao2" />
    </div>
    <button type="submit" class="btn btn-success">Consultar</button>
  </form>
</template>

<script>
export default {
  name: "FormularioOpcoes",
};
</script>

<style scoped>
.form-opcoes {
  display: grid;
  grid-template-columns: minmax(0, 220px) auto minmax(0, 220px);
  align-items: flex-end;
  gap: 1rem;
  width: fit-content;
  max-width: 100%;
}

.form-opcoes .mb-3 {
  width: 220px;
  margin-bottom: 0 !important;
}

.form-opcoes button {
  grid-column: 1 / -1;
  width: 100%;
}

.versus {
  font-weight: bold;
  align-self: center;
}
</style>
