---
# Create a new project with:  hugo new content projects/FOLDER-NAME/index.md
# Put its images in the same folder.
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
# Order on the main page, lowest first.
weight: 10
# One or two sentences: the problem and the outcome.
summary: ""
# Optional short bullet points, such as results, scale, or impact.
highlights: []
# Optional tools and methods, shown as tags.
tools: []
# Optional: an image in this folder to show beside the summary.
figure: ""
# Links such as the code, a demo, or a notebook. A url can name a file in this folder.
# links:
#   - name: Code
#     url: https://github.com/...
---

Optional write-up. Leave this empty and the project appears on the main page only;
write something here and its title links to a page of its own.
