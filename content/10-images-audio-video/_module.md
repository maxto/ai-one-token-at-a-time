---
id: m10
title.it: Immagini, audio e video
title.en: Images, audio & video
---

# IT

Questo modulo spiega come i modelli interpretano immagini e trasformano testo, immagini e voce in nuovi contenuti. Imparerai quali controlli orientano il risultato e perché dettagli visivi, continuità nel tempo e provenienza richiedono verifiche distinte.

# EN

This module explains how models interpret images and turn text, images and speech into new content. You will learn which controls guide the result and why visual details, continuity over time and provenance need separate checks.

# Quiz

## 1

### IT

Riusi il prompt e il seed di un'immagine, ma cambi modello. Quale risultato puoi aspettarti?

- [ ] Una copia identica, perché il seed contiene l'immagine
- [x] Un risultato che può cambiare, perché il seed controlla solo una fonte di variabilità
- [ ] La stessa composizione, con colori necessariamente diversi

> Il seed inizializza il generatore pseudocasuale, non salva l'immagine. Modello, impostazioni e condizioni di esecuzione contano per la riproducibilità.

### EN

You reuse an image's prompt and seed but change the model. What result can you expect?

- [ ] An identical copy, because the seed contains the image
- [x] A result that may differ, because the seed controls only one source of variation
- [ ] The same composition, with necessarily different colors

> The seed initializes the pseudorandom generator rather than storing the image. The model, settings and execution conditions matter for reproducibility.

## 2

### IT

In un video generato, una tazza cambia forma dopo essere passata dietro una mano. Quale problema mostra?

- [x] Mancanza di coerenza nel tempo, anche se i singoli fotogrammi sono credibili
- [ ] Soltanto una risoluzione troppo bassa
- [ ] Un errore di trascrizione vocale

> Un video deve mantenere identità e relazioni degli oggetti fra fotogrammi, anche quando vengono nascosti. La qualità di una singola immagine non garantisce questa continuità.

### EN

In a generated video, a cup changes shape after passing behind a hand. What problem does this reveal?

- [x] A lack of consistency over time, even if individual frames look credible
- [ ] Only an insufficient resolution
- [ ] A speech transcription error

> A video must maintain objects' identities and relationships across frames, including when they are hidden. The quality of a single image does not guarantee that continuity.

## 3

### IT

Una foto condivisa non contiene filigrane rilevabili né metadati di provenienza. Cosa puoi concludere?

- [ ] È certamente una fotografia autentica
- [ ] È certamente generata da AI
- [x] Queste assenze non bastano a determinarne l'origine

> I segnali possono non essere stati inseriti o essere andati persi. Occorre cercare la fonte e altre conferme, senza affidarsi al solo risultato di un rilevatore.

### EN

A shared photo contains no detectable watermark or provenance metadata. What can you conclude?

- [ ] It is definitely an authentic photograph
- [ ] It is definitely AI-generated
- [x] These absences are insufficient to determine its origin

> The signals may never have been added or may have been lost. Look for the source and other confirmation instead of relying solely on a detector's output.
