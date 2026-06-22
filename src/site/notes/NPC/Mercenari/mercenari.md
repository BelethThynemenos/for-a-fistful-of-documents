---
{"dg-publish":true,"permalink":"/npc/mercenari/mercenari/","dg-note-properties":{}}
---

# **MERCENARI**
Si definiscono *mercenari* tutti quegli NPC che possono unirsi alla gilda per portare a termine le missioni che vengono consegnate e definiti nella [[NPC/Mercenari/lista dei mercenari\|lista dei mercenari]].

Un mercenario è definito da:

- Caratteristiche informative
	- Sprite
	- Background

- Caratteristiche di gameplay
	- Statistiche
	- Tratti
	- Stato

## **1 - CARATTERISTICHE INFORMATIVE**
Ogni mercenario è definito da una serie di caratteristiche informative.
Le sprite rappresentano l'aspetto estetico del mercenario rispetto al suo [[stato\|stato]].

- Sprite base
- Sprite mercenario ferito
- Sprite mercenario traumatizzato
- Sprite mercenario ferito e traumatizzato
- Sprite mercenario su mappa

Il background rappresenta invece tutti gli elementi narrativi di un mercenario che vanno a determinare il modo con cui si approccerà ai dialoghi e i tratti derivanti.

Attraverso il background saranno definite tutte le risposte ai dialoghi che i giocatori sbloccheranno nel tempo con i mercenari e quello che è l'obiettivo di ogni mercenario.
### **1.A - OBIETTIVI DEI MERCENARI** 
Ogni mercenario possiede un obiettivo definito. Gli obiettivi sono legati strettamente al background del mercenario e spingono lo stesso a preferire determinati approcci, tipi di missioni o necessità di natura economica. Un mercenario una volta completato il proprio obiettivo, in base al proprio valore di [[NPC/Mercenari/mercenari#**2.A.a - AFFINITÀ**\|affinità]] con il giocatore, potrebbe scegliere di abbandonare o restare nella gilda.

## **2 - CARATTERISTICHE DI GAMEPLAY**
Ogni mercenario è definito da un set di otto statistiche che definiscono l'entità delle sue capacità e che si rispecchiano direttamente nell'entità dei tratti di un mercenario.
### **2.A - STATISTICHE DEI MERCENARI**
Le statistiche sono otto categorie che determinano come il mercenario approccia le missione e in che misura. Ogni statistica ha associati dei tratti, che sono direttamente influenzati nel valore dalla categoria a cui fanno parte. 

| **FORTUNA**      | **FEDE**      |
| ---------------- | ------------- |
| **FORZA**        | **DESTREZZA** |
| **INTELLIGENZA** | **CARISMA**   |
| **TEMPRA**       | **SANITÀ**    |

Ogni statistica è definita da due valori, entrambi i valori sono definibili su una scala che va da 1 a 10.

- Valore di capacità
	Il valore di capacità determina la capacità effettiva di un mercenario in un determinato campo di competenza, influenzando la sua effettiva capacità di superare una missione, affrontando i tag. Il valore di capacità influenza direttamente il valore dei singoli tratti e si somma nel calcolo finale per il risultato.

- Valore di apprezzamento
	Il valore di apprezzamento determina l'interesse di un mercenario verso il rispettivo campo di competenza e permette al mercenario di scegliere un approccio più vicino al proprio interesse durante lo svolgimento di una missione.

| ![newplot (1).png](/img/user/Immagini/newplot%20(1).png)                                                                                      |
| --------------------------------------------------------------------------------------------------------- |
| `Rappresentazione visiva di apprezzamento e capacità di un mercenario rispetto alle proprie statistiche.` |
#### **2.A.a - AFFINITÀ**
Ogni mercenario possiede un valore di affinità. L'affinità è la statistica che lega l'apprezzamento del mercenario al giocatore, definendo il loro rapporto interpersonale. 

L'affinità cresce o si abbassa nei seguenti casi:
- **dialoghi**
	*attraverso le scelte di dialogo i giocatori aumenteranno o diminuiranno l'affinità in base alle preferenze del singolo mercenario, scegliendo il modo in cui affrontare un mercenario e un singolo discorso in base a quello che ha compreso essere la personalità del mercenario.*

- **[[Gameplay/Missioni/missioni#**1.D.b - CONSEGUENZE E BONUS**\|risultati di missione]]**
	*un giocatore vedrà influenzare la propria affinità con il giocatore in base ai risultati delle missioni. Un mercenario ferito o traumatizzato vedrà abbassarsi la sua affinità più facilmente rispetto a un mercenario che completa con bonus una missione a lui assegnata.*

- **tag specifici messi in gioco da una [[Gameplay/Missioni/missioni\|missione]] e [[tratti speciali\|tratti speciali]] assegnati a un mercenario** 
	*la combinazione di tag e tratti speciali potrebbe generare come risultato una variazione positiva o negativa dell'affinità. Ad esempio un mercenario con il tratto "vincente" può come personale peculiarità far scendere la propria affinità ogni volta che perde una partita a [[Hurram\|Hurram]] o fallisce una missione ad esso assegnata.*

##### **AFFINITÀ POSITIVA**
Con la variazione positiva del valore di affinità i giocatori ottengono come reward una maggiore comprensione dei mercenari presenti nella gilda, sbloccando nuove domande e la possibilità nel tempo di influenzare gli [[approcci\|approcci]] di un mercenario, attraverso le scelte di dialogo. In ultima misura, un'affinità positiva potrebbe avere come risultato quello di far si che i mercenari restino legati alla gilda una volta completato il proprio [[NPC/Mercenari/mercenari#**1.A - OBIETTIVI DEI MERCENARI**\|obiettivo]].

##### **AFFINITÀ NEGATIVA**
Con la variazione negativa del valore di affinità i giocatori non otterranno nuovi dialoghi nel tempo e il rapporto con il mercenario potrebbe rompersi al punto da spingere il mercenario a lasciare la gilda prematuramente. 

### **2.B - TRATTI DEI MERCENARI**
Ogni mercenario possiede una serie di tratti che vanno a descrivere elementi del background in rispettive capacità che vengono messe in campo durante la risoluzione di una missione.

I tratti si dividono in due macro categorie:
- Tratti base
- Tratti speciali

#### **2.B.a - TRATTI BASE**
Si definiscono tratti base tutti i tratti legati direttamente alle [[NPC/Mercenari/mercenari#**2.A - STATISTICHE DEI MERCENARI**\|statistiche dei mercenari]] e che quindi vanno a sommarsi al loro valore al momento del calcolo del [[Gameplay/Missioni/missioni#**1.D.a - RISULTATI**\|risultato di una missione]].

I tratti base sono *abilità* che il mercenario possiede relativamente alla categoria selezionata. Questo significa ad esempio che un mercenario con valore di forza 8 non ha automaticamente accesso all'abilità di combattimento, fattore che è invece definito dal tratto *combattimento forza*, ma andrà comunque ad aggiungere il suo valore di forza nel momento in cui viene richiesto dalla missione, senza un'ulteriore bonus dato dall'abilità.