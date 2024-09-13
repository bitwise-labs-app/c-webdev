---
name: Project - Addition calculator
---

Using the skills from *1.1 Writing text*, *1.3 Variables*, *1.4 User input*, *1.5 Operations* and *1.6 Data types*, we're going to make a simple calculator that will add two numbers together.

## User input
We want the user to be able to input their numbers, so we'll use the `input` function.
```python
a = input("What is the first number?")
b = input("What is the second number?")
```

## Data type conversion
Let's add this onto our code so we can properly do math on the numbers.
```python
a_int = int(a)
b_int = int(b)
```

<div class="alert alert-warning">
    Make sure to convert the string to an integer or float, because look at what happens if you don't! Try running <code>"5" + "6"</code> in your REPL.
</div>

## Performing the math
Now we have to add `a` and `b` together. We'll use the addition operator and assign the sum to a variable.
```python
final_number = a + b
```

## Printing the output
We can finally show the user what the output is. We'll use string concatenation to make the output look nicer.
```python
print("The sum of the two numbers is " + str(final_number))
```

We've included the `str` function to convert the integer to a string to make sure we aren't adding a string to a number.

# Final code
```python
a = input("What is the first number?")
b = input("What is the second number?")

a_int = int(a)
b_int = int(b)

final_number = a + b

print("The sum of the two numbers is " + str(final_number))
```

<div class="alert alert-primary">
    <ul>
        <li>Try adding comments in the code to describe the program</li>
        <li>Can you work out why you can't add numbers with decimals? <em>Hint: check 1.6 Data types</em></li>
    </ul>
</div>