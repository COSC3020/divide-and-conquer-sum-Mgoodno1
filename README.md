# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


Runtime Analysis of the Divide and Conquer Sort Algorithm:

The final runtime complexity of the implemented divide and conquer sorting algorithm is:
T(n) = 3T(n/3) + (n)
T(n) = 3(3T(n/9) + (n/3)) + (n)
T(n) = 3^2(T)(n/9) + (n) + (n)
T(n) = 3^3(T)(n/27) + (n) + (n) + (n)
T(n) = 3^3(T)(n/27) + 3n

T(n) = 3^k(T)(n/3^k) + kn (pattern)
n/3^k = 1 (stopping condition)
n = 3^k
log3(n) = k

T(n) = 3^log3(n) T(1) + n * log3(n)
T(n) = n * T(1) + n * log3(n)
T(n) = n(c) + n * log3(n) (T(1) = c, where c is a constant)
T(n) = O(n log n)

Reasoning:
The recurrenc is T(n) = 3T(n/3) + (n), this is because T(n) represents
runnng time for an input of size n. 3T(n/3) represents the recursive calls
on the three subarrays of size n/3, and (n) represents the work being done at each level. The
total work performed is proportional to n as it requires linear work. By expanding the 
recurrence, we can observe that the depth of recursion is proportional to log3 (n). This is
because the problem size is reduced by 3 at each recursive step. Thus, the total work being
n log3 n which simplifies to n log n.
