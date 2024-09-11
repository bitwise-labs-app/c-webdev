---
name: User input
---

Programs aren't very useful if the user can't input data. Think of a calculator - it needs user input and would not function without it. You can recieve user input by using Python's `input` function. You will use it like the `print` statement you learned earlier.

This time, we'll assign a variable to `input`, like this:
```python
name = input("What is your name?")

print(name)
```

Type in your name, then press enter and the program will print out your name.

We assigned a variable to `input`. The `input` function will "return" a value. You can think of this as `input("What is your name?")` getting replaced with the user's name, so that `name` will be assigned with the user's name.