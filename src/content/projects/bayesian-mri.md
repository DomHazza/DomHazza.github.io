---
title: Bayesian inference for MRI segmentation
description: Segmenting MRI scans with a Bayesian model — inferring tissue labels with calibrated uncertainty rather than a single hard mask.
date: 2025-06-01
tags: [Bayesian inference, medical imaging, segmentation, Python]
featured: true
---

## Overview

Segmenting an MRI scan means assigning every voxel to a tissue class. A standard
approach returns one hard mask and no sense of how confident it is. A Bayesian
treatment instead infers a *distribution* over segmentations, which makes the
uncertainty explicit — valuable exactly where the boundary between tissues is
genuinely ambiguous.

## The model

Bayesian segmentation combines two ingredients:

- a **likelihood** — how probable the observed voxel intensities are given a
  labelling, and
- a **prior** — what plausible segmentations look like, for example spatial
  smoothness so that neighbouring voxels tend to share a label.

Bayes' rule combines them into a posterior over labellings given the scan, so
the output is a probability for each class at each voxel rather than a single
decision.

## Inference

The posterior can't be computed in closed form, so it has to be approximated.
The two usual routes are sampling from it (MCMC) and fitting a tractable
approximation to it (variational inference), each trading off accuracy against
computational cost.

---

*Full write-up in progress.*
