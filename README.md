1. Run `npm i` to install all dependencies 
2. To test the first task run `node random_line.js input_file.txt 0`
where `input_file.txt` is the name of file, `0` the index of line
3. To test the second task run `npm run search`
4. Updated script for random line `node random_line2.js input_file.txt 10900` 

# Task 1

You are given a very, very large plain text file where each line contains a plain
text string. The file has at most 1 billion lines; lines may have different lengths,
but each line has at most 1000 characters. Your goal is to write a program that
will print an arbitrary line from the file. Your program will be run many times
(although you don&#39;t know exactly how many times it will be run in advance), and
you don&#39;t know in advance which lines might be selected. Thus, your solution
should be optimized to minimize the runtime for each additional execution. The

first execution of the program may take longer than subsequent runs, and you
may use additional disk storage to improve performance.
Your program should take two command-line arguments: the path of the file
from which to print lines, and the index of the line you want to print. Your
program should write the line to standard output.
Sample input/output:  
input_file.txt:  
apple  
banana  
orange  
lemon  
$ random_line input_file.txt 3  
on stderr:  
Writing index to input_file.txt.idx... done.  
lemon  
$ random_line input_file.txt 2   
orange  
$ random_line input_file.txt 0  
apple  

# Task 2
You are given an array A of n integers. The elements of A are sorted in ascending order,
and are not necessarily unique. You are also given a target integer x. Implement a
search algorithm which finds a location j in the array such that all elements in the range
A[0], ..., A[j - 1] are strictly less than x, and all elements in the range A[j], ..., A[n - 1]
are greater than or equal to x. (Note that x itself need not appear in A for these
conditions to be satisfied.) If no suitable location is found, return -1. Your solution should
have runtime O(log n).

