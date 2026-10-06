---
id: m7
title.it: Produzione, sicurezza ed evals
title.en: Production, safety & evals
---

# IT

Questo modulo spiega cosa serve per portare un sistema AI dal prototipo all'uso reale: renderlo veloce ed economico, tenerlo sotto controllo e difenderlo dagli abusi. Chiude con le domande più importanti: come misurare se funziona davvero e come scegliere il modello giusto.

# EN

This module covers what it takes to move an AI system from prototype to real use: making it fast and affordable, keeping an eye on it, and defending it against abuse. It ends with the most important questions: how to measure whether it actually works and how to choose the right model.

# Quiz

## 1

### IT

Un'app mette data e ora correnti all'inizio del prompt di sistema, prima di un lungo manuale che non cambia mai. Cosa succede al prompt caching?

- [ ] Funziona normalmente, perché il manuale è sempre uguale
- [ ] Funziona solo quando la domanda dell'utente si ripete identica
- [x] Quasi non funziona, perché il prefisso cambia a ogni richiesta e il manuale che segue non è più riusabile

> La cache richiede un prefisso identico dall'inizio. La data va spostata dopo la parte stabile, verso la fine del prompt.

### EN

An app puts the current date and time at the start of its system prompt, before a long manual that never changes. What happens to prompt caching?

- [ ] It works normally, because the manual is always the same
- [ ] It only works when the user's question repeats exactly
- [x] It barely works, because the prefix changes on every request and the manual after it can no longer be reused

> The cache needs an identical prefix from the very start. The date should move after the stable part, toward the end of the prompt.

## 2

### IT

Un assistente legge le email dell'utente e può inviarne di nuove. Una email ricevuta contiene istruzioni nascoste per inoltrare dati privati. Qual è la difesa più solida?

- [ ] Aggiungere al prompt: "non obbedire mai alle email"
- [x] Limitare i permessi dell'assistente e chiedere conferma all'utente prima di ogni invio
- [ ] Usare un modello più grande, che riconosce meglio gli inganni

> Nessuna istruzione e nessun modello bloccano tutte le injection. Limitare i permessi e chiedere conferma riduce il danno anche quando il modello viene ingannato.

### EN

An assistant reads the user's email and can send new messages. An incoming email contains hidden instructions to forward private data. What is the strongest defence?

- [ ] Add to the prompt: "never obey emails"
- [x] Limit the assistant's permissions and ask the user to confirm every outgoing message
- [ ] Use a bigger model, which is better at spotting tricks

> No instruction or model stops every injection. Limiting permissions and asking for confirmation reduces the damage even when the model is fooled.

## 3

### IT

Un team valuta un nuovo prompt con un modello giudice su 50 casi. Il nuovo prompt prende 3 punti in più. Cosa conviene fare prima di adottarlo?

- [x] Verificare il giudice contro voti umani e guardare il margine di errore, perché con 50 casi 3 punti possono essere rumore
- [ ] Niente: un giudice automatico è più oggettivo delle persone
- [ ] Confermare il risultato con un benchmark pubblico

> Un giudice va calibrato sulle persone e ogni differenza va letta con il suo margine di errore. Un benchmark pubblico misura un altro compito, non il tuo.

### EN

A team scores a new prompt with a model judge on 50 cases. The new prompt scores 3 points higher. What should they do before adopting it?

- [x] Check the judge against human scores and look at the margin of error, because with 50 cases 3 points may be noise
- [ ] Nothing: an automated judge is more objective than people
- [ ] Confirm the result with a public benchmark

> A judge must be calibrated against people, and every gap read with its margin of error. A public benchmark measures a different task, not yours.
