---
name: Data types
---

Variables can store different types of data, and different types will do different things.

Python has some data types built in:

- `str` String
- `int` Integer
- `float` Floating point number (number with a decimal)
- `list` Lists that can contain other data types
- `dict` A list of key value pairs. (`key: value` or `"name": "John"`)
- `bool` Booleans that have either `true` or `false`
- `NoneType` This data type represents nothing

It's not required to know all the data types yet, but it is useful to know about.

# Converting between data types
Let's say you have a string that has a number in it - `"56"`. We can convert this string to the `int` data type by using the `int` function that is built-in to Python.
```python
# Define our number in a string
my_string = "56"

# Convert it to a integer
my_int = int(my_string)

# Now we can do math on the integer
print(my_int + 2)
```

We'll get an error if we try converting `56.2` to an integer because `56.2` is not a integer. We must use the `float` data type instead.
```python
my_float = float("56.2")
```

You can also convert a number back to a string so you can perform operations on the string by using `str`.
```python
my_string = str(26) # "26"
```