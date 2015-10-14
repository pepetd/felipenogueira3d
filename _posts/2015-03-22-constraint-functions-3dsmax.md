---
layout: post
title: Constraint Functions - 3DS Max
tags: 3dsmax development maxscript snippets
category: development
---

In the past years I started creating my own library of functions and scripts that would automate a lot of the processes that I often use when rigging characters to speed up the rigging process even more.

I have so many rigging functions that one day I realized I could create an entire humanoid rig in a matter of minutes by using all these functions as long as I had a skeleton created.

In time I will be releasing a function library for all of you to check it out, meanwhile, here is a little preview of some of the functions I use often, the Look-At constraint could use more work but the Position Constraint, Orientation Constraint and Path Constraint Functions are perfect for pretty much anything that I would use them for.

```python
-- Position Constraint
-- PosConst (Affected Node) (Target Node) (Target Weight)
-- (newCon:true if fresh constrain, false if adding target to existing constrain)
fn PosConst obj target tarWeight newCon:true =
(
    if newCon == true then
    (
        Pc = Position_Constraint()
        obj.pos.controller.available.controller = Pc
        posConstraint = Pc.constraints
        posConstraint.appendtarget target tarWeight
    )
    else
    (
        obj.position.controller.Position_Constraint.appendtarget target tarWeight
    )
    obj.pos.controller.setactive 3
)

-- Look-At Constraint
-- LookConst (Affected Node) (Target Node) (upNode:UpNode Node) (Target Weight)
-- (newCon:true if fresh constrain, false if adding target to existing constrain)
fn LookConst obj target upNode tarWeight newCon:true =
(
    if newCon == true then
    (
        Lc = LookAt_Constraint()
        obj.rotation.controller.available.controller = Lc
        locConstraint = Lc.constraints
        locConstraint.appendtarget target tarWeight
        Lc.upnode_world = false
        Lc.pickUpNode = upNode
        Lc.lookat_vector_length = 0
    )
    else
    (
        obj.rotation.controller.LookAt_Constraint.appendtarget target tarWeight
    )
    obj.rotation.controller.setactive 3
)

-- Orientation Constraint
-- OrientConst (Affected Node) (Target Node) (Target Weight) (keepOff: keep off-set True or False)
-- (newCon:true if fresh constrain, false if adding target to existing constrain)
fn OrientConst obj target tarWeight keepOff:false newCon:true =
(
    if newCon == true then
    (
        Oc = Orientation_Constraint()
        obj.rotation.controller.available.controller = Oc
        orientConstraint = Oc.constraints
        orientConstraint.appendtarget target tarWeight
        Oc.relative = keepOff
    )
    else
    (
        obj.rotation.controller.Orientation_Constraint.appendtarget target tarWeight
    )
    obj.rotation.controller.setactive 3
)

-- Path Constraint
-- PathConst (Affected Node) (Target Node) (Target weight) (Percent on path)
fn PathConst obj target tarWeight percent =
(
    Pc = Path_Constraint()
    obj.pos.controller.available.controller = Pc
    Pc.path = target
    deletekeys obj
    Pc.follow = true
    Pc.percent = percent
    obj.pos.controller.setactive 3
)


-- Freeze Transform -- Function created by Mathieson Facer.
-- FreezeTransform (Obj to Freeze)
fn FreezeTransform Obj =
(
    local curObj = Obj
    if classof CurObj.rotation.controller != Rotation_Layer do
    (
        -- freeze rotation
        curObj.rotation.controller = Euler_Xyz()
        curObj.rotation.controller = Rotation_list()
        curObj.rotation.controller.available.controller = Euler_xyz()

        /* "Localization on" */
        CurObj.rotation.controller.setname 1 "Frozen Rotation"
        CurObj.rotation.controller.setname 2 "Zero Euler XYZ"

        /* "Localization off" */
        CurObj.rotation.controller.SetActive 2
    )

    if classof CurObj.position.controller != Position_Layer do
    (
        -- freeze position
        CurObj.position.controller = Bezier_Position()
        CurObj.position.controller = position_list()
        CurObj.position.controller.available.controller = Position_XYZ()

        /* "Localization on" */
        CurObj.position.controller.setname 1 "Frozen Position"
        CurObj.position.controller.setname 2 "Zero Pos XYZ"

        /* "Localization off" */
        CurObj.position.controller.SetActive 2

        -- position to zero
        CurObj.Position.controller[2].x_Position = 0
        CurObj.Position.controller[2].y_Position = 0
        CurObj.Position.controller[2].z_Position = 0
    )
)
```
