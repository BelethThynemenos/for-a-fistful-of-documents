---
{"dg-publish":true,"permalink":"/npc/mercenari/mercenari/","dg-note-properties":{}}
---

# **MERCENARI**
Si definiscono *mercenari* tutti quegli NPC che possono unirsi alla gilda e possono portare a termine le [[Gameplay/Missioni/missioni\|missioni]]. Sono definiti nella [[NPC/Mercenari/lista dei mercenari\|lista dei mercenari]] tutti i mercenari esistenti.

Ogni mercenario è composto da:

- Caratteristiche informative
	- *[[NPC/Mercenari/mercenari#**1.A - SPRITE**\|Sprite]]*
	- *[[NPC/Mercenari/mercenari#**1.B - BACKGROUND**\|Background]]*

- Caratteristiche di gameplay
	- *[[NPC/Mercenari/mercenari#**2.A - STATISTICHE DEI MERCENARI**\|Statistiche]]*
	- *[[NPC/Mercenari/mercenari#**2.B - TRATTI DEI MERCENARI**\|Tratti]]*
	- *[[NPC/Mercenari/mercenari#**2.C - AFFINITÀ**\|Affinità]]*
	- *[[NPC/Mercenari/mercenari#**2.D - STATO**\|Stato]]*

## **1 - CARATTERISTICHE INFORMATIVE**
Ogni mercenario è definito da una serie di caratteristiche informative.
#### **1.A - SPRITE**
Le sprite rappresentano l'aspetto estetico del mercenario rispetto al suo [[NPC/Mercenari/mercenari#**2.D - STATO**\|stato]].

- Sprite base
- Sprite mercenario ferito
- Sprite mercenario traumatizzato
- Sprite mercenario ferito e traumatizzato
- Sprite mercenario su mappa

#### **1.B - BACKGROUND**
Il background rappresenta  tutti gli elementi narrativi di un mercenario.
Attraverso il background sono definite tutte le risposte ottenute dal giocatore alle domande poste e tutte le nuove domande sbloccate nel tempo, relativamente al valore di [[NPC/Mercenari/mercenari#**2.C - AFFINITÀ**\|affinità]].
Derivano inoltre dal background del mercenario tutti i [[NPC/Mercenari/mercenari#**2.B - TRATTI DEI MERCENARI**\|tratti]] ad esso associati.
### **1.B.a - OBIETTIVI DEI MERCENARI** 
Ogni mercenario possiede un obiettivo definito. Gli obiettivi sono legati strettamente al background del mercenario e spingono lo stesso a preferire determinati approcci, tipi di missioni o necessità di natura economica. Un mercenario una volta completato il proprio obiettivo, in base al proprio valore di [[NPC/Mercenari/mercenari#**2.C - AFFINITÀ**\|affinità]] con il giocatore, potrebbe scegliere di abbandonare o restare nella gilda.

## **2 - CARATTERISTICHE DI GAMEPLAY**
Ogni mercenario è definito da un set di otto statistiche che definiscono l'entità delle sue capacità e che si rispecchiano direttamente nell'entità dei tratti di un mercenario.
### **2.A - STATISTICHE DEI MERCENARI**
Le statistiche sono otto categorie che determinano come il mercenario approccia le [[Gameplay/Missioni/missioni\|missioni]] e in che misura. Ogni statistica viene direttamente calcolata attraverso i [[NPC/Mercenari/mercenari#**2.B - TRATTI DEI MERCENARI**\|tratti dei mercenari]].
Le statistiche durante il calcolo relativo al risultato delle missioni vengono comparati a tutti i [[Gameplay/Missioni/missioni#**1.A.a - TAG APPROCCIO**\|tag approccio]] che le richiedono.

Le otto statistiche sono:

| **FORTUNA**      | **FEDE**      |
| ---------------- | ------------- |
| **FORZA**        | **DESTREZZA** |
| **INTELLIGENZA** | **CARISMA**   |
| **TEMPRA**       | **SANITÀ**    |

#### **2.A.a - VALORI DELLE STATISTICHE**
Ogni statistica è definita da due valori ed entrambi i valori sono quantificati su una scala che va da 1 a 100. Ogni [[NPC/Mercenari/mercenari#**2.B.a - TRATTI BASE**\|tratto base]] influenza direttamente i due valori, sommando i bonus e i malus ad esso associati.

- ***Valore di capacità***
	Il valore di capacità definisce la **skill effettiva di un mercenario** in un determinato campo di competenza, tale valore è utilizzato nel calcolo dei risultati di missione per definire il successo o il fallimento.

- ***Valore di apprezzamento***
	Il valore di apprezzamento determina **l'interesse di un mercenario verso il rispettivo campo di competenza** e permette al mercenario di **scegliere una categoria di approcci** più vicino al proprio interesse durante lo svolgimento di una missione.


| ![newplot (1).png](/img/user/Immagini/newplot%20(1).png)                                                                                      |
| --------------------------------------------------------------------------------------------------------- |
| `Rappresentazione visiva di apprezzamento e capacità di un mercenario rispetto alle proprie statistiche.` |
### **2.B - TRATTI DEI MERCENARI**
Ogni mercenario possiede una serie di tratti che vanno a descrivere elementi del background in rispettive capacità che vengono messe in campo durante la risoluzione di una missione.

I tratti si dividono in due macro categorie:
- Tratti base
- Tratti speciali
#### **2.B.a - TRATTI BASE**
Si definiscono tratti base tutti i tratti legati direttamente alle [[NPC/Mercenari/mercenari#**2.A - STATISTICHE DEI MERCENARI**\|statistiche dei mercenari]] e che sono necessari a definire il valore di ogni statistica. 

I tratti base sono eventi che il mercenario ha vissuto e che hanno influenzato direttamente la categoria o le categorie correlate. Ogni tratto base influenza sia il valore di capacità che il valore di apprezzamento.
Ogni tratto base segue la seguente struttura:

- Nome tag
- Bonus
- Malus
- Tratto speciale associato (*variabile*)

Questo significa ad esempio che un tratto può essere così riassunto:

- **Tag: cresciuto in un monastero**
- Bonus:
	+20 *capacità* fede
	+5 *capacità* intelligenza
	+10 *capacità* sanità
- Malus:
	-20 *apprezzamento* fede
- **Tratto** **speciale**:
	odio per i preti
##### **2.B.a.1 - VALORI DEI TRATTI**
Ogni tratto possiede relativamente a differenti mercenari, valori differenti rispetto alle statistiche a cui è legato, variabili nell'esperienza del singolo. Questo significa che ad esempio, due mercenari cresciuti in un contesto simile potrebbero aver appreso differenti capacità e apprezzamenti.

| MERCENARIO A                                                                                 | MERCENARIO B                                                                                   |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **Tag: cresciuto in un monastero**                                                           | **Tag: cresciuto in un monastero**                                                             |
| **Bonus**:<br>	+10 *capacità* fede<br>	+10 *capacità* intelligenza<br>	+15 *capacità* sanità | **Bonus**:<br>	+5 *capacità* fede<br>	+10 *capacità* intelligenza<br>	+20 *apprezzamento* fede |
| **Malus**:<br>	-5 *apprezzamento* fede                                                       | **Malus**:<br>	-20 *capacità* sanità                                                           |
| **Tratto speciale:**<br>	-                                                                   | **Tratto speciale:**<br>	vedere gli spettri                                                    |
#### **2.B.b - TRATTI SPECIALI**
Si definiscono tratti speciali tutti quei tratti che non sono legati direttamente ad una statistica. Fanno parte dei tratti speciali ***odi, paure, abilità speciali.*** I tratti speciali sono calcolati separatamente rispetto alle statistiche e vengono utilizzati all'interno del calcolo del risultato di una missione quando richiesti dai relativi [[Gameplay/Missioni/missioni#**1.A.b - TAG CONTESTO**\|tag di contesto]].
![Sistema mercenari tratti.png](/img/user/Immagini/Sistema%20mercenari%20tratti.png)
Solo due tratti vengono associati dinamicamente durante il gameplay ad un mercenario e vengono trattati nella sezione [[NPC/Mercenari/mercenari#**2.D - STATO**\|stato]], relativamente a ferite e traumi.
### **2.C - AFFINITÀ**
Ogni mercenario possiede un valore di affinità. L'affinità è la statistica che determina  l'apprezzamento del mercenario verso il giocatore, definendo il loro rapporto interpersonale. 

L'affinità cresce o si abbassa nei seguenti casi:
- **dialoghi**
	*attraverso le scelte di dialogo i giocatori aumenteranno o diminuiranno l'affinità in base alle preferenze del singolo mercenario, scegliendo il modo in cui affrontare un mercenario e un singolo discorso in base a quello che ha compreso essere la personalità del mercenario.*

- **[[Gameplay/Missioni/missioni#**1.D.b - CONSEGUENZE E BONUS**\|risultati di missione]]**
	*un giocatore vedrà influenzare la propria affinità con il mercenario in base ai risultati delle missioni. Un mercenario ferito o traumatizzato vedrà abbassarsi la sua affinità più facilmente rispetto a un mercenario che completa con bonus una missione a lui assegnata.*

- **tag specifici messi in gioco da una [[Gameplay/Missioni/missioni\|missione]] e [[NPC/Mercenari/mercenari#**2.B.b - TRATTI SPECIALI**\|tratti speciali]] assegnati a un mercenario** 
	*la combinazione di tag e tratti speciali potrebbe generare come risultato una variazione positiva o negativa dell'affinità. Ad esempio un mercenario con il tratto "vincente" può come personale peculiarità far scendere la propria affinità ogni volta che perde una partita a [[Hurram\|Hurram]] o fallisce una missione ad esso assegnata.*

##### **2.C.a - AFFINITÀ POSITIVA**
Con la variazione positiva del valore di affinità i giocatori ottengono come reward una maggiore comprensione dei mercenari presenti nella gilda, sbloccando nuove domande e la possibilità nel tempo di influenzare gli approcci di un mercenario, attraverso le scelte di dialogo. In ultima misura, un'affinità positiva potrebbe avere come risultato quello di far si che i mercenari restino legati alla gilda una volta completato il proprio [[NPC/Mercenari/mercenari#**1.A - OBIETTIVI DEI MERCENARI**\|obiettivo]].

##### **2.C.b - AFFINITÀ NEGATIVA**
Con la variazione negativa del valore di affinità i giocatori non otterranno nuovi dialoghi nel tempo e il rapporto con il mercenario potrebbe rompersi al punto da spingere il mercenario a lasciare la gilda prematuramente. 

### **2.D - STATO**
Un mercenario può ottenere 2 particolari gruppi di tratti che influenzano sia le sue [[NPC/Mercenari/mercenari#**1 - CARATTERISTICHE INFORMATIVE**\|caratteristiche informative]], sia le sue [[NPC/Mercenari/mercenari#**2 - CARATTERISTICHE DI GAMEPLAY**\|caratteristiche di gameplay]].

I tratti ***FERITA*** e ***TRAUMA*** sono speciali tratti che vengono applicati quando i mercenari tornano da una missione avendo ottenuto una [[Gameplay/Missioni/missioni#**1.D.b - CONSEGUENZE E BONUS**\|conseguenza]], andando ad influenzare negativamente le statistiche di Tempra e di Sanità. Ogni qualvolta che un mercenario sviluppa una ferita o un trauma ne corrisponde una relativa modifica della sprite, permettendo al giocatore di percepire visivamente il cambio di stato.

#### **2.D.a - RIMUOVERE UNO STATO**
Ci sono unicamente tre modi per far si che un mercenario perda uno stato che ha guadagnato attraverso una missione:

- **PASSAGGIO DEL TEMPO**
	dopo un tempo compreso tra 2 e 6 giorni senza che un mercenario abbia svolto missioni, i tratti ferita e trauma vengono naturalmente rimossi.
- **GUARITORI**
	richiedere l'intervento di un guaritore permette al giocatore di curare un tratto ferita o trauma nel giro di 1 o 2 giorni a seconda del valore del tratto
- **UNGUENTI E MEDICINE**
	tramite un unguento o una medicina acquistata dai mercanti è possibile rendere più rapido il processo di guarigione di un mercenario o rimuovere totalmente un tratto ferita o trauma.