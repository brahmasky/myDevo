import math
import random, time
 
def proper_divisors(n):
  '''Return a list of proper divisors of a given number n'''
  # List to store smaller half of the divisors
  divisors = []
  for i in range(1, int(math.sqrt(n) + 1)) :
    if (n%i==0) :
      # Check if divisors are equal
      if (n/i==i) :
        divisors.append(i)
      else :
        # Otherwise add both divisors to the list
        divisors.extend([i, n//i])
  return divisors

# keeping this function here for a comparison
# it's actually slower than using sum of proper divisors 
def sum_factors(n):
  '''Returns sum of all factors of a given number n by using prime factors '''
  res = 1
  for i in range(2, int(math.sqrt(n) + 1)):
    curr_sum = 1
    curr_term = 1
    while n % i == 0:          
      n = n / i;
      curr_term = curr_term * i;
      curr_sum += curr_term;       
    res = res * curr_sum  
  # This condition is to handle the
  # case when n is a prime number
  # greater than 2
  if n > 2:
      res = res * (1 + n)
  return res;

def classify_numbers(number_list):
  '''Classify the number in given list as perfect/deficient/abundant number'''
  result={}
  for n in number_list:
    # sum all proper divisors and minus the given number itself
    sum_result = sum(proper_divisors(n)) - n
    if sum_result == n:
      result[n] = 'perfect'
    elif sum_result < n:
      result[n] = 'deficient'
    else:
      result[n] = 'abundant'
  return result

def classify_numbers_with_prime_factor(number_list):
  '''Classify number using sum_factors function and return result in dictionary'''
  result={}
  for n in number_list:
    # sum all proper divisors and minus the given number itself
    sum_result = sum_factors(n) - n
    if sum_result == n:
      result[n] = 'perfect'
    elif sum_result < n:
      result[n] = 'deficient'
    else:
      result[n] = 'abundant'
  return result

if __name__=='__main__':
  input = int(input("Give a number x to see a demo on the random list of x numbers (100): ") or "100")

  # generate a random list of x integers between one and 1,000,000,000
  random_list=[random.randint(1,1000000000) for i in range(input)]

  # timing the check_pefect function
  start_time = time.time()
  print(classify_numbers(random_list))
  
  print('It took {} seconds to complete the classification.'.format(time.time()-start_time))