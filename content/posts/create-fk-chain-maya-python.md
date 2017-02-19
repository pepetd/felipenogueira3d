---
categories:
- development
date: 2015-03-23T12:29:30-07:00
description: "Hey guys! first rigging script for python in maya! pretty simple, it creates a FK chain from selected joints with flags to align the controllers to world or to the Joint. Wrote this script to do Gainer's(Sasktel) spine rig in Maya ( I am re-rigging him in Maya.)"
tags:
- development
- maya
- python
- snippets
title: Create FK Chain - Maya Python
type: post
---

Hey guys! first rigging script for python in maya! pretty simple, it creates a FK chain from selected joints with flags to align the controllers to world or to the Joint. Wrote this script to do Gainer's(Sasktel) spine rig in Maya ( I am re-rigging him in Maya.)

```python
# ------------------------------------------------------------------------------------------------------
# Rigging Modules
# -- Method Rigger (Maya)
#
# By: Felipe[PePeTD]Nogueira
# ------------------------------------------------------------------------------------------------------

## Imports
import maya
import maya.cmds as cmds

# Create FK Chain rig Module.
# createFKChain(world) - if left unchanged, world = True by default.
# -------------------------------------------------------------------
def createFKChain(world=True):
    ## Grab current selection (!warning this function works on any type of node).
    joints = cmds.ls(sl=True)
    locators = []
    circles = []
    groups = []
    counter = 0

    ## Goes through the newly created list of joints and creates a locator and controller
    ## for each node grouping and constrainning it all accordinly.
    for joint in joints:
        curPos = cmds.xform(joint, q=True, ws=True, t=True)

        ## Creates the locator at the position of the node, Centers its pivot, and freezes it.
        curLoc = cmds.spaceLocator(p=curPos)
        locators.append(curLoc)
        cmds.CenterPivot(curLoc)
        cmds.parent(curLoc, joint)
        cmds.makeIdentity(curLoc, apply=True, t=1, r=1, s=1)

        ## Creates the Circle shape at the position of the node and aligns it to the node depending
        ## on the state of (world) if true then aligns it to world if false the circle shapes will be
        ## aligned to the node(joint).

        ## Align the control curves to world or to each given node according to the state of (world).
        if world == True:
            curCircle = cmds.circle(nr=[0, 0, 1], r=1, c=curPos)
            circles.append(curCircle)
            cmds.CenterPivot(curCircle)
            cmds.makeIdentity(curCircle, apply=True, t=1, r=1, s=1)
            curGroup = cmds.duplicate(curCircle[0], rr=True, rc=True, po=True)
            curGroup[0] = cmds.rename(curGroup[0], (curGroup[0]+"_Grp"))
            groups.append(curGroup)
            cmds.parent(curCircle[0], curGroup[0])
        else:
            curCircle = cmds.circle(nr=[1, 0, 0], r=1)
            circles.append(curCircle)
            cmds.parent(curCircle[0], joint)
            cmds.CenterPivot(curCircle)
            cmds.makeIdentity(curCircle, apply=False, t=1, r=1, s=1)
            cmds.parent(curCircle[0], w=True)
            curGroup = cmds.duplicate(curCircle[0], rr=True, rc=True, po=True)
            curGroup[0] = cmds.rename(curGroup[0], (curGroup[0]+"_Grp"))
            groups.append(curGroup)
            cmds.parent(curCircle[0], curGroup[0])

        ## Checks to see if we are on the first node or not and does the appropriate tasks.
        if counter == 0:
            cmds.parent(curLoc[0], w=True)
            rigGroup = cmds.duplicate(curLoc[0], rr=True, rc=True, po=True)
            rigGroup[0] = cmds.rename(rigGroup[0], (rigGroup[0]+"_Grp"))
            cmds.parent(joint, rigGroup[0])
            cmds.parent(curLoc[0], rigGroup[0])
        else:
            cmds.parent(curLoc[0], locators[counter-1][0])
            cmds.parent(curGroup[0], circles[counter-1][0])

        ## Finally we parentContraint the joint to the locator.
        cmds.parentConstraint(curCircle[0], curLoc[0], mo=True)
        cmds.parentConstraint(curLoc[0], joint, mo=True)

        counter += 1

createFKChain(world=False)
## END.
```