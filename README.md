# HTML Prettifier

This project is an HTML Prettifier that reads an existing HTML page and prints it with neat indentation and line breaks in the console.

## Purpose

The purpose of this project is to demonstrate understanding of trees, especially traversal and the depth concept, as well as understanding of the DOM interface, primarily Node.

## Features

Block elements on separate lines: Elements such as html, nav, ul, li, p, h1, etc., are displayed on separate lines.
Start and end tags: Elements are displayed with both start and end tags, except for elements that never have an end tag, such as br, meta, link, hr, input, and img.
Indentation of child elements: Child elements are indented by 2 characters.
Elements without children: Elements without children have their end tag on the same line as the start tag.
Start tags with all attributes enclosed in quotation marks: Start tags are displayed with all attributes, each correctly enclosed in quotation marks.
Inline tags: Inline tags inside block elements are not displayed on a new line and are not indented, but <br> always has a line break after it.
Text nodes: Line breaks and indentation in text are ignored.

## Example

<img width="1440" alt="Skærmbillede 2024-05-03 kl  17 51 35" src="https://github.com/sabr5840/HTML-Prettifier/assets/113180288/6141f071-c0b3-4147-9179-6dfc8053f0e3">



