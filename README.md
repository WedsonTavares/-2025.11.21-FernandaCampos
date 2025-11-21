# Dra. Fernanda Campos — Landing Page

Resumo do projeto, instruções de desenvolvimento e checklist de manutenção para a landing page da Dra. Fernanda Campos.

## Visão geral

Site estático (landing page) construído com HTML, Tailwind CSS e JavaScript leve. Contém seções principais: `hero`, `intro`, `symptoms`, `procedures-gallery`, `video-feature` (duas instâncias por design), `services`, `about-doctor`, `faq`, `location`, `contact` e `footer`.

Principais bibliotecas usadas:
- Tailwind CSS (via `tailwindcss` devDependency)
- Swiper (carregado em `js/swiper-bundle.min.js` e `css/swiper-bundle.min.css`)
- ScrollReveal (carregado em `js/scrollreveal.min.js`)

Estrutura de arquivos (resumida):

- `index.html` — marcação principal da página.
- `css/input.css` — fonte Tailwind (arquivo fonte). Use `npm run build` para gerar `dist/output.css`.
- `dist/output.css` — CSS gerado (artefato).
- `js/main.js` — scripts principais (nav, Swiper init, ScrollReveal config, player de vídeo).
- `assets/` — imagens, vídeos e logos usados pelo site.
- `package.json` — scripts de build e dependências de desenvolvimento.

## Como rodar localmente (desenvolvimento)

Pré-requisitos:
- Node.js + npm instalados (versão compatível com `tailwindcss` v3.x).

Passos:

1. Instalar dependências (se necessário):

```powershell
npm install
```

2. Gerar o CSS compilado a partir do arquivo fonte Tailwind:

```powershell
npm run build
```

3. Abrir `index.html` no navegador (pode abrir diretamente ou servir via servidor estático). Para servir localmente com `npx http-server` por exemplo:

```powershell
npx http-server -c-1 .
# então abra http://localhost:8080
```

## Deploy para GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

Passos para habilitar:

1. No repositório GitHub, vá para **Settings** > **Pages**.
2. Em "Source", selecione **GitHub Actions**.
3. O workflow em `.github/workflows/deploy.yml` será executado automaticamente em pushes para `main`, construindo o site e publicando em `https://<username>.github.io/<repo-name>/`.

Para deploy manual (opcional):
- Vá para a aba **Actions** no repositório.
- Selecione o workflow "Deploy to GitHub Pages" e clique em **Run workflow**.

## Notas de manutenção e pontos importantes

- IDs devem ser únicos: o projeto atualmente contém duas seções `#video-feature` por design; cada bloco de vídeo tem `id="botox-video"` e `id="video-play-btn"` — isso foi tratado no JS para evitar conflitos. Se duplicar/remover um bloco, verifique `js/main.js` para ajustar os seletores.
- Sempre gere `dist/output.css` após editar `css/input.css` usando `npm run build`. Não edite `dist/output.css` manualmente — ele é um artefato gerado.
- Verificações recomendadas antes de commits:
	- Executar `npm run build` e abrir a página para revisar visualmente.
	- Verificar console do navegador por erros JS.


## Notas de manutenção e pontos importantes

- IDs devem ser únicos: o projeto atualmente contém duas seções `#video-feature` por design; cada bloco de vídeo tem `id="botox-video"` e `id="video-play-btn"` — isso foi tratado no JS para evitar conflitos. Se duplicar/remover um bloco, verifique `js/main.js` para ajustar os seletores.
- Sempre gere `dist/output.css` após editar `css/input.css` usando `npm run build`. Não edite `dist/output.css` manualmente — ele é um artefato gerado.
- Verificações recomendadas antes de commits:
	- Executar `npm run build` e abrir a página para revisar visualmente.
	- Verificar console do navegador por erros JS.


## Limpeza e melhorias sugeridas

- Consolidar regras de altura do `.hero` — atualmente existem utilitários no HTML e regras em `css/input.css` que podem conflitar. Escolher uma estratégia (preferência: utilitários no HTML para controle rápido) e remover duplicações.
- Remover assets não referenciados em `assets/` (ex.: arquivo de imagem raiz movido para `assets/unused/`).
- Revisar `tailwind.config.js` e `package.json` quanto à compatibilidade de módulos (CommonJS vs ESM). O build funciona, mas manter consistência reduz chances de problema em ambientes diferentes.

## Como eu (o assistente) posso ajudar ainda mais

- Aplicar automaticamente patches para:
	- Tornar IDs dos vídeos únicos ou ajustar o `js/main.js` para suportar múltiplos players.
	- Remover regras CSS duplicadas para `.hero`.
	- Mover assets não utilizados para `assets/unused/`.
- Executar o `npm run build` e validar o `dist/output.css` gerado.

Se quiser que eu aplique alguma das mudanças acima agora, diga quais eu devo executar.

---

Copyright © Dra. Fernanda Campos 2025 — Arquivos de projeto gerenciados por WedsonTavares
