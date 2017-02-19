---
categories:
- development
date: 2015-03-23T12:34:20-07:00
description: "Snippet to constraint all selected nodes to the last selected."
tags:
- development
- maya
- python
- snippets
title: Parent Constraint to Last - Maya Python
type: post
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