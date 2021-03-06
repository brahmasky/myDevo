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

A quick demo is provided with the script to demostrate the classification of a random list of numbers with the length of x, as a user input.

``` bash
python3 classify_numbers.py
Give a number x to see a demo on the random list of x numbers (100): 10
{464057190: 'abundant', 744825380: 'abundant', 827963983: 'deficient', 212821868: 'abundant', 676698850: 'deficient', 757949428: 'deficient', 900876147: 'deficient', 981751179: 'deficient', 963908645: 'deficient', 808543110: 'abundant'}
It took 0.029466867446899414 seconds to complete the classification.
```

## Exercise 2

> Given 3 data sets, you are required to create a web page that can read the 3 data sources through ajax, and displays 2 highcharts graphs, a line graph with date on X-axis with as many series as categories, and a pie chart per category, grouping the total data (sum of values by each category).

As directed in the question, the [index.html](./Exercise2/index.html) uses [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) method to download the 3 JSON files and generates one line chart and one pie chart with [Highcharts](https://www.highcharts.com/docs/index) APIs which is a first timer to me :smile: . 

![Never Stop Learning](https://i.pinimg.com/564x/9e/6f/38/9e6f38cb23cd1dfc631e6dfd658fa693.jpg)

### TODO
- [x] Dark mode for the charts
- [x] Modularize the JS functions and stylesheet
- [x] The 'bug' of reducer is acutally a finding that the reducers does mutate the values in original array, but the calculation is actually correct

