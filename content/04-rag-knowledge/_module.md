---
id: m4
title.it: RAG e conoscenza
title.en: RAG & knowledge
---

# IT

RAG (retrieval-augmented generation, cioè generazione aumentata dal recupero) significa cercare i documenti pertinenti e darli al modello prima che risponda. Questo modulo spiega ogni pezzo della catena, dal taglio dei testi alla ricerca fino all'inserimento nel prompt, perché da queste scelte dipende se le risposte sono fondate o inventate.

# EN

RAG (retrieval-augmented generation) means fetching the relevant documents and handing them to the model before it answers. This module walks through each link in that chain, from splitting texts to searching them to placing them in the prompt, because these choices decide whether answers are grounded or made up.

# Quiz

## 1

### IT

Un assistente RAG risponde con sicurezza ma sbaglia. Dai log risulta che il pezzo giusto non era nemmeno tra i 100 candidati della prima ricerca. Dove conviene intervenire?

- [ ] Aggiungere un reranker su quei 100 candidati
- [ ] Scrivere istruzioni più lunghe nel prompt
- [x] Migliorare la prima fase di recupero, per esempio chunking o ricerca ibrida

> Il reranker riordina solo i candidati che riceve, e il prompt non può usare un testo che non c'è. Il problema sta nella prima fase di recupero.

### EN

A RAG assistant answers confidently but wrongly. The logs show the right chunk was not even among the 100 candidates from the first search. Where should you act?

- [ ] Add a reranker over those 100 candidates
- [ ] Write longer instructions in the prompt
- [x] Improve the first retrieval stage, for example chunking or hybrid search

> A reranker only reorders the candidates it receives, and the prompt cannot use text that is not there. The problem lies in the first retrieval stage.

## 2

### IT

Un utente cerca il ricambio "KX-4471", ma la ricerca vettoriale restituisce pezzi su ricambi simili e non quello esatto. Qual è la soluzione più adatta?

- [x] Aggiungere la ricerca per parole chiave (BM25) e fondere i risultati
- [ ] Usare chunk più grandi
- [ ] Passare a un modello di embedding con vettori più lunghi

> Codici e termini rari sono il punto forte della ricerca per parole chiave. La ricerca ibrida unisce la corrispondenza esatta e il significato.

### EN

A user searches for spare part "KX-4471", but vector search returns chunks about similar parts, not the exact one. What is the best fix?

- [x] Add keyword search (BM25) and merge the results
- [ ] Use bigger chunks
- [ ] Switch to an embedding model with longer vectors

> Codes and rare terms are where keyword search shines. Hybrid search combines exact matching with meaning.

## 3

### IT

Un team cambia il modello di embedding usato per le domande degli utenti, ma lascia l'indice dei documenti com'era. Cosa succede?

- [ ] Le risposte migliorano, perché il nuovo modello è più preciso
- [x] La ricerca diventa inaffidabile, perché vettori di modelli diversi non sono confrontabili
- [ ] Nulla, perché il database vettoriale converte i vettori in automatico

> Ogni modello disegna il proprio spazio. Domande e documenti devono passare dallo stesso modello, quindi l'indice va ricalcolato.

### EN

A team switches the embedding model used for user queries but leaves the document index as it was. What happens?

- [ ] Answers improve, because the new model is more accurate
- [x] Search becomes unreliable, because vectors from different models cannot be compared
- [ ] Nothing, because the vector database converts the vectors automatically

> Each model draws its own space. Queries and documents must go through the same model, so the index has to be re-embedded.
