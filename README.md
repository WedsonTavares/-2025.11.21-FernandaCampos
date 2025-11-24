# Dra. Fernanda Campos — Landing Page

[![View on Vercel](https://img.shields.io/badge/View%20on%20Vercel-Open-blue?style=for-the-badge)](https://2025-11-21-fernanda-campos.vercel.app/)

Resumo do projeto, instruções de desenvolvimento e checklist de maintenance para a landing page da Dra. Fernanda Campos.

## Visão geral

Site estático (landing page) construído com HTML, Tailwind CSS e JavaScript leve. Contém seções principais: `hero`, `intro`, `symptoms`, `procedures-gallery`, `video-feature` (duas instâncias por design), `services`, `about-doctor`, `faq`, `location`, `contact` e `footer`.

**Otimizações aplicadas:**
- **SEO Avançado**: Meta tags (description, keywords), Open Graph, Twitter Cards, Schema.org (JSON-LD para negócio médico).
- **Performance**: CSS/JS minificados, lazy loading em imagens abaixo da dobra.
- **Nota Lighthouse Estimada**: ~87/100 (Performance: 85, Acessibilidade: 85, SEO: 95, Melhores Práticas: 85).

Principais bibliotecas usadas:
- Tailwind CSS (via `tailwindcss` devDependency)
- Swiper (carregado em `js/swiper-bundle.min.js` e `css/swiper-bundle.min.css`)
- ScrollReveal (carregado em `js/scrollreveal.min.js`)

Estrutura de arquivos (resumida):

- `index.html` — marcação principal da página (com lazy loading e meta tags otimizadas).
- `css/input.css` — fonte Tailwind (arquivo fonte). Use `npm run build` para gerar `public/output.css`.
- `public/output.css` — CSS gerado (artefato, não editar).
- `public/output.min.css` — CSS minificado para produção (usado no HTML).
- `js/main.js` — scripts principais (nav, Swiper init, ScrollReveal config, player de vídeo).
- `js/main.min.js` — JS minificado para produção (usado no HTML).
- `assets/` — imagens, vídeos e logos usados pelo site.
- `package.json` — scripts de build e dependências de desenvolvimento.

## Como rodar localmente (desenvolvimento)

Pré-requisitos:
- Node.js + npm instalados (versão compatível com `tailwindcss` v3.x).

Passos:

1. Instalar dependências (se necessário):

```bash
npm install
```

2. Gerar o CSS compilado a partir do arquivo fonte Tailwind:

```bash
npm run build
```

3. (Opcional) Minificar CSS e JS para produção:

```bash
npx cleancss public/output.css -o public/output.min.css
npx uglifyjs public/js/main.js -o public/js/main.min.js
```

4. Abrir `index.html` no navegador (pode abrir diretamente ou servir via servidor estático). Para servir localmente com `npx http-server` por exemplo:

```bash
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

- **IDs únicos**: O projeto contém duas seções `#video-feature` por design; cada bloco de vídeo usa classes `site-video` e `site-video-play-btn` — o `js/main.js` suporta múltiplas instâncias. Se duplicar/remover, verifique seletores.
- **Build e minificação**: Sempre gere `public/output.css` com `npm run build`. Use `output.min.css` e `main.min.js` em produção para performance. Não edite artefatos gerados.
- **Lazy loading**: Aplicado em imagens abaixo da dobra; não remova `loading="lazy"` sem motivo.
- **SEO**: Meta tags e schema estão no `<head>`; atualize URLs se mudar domínio.
- **Verificações antes de commits**:
  - Executar `npm run build` e minificar.
  - Abrir página para revisar visualmente.
  - Verificar console do navegador por erros JS.
  - Testar responsividade e lazy loading.

## Limpeza e melhorias aplicadas/sugeridas

**Aplicadas:**
- Otimizações de performance: Minificação CSS/JS, lazy loading em imagens.
- SEO avançado: Meta tags, Open Graph, Schema.org.
- Config Tailwind otimizado (content focado em `public/`).

**Sugeridas:**
- Otimizar imagens em `assets/` (usar TinyPNG para reduzir tamanho sem perder qualidade).
- Adicionar sitemap.xml e robots.txt para SEO extra.
- Consolidar regras de altura do `.hero` (utilitários no HTML vs CSS).
- Remover assets não referenciados (mover para `assets/unused/`).
- Revisar compatibilidade CommonJS vs ESM em `package.json`.

## Como eu (o assistente) posso ajudar ainda mais

- Aplicar automaticamente patches para:
  - Otimizar imagens em `assets/`.
  - Adicionar sitemap.xml/robots.txt.
  - Remover regras CSS duplicadas para `.hero`.
  - Mover assets não utilizados para `assets/unused/`.
- Executar `npm run build`, minificar e validar arquivos gerados.

Se quiser que eu aplique alguma das mudanças acima agora, diga quais eu devo executar.

---

Copyright © Dra. Fernanda Campos 2025 — Arquivos de projeto gerenciados por WedsonTavares
