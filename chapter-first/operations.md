---
name: Operations
---

You can do operations on numbers in Python. Some basic operations like addition, subtraction, multiplication and division can be done using special symbols.

- `a + b` addition
- `a - b` subtraction
- `a * b` multiplication
- `a / b` division

You can also use the `pow` function to get the exponent.
```python
print(1 + 5)
print(5 - 3)
print(5 * 5)
print(pow(5, 5)) # pow(5, 5) is 5*5 or 25
print(6 / 2)
print(2 * (5 + 5))
```

<div class="alert alert-primary">
Just like in math outside of computers, order of operations still applies (BODMAS, POMDAS, etc.). `2 * (5 + 5)` does not equal `2 * 5 + 5`.
</div>

# Operations to strings
You can use some operators on strings too! The `+` operator can join strings and the `*` operator can repeat text.

<div class="alert alert-primary">
In programming, joining strings is commonly referred to as string concatenation.
</div>

This example will print out "Hello John!" and "aaaaa"
```python
name = "John"
print("Hello " + name + "!") # Hello John!
print("a" * 5) # aaaaa
```

You might notice that the string `"Hello "` has a space after it. Without the space, the program would show `HelloJohn`.