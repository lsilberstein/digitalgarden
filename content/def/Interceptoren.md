---
title: Interceptoren
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
  - Interceptor
---
# Interceptoren

Ist analog zu EJB-Interceptoren. Wir deklarieren eine zusätzliche Annotation zur Deklaration der Interceptor-Bindung und dann `@AroundInvoke` wie EJBs.

```java nums
@InterceptorBinding
@Target({TYPE, METHOD})
@Retention(RUNTIME)
public @Interface Monitored {
}
```

```java nums
@Monitored  
@Interceptor  
public class MonitoringInterceptor {

@AroundInvoke  
	public Object monitor(InvocationContext context) throws Exception {
		// only options, not a real implementation:
		... = context.getParameters(); 
		...  
		context.setParameters(...); 
		logger.info("AroundInvoke for " context.getTarget() + "." + context.getMethod()); 
		Object result = context.proceed();
		...
		return result;
	}
}
```

Der [Invocationkontext](https://docs.oracle.com/javaee/7/api/javax/interceptor/InvocationContext.html) gibt an, in welchem Kontext die [[Audit|monitor]]-Methode aufgerufen wird. Die proceed()-Methode ruft, falls vorhanden, den nächsten Interceptor auf. Falls nicht, wird die originale Methode aufgerufen. Fehlt dieser Aufruf im Interceptor, wird die originale Methode nicht aufgerufen!

```java nums
public class MethodPool {
	@Monitored
	public int foo(int ... args) {
		return Arrays.stream(args).sum();
	}
}
```

Interceptoren müssen aktiviert werden in `beans.xml`

```xml
<beans xmlns="http://xmlns.jcp.org/xml/ns/javaee"
	   ...>
	<interceptors>
		<class>
			de.jsfpraxis.cdi.interceptors.MonitoringInterceptor
		</class>
	</interceptors>
</beans>
```