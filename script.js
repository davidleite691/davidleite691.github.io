// Atualiza automaticamente o ano no rodapé.
document.getElementById('year').textContent = new Date().getFullYear();

// Se o currículo ainda não foi publicado, exibe uma mensagem amigável.
// No GitHub Pages, basta adicionar curriculo.pdf na raiz do repositório.
const resumeLink = document.querySelector('[data-resume]');
resumeLink.addEventListener('click', async (event) => {
  try {
    const response = await fetch('curriculo.pdf', { method: 'HEAD' });
    if (!response.ok || !(response.headers.get('content-type') || '').includes('pdf')) {
      event.preventDefault();
      alert('Meu currículo estará disponível em breve. Enquanto isso, confira meu LinkedIn e GitHub!');
    }
  } catch {
    event.preventDefault();
    alert('Não foi possível acessar o currículo agora. Tente novamente mais tarde.');
  }
});
