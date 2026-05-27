# Inverter.tech - Frontend

Este é um projeto construído com [React](https://react.dev/), [Vite](https://vitejs.dev/) e [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Como fazer o deploy na Vercel

Este projeto já está otimizado para deploy na Vercel. 

### Opção 1: Via Vercel Dashboard (Recomendado)

1. Envie seu código para o **GitHub**, **GitLab** ou **Bitbucket**.
2. Acesse sua conta na [Vercel](https://vercel.com/) e clique em **Add New... > Project**.
3. Importe o repositório do seu projeto.
4. A Vercel detectará automaticamente que é um projeto **Vite**. As configurações padrão funcionarão perfeitamente:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` ou `yarn build`
   - **Output Directory**: `dist`
5. Clique em **Deploy**.
6. Pronto! O arquivo `vercel.json` na raiz do projeto garante que o fallback de rotas (SPA) funcione corretamente (redirecionando rotas desconhecidas para `index.html`).

### Opção 2: Via Vercel CLI (Linha de comando)

1. Instale a Vercel CLI globalmente (se não tiver):
   ```bash
   npm i -g vercel
   ```
2. Na raiz do projeto, execute:
   ```bash
   vercel
   ```
3. Siga as instruções no terminal para configurar e fazer o deploy.
4. Para realizar o deploy de produção, execute:
   ```bash
   vercel --prod
   ```

---

*Nota sobre otimização: O projeto inclui `vercel.json` para roteamento SPA sem a necessidade de APIs e já foi configurado para uma build rápida utilizando as diretrizes do Vite.*
