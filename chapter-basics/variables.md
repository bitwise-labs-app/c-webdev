---
name: Variables
---

Variables are stored data that can change. You can use them in operations, such as multiplying, dividing, etc. To define a variable, you can use an equals sign to assign the variable to a value.
```python
x = "Hello"
language = "Python"
cool_number = 12345
```

Variables can contain any type of data, including strings and numbers.

Variable names have a set of rules. Variable names have to:
- Start with a letter or underscore. That means that variable names cannot start with a number.
- Only contain alphanumeric characters and underscores. (A-Z a-z 0-9 _)
- Variables can't be named any Python keywords, such as `print`

Let's try printing a variable. We must define the variable first, then we can use it.
```python
my_variable = "Hello"
print(my_variable)

print("my_variable") # Notice how this will literally print "my_variable"
```

Notice how there are no quotes around the text in the `print`. This is because quotes refer to literal text, and we're trying to print the variable's data, not the literal string `"my_variable"`.