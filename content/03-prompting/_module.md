---
id: m3
title.it: Tecniche di prompting
title.en: Prompting techniques
---

# IT

Questo modulo presenta le tecniche principali per scrivere prompt efficaci, dalle istruzioni semplici agli schemi con strumenti e più tentativi. Per ognuna vediamo come funziona, quando serve e quanto costa.

# EN

This module covers the main techniques for writing effective prompts, from plain instructions to patterns that use tools and multiple attempts. For each one we look at how it works, when it helps and what it costs.

# Quiz

## 1

### IT

Un modello di ragionamento moderno sbaglia un problema di logica con molti vincoli. Quale intervento ha più probabilità di aiutare?

- [ ] Aggiungere “pensa passo per passo” in fondo al prompt
- [x] Descrivere meglio il problema, con tutti i vincoli e i dati che mancavano
- [ ] Dire al modello che è un grande esperto di logica

> Un modello di ragionamento ragiona già internamente, quindi la frase aggiunge poco, e un ruolo non aggiunge conoscenze. Più spesso manca una descrizione completa del problema.

### EN

A modern reasoning model gets a logic problem with many constraints wrong. Which change is most likely to help?

- [ ] Adding “think step by step” at the end of the prompt
- [x] Describing the problem better, with all the constraints and missing data
- [ ] Telling the model it is a top logic expert

> A reasoning model already reasons internally, so the phrase adds little, and a role adds no knowledge. What is usually missing is a complete description of the problem.

## 2

### IT

Per classificare recensioni di ristoranti metti nel prompt quattro esempi, tre dei quali etichettati “positiva”. Qual è il rischio principale?

- [x] Il modello tende a etichettare come positive anche recensioni neutre
- [ ] Il modello impara il tuo schema in modo permanente e lo applica anche ad altri utenti
- [ ] Nessuno: più esempi migliorano sempre il risultato

> Il modello imita anche gli squilibri presenti negli esempi. Gli esempi valgono solo per quella richiesta e non cambiano i pesi del modello.

### EN

To classify restaurant reviews you put four examples in the prompt, three of them labelled “positive”. What is the main risk?

- [x] The model leans toward labelling neutral reviews as positive too
- [ ] The model learns your scheme permanently and applies it to other users
- [ ] None: more examples always improve the result

> The model also copies imbalances in the examples. Examples only affect that one request and do not change the model's weights.

## 3

### IT

Per quale compito la self-consistency (più tentativi e voto di maggioranza) è più adatta?

- [ ] Scrivere un messaggio di benvenuto per i nuovi iscritti a una palestra
- [ ] Inventare uno slogan per la festa del quartiere
- [x] Calcolare quanti pullman da 52 posti servono per portare in gita 130 studenti

> Il voto richiede risposte confrontabili, come un numero. Testi liberi sono tutti diversi e non si possono contare.

### EN

Which task is self-consistency (several attempts and a majority vote) best suited to?

- [ ] Writing a welcome message for new gym members
- [ ] Coming up with a slogan for the neighbourhood party
- [x] Working out how many 52-seat coaches are needed to take 130 pupils on a trip

> Voting needs answers that can be compared, such as a number. Free-form texts all differ and cannot be counted.
