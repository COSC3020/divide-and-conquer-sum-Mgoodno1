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
T(n) = 3^2(T)(n/9) + 4(n)
T(n) = 9(3T(n/27) + n/9) + 4(n) 
T(n) = 27(T)(n/27) + 13n
....
T(n) = 3^i (T)(n/3^i) + (3^i - 1)n/2

n/3^i = 1  => i = log3(n)

T(n) = 3^log3(n) T(1) + nlog3(n)
T(n) = nT(1) + nlog3(n) 
T(n) = n + n log3(n)

O(n log3(n)) dominates O(n), but can be rewritten as:
T(n) = n + n log3(n) ∈ O(n log n)



Reasoning:
The recurrenc is T(n) = 3T(n/3) + O(n), this is because T(n) represents
runnng time for an input of size n. 3T(n/3) represents the recursive calls
on the three subarrays of size n/3, and O(n) represents the work being done at each level. Specifically
the work at each level involves combining the results of the sums from the three subarrays, which takes linear time due to processing all n elements. We are
not summing all the elements of the array at each level, rather we are merging the sumes of the three subarrays. This is why the work at each level is O(n), 
reflecting the merging process for the entire array. The total work performed is proportional to n as it requires linear work.  By expanding the 
recurrence, we can observe that the depth of recursion is proportional to log3 (n). This is
because the problem size is reduced by 3 at each recursive step. Thus, the total work being
n log3 n which simplifies to n log n.

# Plagarism Statement
All exercises must contain the following statement: “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”

