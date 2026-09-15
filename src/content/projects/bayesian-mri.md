---
title: Accelerating Flow MRI with Bayesian inference
description: Flow MRI scans take such a long time because the same region must be scanned multiple times to reduce the uncertainty in the scanner's noisy measurements. In my thesis I show that by leveraging prior information that we know about a blood vessel's geometry we can build Bayesian models that significantly outperform state of the art deep learning models.
date: 2025-06-01
tags: [Bayesian inference, medical imaging, Flow MRI, Python]
featured: true
---

Flow MRI is a medical scanning technique that allows doctors to determine a
patient's blood flow in three spatial dimensions and one time dimension. Unlike
CT scans, flow MRI does not use ionising radiation. Flow MRI scan times can be
prohibitively long because each region must be scanned over many cardiac cycles
to suppress noise. Each scanner is also expensive. These two constraints create
a bottleneck limiting the number of patients who can be scanned. This limits the
income that can be generated.

In my thesis I investigated three strategies to generate an accurate blood
vessel segmentation from a brief and noisy scan. I showed that by leveraging
prior information that we know about a blood vessel's geometry – that it is a
wobbly tube with branches – we can build Bayesian models that significantly
outperform data-driven deep learning models.

Link to the thesis is [here](/thesis.pdf).
