# TNEXA / SGOR — site de apresentação

## Onde colocar isso
Extraia este conteúdo dentro de:
`C:\Andre\TI\Projetos\5.Sgor_Apresentacao`

## Onde colocar a logo
Salve o arquivo da logo em:
`public/assets/images/logo-tnexa.jpeg`

## Como rodar
```
npm install
npm run dev
```
Abre em http://localhost:5173

## O que mudou nesta rodada
- Fundo global novo (`BackgroundFX.jsx`): ondas de pontos nos cantos +
  brilhos, no estilo da referência que você mandou, mas mais escuro — fixo
  atrás de toda a página, não só do Hero
- Logo do Hero maior (h-28/h-36) com halo de gradiente atrás e brilho suave
- Títulos (todo h1 e h2 do site) maiores, em negrito, com o gradiente
  azul → verde-água mais evidente
- Cards de Missão/Visão/Valores: hover mais forte (escala 1.07 + sobe mais)
  com brilho de gradiente ao redor
- CTA final: "Fale com a TNEXA" grande e com brilho pulsante, "Conheça o
  SGOR" voltou como botão secundário, menor, logo abaixo

## Estrutura
- `src/components/BackgroundFX.jsx` — fundo fixo global (ondas de pontos + brilhos)
- `src/components/Hero.jsx` — topo com logo, headline e o "fio de conexão" animado
- `src/components/TnexaOverlay.jsx` — animação de tela cheia ao clicar em "Conheça a TNEXA"
- `src/components/Servicos.jsx` — seção "O que fazemos" com expansão em tela cheia
- `src/components/QuemSomos.jsx` — alvo do scroll do botão "Quem é a TNEXA"
- Demais seções (`Problema`, `Diferencial`, `MissaoVisaoValores`, `Sgor`,
  `Ecossistema`, `Futuro`, `CTAFinal`, `Footer`) — esqueleto pronto, ainda
  com texto placeholder pra gente refinar seção por seção.
- `src/components/Section.jsx` — wrapper compartilhado (fade-in ao rolar a página)

## Publicar
```
npm run build
```
Isso gera a pasta `dist/`. Suba o código para um repositório no GitHub e
conecte na Vercel ou Netlify — ambos fazem o deploy automático e permitem
apontar o domínio já pago.
