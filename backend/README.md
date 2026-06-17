# Helix Contact Backend

Backend separado para receber os formularios do front e enviar email automatico pelo Gmail.

## Rodar localmente

1. Instale as dependencias:

```bash
npm install
```

2. Copie `.env.example` para `.env` e configure `GMAIL_APP_PASSWORD`.

3. Inicie a API:

```bash
npm run dev
```

A API fica em `http://localhost:4000/api/contact`.

## Gmail

Use uma senha de app do Google para `contactushelix@gmail.com`. A senha normal da conta nao funciona para SMTP.
