---
title: Accelerating Flow MRI with Bayesian inference
description: Flow MRI scans take such a long time because the same region must be scanned multiple times to reduce the uncertainty in the scanner's noisy measurements. This project aims to significantly speed up Flow MRI scanning times by accurately extracting the blood vessel shapes from brief, inaccurate scans.
date: 2025-06-01
tags: [Bayesian inference, medical imaging, Flow MRI, Python]
featured: true
---

## Overview

Flow MRI measures blood movement by encoding velocity into the MR signal, but a
single pass is noisy. To beat that noise down, the scanner repeats the same
acquisition many times and averages — which is exactly why a high-quality scan
takes so long.

This project asks whether that time can be cut dramatically: instead of scanning
until the raw measurements are clean, take a brief, deliberately noisy scan and
recover the quantity that actually matters — the shape of the blood vessels — by
inference rather than by brute-force averaging.

## Why Bayesian

The vessel geometry is not measured directly; it has to be inferred from a noisy
signal. A Bayesian treatment is a natural fit:

- a **likelihood** captures how the scanner's measurements relate to an
  underlying vessel geometry and flow, together with the noise that corrupts
  them, and
- a **prior** encodes what real vessels look like — smooth, connected,
  anatomically plausible shapes rather than arbitrary noise.

Combining them gives a posterior over vessel shapes given the scan. Crucially,
the prior does the work that repeated scanning would otherwise do: it constrains
the answer enough that a short, noisy acquisition can still pin down an accurate
shape — with an honest estimate of the remaining uncertainty.

## Method

1. **Forward model** — describe how a candidate vessel geometry and its flow
   would appear in the scanner's measurements.
2. **Likelihood** — model the scanner noise so that brief, inaccurate scans are
   handled on their own terms rather than assumed clean.
3. **Prior** — encode the smoothness and plausibility of vessel shapes.
4. **Inference** — recover the posterior over geometries, yielding a vessel
   shape (and its uncertainty) from far less scan time.

---

*Full write-up in progress.*
