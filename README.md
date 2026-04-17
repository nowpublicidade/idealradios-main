# Ideal Rádios — Site Institucional

Site institucional da Ideal Rádios, desenvolvido em React + Vite + TypeScript com Supabase.

## Páginas

- `/` — Página principal: apresentação, credenciais, clientes, produtos, serviços, FAQ e formulário de contato
- `/ideal-eletric-way` — Página da linha Ideal Electric Way: veículos elétricos corporativos com catálogo e especificações técnicas

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Framer Motion
- Supabase (backend/formulário)
- React Router DOM

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Preencha as variáveis no arquivo .env

# Iniciar servidor de desenvolvimento
npm run dev
```

## Variáveis de ambiente

Veja `.env.example` para as variáveis necessárias. Você precisará de um projeto no [Supabase](https://supabase.com).

## Build

```bash
npm run build
```
