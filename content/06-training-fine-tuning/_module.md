---
id: m6
title.it: Addestramento e fine-tuning
title.en: Training & fine-tuning
---

# IT

Questo modulo spiega come nasce un modello linguistico e come lo si adatta: dal pre-training su enormi quantità di testo alle tecniche che lo trasformano in un assistente utile. Vedremo anche come renderlo più piccolo ed economico da usare, e quali compromessi comporta ogni scelta.

# EN

This module explains how a language model is built and then shaped: from pre-training on huge amounts of text to the techniques that turn it into a useful assistant. It also covers how to make a model smaller and cheaper to run, and the trade-offs each choice brings.

# Quiz

## 1

### IT

Che cosa distingue davvero la DPO dall'RLHF?

- [ ] La DPO non ha bisogno di dati sulle preferenze delle persone.
- [x] La DPO usa le stesse coppie di preferenze, ma senza un modello giudice separato né un ciclo di rinforzo.
- [ ] La DPO aggiorna il modello in tempo reale mentre gli utenti lo usano.

> Entrambe partono da coppie di risposte, una preferita e una scartata. La DPO trasforma quelle coppie in un aggiornamento diretto dei pesi, mentre l'RLHF passa da un reward model e dall'apprendimento per rinforzo.

### EN

What really sets DPO apart from RLHF?

- [ ] DPO doesn't need any data on what people prefer.
- [x] DPO uses the same preference pairs, but without a separate judge model or a reinforcement loop.
- [ ] DPO updates the model in real time while people are using it.

> Both start from pairs of answers, one preferred and one rejected. DPO turns those pairs straight into a weight update, while RLHF goes through a reward model and reinforcement learning.

## 2

### IT

Un modello appena pre-addestrato riceve la domanda "Quali sono i pianeti del sistema solare?" e risponde con altre domande simili. Perché?

- [ ] Perché la quantizzazione ha danneggiato i suoi pesi.
- [ ] Perché nei suoi dati di addestramento non c'erano domande.
- [x] Perché il pre-training gli ha insegnato a continuare testo. Seguire istruzioni arriva con l'instruction tuning.

> Un modello base prevede il testo più probabile. Dopo una domanda, in molte pagine viene un'altra domanda, come in una scheda di esercizi. Il comportamento da assistente si aggiunge dopo.

### EN

A freshly pre-trained model is asked "What are the planets of the solar system?" and replies with more similar questions. Why?

- [ ] Because quantization damaged its weights.
- [ ] Because its training data contained no questions.
- [x] Because pre-training taught it to continue text. Following instructions comes with instruction tuning.

> A base model predicts the most likely text. On many pages, a question is followed by another question, as in a worksheet. Assistant behaviour is added later.

## 3

### IT

Un'app di ricette vuole lo stesso modello in cinque stili diversi (formale, per bambini, ironico...) senza tenere cinque copie complete. Quale strada è più adatta?

- [x] Cinque adattatori LoRA sopra un unico modello base.
- [ ] Cinque pre-training separati, uno per stile.
- [ ] Quantizzare il modello cinque volte con un numero di bit diverso.

> Gli adattatori LoRA sono piccoli e si cambiano sopra lo stesso modello base. Il pre-training sarebbe enormemente costoso, e la quantizzazione riduce la memoria ma non insegna uno stile.

### EN

A recipe app wants the same model in five different styles (formal, for kids, playful...) without keeping five full copies. Which route fits best?

- [x] Five LoRA adapters on top of a single base model.
- [ ] Five separate pre-training runs, one per style.
- [ ] Quantizing the model five times with a different number of bits.

> LoRA adapters are small and can be swapped on the same base model. Pre-training would be hugely expensive, and quantization saves memory but teaches no style.
