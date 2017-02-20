---
categories:
- tutorials
date: '2015-03-23T12:31:28-07:00'
description: Here is a little function I wrote that will go through all selected meshes
  and find all the vertices weighted to a given bone. I had to write this to find
  all the meshes that had a specific bone in their skin mod, but not just that! I
  needed to know which of those meshes had verts weighted to this specific bone.
tags:
- 3dsmax
- maxscripts
- scripts
title: Find Verts Weighted to Bone Function
type: post

---
<script src="https://gist.github.com/anonymous/54180b4f4d1ed854e05fada9c4451862.js"></script>Here is a little function I wrote that will go through all selected meshes and find all the vertices weighted to a given bone. I had to write this to find all the meshes that had a specific bone in their skin mod, but not just that! I needed to know which of those meshes had verts weighted to this specific bone.

The main task was to remove the influence of that bone from all meshes not necessarily remove the bone as the engine export strips out any bone that has no vertices weighted to it.

There are also ways to get the influenced verts of selected bone by hand, but I needed a way to go through hundreds to thousands of meshes in a timely manner.

<iframe src="https://player.vimeo.com/video/60972226" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<script src="https://gist.github.com/anonymous/54180b4f4d1ed854e05fada9c4451862.js"></script>