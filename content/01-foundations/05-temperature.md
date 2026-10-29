---
id: temperature
title.it: Temperatura e campionamento
title.en: Temperature & sampling
---

![](./05-temperature.preview.svg)

# IT

## In una frase

A ogni passo il modello assegna una probabilità a ogni token possibile, e la temperatura decide quanto rischiare nella scelta del prossimo.

## Approfondimento

Il modello genera un token alla volta. A ogni passo produce un punteggio per ogni token del vocabolario, e questi punteggi diventano probabilità. Poi si **campiona**: si estrae un token secondo quelle probabilità. Il token scelto si aggiunge al testo e il ciclo riparte.

La **temperatura** modifica le probabilità prima dell'estrazione: i punteggi vengono divisi per la temperatura. Sotto 1 la distribuzione si fa più appuntita: i token già probabili lo diventano ancora di più e il testo è più prevedibile. Sopra 1 si appiattisce: escono più spesso token improbabili, il testo è più vario ma anche più esposto a errori e frasi strane. A temperatura 0 si prende sempre il token più probabile.

Il compromesso: bassa per estrarre dati, classificare o scrivere codice, più alta per idee e varianti. Anche a temperatura 0 la risposta può cambiare leggermente tra una richiesta e l'altra, per dettagli tecnici del calcolo sui server.

## Nella vita di tutti i giorni

Pensa alla riproduzione casuale del telefono, se tenesse conto di quante volte hai ascoltato ogni canzone. A temperatura bassa tornano ancora più spesso le solite preferite: vai sul sicuro, ma ti stufi presto. A temperatura alta escono anche i pezzi che di solito salti. Magari riscopri una canzone dimenticata, magari parte proprio quella che non sopporti. La playlist resta la stessa: cambia solo quanto pesano le tue abitudini.

## Errore comune

Pensare che una temperatura alta renda il modello più intelligente o davvero creativo. Non aggiunge conoscenza: cambia solo quanto spesso si scelgono token meno probabili. Se è troppo alta, il testo diventa incoerente.

## Didascalia della figura

Stessi punteggi, due temperature: bassa rende il token più probabile quasi certo, alta dà più chance agli altri.

# EN

## One line

At each step the model gives every possible next token a probability, and temperature decides how much risk to take when picking one.

## Deep dive

The model generates one token at a time. At each step it produces a score for every token in the vocabulary, and those scores become probabilities. Then it **samples**: it draws one token according to those probabilities. The chosen token is appended to the text and the loop starts again.

**Temperature** reshapes the probabilities before the draw: the scores are divided by the temperature. Below 1 the distribution gets sharper: likely tokens become even more likely and the text is more predictable. Above 1 it flattens: unlikely tokens come up more often, so the text is more varied but also more prone to errors and odd phrasing. At temperature 0 the most likely token is always taken.

The trade-off: keep it low for extracting data, classifying or writing code. Raise it for ideas and variations. Even at temperature 0 the output can vary slightly between requests, because of technical details in how servers run the computation.

## In everyday life

Picture a shuffle on your phone that favours the songs you play most. Turn the temperature down and your usual favourites come round even more often: a safe bet, but they soon wear thin. Turn it up and the tracks you normally skip start to play. You might rediscover a song you had forgotten, or land on the one you can't stand. The playlist never changes. Only the weight of your habits does.

## Common mistake

Believing a high temperature makes the model smarter or truly creative. It adds no knowledge. It only changes how often less likely tokens get picked. Push it too far and the text turns incoherent.

## Figure caption

Same scores, two temperatures: low makes the top token almost certain, high gives the others more of a chance.

# Sources

## slp3-jurafsky-martin
- Work: [Speech and Language Processing, 3rd edition draft](https://web.stanford.edu/~jurafsky/slp3/)
- Author: Daniel Jurafsky and James H. Martin
- Year: 2026
- Language: en
- Note.it: Manuale universitario gratuito: come il modello sceglie il token e come la temperatura rimodella le probabilità, nel capitolo 7 (sezioni 7.6.2 e 7.6.3). In parte tecnico.
- Note.en: Free university textbook: how the model picks a token and how temperature reshapes the probabilities, in chapter 7 (sections 7.6.2 and 7.6.3). Partly technical.
