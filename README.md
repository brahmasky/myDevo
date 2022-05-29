## Exercise 1

> Create a function in python that can indicate if each number from a provided list of numbers, is a perfect, abundant, or defective number.
> - A perfect number is one that is equal to the sum of its positive proper divisors, excluding itself. For
example 6 = 1+2+3
> - An abundant number is one in which the sum of the proper divisors is greater than the number.
> - A defective number is one in which the sum of the proper divisors is less than the number.

Two slighly different ways have been provided in  [classify numbers](./Exercise1/classify_numbers.py) script. One is to sum all the proper divisors, and the other is makeing use of [Geometric Progressions](https://en.wikipedia.org/wiki/Geometric_progression) formula.

Against my understanding, the `sum of proper divisors` method seems to be more efficient when handling large numbers.

<table>
<tr>
<th> sum of proper divisors </th>
<th> sum by prime factors </th>
</tr>
<tr>
<td>

``` python
start_time = time.time();
classify_numbers([1, 5, 6, 20, 1234567890987654]);
print('\nIt took {} seconds to complete'.format(time.time()-start_time))
{1: 'deficient', 5: 'deficient', 6: 'perfect', 20: 'abundant', 1234567890987654: 'abundant'}

It took 4.0791850090026855 seconds to complete
```

</td>
<td>

``` python
start_time = time.time();
classify_numbers_with_prime_factor([1, 5, 6, 20, 1234567890987654]);
print('\nIt took {} seconds to complete'.format(time.time()-start_time))
{1: 'deficient', 5: 'deficient', 6: 'perfect', 20: 'abundant', 1234567890987654: 'abundant'}

It took 5.200538873672485 seconds to complete
```
</td>
</tr>
</table>

