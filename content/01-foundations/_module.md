---
id: m1
title.it: Fondamenta
title.en: Foundations
---

# IT

Questo modulo spiega i mattoni di base di un modello linguistico: come legge il testo, come rappresenta il significato, quanto tiene a mente e come sceglie le parole. Sono i concetti che servono per capire tutto il resto del corso.

# EN

This module covers the basic building blocks of a language model: how it reads text, how it represents meaning, how much it can keep in view and how it picks its words. Everything else in the course builds on these ideas.

# Quiz

## 1

### IT

Un modello sbaglia a contare quante "r" ci sono in una parola. Qual è la causa più probabile?

- [ ] La temperatura è impostata troppo alta
- [x] Il modello vede token, cioè pezzi di parola, e non le singole lettere
- [ ] La parola non è nel vocabolario, quindi viene ignorata

> Il tokenizer raggruppa le lettere in token, quindi il modello non vede i caratteri uno per uno. Una parola fuori vocabolario non viene ignorata: viene spezzata in pezzi più piccoli.

### EN

A model miscounts how many "r"s a word contains. What is the most likely cause?

- [ ] The temperature is set too high
- [x] The model sees tokens, chunks of words, not individual letters
- [ ] The word is not in the vocabulary, so it gets ignored

> The tokenizer groups letters into tokens, so the model never sees the characters one by one. A word outside the vocabulary is not ignored; it is split into smaller pieces.

## 2

### IT

In un archivio di ricette cerchi "dolce senza forno" e la ricerca con embedding trova il tiramisù, anche se il testo non contiene quelle parole. Perché?

- [ ] Qualcuno ha scritto a mano un elenco di sinonimi
- [ ] Il modello ha cercato la risposta su internet
- [x] I due testi hanno embedding vicini perché il significato è simile

> Gli embedding mettono vicini testi con significato simile, anche senza parole in comune. La similarità tra vettori misura questa vicinanza e restituisce i risultati più prossimi.

### EN

In a recipe archive you search for "no-bake dessert" and embedding search finds tiramisu, even though its text does not contain those words. Why?

- [ ] Someone hand-wrote a list of synonyms
- [ ] The model looked the answer up on the internet
- [x] The two texts have nearby embeddings because their meaning is similar

> Embeddings place texts with similar meaning close together, even when they share no words. Vector similarity measures that closeness and returns the nearest results.

## 3

### IT

Con top-p = 0,9, cosa succede quando il modello è molto sicuro del token successivo?

- [x] Restano pochissimi candidati, a volte uno solo
- [ ] Restano sempre 90 candidati
- [ ] Si estrae a caso da tutto il vocabolario

> Top-p tiene i token più probabili finché la loro somma raggiunge 0,9. Se un token da solo ha già il 95%, resta solo lui.

### EN

With top-p = 0.9, what happens when the model is very confident about the next token?

- [x] Very few candidates remain, sometimes just one
- [ ] Exactly 90 candidates always remain
- [ ] The draw is made from the whole vocabulary

> Top-p keeps the most likely tokens until their sum reaches 0.9. If one token alone already has 95%, it is the only one left.
