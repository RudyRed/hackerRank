// There is a collection of input strings and a collection of query strings.
// For each query string, determine how many times it occurs in the list of input strings.
//
// For example, given input  and , we find  instances of ',  of '' and of ''.
// For each query, we add an element to our return array, .
//
// Function Description
//
// Complete the function matchingStrings in the editor below. The function must
// return an array of integers representing the frequency of occurrence of each query string in strings.
//
// matchingStrings has the following parameters:
//
// strings - an array of strings to search
// queries - an array of query strings
// Input Format
//
// The first line contains and integer , the size of .
// Each of the next  lines contains a string .
// The next line contains , the size of .
// Each of the next  lines contains a string .
//
// Output Format
//
// Return an integer array of the results of all queries in order.


function matchingStrings(strings, queries) {
  const count = {};

  for (let string of strings) {
    if (count[string]) {
      count[string]++;
    } else {
      count[string] = 1;
    }
  }

  return queries.map(x => count[x] ? count[x] : 0);
}
