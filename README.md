# Dra. Fernanda Campos — Landing Page

Resumo do projeto, instruções de desenvolvimento e checklist de manutenção para a landing page da Dra. Fernanda Campos.

> Nota: Este repositório agora é publicado via Vercel (configuração em `vercel.json`).

## Visão geral

Site estático (landing page) construído com HTML, Tailwind CSS e JavaScript leve. Contém seções principais: `hero`, `intro`, `symptoms`, `procedures-gallery`, `video-feature` (duas instâncias por design), `services`, `about-doctor`, `faq`, `location`, `contact` e `footer`.

Principais bibliotecas usadas:
- Tailwind CSS (via `tailwindcss` devDependency)
- Swiper (carregado em `js/swiper-bundle.min.js` e `css/swiper-bundle.min.css`)
- ScrollReveal (carregado em `js/scrollreveal.min.js`)

Estrutura de arquivos (resumida):

- `index.html` — marcação principal da página.
- `css/input.css` — fonte Tailwind (arquivo fonte). Use `npm run build` para gerar `public/output.css`.
- `public/output.css` — CSS gerado (artefato).
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

## Deploy (Vercel)

Este projeto agora usa o Vercel para hosting. A configuração principal está em `vercel.json` e publica o conteúdo da pasta `public/`.

Como publicar no Vercel:

1. Acesse https://vercel.com e faça login com sua conta GitHub.
2. Clique em **Import Project** → escolha o repositório `WedsonTavares/-2025.11.21-FernandaCampos`.
3. Nas configurações do projeto, confirme que o diretório de build/output é `public/` (o `vercel.json` já declara isso).
4. Clique em **Deploy**. Se houver restrições de faturamento em sua conta Vercel, verifique a aba **Billing** para reativar o plano necessário.

Se preferir manter o site no GitHub Pages, me avise que reabilito a publicação via `gh-pages` (eu posso forçar a criação da branch `gh-pages` com o conteúdo atual de `public/`).

## Notas de manutenção e pontos importantes

- IDs devem ser únicos: o projeto atualmente contém duas seções `#video-feature` por design; cada bloco de vídeo tem `id="botox-video"` e `id="video-play-btn"` — isso foi tratado no JS para evitar conflitos. Se duplicar/remover um bloco, verifique `js/main.js` para ajustar os seletores.
- Sempre gere `public/output.css` após editar `css/input.css` usando `npm run build`. Não edite `public/output.css` manualmente — ele é um artefato gerado.
- Verificações recomendadas antes de commits:
	- Executar `npm run build` e abrir a página para revisar visualmente.
	- Verificar console do navegador por erros JS.


## Notas de manutenção e pontos importantes

- IDs devem ser únicos: o projeto atualmente contém duas seções `#video-feature` por design; cada bloco de vídeo tem classes `site-video` e botões `site-video-play-btn` — o `js/main.js` está preparado para múltiplas instâncias. Se duplicar/remover um bloco, verifique `js/main.js` para ajustar os seletores.
- Sempre gere `public/output.css` após editar `css/input.css` usando `npm run build`. Não edite `public/output.css` manualmente — ele é um artefato gerado.
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
- Executar o `npm run build` e validar o `public/output.css` gerado.

Se quiser que eu aplique alguma das mudanças acima agora, diga quais eu devo executar.

---

Copyright © Dra. Fernanda Campos 2025 — Arquivos de projeto gerenciados por WedsonTavares
