---
name: Conditional statements
---

You can use conditional statements to get a boolean output (either `true` or `false`).

Python supports the usual mathematical conditions:
<table>
    <tr>
        <th>Description</th>
        <th>Python</th>
        <th>Mathematical symbol</th>
    </tr>
    <tr>
        <td>Equal to</td>
        <td><code>=</code></td>
        <td>=</td>
    </tr>
    <tr>
        <td>Not equal to</td>
        <td><code>!=</code></td>
        <td>&ne;</td>
    </tr>
    <tr>
        <td>Less than</td>
        <td><code>&lt;</code></td>
        <td>&lt;</td>
    </tr>
    <tr>
        <td>Less than or equal to</td>
        <td><code>&gt;=</code></td>
        <td>&le;</td>
    </tr>
    <tr>
        <td>Greater than</td>
        <td><code>&gt;</code></td>
        <td>></td>
    </tr>
    <tr>
        <td>Greater than or equal to</td>
        <td><code>&gt;=</code></td>
        <td>&ge;</td>
    </tr>
</table>

In the REPL, try different things and see what happens.
```python-repl
>>> "a" == "a"
True
>>> 4 == 6
False
>>> 4 != 6
True
>>> 8 < 9
True
>>> 6 > 1
True
>>> 6 > 7
False
>>> 6 <= 6
True
>>> 6 <= 7
True
>>> 6 <= 5
False
>>> 8 > 4
True
>>> 8 >= 1
True
>>> 8 >= 9
False
>>> 8 > "text" # You cannot do number operations on a string!
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: '>' not supported between instances of 'int' and 'str'
```