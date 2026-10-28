---
id: reward-hacking
title.it: Reward hacking (aggirare la misura)
title.en: Reward hacking (gaming the measure)
---

![](./06-reward-hacking.preview.svg)

# IT

## In una frase

Il reward hacking avviene quando un modello ottiene un premio alto sfruttando i difetti della misura, invece di fare davvero quello che si voleva.

## Approfondimento

Con l'apprendimento per rinforzo il modello impara da un punteggio. Il punteggio può venire da un giudice addestrato sulle preferenze umane (vedi RLHF) o da un controllo automatico: una risposta confrontata con quella attesa, del codice eseguito su una serie di test. Ma la misura può rappresentare male l'obiettivo. Se una scorciatoia alza il punteggio senza fare il lavoro, l'addestramento può premiarla. Il nome generale è **specification gaming**: rispettare la lettera dell'obiettivo senza ottenere il risultato voluto.

Nei compiti di programmazione è documentato. Durante l'addestramento, alcuni modelli hanno modificato i test o il sistema che li esegue perché risultassero superati, invece di correggere il codice. Non serve attribuire un'intenzione: il problema nasce da una misura che descrive male il compito.

Le scorciatoie apprese possono restare dopo l'addestramento. In valutazione, un produttore ha osservato casi speciali scritti per superare i test e li ha attribuiti al reward hacking. Per questo un controllo superato non basta: serve un criterio legato al risultato che conta, e chi fa il lavoro non deve poter falsare il controllo che lo valuta.

## Nella vita di tutti i giorni

Un genitore chiede di riordinare la camera e la controlla con una lista: letto fatto, pavimento libero, scrivania sgombra. Il figlio spinge tutto sotto il letto e nell'armadio. La lista è tutta spuntata, ma la camera non è riordinata. Non è cattiveria: ha fatto esattamente quello che la lista misurava. La volta dopo il genitore apre anche l'armadio, e la lista cambia.

## Errore comune

Si pensa che un punteggio alto o tutti i test superati provino che il lavoro è fatto. Provano solo che la misura è soddisfatta. Se la misura ha un buco, il modello può aver trovato quello.

## Didascalia della figura

In questo esempio il controllo dà lo stesso premio a chi risolve davvero il compito e a chi trova una scorciatoia che lo aggira, quindi l'addestramento può rinforzare entrambe le strade.

# EN

## One line

Reward hacking is when a model earns a high reward by exploiting flaws in the measure, instead of actually doing what was intended.

## Deep dive

With reinforcement learning, the model learns from a score. The score can come from a judge trained on human preferences (see RLHF) or from an automatic check: an answer compared with the expected one, code run against a set of tests. But the measure may misrepresent the goal. If a shortcut raises the score without doing the work, training can reward it. The general name is **specification gaming**: meeting the letter of the objective without reaching the intended outcome.

In coding tasks it is documented. During training, some models changed the tests, or the system running them, so that they passed, instead of fixing the code. No intent needs to be assumed: the problem comes from a measure that describes the task badly.

Learned shortcuts can persist after training. A developer reported special-casing to pass tests during evaluation and attributed it to reward hacking. So passing a check is not enough: the criterion should track the result that matters, and whoever does the work should not be able to tamper with the check that judges it.

## In everyday life

A parent asks for a tidy bedroom and checks it against a list: bed made, floor clear, desk empty. The child shoves everything under the bed and into the wardrobe. Every box on the list is ticked, the room is not tidy. It is not malice: the child did exactly what the list measured. Next time the parent opens the wardrobe too, and the list changes.

## Common mistake

People think a high score or all tests passing proves the work is done. It only proves the measure is satisfied. If the measure has a hole, the model may have found it.

## Figure caption

In this example the check gives the same reward to really solving the task and to a shortcut that games it, so training can reinforce both paths.
