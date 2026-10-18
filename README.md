# JS INOX v2 — site local (Astro)
`npm install && npm run dev` · `npm run build` · `npm run check`. Sem deploy, analytics ou pixels. Os CTAs abrem o WhatsApp (link wa.me, número em `src/data/site.ts`); não há formulário.

**Não executado nesta entrega** (ambiente sem rede): install, build, check, Lighthouse, testes de teclado/contraste, capturas.

## Claims
- Aprovado (do prompt): soluções em aço inox, projetos sob medida, Fortaleza — CE.
- Condicional (Instagram, aprovação do cliente pendente): bancadas, pias, tanques, coifas, corrimãos, guarda-corpos, escadas, coberturas, estruturas, portões.
- Bloqueado: andaimes, escoras, plataformas; clientes, cases, certificações, prazos, "orçamento".

## Placeholders / pendências
Os 7 .md obrigatórios não foram lidos (copy e FAQ provisórios) · CNPJ e política de privacidade · número do WhatsApp (conferir o 9 inicial) · autoria e autorização das fotos · fontes Manrope/Inter não embutidas (fallback do sistema; self-host após checar licença) · logo para fundo escuro · nome "e cozinhas" vs "e Estruturas" · versões das dependências não verificadas.

## Vercel
Projeto estático, sem adapter. Importe o repositório na Vercel (preset Astro; build `npm run build`, saída `dist`, Node 20+). `vercel.json` já define cabeçalhos de segurança e cache de imagens.
**Provisório:** `vercel.json` envia `X-Robots-Tag: noindex, nofollow` para a versão não ser indexada enquanto houver texto provisório, fotos sem autorização confirmada e dados pendentes. Remova esse cabeçalho só quando o conteúdo for aprovado. Domínio e DNS não foram configurados.
