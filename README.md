# Site de casamento

Site estático em React (Vite) para divulgar o evento, a história do casal e a lista de presentes, com integração via WhatsApp.

## Stack

- React 19, Vite 8, Tailwind CSS 4  
- React Router, Framer Motion, React Icons  

## Começar

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar (em geral `http://localhost:5173`).

## Scripts

| Comando | Descrição |
|--------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Pré-visualiza o build localmente |
| `npm run lint` | ESLint |
| `npm run deploy` | Build + publicação no GitHub Pages (`gh-pages`) |

O `deploy` executa automaticamente o `predeploy` (`npm run build`) antes de enviar a pasta `dist/` para o branch `gh-pages`.

## Personalizar conteúdo

- **`src/data/siteConfig.js`** — nomes, data, local, textos, WhatsApp, imagens (veja `imagens` e arquivos em `public/images/`).
- **`src/data/giftRegistry.js`** — lista de presentes por cômodo.

## Deploy em produção (GitHub Pages)

1. Repositório no GitHub com o `remote` configurado (`git remote -v`).
2. Em **Settings → Pages**, origem: branch **`gh-pages`**, pasta **`/ (root)`**.
3. Ajuste o caminho do site se o nome do repositório mudar:
   - **`package.json`** — campo `"homepage"` (URL pública, ex.: `https://SEU_USUARIO.github.io/NOME_DO_REPO`).
   - **`vite.config.js`** — constante `GH_PAGES_BASE` deve ser `'/NOME_DO_REPO/'` (com barras) para projeto em subpasta; use `'/'` se o site for na raiz de um domínio próprio.
4. Rode:

```bash
npm run deploy
```

Na primeira vez, o GitHub pode levar um minuto para servir o site. Limpe o cache do navegador se algo antigo aparecer.

## Imagens locais

Coloque os arquivos em `public/images/` conforme os nomes definidos em `siteConfig.js` (`capa.jpg`, `nossa-historia.jpg`, etc.) ou altere os caminhos no objeto `IMAGENS`.

## Licença

Uso pessoal do casal; ajuste como quiser.
