---
layout: post
title: Parent Constraint to Last - Maya Python
tags: development maya python snippets
category: development
---

Snippet to constraint all selected nodes to the last selected.

```python
import maya.cmds as cmds
nodes = cmds.ls(sl=True)
myParent = grps[-1]
grps.pop()
for node in nodes:
    cmds.parentConstraint(parent, myParent, mo=True, weight=1) ## mo = False if you do not want to maintain offset
```
