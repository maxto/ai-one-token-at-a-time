---
id: m5
title.it: Agenti e uso di strumenti
title.en: Agents & tool use
---

# IT

Questo modulo spiega come un modello linguistico diventa un agente: usa strumenti, ricorda, pianifica e lavora in squadra. Capire questi meccanismi aiuta a capire cosa un agente può fare da solo e dove serve un controllo umano.

# EN

This module explains how a language model becomes an agent: it uses tools, remembers, plans and works in teams. Knowing the mechanics helps you judge what an agent can do on its own and where a human check is needed.

# Quiz

## 1

### IT

Un agente deve controllare il meteo di domani. Chi invia davvero la richiesta al servizio meteo?

- [ ] Il modello, che si collega a internet mentre genera il testo
- [ ] Il server MCP, che decide da solo quando attivarsi
- [x] L'applicazione che ospita il modello, dopo aver letto la sua richiesta strutturata

> Il modello scrive solo una richiesta strutturata. È l'applicazione a eseguirla, anche tramite un server MCP, e a restituirgli il risultato.

### EN

An agent needs tomorrow's weather. Who actually sends the request to the weather service?

- [ ] The model, which goes online while it generates text
- [ ] The MCP server, which decides on its own when to act
- [x] The application hosting the model, after reading the model's structured request

> The model only writes a structured request. The application executes it, possibly through an MCP server, and hands the result back.

## 2

### IT

Un agente su un compito lungo dichiara spesso di aver finito quando non è vero. Qual è la correzione più efficace?

- [x] Definire prima una verifica esterna e un limite di tentativi
- [ ] Lasciarlo girare per più cicli senza cambiare altro
- [ ] Aggiungere altri agenti che si scambiano opinioni senza criteri precisi

> Senza un controllo oggettivo l'agente non sa quando ha davvero finito. La verifica decide la fine, il limite evita i giri a vuoto.

### EN

An agent on a long task often claims to be done when it is not. What is the most effective fix?

- [x] Define an external check up front, plus a cap on attempts
- [ ] Let it run for more turns without changing anything else
- [ ] Add more agents that trade opinions without clear criteria

> Without an objective check the agent cannot tell when it is really done. The check decides the end; the cap stops it going in circles.

## 3

### IT

Lunedì un agente tiene conto di una preferenza che hai espresso venerdì. Cosa è successo più probabilmente?

- [ ] Il modello ha aggiornato i propri pesi durante la conversazione di venerdì
- [x] Il sistema ha salvato la preferenza in una memoria esterna e l'ha rimessa nel contesto
- [ ] Il modello conserva tutte le conversazioni passate per impostazione predefinita

> Usare il modello non ne cambia i pesi. La memoria tra sessioni è testo salvato fuori dal modello e recuperato quando serve.

### EN

On Monday an agent takes into account a preference you stated on Friday. What most likely happened?

- [ ] The model updated its weights during Friday's conversation
- [x] The system saved the preference in external memory and put it back into the context
- [ ] The model keeps every past conversation by default

> Using a model does not change its weights. Memory across sessions is text stored outside the model and retrieved when needed.
