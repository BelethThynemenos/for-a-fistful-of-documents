---
{"dg-publish":true,"permalink":"/schede-secondarie/missioni/","dg-note-properties":{}}
---

# **MISSIONI**

Le missioni sono la principale forma di [[Schede secondarie/missioni#^1bb2f6\|guadagno]] della gilda.
Rappresentano le richieste di aiuto provenienti dai richiedenti che raggiungono il giocatore da tutti i [[villaggi\|villaggi]] di [[Roveria\|Roveria]]
# ELEMENTI CARATTERISTICI
## **1 - STRUTTURA LOGICA**
Ogni missione è riconoscibile dai seguenti elementi:
- [[Schede secondarie/missioni#^29f421\|Tipo di missione]]
- [[Schede secondarie/missioni#^d8094a\|Tipi di durata e scadenze]]
- [[Schede secondarie/missioni#^6df22a\|Tipo di richiedente di missione]]
- Tipo di ramificazioni e risultati
###  **1.A - TIPI DI MISSIONE**
{ #29f421}

Ogni missione è caratterizzata da possibili approcci che un mercenario può scegliere per risolvere una missione e i tag che ogni missione possiede. 
I ***tag***, sono elementi che definiscono i possibili contesti ed eventi che caratterizzano una missione, ed è possibile trovarli in: [[Schede secondarie/Tabella dei tag di missione\|Tabella dei tag di missione]] ogni tag è inserito in un contesto che può avere debolezze o forze rispetto ai tratti dei mercenari.

Ogni missione può avere da uno a tre approcci possibili e sono direttamente legati alle [[statistiche\|statistiche]] dei [[mercenari\|mercenari]] e ai loro [[tratti\|tratti]]. Scegliendo un differente approccio, i mercenari porteranno a termine una missione affrontando specifici gruppi di tag che andranno a definire lo stile della missione.

### **1.B - TIPI DI DURATA E SCADENZE**
{ #d8094a}

determinano i tipi di durata che le missioni possiedono e la durata massima che una missione resterà sulla mappa

#### **1.B.a - DURATA**

- **Missioni cittadine**
{ #a81c58}

	- Sono le missioni che si svolgono all'interno delle mappe cittadine, vengono completate tutte durante la stessa giornata di gioco e possono essere completate usando da 2 a 4 [[azioni\|azioni]] per mercenario.
	
- **Missioni regionali**
{ #29f423}

	- Sono le missioni che si svolgono al di fuori della mappa della città, sfruttando la mappa di [[Roveria\|Roveria]], le missioni regionali possono essere completate in un tempo compreso tra 1 e X giorni e vengono sempre mostrate sul [[giornale\|giornale]] una volta completate.

#### **1.B.b - SCADENZA**
Ogni volta che una missione supera il proprio tempo limite essa verrà rimossa dalla mappa e categorizzata come ***non completata*** dal giocatore.

I possibili risultati per una [[Schede secondarie/missioni#^29f423\|missione regionale]] scaduta e non completata dal giocatore sono:
- Fallita - sul [[giornale\|giornale]] verrà mostrato il risultato fallimentare della missione.
- Completata da una gilda rivale - in questo caso verrà mostrato sul [[giornale\|giornale]] il risultato positivo della missione, con riferimento a quale gilda ha completato la missione.

I possibili risultati per una [[Schede secondarie/missioni#^a81c58\|missione cittadina]] scaduta e non completata dal giocatore sono:
- Fallita - scompare dalla mappa e il giocatore riceve un [[report\|report]] fallimentare dall'[[Araldo\|Araldo]]
### **1.C - TIPI DI RICHIEDENTE DI MISSIONE**
{ #6df22a}

determinano i tipi di npc che richiedono aiuto alla gilda per la risoluzione di una missione.
I possibili tipi di richiedente di missione sono:
- Cittadini semplici
- Cittadini borghesi
- Guardie cittadine
- Gilde
- Podestà e conestabili
- Chierici e persone di chiesa

A seconda del richiedente di missione vengono definiti i seguenti parametri:
- un quantitativo massimo di monete guadagnate
- un registro lessicale
- una differente qualità del foglio di missione

##### ***1.C.a - Guadagno***
{ #1bb2f6}

La principale ricompensa per il completamento di una missione è il guadagno.
Ogni categoria di richiedente di missione è definita da una tabella di guadagni possibli per singola missione 
##### ***1.C.b - Monete***
I giocatori possono guadagnare dalle missioni due tipi di monete, quelle in oro e quelle in argento - m.o. - m.a. Ogni 10 monete d'argento si ottiene il valore di 1 monete d'oro

| Richiedenti                  | Range di guadagno   |
| ---------------------------- | ------------------- |
| Cittadini semplici           | 1 argento - 5 oro   |
| Cittadini borghesi           | 5 oro - 50 oro      |
| Guardie cittadine            | 1 argento - 30 oro  |
| Gilde                        | 20 oro - 150 oro    |
| Podestà e conestabili        | 30 oro - 500 oro    |
| Chierici e persone di chiesa | 1 argento - 500 oro |

###  **1.D - TIPI DI RAMIFICAZIONI E RISULTATI**
{ #29f421}

a seconda dei vari risultati ottenuti da un mercenario durante lo svolgimento di una missione, questo determinerà come alcune missioni possano ramificarsi in ulteriori quests da portare a termine, connesse direttamente al successo o al fallimento delle stesse.

Una missione completata ha i seguenti output:
- fallita con conseguenza
- fallita
- superata con conseguenza
- superata
- superata con bonus

## **2 - STRUTTURA TECNICA:**
Ogni missione è composta da due categorie di fogli di missione:
- Pagine di descrizione
- Pagine illustrate

### **2.A - PAGINE DI DESCRIZIONE**
![FAFOC-QUEST-1.png\|474](/img/user/Immagini/FAFOC-QUEST-1.png)
		All'interno delle pagine di descrizione sono presenti:
			- Titolo della missione
			- Descrizione della missione
			- Richiedente aiuto

### **2.B - PAGINE ILLUSTRATE**
![FAFOC-QUEST-2.png\|475](/img/user/Immagini/FAFOC-QUEST-2.png)
		All'interno delle pagine illustrate sono presenti:
			- Illustrazione della missione
			- Tempo di missione
			- Soldi guadagnati