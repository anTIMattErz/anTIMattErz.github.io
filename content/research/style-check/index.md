---
title: Style check
# A draft, so it's never published. See it with `hugo server -D` at /research/style-check/.
draft: true
build:
  list: never
summary: "A page for checking how prose, math, and figures look. Nothing here is real content."
links:
  - name: A file in this folder
    url: gradient.png
  - name: An outside link
    url: https://mtwomack.dev/
---

## Prose

Body text with *emphasis*, **bold**, `inline code`, and [a link](https://mtwomack.dev/). Inline math: $e^{i\pi} + 1 = 0$, and the other delimiter form, \(\int_0^1 x^2\,dx = \tfrac{1}{3}\). A dollar sign that isn't math: \$5.

> A block quote, for quoting someone else's words.

- A bulleted list
- with a second item that runs long enough to wrap onto another line, so the indentation shows

1. A numbered list
2. with two items

### A third-level heading

A short paragraph under a subsection, to check the spacing between headings and text.

## Displayed math

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

A numbered equation, referred to as \eqref{eq:heat}:

$$
\begin{equation}
\partial_t u = \Delta u \label{eq:heat}
\end{equation}
$$

An aligned system:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \times \mathbf{B} - \frac{1}{c^2}\frac{\partial \mathbf{E}}{\partial t} &= \mu_0 \mathbf{J}
\end{aligned}
$$

A long equation, which should scroll sideways on a phone instead of overflowing the page:

$$
f(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + a_4 x^4 + a_5 x^5 + a_6 x^6 + a_7 x^7 + a_8 x^8 + a_9 x^9 + a_{10} x^{10} + a_{11} x^{11}
$$

## Figures

![A smooth blue-to-green gradient](gradient.png "A figure with a caption. Captions can include math: $\alpha \mapsto \alpha^2$.")

## Code and tables

```python
import numpy as np

def gaussian(x, mu=0.0, sigma=1.0):
    return np.exp(-0.5 * ((x - mu) / sigma) ** 2) / (sigma * np.sqrt(2 * np.pi))
```

| Column | Number | Another |
|---|---:|---:|
| Item A | 1.2 | 0.031 |
| Item B | 0.4 | 0.087 |
