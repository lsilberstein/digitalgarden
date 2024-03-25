---
title: DataTable
description: 
type: definition
kurs: 
vorlesungnr: 0
tags:
  - SOEP
  - sose24
draft: false
date:
---
# DataTable

```xhtml
<h:dataTable value="#{messageController.getAllMessages()}" var="message">
	<h:column>
		#{message.text}
	</h:column>
</h:dataTable>
```

[dataTable (Jakarta Server Faces 3.0.0 VDL Documentation)](https://redesign--jakartaee.netlify.app/specifications/faces/3.0/vdldoc/html_basic/datatable)
