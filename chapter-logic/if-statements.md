---
name: If statements
---

If statements allow you to run certain code depending on a conditional statement. This is the if statement's syntax:
```python
if expression:
    # Code that gets executed
```

The if statement will execute the code that **is indented** if `expression` is true. We'll use a conditional statement to check if the word is correct.
```python
correct_word = "module"
guess = "read"

if correct_word == guess:
    print("The word was correct!")
```

We'll only receive an output if the guess is the same as the correct word. Change the `guess` variable to `"module"` so that the words match.

<div class="alert alert-primary">
Make sure that your code is indented (the extra spaces/tabs before the line) because Python relies heavily on indentation.
<br><br>
<details>
<summary>Incorrect</summary>
```python
if "a" == "b":
print("Statement is true!")
```
</details>

<details>
<summary>Correct</summary>
```python
if "a" == "b":
    print("Statement is true!")
```
</details>
</div>