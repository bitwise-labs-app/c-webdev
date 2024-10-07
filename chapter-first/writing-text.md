---
name: Writing text
---

Writing text is a common task, found in almost every program. In Python, you can write text by using `print`.

<div class="alert alert-primary">
    In many programming languages, `print` refers to "printing" text to the screen. It has nothing to do with printers or paper.
</div>

Let's have a look at a basic example. This program will say "Hello!"

```python
print("Hello!")
```

<div class="alert alert-primary">
    Try changing "Hello!" in the code to something else. What happens?
</div>

You may have an error, something like `NameError: name 'Text' is not defined on line 1`. This is because the text has to be in "quotes". This is called a string, and it tells Python that it is text that should be taken literally, not something else.

Try chaining `print` statements together, and play around with it.
```python
print("Hello!")
print("This is running in Python!")
print("Pretty cool, huh?")
```