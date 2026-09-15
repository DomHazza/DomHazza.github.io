---
title: Aerofoil optimisation with adjoint methods
description: Using adjoint-based gradients to reshape aerofoils efficiently toward a target aerodynamic objective.
date: 2025-06-01
tags: [adjoint methods, CFD, optimisation, Python]
featured: true
---

## Overview

Aerodynamic shape optimisation asks a simple question with an expensive answer:
given a performance target — lift, drag, or a downforce figure — what shape
achieves it best? The difficulty is that a useful aerofoil is described by many
design variables, and every evaluation of the flow around it is costly.

## Why adjoints

A gradient-based optimiser needs the derivative of the objective with respect
to every design variable. Computing those derivatives by finite differences
costs roughly one flow solve *per variable* — intractable once there are
hundreds of them.

The adjoint method sidesteps this. By solving a single additional "adjoint"
system alongside the flow, it recovers the gradient with respect to **all**
design variables at a cost that is essentially independent of how many there
are. That one property is what makes optimising a richly-parametrised geometry
feasible at all.

## Method

1. **Geometry parametrisation** — describe the aerofoil shape with a manageable
   set of design variables.
2. **Flow solve** — evaluate the aerodynamics of the current shape.
3. **Adjoint solve** — solve the adjoint system to get the objective's gradient
   with respect to every design variable in one shot.
4. **Optimisation step** — update the shape along the gradient, deform the mesh,
   and repeat until converged.

---

*Full write-up in progress.*
