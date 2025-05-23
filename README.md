# Lotto

## Einleitung

Ihre Aufgabe ist es, ein Programm zu schreiben, das sechs zufällige Lottozahlen ermittelt und am Bildschirm ausgibt.

## Lottozahlenermittlung

* Die Lottozahlen müssen zwischen 1 und 45 liegen.
* Die Lottozahlen dürfen in einer Ziehung **nicht doppelt** vorkommen.
* Ermitteln Sie sechs zufällige Lottozahlen und speichern Sie diese in einem Array. Anschließend verwenden Sie den Bubblesort-Algorithmus, um die Lottozahlen in aufsteigender Reihenfolge zu sortieren.

## Benutzerschnittstelle

* Zeigen Sie die Lottozahlen in aufsteigender Reihenfolge an.
* Symbolisieren Sie die Kugeln der Ziehung, indem Sie jede der Zahlen in einem Kreis darstellen (p5js). So könnte eine Zahl aussehen:

  ![Zahl](./lotto.png)

* Fügen Sie einen p5-Button hinzu, der eine neue Ziehung auslöst.

## Zusatzaufgabe

* Ermitteln Sie eine "Zusatzzahl" (ebenfalls zwischen 1 und 45), die nicht in den Lottozahlen vorkommen darf.
* Stellen Sie die Zufallszahl in einem weiteren Kreis dar, der aber grafisch abgegrenzt ist, damit man sieht, dass es sich um eine Zusatzzahl handelt. Sie können z.B. mit Whitespace arbeiten, eine andere Farbe verwenden, etc., um den Unterschied zu verdeutlichen.

## Qualitätskriterien

* Vermeiden Sie Code-Duplikate.
* Verwenden Sie globale Variablen nur, wenn es unbedingt notwendig ist.
* Kapseln Sie den Bubblesort-Algorithmus in eine Funktion.

---

## Task (English Translation)

Your task is to write a program that determines six random lottery numbers and displays them on the screen.

### Lottery Number Determination

* The lottery numbers must be between 1 and 45.
* The lottery numbers must not be duplicated in a single draw.
* Determine six random lottery numbers and store them in an array. Then use the bubble sort algorithm to sort the numbers in ascending order.

### User Interface

* Display the lottery numbers in ascending order.
* Represent the drawn numbers as circles, displaying each number inside a circle (using p5js). For example, a number could look like this:

  ![Number](./lotto.png)

* Add a p5 button that triggers a new draw.

### Additional Task

* Determine an "additional number" (also between 1 and 45) that must not be among the main lottery numbers.
* Display the additional number in a separate circle, which is visually distinct so it is clear that it is the additional number. You can use whitespace, a different color, etc., to highlight the difference.

### Quality Criteria

* Avoid code duplication.
* Use global variables only when absolutely necessary.
* Encapsulate the bubble sort algorithm in a function.

