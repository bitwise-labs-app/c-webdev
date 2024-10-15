---
name: Your first webpage!
---

# The Basics.
A basic, correct HTML Document looks like this
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>title</title>
</head>
<body>
    <h1>Hewwo World!~</h1>
    <p>Welcome to my site.</p>
    <a target="_blank" href="https://wikipedia.org/HTML"></a>
</body>
</html>
```
<details>
    <summary>Resulting Webpage</summary>
    <img src="/browser.svg">
    <h1>Hewwo World!~</h1>
    <p>Welcome to my site.</p>
    <a target="_blank" href="https://wikipedia.org/HTML"></a>
</details>
# Ok, but what does it all mean?
HTML is written using "tags" these tags have attributes.
<img src="/explaing.jpg" alt="">
To write a basic informational site, knowledge of the following is key,

| Tag | Purpose |
|-----|---------|
|`<!DOCTYPE html>` | Informs browsers that this page, is infact HTML, not necisairly needed for modern web development, but it's use is reccomended |
|`<html>`| Marks the start & end of a document |
|`<head>`| Contains non-showing elements that inform the browser about title/icon or pull in other resources (scripts & styles)|
| `<body>` | The "body" of the page, mostly used for containing visual elements, however script tags might be insterted here if they need to run right after the elements before are rendered, as web browsers render the page tag by tag (or "syncronously") rather than all at once ("asyncronously").|
|`<p>`| The "text paragraph" element, used for displaying text, not necisairly needed but is reccomended for accessibility reasons. |
| `<h1>` through `<h6>`| Heading elements, each with different styling.|
|`<a>`| The "anchor" or "hyperlink" element, typically used with the `href` attribute, which sets the URL to open on click, it's reccomened you have the `target` attribute set to `_blank` to open the link in a new tab |
|`<img>`<br>(no closing tag needed!)| The "image" element, used to display images, the `src` attribute is used, along with the "path" of the image. |
|`<b>`| the "bold" tag, which bolds text inside the opening and closing tags |
|`<i>`| the "italic" tag, which italicizes text inside the opening and closing tags |
|`<u>`| the "underline" tag, which underlines text inside the opening and closing tags |
|`<br>`| the "line break" tag, which creates a new line |
|`<hr>`| the "horizontal rule" tag, which creates a horizontal line |
|`<ul>`| the "unordered list" tag, which creates a list with bullets |
|`<ol>`| the "ordered list" tag, which creates a list with numbers |
|`<li>`| the "list item" tag, which creates a list item, used inside of `<ul>` or `<ol>` tags |
| `<div>`| the "division" tag, which is used to group elements together, it's most used to apply styles to multiple elements at once and provide structure to the page. |
| `<section>`| the "section" tag, which is used to group elements together, it's most used to provide structure to the page, it provides litle difference to `div` |
| `<article>`| the "article" tag, which is used to group elements together, it's most used to provide structure to the page and highlight the actual page content, useful for accessibility |
