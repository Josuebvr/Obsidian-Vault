const lista = document.getElementById("lista-notas");
const conteudo = document.getElementById("conteudo-nota");
const md = window.markdownit();

// Lista de arquivos .md manual ou gerada automaticamente no futuro
const Indica_Investimentos = [
  "C:\Users\josue\OneDrive\Documentos\Obsidian Vault\Indica_Investimentos\Campanha de Lançamento\Lançamento\Antecipação.md",
  "nota2.md"
];

Indica_Investimentos.forEach(nome => {
  const li = document.createElement("li");
  li.textContent = nome.replace(".md", "").replace(/[-_]/g, " ");
  li.addEventListener("click", () => carregarNota(nome));
  lista.appendChild(li);
});

function carregarNota(nome) {
  fetch(`notas/${nome}`)
    .then(res => res.text())
    .then(mdText => {
      const html = md.render(mdText);
      conteudo.innerHTML = html;
    })
    .catch(err => {
      conteudo.innerHTML = "<p>Erro ao carregar a nota.</p>";
      console.error(err);
    });
}
