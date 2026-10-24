# 🦇 BatClock — GCPD Surveillance Chrono-Tracker

Aplicação de relógio digital de alto padrão estético inspirada no universo sombrio de **Batman**, com os criminosos e heróis de Gotham City em fotos de ficha policial (*GCPD mugshots*) exibindo cada dígito de 0 a 9.

Desenvolvido com **React 19**, **JavaScript ES6+**, **CSS Moderno** e **Vite**.

---

## 🎭 Elenco de Personagens e Dígitos

| Dígito | Personagem | Ficha / Alocação | Status |
|---|---|---|---|
| **0** | **The Joker** | *Inmate #0801* | Arkham Asylum (Fuga Recente) |
| **1** | **The Batman** | *GCPD #0001* | Vigilante Noturno Ativo |
| **2** | **Harley Quinn** | *Inmate #0214* | Livre / Foragida |
| **3** | **Robin** | *GCPD #0003* | Aliado Vigilante |
| **4** | **The Penguin** | *GCPD #0410* | Iceberg Lounge / Submundo |
| **5** | **Batgirl** | *GCPD #0005* | Torre do Relógio / Oráculo |
| **6** | **The Riddler** | *Inmate #0707* | Arkham Asylum |
| **7** | **Catwoman** | *GCPD #0007* | East End / Ladra Furtiva |
| **8** | **Scarecrow** | *Inmate #0913* | Arkham Asylum (Isolamento) |
| **9** | **Poison Ivy** | *Inmate #1103* | Arkham Asylum (Estufa Selada) |

---

## ⚡ Recursos e Funcionalidades

1. **Atmosfera Gotham Noir**:
   - Cenário cinematográfico de Gotham City à noite sob chuva, com Art Deco gótico e o Bat-Sinal nas nuvens.
   - Simulação contínua de chuva em canvas HTML5 a 60fps.
   - Efeito atmosférico de relâmpagos sutis e iluminação volumétrica.
   - Textura tática de scanlines/CRT sutil de monitor de vigilância da batcaverna.

2. **Dígitos Double-Buffered**:
   - Transição suave entre dígitos sem tela preta ou pulo de layout (*crossfade* de imagens).
   - Molduras táticas com cantos chanfrados, reflexo de vidro e plaqueta de identificação de ficha criminal.
   - Clique em qualquer carta de personagem para abrir o **Dossiê Criminal Confidencial (GCPD Dossier Modal)**.

3. **Áudio Tático Sintetizado (Web Audio API)**:
   - Relé analógico / clique mecânico ao passar dos segundos (sem dependência de arquivos externos).
   - Botão para mutar/desmutar (`M`).

4. **Controles e Atalhos**:
   - `F`: Modo Tela Cheia (*Fullscreen*).
   - `M`: Alternar Áudio (*Mute/Unmute*).
   - `T`: Alternar Temas Visuais (*Wayne Tech Gold*, *GCPD Noir Blue*, *Arkham Toxic Green*).
   - Alternância entre formato `24H` e `12H`.
   - Ocultar ou exibir os segundos (*SEC ON / SEC OFF*).

---

## 🚀 Como Executar

### Desenvolvimento Local:
```bash
npm install
npm run dev
```

### Build para Produção:
```bash
npm run build
```
Os arquivos otimizados e prontos para deploy no Netlify serão gerados na pasta `dist/`.

---

## 🌐 Deploy no Netlify

1. Arraste a pasta `dist` gerada diretamente para o [Netlify Drop](https://app.netlify.com/drop).
2. Ou conecte o repositório no Netlify com o comando de build `npm run build` e diretório de publicação `dist`.
