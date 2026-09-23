---
# Create a new research page with:  hugo new content research/FOLDER-NAME/index.md
# Put its figures and PDFs in the same folder.
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
# Order on the main page, lowest first.
weight: 10
# One or two sentences for the main page. LaTeX works: $...$ inline.
summary: ""
# Optional: an image in this folder to show beside the summary on the main page.
figure: ""
# Links shown under the summary and at the top of this page. A url can name a file in this folder.
# links:
#   - name: Paper
#     url: paper.pdf
#   - name: Code
#     url: https://github.com/...
---

Write the details here. Each ## heading becomes an entry in the page's sidebar.
Math: $...$ inline, and $$...$$ on lines of their own for displayed equations.
Figures: ![what it shows](figure.png "Caption")
