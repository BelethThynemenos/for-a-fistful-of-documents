---
{"dg-publish":true,"permalink":"/gameplay/missioni/missioni/","dg-note-properties":{}}
---

# **MISSIONI**

Le missioni sono la principale forma di [[Gameplay/Missioni/missioni#^1bb2f6\|guadagno]] della gilda.
Rappresentano le richieste di aiuto provenienti dai [[Gameplay/Missioni/missioni#**1.C - TIPI DI RICHIEDENTE DI MISSIONE**\|richiedenti]] che raggiungono il giocatore da tutti i villaggi di [[Worldbuilding/Sistema Tarelliano/Roveria\|Roveria]].
# ELEMENTI CARATTERISTICI
## **1 - STRUTTURA LOGICA**
Ogni missione è riconoscibile dai seguenti elementi:
- [[Gameplay/Missioni/missioni#^29f42\|Tipi di missione]]
- [[Gameplay/Missioni/missioni#^d8094a\|Tipi di durata e scadenze]]
- [[Gameplay/Missioni/missioni#**1.C - TIPI DI RICHIEDENTE DI MISSIONE**\|Tipi di richiedente di missione]]
- [[Gameplay/Missioni/missioni#**1.D - TIPI DI RAMIFICAZIONI E RISULTATI**\|Tipo di ramificazioni e risultati]]
### **1.A - TIPI DI MISSIONE - TAG**
{ #29f42}

Ogni missione è caratterizzata dai ***tag***.
I ***tag***, sono elementi che definiscono parametricamente i possibili contesti ed eventi che caratterizzano una missione, ed è possibile trovarli in versione completa nella [[Gameplay/Missioni/Tabella dei tag di missione\|Tabella dei tag di missione]].

I tag si dividono in due macro categorie:
- [[Gameplay/Missioni/missioni#**1.A.a - TAG APPROCCIO**\|Tag approccio]]
- [[Gameplay/Missioni/missioni#**1.A.b - TAG CONTESTO**\|Tag contesto]]

Ogni ***tag*** è pensato per essere messo in contrapposizione ai [[tratti\|tratti]] dei [[NPC/Mercenari/mercenari\|mercenari]] e determina i [[Gameplay/Missioni/missioni#**1.D - TIPI DI RAMIFICAZIONI E RISULTATI**\|risultati]] che un mercenario otterrà in quella missione. Ogni ***tag*** infatti ha, rispetto a ogni [[tratti\|tratto]], un rapporto di debolezza o di forza, che determina di quanto la prova totale viene influenzata rispetto al successo.  

Ogni missione può avere da uno a tre approcci possibili e sono direttamente legati alle [[statistiche\|statistiche]] dei [[NPC/Mercenari/mercenari\|mercenari]] e ai loro [[tratti\|tratti]]. Ogni approccio possibile determinerà un differente set di ***tag***, ovvero una ***categoria*** che la missione possiederà e una conseguente differenza nel calcolo dei risultati.

##### **1.A.a - TAG APPROCCIO**
I tag approccio definiscono il modo in cui una missione deve essere affrontata. Ad esempio una trattativa diplomatica con dei prigionieri potrebbe possedere sia l'approccio "*dialogo*" che l'appoccio "*combattimento*". Ogni serie di tag approccio è definita ***categoria***.

##### **1.A.b - TAG CONTESTO**
I tag contesto invece danno informazioni sugli elementi di contesto di una missione. 
Ad esempio una trattativa diplomatica con dei prigionieri potrebbe possedere i tratti:
- prigionieri
- miniera
- riscatto
- notte
##### **1.A.C - BIVIO RISOLUTIVO**
![[Gameplay/Schede secondarie/Bivio risolutivo.canvas\|-]]



### **1.B - TIPI DI DURATA E SCADENZE**
{ #d8094a}

Ogni missione è caratterizzata a livello temporale da due fattori, quello di durata e quello di scadenza.

#### **1.B.a - DURATA**
La durata di una missione è relativa al tempo che il mercenario impiegherà per svolgere la missione una volta assegnatagli ed esistono due categorie principali:

- **Missioni cittadine**
{ #a81c58}

	- Sono le missioni che si svolgono all'interno delle mappe cittadine, sono da considerarsi come missioni da portare a termine durante la stessa giornata di gioco e possono essere completate usando da 1 a X [[azioni\|azioni]] per [[NPC/Mercenari/mercenari\|mercenario]]. Ogni volta che viene completata una missione cittadina, viene riconsegnato alla gilda un [[Gameplay/Missioni/report\|report]] con le informazioni relative ai risultati.
	
- **Missioni regionali**
{ #29f423}

	- Sono le missioni che si svolgono al di fuori della mappa della città, tra le città di [[Worldbuilding/Sistema Tarelliano/Roveria\|Roveria]], le missioni regionali possono essere portate a termine in un tempo compreso tra 1 e X giorni e vengono sempre mostrate sul [[giornale\|giornale]] una volta completate. 

#### **1.B.b - SCADENZA**
Ogni missione possiede un tempo limite entro in cui deve essere completata. Se una missione non viene completata entro il tempo richiesto, la missione verrà considerata come ***non completata*** e conseguentemente rimossa dalla mappa.

I possibili risultati per una [[Gameplay/Missioni/missioni#^29f423\|missione regionale]] scaduta e non completata dal giocatore sono:

- **Fallita** - sul [[giornale\|giornale]] verrà mostrato il risultato fallimentare della missione.
- **Completata da una gilda rivale** - in questo caso verrà mostrato sul [[giornale\|giornale]] il risultato positivo della missione, con riferimento a quale gilda ha completato la missione.

I possibili risultati per una [[Gameplay/Missioni/missioni#^a81c58\|missione cittadina]] scaduta e non completata dal giocatore sono:
- **Fallita** - scompare dalla mappa e il giocatore riceve un [[Gameplay/Missioni/report\|report]] fallimentare dall'[[Araldo\|Araldo]].

### **1.C - TIPI DI RICHIEDENTE DI MISSIONE** 
determinano i tipi di npc che richiedono aiuto alla gilda per la risoluzione di una missione.
I possibili tipi di richiedente di missione sono:

- *Cittadini semplici*;
- *Cittadini borghesi*;
- *Guardie cittadine*;
- *Gilde*;
- *Podestà e conestabili*;
- *Chierici e persone di chiesa*;

A seconda del richiedente di missione vengono definiti i seguenti parametri:
- un quantitativo massimo di monete guadagnate
- un registro lessicale
{ #2a99d1}

- una differente qualità del foglio di missione

##### ***1.C.a - Guadagno***
{ #1bb2f6}

La principale ricompensa per il completamento di una missione è il guadagno.
Ogni categoria di richiedente di missione è definita da una [[Gameplay/Missioni/missioni#^424e33\|tabella]] di guadagni possibili per singola missione. 
##### ***1.C.b - Monete***
I giocatori possono guadagnare dalle missioni due tipi di monete, quelle in oro e quelle in argento.
***m.o. - m.a.***
Ogni 10 monete d'argento si ottiene il valore di 1 monete d'oro

| **Richiedenti**              | **Range di guadagno** |
| ---------------------------- | --------------------- |
| Cittadini semplici           | 1 argento - 5 oro     |
| Cittadini borghesi           | 5 oro - 50 oro        |
| Guardie cittadine            | 1 argento - 30 oro    |
| Gilde                        | 20 oro - 150 oro      |
| Podestà e conestabili        | 30 oro - 500 oro      |
| Chierici e persone di chiesa | 1 argento - 500 oro   |{ #424e33}

###  **1.D - TIPI DI RAMIFICAZIONI E RISULTATI** 
A seconda dei vari risultati ottenuti da un [[NPC/Mercenari/mercenari\|mecenario]] durante lo svolgimento di una missione, questo determinerà come alcune missioni possano ramificarsi in ulteriori *quests* da portare a termine, connesse direttamente al successo o al fallimento delle stesse.

Il risultato di una missione viene ottenuto mettendo a confronto i tag di una missione contro i [[NPC/Mercenari/mercenari#**2.B - TRATTI DEI MERCENARI**\|tratti]] e le [[NPC/Mercenari/mercenari#**2.A - STATISTICHE DEI MERCENARI**\|statistiche di un mercenario]].
	 Valore statistiche + valore di ogni tratto usato = capacità mercenario
	  
#### **1.D.a - RISULTATI**
Una *missione completata* ha i seguenti output:

- fallita con conseguenza
- fallita
- superata con conseguenza
- superata
- superata con bonus

#### **1.D.b - CONSEGUENZE E BONUS**
Ogni missione determina delle conseguenze, sia per i [[NPC/Mercenari/mercenari\|mercenari]], che per il [[Worldbuilding/Sistema Tarelliano/Roveria\|mondo di gioco]].

##### FALLITA CON CONSEGUENZA
Una missione ***fallita con conseguenza*** ha le seguenti caratteristiche:

- In base ai ***tag*** della missione un mercenario guadagna il tratto [[ferita\|ferita]] o il tratto [[trauma\|trauma]] in relazione alle macro categorie di tag e approcci.
- Il tratto [[ferita\|ferita]] o [[trauma\|trauma]] assegnano un valore compreso tra -2 e -3 al rapporto di [[NPC/Mercenari/mercenari#**2.A.a - AFFINITÀ**\|affinità]].
- Il mercenario ha una probabilità del 50% di perdere il proprio [[equipaggiamento\|equipaggiamento]] se ne possiede uno
- Il mercenario non riporta [[Gameplay/Missioni/missioni#***1.C.a - Guadagno*** 1bb2f6\|monete]] dalla missione.
- La missione viene mostrata sul [[giornale\|giornale]] o sul [[Gameplay/Missioni/report\|report]] come ***fallita*** in base alla [[Gameplay/Missioni/missioni#**1.A - TIPI DI MISSIONE** 29f42\|tipologia di missione]].
- La missione avanza, se ne possiede uno, sul proprio [[ramo narrativo\|ramo narrativo]].

##### FALLITA
Una missione ***fallita*** ha le seguenti caratteristiche:

- La missione viene mostrata sul [[giornale\|giornale]] o sul [[Gameplay/Missioni/report\|report]] come fallita in base alla [[Gameplay/Missioni/missioni#**1.A - TIPI DI MISSIONE** 29f42\|tipologia di missione]].
- Il mercenario ha una probabilità del 25% di perdere il proprio [[equipaggiamento\|equipaggiamento]] se ne possiede uno
- Il mercenario non riporta [[Gameplay/Missioni/missioni#***1.C.a - Guadagno*** 1bb2f6\|monete]] dalla missione.
- La missione avanza, se ne possiede uno, sul proprio [[ramo narrativo\|ramo narrativo]].
  
##### SUPERATA CON CONSEGUENZA
Una missione ***superata con conseguenza*** ha le seguenti caratteristiche:

- In base ai ***tag*** della missione un mercenario guadagna il tratto [[ferita\|ferita]] o il tratto [[trauma\|trauma]] in relazione alle macro categorie di tag e approcci.
- Il tratto [[ferita\|ferita]] o [[trauma\|trauma]] assegnano un valore compreso tra -1 e -2 al rapporto di [[NPC/Mercenari/mercenari#**2.A.a - AFFINITÀ**\|affinità]].
- Il mercenario ha una probabilità del 15% di perdere il proprio [[equipaggiamento\|equipaggiamento]] se ne possiede uno
- Il mercenario ha una probabilità del 25% di riportare tra il 50% e il 70% delle [[Gameplay/Missioni/missioni#***1.C.a - Guadagno*** 1bb2f6\|monete]] previste dalla missione.
- La missione viene mostrata sul [[giornale\|giornale]] o sul [[Gameplay/Missioni/report\|report]] come ***superata*** in base alla [[Gameplay/Missioni/missioni#**1.A - TIPI DI MISSIONE** 29f42\|tipologia di missione]].
- La missione avanza, se ne possiede uno, sul proprio [[ramo narrativo\|ramo narrativo]].

##### SUPERATA
Una missione ***superata*** ha le seguenti caratteristiche:

- La missione viene mostrata sul [[giornale\|giornale]] o sul [[Gameplay/Missioni/report\|report]] come ***superata*** in base alla [[Gameplay/Missioni/missioni#**1.A - TIPI DI MISSIONE** 29f42\|tipologia di missione]].
- Il mercenario riporta il 100% delle [[Gameplay/Missioni/missioni#***1.C.a - Guadagno*** 1bb2f6\|monete]] previste dalla missione.
- La missione avanza, se ne possiede uno, sul proprio [[ramo narrativo\|ramo narrativo]].

##### SUPERATA CON BONUS
Una missione ***superata con bonus*** ha le seguenti caratteristiche:

- La missione viene mostrata sul [[giornale\|giornale]] o sul [[Gameplay/Missioni/report\|report]] come ***superata*** in base alla [[Gameplay/Missioni/missioni#**1.A - TIPI DI MISSIONE** 29f42\|tipologia di missione]].
- Il tratto [[ferita\|ferita]] o [[trauma\|trauma]] assegnano un valore compreso tra +1 e +2 al rapporto di [[NPC/Mercenari/mercenari#**2.A.a - AFFINITÀ**\|affinità]].
- Il mercenario riporta il 120% delle [[Gameplay/Missioni/missioni#***1.C.a - Guadagno*** 1bb2f6\|monete]] previste dalla missione.
- Il mercenario riporta un'item se la missione possiede il [[tag dono\|tag dono]].
- La missione avanza, se ne possiede uno, sul proprio [[ramo narrativo\|ramo narrativo]].






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