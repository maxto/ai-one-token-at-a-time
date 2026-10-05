---
id: m2
title.it: Modelli e architetture
title.en: Models & architectures
---

# IT

Questo modulo presenta le principali famiglie di modelli di AI e le architetture che le distinguono, dagli LLM ai modelli di diffusione. Capire come sono fatti aiuta a scegliere lo strumento giusto e a prevederne punti di forza e limiti.

# EN

This module covers the main families of AI models and the architectures behind them, from LLMs to diffusion models. Knowing how they are built helps you pick the right tool and anticipate its strengths and limits.

# Quiz

## 1

### IT

Un modello Mixture of Experts ha moltissimi parametri in totale. Cosa succede quando elabora un token?

- [ ] Il token passa per tutti gli esperti, quindi il modello è più lento di uno denso
- [ ] Un esperto specializzato in un argomento risponde da solo all'intera domanda
- [x] Il router attiva pochi esperti per quel token, ma tutti devono restare in memoria

> Il calcolo per token è basso perché si usa solo una frazione dei parametri, ma la memoria deve contenerli tutti. La scelta avviene token per token e strato per strato, non per argomento.

### EN

A Mixture of Experts model has a huge number of parameters in total. What happens when it processes a token?

- [ ] The token goes through every expert, so the model is slower than a dense one
- [ ] One expert specialized in a topic answers the whole question on its own
- [x] The router activates a few experts for that token, but all of them must stay in memory

> Compute per token is low because only a fraction of the parameters is used, but memory has to hold all of them. The choice happens per token and per layer, not per topic.

## 2

### IT

Una scuola vuole smistare i messaggi degli studenti in cinque categorie, su un proprio server e con costi bassi. Quale scelta è più sensata?

- [x] Un modello linguistico piccolo, adattato con fine-tuning a quel compito
- [ ] Un modello di ragionamento, che spende molti token prima di ogni risposta
- [ ] Un modello di diffusione, addestrato a togliere rumore

> Il compito è stretto e ben definito: uno SLM addestrato apposta è veloce, economico e gira in locale. Un modello di ragionamento costerebbe di più senza un vero vantaggio, e la diffusione serve a generare immagini o audio.

### EN

A school wants to sort student messages into five categories, on its own server and at low cost. Which choice makes the most sense?

- [x] A small language model, fine-tuned for that task
- [ ] A reasoning model, which spends many tokens before every answer
- [ ] A diffusion model, trained to remove noise

> The task is narrow and well defined: a purpose-trained SLM is fast, cheap and runs locally. A reasoning model would cost more for no real gain, and diffusion is for generating images or audio.

## 3

### IT

Come crea una nuova immagine un modello di diffusione?

- [ ] Cerca immagini simili tra quelle di addestramento e le ritaglia insieme
- [x] Parte da rumore casuale e lo riduce passo dopo passo, guidato dal prompt
- [ ] Scrive i pixel uno alla volta, da sinistra a destra, come un testo

> Il modello ha imparato a stimare e togliere il rumore. Ripetendo il passaggio molte volte, con il testo che orienta ogni giro, dal rumore emerge un'immagine nuova.

### EN

How does a diffusion model create a new image?

- [ ] It finds similar training images and cuts them together
- [x] It starts from random noise and reduces it step by step, guided by the prompt
- [ ] It writes pixels one at a time, left to right, like text

> The model has learned to estimate and remove noise. Repeating that step many times, with the text steering each round, a new image emerges from the noise.
