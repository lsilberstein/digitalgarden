---
title: Bean Validation
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - FTSE
  - wise2324
draft: false
date: 
aliases:
  - Validierung
  - Constraint
  - Constraints
---

# Bean Validation

Validierung ist zentraler Baustein einer jeden Anwendung, Häufig, aber nicht zentral realisiert, z.B. in Präsentationsund Persistenzschicht separat und verschieden gemacht.  
Mit Bean Validation geht das aber. Die Idee: [[Properties]] des Geschäftsobjekts (POJO) werden Validierungsannotationen versehen. Diese werden unabhängig von der Verwendung des Objekts überwacht.

| Annotation       | Beschreibung                                                                                       |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| @Null            | Element muss `null` sein                                                                           |
| @NotNull         | Element darf nicht `null` sein                                                                     |
| @AssertTrue      | Element muss `true` sein                                                                           |
| @AssertFalse     | Element muss `false` sein                                                                          |
| @Min             | Element ist größer oder gleich Wert von `value` sein                                               |
| @Max             | Element ist kleiner oder gleich Wert von `value`                                                   |
| @DecimalMin      | Element ist größer oder gleich Wert von `value`                                                    |
| @DecimalMax      | Element ist kleiner oder gleich Wert von `value`                                                   |
| @Negative        | Element muss negativ sein                                                                          |
| @NegativeOrZero  | Element muss negativ oder 0 sein                                                                   |
| @Positive        | Element muss positiv sein                                                                          |
| @PositiveOrZero  | Element muss positiv oder 0 sein                                                                   |
| @Size            | Größe des Elements muss zwischen `min` oder `max` liegen                                           |
| @Digits          | Element darf nicht mehr Vorund Nachkommastellen haben, als in `integer` und `fraction` angegeben |
| @Past            | Element muss ein Datum in der Vergangenheit sein                                                   |
| @PastOrPresent   | Element muss Datum in der Vergangenheit oder Gegenwart sein                                        |
| @Future          | Element muss ein Datum in der Zukunft sein                                                         |
| @FutureOrPresent | Element muss ein Datum in der Zukunft oder Gegenwart sein                                          |
| @Pattern         | Element muss Pattern in `regexp` entsprechen.                                                      |
| @NotEmpty        | Element darf nicht `null` oder leer sein                                                           |
| @NotBlank        | Element darf nicht `null` sein und muss mindestens einen Nicht-Leerraum enthalten                  |
| @Email           | Element muss E-Mail-Syntax entsprechen                                                             |

Wenn Objekte übergeben werden sollen, so kann mit @Valid ein gesamtes übergebenes Objekt überprüft werden.

## Anwendungsdefinierte Constraints

Wir können mit der Definition einer eigenen Annotation und einem verbundenen Constraint-Validierer (Implementierung eines Interfaces) eigene Constraints definieren. Zum Beispiel das Constraint: Volljährig

```java nums
@Constraint(validatedBy = VolljähringValidator.class)
@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface Volljährig {
	String message() default "Nicht volljähring";
	Class<?>[] groups() default {};
	Class<? extends Payload>[] payload() default {};
}
```

```java nums
public class VolljaehrigValidator implements ConstraintValidator<Volljaehrig, LocalDate> {

	@Override
	public boolean isValid(LocalDate date, ConstraintValidatorConstext context) {
		return LocalDate
			.from(date)
			.until(LocalDate.now(), ChronoUnit.YEARS) >= 18;
	}
}
```

Die Verwendung sieht dann wie folgt aus:

```java nums
@NotNull
@Volljaehrig
private LocalDate obb;
```
