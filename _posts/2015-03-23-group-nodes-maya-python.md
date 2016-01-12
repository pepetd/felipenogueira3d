---
layout: post
title: Group Nodes - Maya Python
tags: development maya python snippets
category: development
---

Hey guys!

Here is a quick snippet to just group nodes under their own little group hierarchie, which will provide us with a driver group and a x_form group. The x_form group is the one that contains the offset values from the parent node while the driver is the group we will use for all connections needed (sometime I even have two driver groups).

{% highlight python linenos %}
## Imports
import maya
import maya.cmds as cmds

## Creates a locator aligned to each of the selected objects and groups the locators to zero it.
objs = cmds.ls(sl=True)

for obj in objs:
    myParent = cmds.listRelatives(obj, p = True)
    myGroup = cmds.group(empty=True, name = "xform_" + obj)
    if myParent != None: cmds.parent(myGroup, myParent)
    orient = cmds.orientConstraint(obj, myGroup)
    point = cmds.pointConstraint(obj, myGroup)
    cmds.delete(orient, point)
    myDrGroup = cmds.group(empty=True, name = "driver_" + obj)
    orient = cmds.orientConstraint(obj, myDrGroup)
    point = cmds.pointConstraint(obj, myDrGroup)
    cmds.delete(orient, point)
    cmds.parent(obj, myDrGroup)
    cmds.parent(myDrGroup, myGroup)

## END.
{% endhighlight %}
