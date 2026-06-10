---
title: Aerofoil optimisation
description: A custom CFD solver and a head-to-head comparison of optimisation strategies for aerofoil design.
date: 2025-06-01
tags: [machine learning, fluid dynamics, Python]
featured: true
---

*(Placeholder writeup drawn from my CV — to be expanded with figures and results.)*

How do you find the best shape for an aerofoil when every candidate shape costs a full flow
simulation to evaluate? This project explored that question end to end: build the solver, then
race optimisation strategies against each other on top of it.

## The solver

I wrote a CFD solver in Python to simulate the flow around an aerofoil, giving me full control
over the simulation loop — and, crucially, access to the solver internals that adjoint methods
need.

## The optimisers

With the solver in place, I compared several very different strategies for maximising metrics
such as the lift-to-drag ratio:

- **Bayesian optimisation** — sample-efficient, treats the solver as a black box.
- **Particle swarm optimisation** — population-based, embarrassingly parallel.
- **Adjoint-accelerated gradient descent** — uses variational calculus to get gradients at the
  cost of roughly one extra simulation, regardless of the number of design variables.

The interesting part is the trade-off between sample efficiency and wall-clock time: the adjoint
method needs far fewer iterations, while the black-box methods are easier to apply when you can't
differentiate through the physics.
