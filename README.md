# Cartão digital — David Luís Leite de Oliveira

Página profissional responsiva para compartilhar via NFC, hospedada gratuitamente no GitHub Pages.

## Arquivos

- `index.html`: conteúdo e links profissionais.
- `styles.css`: identidade visual e responsividade.
- `script.js`: ano automático e aviso caso o currículo ainda não exista.
- `curriculo.pdf`: currículo já incluído no projeto.

## Publicar no GitHub Pages

1. Acesse https://github.com/new e crie um repositório público chamado `davidleite691.github.io` (caso esse nome esteja disponível).
2. Envie `index.html`, `styles.css`, `script.js` e `curriculo.pdf` **diretamente para a raiz** do repositório (Add file → Upload files → Commit changes).
3. No repositório, acesse **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/(root)` e salve.
5. Aguarde a publicação e abra `https://davidleite691.github.io/`.
6. Teste o botão **Currículo** para confirmar que o PDF abre corretamente.

Se preferir outro nome de repositório, como `cartao-digital`, o endereço será `https://davidleite691.github.io/cartao-digital/`.

## Gravar na tag NFC

1. Instale um app de gravação NFC, como **NFC Tools**, em um celular compatível.
2. Escolha **Escrever → Adicionar registro → URL/URI**.
3. Insira a URL **pública** do GitHub Pages, não o link do repositório GitHub.
4. Grave na tag NFC e teste com outro celular.

A tag guarda apenas a URL; você pode atualizar a página e o PDF sem regravar o NFC, desde que mantenha o endereço.

## Personalizar

- Edite a apresentação e os links em `index.html`.
- Altere as cores em `styles.css`, na seção `:root`.
- O LinkedIn foi configurado como `https://www.linkedin.com/in/david-lu%C3%ADs-leite` a partir do endereço fornecido. **Confirme se abre o perfil correto** antes de compartilhar.

## Teste local

Abra `index.html` no navegador para visualizar o design. Para testar corretamente o PDF, use um servidor local, por exemplo `python3 -m http.server 8000`, e acesse `http://localhost:8000`.
