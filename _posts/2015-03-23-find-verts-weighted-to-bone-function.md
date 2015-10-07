---
layout: post
title: Find Verts Weighted to Bone Function
tags: 3dsmax maxscripts scripts
category: tutorials
excerpt: Here is a little function I wrote that will go through all selected meshes and find all the vertices weighted to a given bone.
---

Here is a little function I wrote that will go through all selected meshes and find all the vertices weighted to a given bone. I had to write this to find all the meshes that had a specific bone in their skin mod, but not just that! I needed to know which of those meshes had verts weighted to this specific bone.

The main task was to remove the influence of that bone from all meshes not necessarily remove the bone as the engine export strips out any bone that has no vertices weighted to it.

There are also ways to get the influenced verts of selected bone by hand, but I needed a way to go through hundreds to thousands of meshes in a timely manner.

{% livimeo https://vimeo.com/60972226 %}

```python
fn findWeightedVertsFn theBone =
(
    max modify mode
    clearListener()
    theAr = selection as array
    for obj in theAr do
    (
        select obj
        skinMods = getclassinstances Skin target:obj
        for s = 1 to skinMods.count where skinMods.count > 0 do
        (
            skel = skinOps.getnumberbones skinMods[s]
            verts = skinOps.getNumberVertices skinMods[s]
            for x = 1 to skel do
            (
                If (skinOps.getBoneName skinMods[s] x 0) == theBone do
                (
                    skinOps.selectBone skinMods[s] x
                    skinOps.selectVerticesByBone skinMods[s]

                    selectedVerts = #()
                    for v = 1 to verts do
                    (
                        theVert = skinOps.IsVertexSelected skinMods[s] v
                        if theVert == 1 do append selectedVerts v
                    )

                    if selectedVerts.count > 0 do
                    (
                        print (obj.name + " has " + (selectedVerts.count as string) + " verts weighted to " + theBone)
                    )
                )
            )
        )
    )
    clearselection()
)

/*
findWeightedVertsFn "The Bone Name"
*/
```
