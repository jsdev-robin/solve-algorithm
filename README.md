# 📚 Complete DSA Learning Roadmap

A structured, phase-by-phase roadmap for mastering Data Structures & Algorithms, paired with a curated list of **350 LeetCode problems** organized by topic.

---

## 🗺️ Roadmap Overview

| Phase |  Priority  | Topic                   | Difficulty | Prerequisites      | Why Learn?                           |
| :---: | :--------: | ----------------------- | :--------: | ------------------ | ------------------------------------ |
|   1   | ⭐⭐⭐⭐⭐ | 1. Array                |   ★☆☆☆☆    | None               | Most basic & common                  |
|   1   | ⭐⭐⭐⭐⭐ | 2. String               |   ★☆☆☆☆    | Array              | Same as arrays, huge in interviews   |
|   1   | ⭐⭐⭐⭐⭐ | 3. Hash Table           |   ★★☆☆☆    | Array              | O(1) lookups, solves 50% of problems |
|   1   | ⭐⭐⭐⭐☆  | 4. Linked List          |   ★★☆☆☆    | Array, Recursion   | Pointer concept, fundamental DS      |
|   2   | ⭐⭐⭐⭐⭐ | 5. Two Pointers         |   ★★☆☆☆    | Array, String      | Most common pattern                  |
|   2   | ⭐⭐⭐⭐⭐ | 6. Sliding Window       |   ★★★☆☆    | Two Pointers       | Subarray problems                    |
|   2   | ⭐⭐⭐⭐☆  | 7. Stack                |   ★★☆☆☆    | Array              | Parsing, matching, undo operations   |
|   2   | ⭐⭐⭐⭐☆  | 8. Queue                |   ★★☆☆☆    | Array, Stack       | BFS, scheduling, buffering           |
|   2   | ⭐⭐⭐⭐⭐ | 9. Recursion            |   ★★★☆☆    | Stack (concept)    | Required for Trees, DFS, DP          |
|   2   | ⭐⭐⭐⭐☆  | 10. Sorting             |   ★★☆☆☆    | Array, Recursion   | Many problems need sorted data       |
|   3   | ⭐⭐⭐⭐⭐ | 11. Tree                |   ★★★☆☆    | Recursion, Queue   | Most important interview topic       |
|   3   | ⭐⭐⭐⭐⭐ | 12. DFS                 |   ★★★☆☆    | Tree, Recursion    | Tree traversal, path finding         |
|   3   | ⭐⭐⭐⭐☆  | 13. BFS                 |   ★★★☆☆    | Tree, Queue        | Level order, shortest path           |
|   3   | ⭐⭐⭐⭐☆  | 14. Binary Search       |   ★★★☆☆    | Array, Sorting     | O(log n) searching, very common      |
|   4   |  ⭐⭐⭐☆☆  | 15. Heap/Priority Queue |   ★★★☆☆    | Array, Tree        | Kth problems, Dijkstra               |
|   4   |  ⭐⭐⭐☆☆  | 16. Graph               |   ★★★★☆    | Tree, DFS, BFS     | Advanced, but important for FAANG    |
|   4   |  ⭐⭐⭐☆☆  | 17. Prefix Sum          |   ★★☆☆☆    | Array              | Optimization technique               |
|   4   |  ⭐⭐☆☆☆   | 18. Backtracking        |   ★★★★☆    | Recursion, DFS     | Combinatorial problems               |
|   4   |  ⭐⭐☆☆☆   | 19. Greedy              |   ★★★★☆    | Sorting, Recursion | Optimization, requires intuition     |
|   4   |   ⭐☆☆☆☆   | 20. Dynamic Programming |   ★★★★★    | ALL OF THE ABOVE   | Hardest — save for last!             |

### 🎨 Priority Color Guide

- 🔵 **Phase 1** — Must learn first: basic building blocks
- 🟢 **Phase 2** — Core techniques: learn immediately after
- 🟡 **Phase 3** — Interview favorites: most asked topics
- 🔴 **Phase 4** — Advanced: learn after mastering the others

### 📏 Difficulty Guide

| Stars | Meaning                           |
| :---: | --------------------------------- |
| ★☆☆☆☆ | Very Easy — Beginner friendly     |
| ★★☆☆☆ | Easy — Basic understanding needed |
| ★★★☆☆ | Medium — Requires practice        |
| ★★★★☆ | Hard — Needs strong fundamentals  |
| ★★★★★ | Very Hard — Expert level          |

---

## 🧩 Top 350 LeetCode Problems by Topic

### Phase 1

<details>
<summary><strong>Array (25 Problems)</strong></summary>

| #   | Problem                             | Difficulty |
| --- | ----------------------------------- | :--------: |
| 1   | Two Sum                             |    Easy    |
| 26  | Remove Duplicates from Sorted Array |    Easy    |
| 27  | Remove Element                      |    Easy    |
| 35  | Search Insert Position              |    Easy    |
| 53  | Maximum Subarray                    |    Easy    |
| 66  | Plus One                            |    Easy    |
| 88  | Merge Sorted Array                  |    Easy    |
| 118 | Pascal's Triangle                   |    Easy    |
| 119 | Pascal's Triangle II                |    Easy    |
| 121 | Best Time to Buy/Sell Stock         |    Easy    |
| 122 | Best Time to Buy/Sell Stock II      |    Easy    |
| 136 | Single Number                       |    Easy    |
| 152 | Maximum Product Subarray            |   Medium   |
| 153 | Find Minimum in Rotated Array       |   Medium   |
| 169 | Majority Element                    |    Easy    |
| 189 | Rotate Array                        |   Medium   |
| 217 | Contains Duplicate                  |    Easy    |
| 219 | Contains Duplicate II               |    Easy    |
| 238 | Product of Array Except Self        |   Medium   |
| 268 | Missing Number                      |    Easy    |
| 283 | Move Zeroes                         |    Easy    |
| 303 | Range Sum Query - Immutable         |    Easy    |
| 334 | Increasing Triplet Subsequence      |   Medium   |
| 349 | Intersection of Two Arrays          |    Easy    |
| 350 | Intersection of Two Arrays II       |    Easy    |

</details>

<details>
<summary><strong>String (20 Problems)</strong></summary>

| #   | Problem                             | Difficulty |
| --- | ----------------------------------- | :--------: |
| 3   | Longest Substring Without Repeating |   Medium   |
| 5   | Longest Palindromic Substring       |   Medium   |
| 6   | Zigzag Conversion                   |   Medium   |
| 8   | String to Integer (atoi)            |   Medium   |
| 14  | Longest Common Prefix               |    Easy    |
| 20  | Valid Parentheses                   |    Easy    |
| 28  | Find the Index of First Occurrence  |    Easy    |
| 38  | Count and Say                       |   Medium   |
| 49  | Group Anagrams                      |   Medium   |
| 58  | Length of Last Word                 |    Easy    |
| 67  | Add Binary                          |    Easy    |
| 125 | Valid Palindrome                    |    Easy    |
| 151 | Reverse Words in a String           |   Medium   |
| 165 | Compare Version Numbers             |   Medium   |
| 205 | Isomorphic Strings                  |    Easy    |
| 242 | Valid Anagram                       |    Easy    |
| 290 | Word Pattern                        |    Easy    |
| 344 | Reverse String                      |    Easy    |
| 387 | First Unique Character              |    Easy    |
| 415 | Add Strings                         |    Easy    |

</details>

<details>
<summary><strong>Hash Table (15 Problems)</strong></summary>

| #   | Problem                          | Difficulty |
| --- | -------------------------------- | :--------: |
| 1   | Two Sum                          |    Easy    |
| 36  | Valid Sudoku                     |   Medium   |
| 49  | Group Anagrams                   |   Medium   |
| 128 | Longest Consecutive Sequence     |   Medium   |
| 136 | Single Number                    |    Easy    |
| 138 | Copy List with Random Pointer    |   Medium   |
| 141 | Linked List Cycle                |    Easy    |
| 142 | Linked List Cycle II             |   Medium   |
| 160 | Intersection of Two Linked Lists |    Easy    |
| 187 | Repeated DNA Sequences           |   Medium   |
| 202 | Happy Number                     |    Easy    |
| 204 | Count Primes                     |   Medium   |
| 205 | Isomorphic Strings               |    Easy    |
| 217 | Contains Duplicate               |    Easy    |
| 219 | Contains Duplicate II            |    Easy    |

</details>

<details>
<summary><strong>Linked List (15 Problems)</strong></summary>

| #   | Problem                          | Difficulty |
| --- | -------------------------------- | :--------: |
| 2   | Add Two Numbers                  |   Medium   |
| 19  | Remove Nth Node From End         |   Medium   |
| 21  | Merge Two Sorted Lists           |    Easy    |
| 23  | Merge k Sorted Lists             |    Hard    |
| 24  | Swap Nodes in Pairs              |   Medium   |
| 25  | Reverse Nodes in k-Group         |    Hard    |
| 61  | Rotate List                      |   Medium   |
| 82  | Remove Duplicates from Sorted II |   Medium   |
| 83  | Remove Duplicates from Sorted    |    Easy    |
| 86  | Partition List                   |   Medium   |
| 92  | Reverse Linked List II           |   Medium   |
| 138 | Copy List with Random Pointer    |   Medium   |
| 141 | Linked List Cycle                |    Easy    |
| 142 | Linked List Cycle II             |   Medium   |
| 143 | Reorder List                     |   Medium   |
| 148 | Sort List                        |   Medium   |
| 160 | Intersection of Two LL           |    Easy    |
| 203 | Remove Linked List Elements      |    Easy    |
| 206 | Reverse Linked List              |    Easy    |
| 234 | Palindrome Linked List           |    Easy    |

</details>

### Phase 2

<details>
<summary><strong>Two Pointers (15 Problems)</strong></summary>

| #   | Problem                             | Difficulty |
| --- | ----------------------------------- | :--------: |
| 3   | Longest Substring Without Repeating |   Medium   |
| 5   | Longest Palindromic Substring       |   Medium   |
| 11  | Container With Most Water           |   Medium   |
| 15  | 3Sum                                |   Medium   |
| 16  | 3Sum Closest                        |   Medium   |
| 18  | 4Sum                                |   Medium   |
| 19  | Remove Nth Node From End            |   Medium   |
| 26  | Remove Duplicates from Sorted       |    Easy    |
| 27  | Remove Element                      |    Easy    |
| 28  | Find the Index of First Occurrence  |    Easy    |
| 42  | Trapping Rain Water                 |    Hard    |
| 75  | Sort Colors                         |   Medium   |
| 88  | Merge Sorted Array                  |    Easy    |
| 125 | Valid Palindrome                    |    Easy    |
| 141 | Linked List Cycle                   |    Easy    |
| 142 | Linked List Cycle II                |   Medium   |
| 167 | Two Sum II - Input Array Sorted     |   Medium   |
| 283 | Move Zeroes                         |    Easy    |
| 344 | Reverse String                      |    Easy    |
| 345 | Reverse Vowels of a String          |    Easy    |

</details>

<details>
<summary><strong>Sliding Window (15 Problems)</strong></summary>

| #    | Problem                             | Difficulty |
| ---- | ----------------------------------- | :--------: |
| 3    | Longest Substring Without Repeating |   Medium   |
| 76   | Minimum Window Substring            |    Hard    |
| 209  | Minimum Size Subarray Sum           |   Medium   |
| 239  | Sliding Window Maximum              |    Hard    |
| 424  | Longest Repeating Character Repl.   |   Medium   |
| 438  | Find All Anagrams in a String       |   Medium   |
| 480  | Sliding Window Median               |    Hard    |
| 567  | Permutation in String               |   Medium   |
| 713  | Subarray Product Less Than K        |   Medium   |
| 1004 | Max Consecutive Ones III            |   Medium   |
| 1208 | Get Equal Substrings Within Budget  |   Medium   |
| 1493 | Longest Subarray of 1's After Del   |   Medium   |
| 1695 | Maximum Erasure Value               |   Medium   |
| 1838 | Frequency of the Most Frequent      |   Medium   |
| 2024 | Maximize Confusion of Exam          |   Medium   |

</details>

<details>
<summary><strong>Stack (16 Problems)</strong></summary>

| #   | Problem                          | Difficulty |
| --- | -------------------------------- | :--------: |
| 20  | Valid Parentheses                |    Easy    |
| 32  | Longest Valid Parentheses        |    Hard    |
| 42  | Trapping Rain Water              |    Hard    |
| 71  | Simplify Path                    |   Medium   |
| 84  | Largest Rectangle in Histogram   |    Hard    |
| 94  | Binary Tree Inorder Traversal    |    Easy    |
| 144 | Binary Tree Preorder Traversal   |    Easy    |
| 145 | Binary Tree Postorder Traversal  |    Easy    |
| 150 | Evaluate Reverse Polish Notation |   Medium   |
| 155 | Min Stack                        |    Easy    |
| 224 | Basic Calculator                 |    Hard    |
| 227 | Basic Calculator II              |   Medium   |
| 394 | Decode String                    |   Medium   |
| 496 | Next Greater Element I           |    Easy    |
| 503 | Next Greater Element II          |   Medium   |
| 739 | Daily Temperatures               |   Medium   |

</details>

<details>
<summary><strong>Queue (9 Problems)</strong></summary>

| #   | Problem                         | Difficulty |
| --- | ------------------------------- | :--------: |
| 207 | Course Schedule                 |   Medium   |
| 210 | Course Schedule II              |   Medium   |
| 225 | Implement Stack using Queues    |    Easy    |
| 232 | Implement Queue using Stacks    |    Easy    |
| 346 | Moving Average from Data Stream |    Easy    |
| 353 | Design Snake Game               |   Medium   |
| 622 | Design Circular Queue           |   Medium   |
| 641 | Design Circular Deque           |   Medium   |
| 933 | Number of Recent Calls          |    Easy    |

</details>

<details>
<summary><strong>Recursion (10 Problems)</strong></summary>

| #   | Problem                         | Difficulty |
| --- | ------------------------------- | :--------: |
| 21  | Merge Two Sorted Lists          |    Easy    |
| 50  | Pow(x, n)                       |   Medium   |
| 70  | Climbing Stairs                 |    Easy    |
| 77  | Combinations                    |   Medium   |
| 94  | Binary Tree Inorder Traversal   |    Easy    |
| 104 | Maximum Depth of Binary Tree    |    Easy    |
| 144 | Binary Tree Preorder Traversal  |    Easy    |
| 145 | Binary Tree Postorder Traversal |    Easy    |
| 206 | Reverse Linked List             |    Easy    |
| 509 | Fibonacci Number                |    Easy    |

</details>

<details>
<summary><strong>Sorting (10 Problems)</strong></summary>

| #   | Problem                         | Difficulty |
| --- | ------------------------------- | :--------: |
| 56  | Merge Intervals                 |   Medium   |
| 57  | Insert Interval                 |   Medium   |
| 75  | Sort Colors                     |   Medium   |
| 148 | Sort List                       |   Medium   |
| 164 | Maximum Gap                     |    Hard    |
| 215 | Kth Largest Element in an Array |   Medium   |
| 347 | Top K Frequent Elements         |   Medium   |
| 451 | Sort Characters By Frequency    |   Medium   |
| 912 | Sort an Array                   |   Medium   |
| 973 | K Closest Points to Origin      |   Medium   |

</details>

### Phase 3

<details>
<summary><strong>Tree (20 Problems)</strong></summary>

| #   | Problem                            | Difficulty |
| --- | ---------------------------------- | :--------: |
| 94  | Binary Tree Inorder Traversal      |    Easy    |
| 98  | Validate Binary Search Tree        |   Medium   |
| 100 | Same Tree                          |    Easy    |
| 101 | Symmetric Tree                     |    Easy    |
| 102 | Binary Tree Level Order Traversal  |   Medium   |
| 103 | Binary Tree Zigzag Level Order     |   Medium   |
| 104 | Maximum Depth of Binary Tree       |    Easy    |
| 105 | Construct from Preorder/Inorder    |   Medium   |
| 106 | Construct from Inorder/Postorder   |   Medium   |
| 108 | Convert Sorted Array to BST        |    Easy    |
| 110 | Balanced Binary Tree               |    Easy    |
| 111 | Minimum Depth of Binary Tree       |    Easy    |
| 112 | Path Sum                           |    Easy    |
| 113 | Path Sum II                        |   Medium   |
| 114 | Flatten Binary Tree to Linked List |   Medium   |
| 124 | Binary Tree Maximum Path Sum       |    Hard    |
| 129 | Sum Root to Leaf Numbers           |   Medium   |
| 144 | Binary Tree Preorder Traversal     |    Easy    |
| 145 | Binary Tree Postorder Traversal    |    Easy    |
| 173 | Binary Search Tree Iterator        |   Medium   |
| 199 | Binary Tree Right Side View        |   Medium   |
| 222 | Count Complete Tree Nodes          |   Medium   |
| 226 | Invert Binary Tree                 |    Easy    |
| 230 | Kth Smallest Element in BST        |   Medium   |
| 235 | Lowest Common Ancestor of BST      |    Easy    |
| 236 | Lowest Common Ancestor of BT       |   Medium   |
| 337 | House Robber III                   |   Medium   |
| 437 | Path Sum III                       |   Medium   |
| 543 | Diameter of Binary Tree            |    Easy    |
| 572 | Subtree of Another Tree            |    Easy    |

</details>

<details>
<summary><strong>DFS (10 Problems)</strong></summary>

| #   | Problem                          | Difficulty |
| --- | -------------------------------- | :--------: |
| 17  | Letter Combinations Phone Number |   Medium   |
| 22  | Generate Parentheses             |   Medium   |
| 39  | Combination Sum                  |   Medium   |
| 40  | Combination Sum II               |   Medium   |
| 46  | Permutations                     |   Medium   |
| 47  | Permutations II                  |   Medium   |
| 78  | Subsets                          |   Medium   |
| 79  | Word Search                      |   Medium   |
| 90  | Subsets II                       |   Medium   |
| 200 | Number of Islands                |   Medium   |

</details>

<details>
<summary><strong>BFS (10 Problems)</strong></summary>

| #   | Problem                              | Difficulty |
| --- | ------------------------------------ | :--------: |
| 102 | Binary Tree Level Order Traversal    |   Medium   |
| 107 | Binary Tree Level Order Traversal II |   Medium   |
| 127 | Word Ladder                          |    Hard    |
| 133 | Clone Graph                          |   Medium   |
| 207 | Course Schedule                      |   Medium   |
| 210 | Course Schedule II                   |   Medium   |
| 279 | Perfect Squares                      |   Medium   |
| 322 | Coin Change                          |   Medium   |
| 542 | 01 Matrix                            |   Medium   |
| 994 | Rotting Oranges                      |   Medium   |

</details>

<details>
<summary><strong>Binary Search (15 Problems)</strong></summary>

| #   | Problem                           | Difficulty |
| --- | --------------------------------- | :--------: |
| 33  | Search in Rotated Sorted Array    |   Medium   |
| 34  | Find First and Last Position      |   Medium   |
| 35  | Search Insert Position            |    Easy    |
| 50  | Pow(x, n)                         |   Medium   |
| 69  | Sqrt(x)                           |    Easy    |
| 74  | Search a 2D Matrix                |   Medium   |
| 81  | Search in Rotated Sorted Array II |   Medium   |
| 153 | Find Minimum in Rotated Array     |   Medium   |
| 154 | Find Minimum in Rotated Array II  |    Hard    |
| 162 | Find Peak Element                 |   Medium   |
| 240 | Search a 2D Matrix II             |   Medium   |
| 278 | First Bad Version                 |    Easy    |
| 367 | Valid Perfect Square              |    Easy    |
| 378 | Kth Smallest in Sorted Matrix     |   Medium   |
| 410 | Split Array Largest Sum           |    Hard    |

</details>

### Phase 4

<details>
<summary><strong>Heap / Priority Queue (13 Problems)</strong></summary>

| #   | Problem                           | Difficulty |
| --- | --------------------------------- | :--------: |
| 23  | Merge k Sorted Lists              |    Hard    |
| 215 | Kth Largest Element in Array      |   Medium   |
| 239 | Sliding Window Maximum            |    Hard    |
| 253 | Meeting Rooms II                  |   Medium   |
| 295 | Find Median from Data Stream      |    Hard    |
| 347 | Top K Frequent Elements           |   Medium   |
| 358 | Rearrange String k Distance Apart |    Hard    |
| 373 | Find K Pairs with Smallest Sums   |   Medium   |
| 378 | Kth Smallest in Sorted Matrix     |   Medium   |
| 692 | Top K Frequent Words              |   Medium   |
| 703 | Kth Largest Element in Stream     |    Easy    |
| 767 | Reorganize String                 |   Medium   |
| 973 | K Closest Points to Origin        |   Medium   |

</details>

<details>
<summary><strong>Graph (15 Problems)</strong></summary>

| #   | Problem                         | Difficulty |
| --- | ------------------------------- | :--------: |
| 133 | Clone Graph                     |   Medium   |
| 200 | Number of Islands               |   Medium   |
| 207 | Course Schedule                 |   Medium   |
| 210 | Course Schedule II              |   Medium   |
| 261 | Graph Valid Tree                |   Medium   |
| 323 | Number of Connected Components  |   Medium   |
| 329 | Longest Increasing Path Matrix  |    Hard    |
| 332 | Reconstruct Itinerary           |    Hard    |
| 399 | Evaluate Division               |   Medium   |
| 547 | Number of Provinces             |   Medium   |
| 684 | Redundant Connection            |   Medium   |
| 785 | Is Graph Bipartite?             |   Medium   |
| 797 | All Paths From Source to Target |   Medium   |
| 841 | Keys and Rooms                  |   Medium   |
| 886 | Possible Bipartition            |   Medium   |

</details>

<details>
<summary><strong>Prefix Sum (10 Problems)</strong></summary>

| #   | Problem                        | Difficulty |
| --- | ------------------------------ | :--------: |
| 53  | Maximum Subarray               |    Easy    |
| 209 | Minimum Size Subarray Sum      |   Medium   |
| 238 | Product of Array Except Self   |   Medium   |
| 303 | Range Sum Query - Immutable    |    Easy    |
| 304 | Range Sum Query 2D - Immutable |   Medium   |
| 437 | Path Sum III                   |   Medium   |
| 523 | Continuous Subarray Sum        |   Medium   |
| 560 | Subarray Sum Equals K          |   Medium   |
| 724 | Find Pivot Index               |    Easy    |
| 930 | Binary Subarrays With Sum      |   Medium   |

</details>

<details>
<summary><strong>Backtracking (15 Problems)</strong></summary>

| #   | Problem                          | Difficulty |
| --- | -------------------------------- | :--------: |
| 17  | Letter Combinations Phone Number |   Medium   |
| 22  | Generate Parentheses             |   Medium   |
| 37  | Sudoku Solver                    |    Hard    |
| 39  | Combination Sum                  |   Medium   |
| 40  | Combination Sum II               |   Medium   |
| 46  | Permutations                     |   Medium   |
| 47  | Permutations II                  |   Medium   |
| 51  | N-Queens                         |    Hard    |
| 52  | N-Queens II                      |    Hard    |
| 77  | Combinations                     |   Medium   |
| 78  | Subsets                          |   Medium   |
| 79  | Word Search                      |   Medium   |
| 90  | Subsets II                       |   Medium   |
| 93  | Restore IP Addresses             |   Medium   |
| 131 | Palindrome Partitioning          |   Medium   |

</details>

<details>
<summary><strong>Greedy (12 Problems)</strong></summary>

| #   | Problem                        | Difficulty |
| --- | ------------------------------ | :--------: |
| 45  | Jump Game II                   |   Medium   |
| 55  | Jump Game                      |   Medium   |
| 122 | Best Time to Buy/Sell Stock II |   Medium   |
| 134 | Gas Station                    |   Medium   |
| 135 | Candy                          |    Hard    |
| 376 | Wiggle Subsequence             |   Medium   |
| 406 | Queue Reconstruction by Height |   Medium   |
| 435 | Non-overlapping Intervals      |   Medium   |
| 452 | Minimum Number of Arrows Burst |   Medium   |
| 455 | Assign Cookies                 |    Easy    |
| 621 | Task Scheduler                 |   Medium   |
| 763 | Partition Labels               |   Medium   |

</details>

<details>
<summary><strong>Dynamic Programming (60 Problems)</strong></summary>

| #    | Problem                              | Difficulty |
| ---- | ------------------------------------ | :--------: |
| 5    | Longest Palindromic Substring        |   Medium   |
| 10   | Regular Expression Matching          |    Hard    |
| 22   | Generate Parentheses                 |   Medium   |
| 32   | Longest Valid Parentheses            |    Hard    |
| 44   | Wildcard Matching                    |    Hard    |
| 53   | Maximum Subarray                     |    Easy    |
| 62   | Unique Paths                         |   Medium   |
| 63   | Unique Paths II                      |   Medium   |
| 64   | Minimum Path Sum                     |   Medium   |
| 70   | Climbing Stairs                      |    Easy    |
| 72   | Edit Distance                        |    Hard    |
| 91   | Decode Ways                          |   Medium   |
| 96   | Unique Binary Search Trees           |   Medium   |
| 97   | Interleaving String                  |    Hard    |
| 115  | Distinct Subsequences                |    Hard    |
| 118  | Pascal's Triangle                    |    Easy    |
| 119  | Pascal's Triangle II                 |    Easy    |
| 120  | Triangle                             |   Medium   |
| 121  | Best Time to Buy/Sell Stock          |    Easy    |
| 122  | Best Time to Buy/Sell Stock II       |   Medium   |
| 123  | Best Time to Buy/Sell Stock III      |    Hard    |
| 124  | Binary Tree Maximum Path Sum         |    Hard    |
| 139  | Word Break                           |   Medium   |
| 140  | Word Break II                        |    Hard    |
| 152  | Maximum Product Subarray             |   Medium   |
| 198  | House Robber                         |   Medium   |
| 213  | House Robber II                      |   Medium   |
| 221  | Maximal Square                       |   Medium   |
| 279  | Perfect Squares                      |   Medium   |
| 300  | Longest Increasing Subsequence       |   Medium   |
| 309  | Best Time to Buy/Sell Stock Cooldown |   Medium   |
| 322  | Coin Change                          |   Medium   |
| 329  | Longest Increasing Path Matrix       |    Hard    |
| 337  | House Robber III                     |   Medium   |
| 338  | Counting Bits                        |    Easy    |
| 416  | Partition Equal Subset Sum           |   Medium   |
| 494  | Target Sum                           |   Medium   |
| 516  | Longest Palindromic Subsequence      |   Medium   |
| 518  | Coin Change II                       |   Medium   |
| 583  | Delete Operation for Two Strings     |   Medium   |
| 647  | Palindromic Substrings               |   Medium   |
| 673  | Number of Longest Inc Subsequence    |   Medium   |
| 674  | Longest Continuous Inc Subseq        |    Easy    |
| 712  | Minimum ASCII Delete Sum             |   Medium   |
| 718  | Maximum Length of Repeated Subarray  |   Medium   |
| 746  | Min Cost Climbing Stairs             |    Easy    |
| 790  | Domino and Tromino Tiling            |   Medium   |
| 873  | Length of Longest Fibonacci Subseq   |   Medium   |
| 978  | Longest Turbulent Subarray           |   Medium   |
| 1043 | Partition Array for Max Sum          |   Medium   |
| 1048 | Longest String Chain                 |   Medium   |
| 1049 | Last Stone Weight II                 |   Medium   |
| 1105 | Filling Bookcase Shelves             |   Medium   |
| 1130 | Minimum Cost Tree From Leaf          |   Medium   |
| 1143 | Longest Common Subsequence           |   Medium   |
| 1155 | Number of Dice Rolls Target          |   Medium   |
| 1220 | Count Vowels Permutation             |    Hard    |
| 1235 | Maximum Profit Job Scheduling        |    Hard    |
| 1262 | Greatest Sum Divisible by Three      |   Medium   |
| 1335 | Minimum Difficulty Job Schedule      |    Hard    |

</details>

---

## 📊 Summary

| Metric             | Count |
| ------------------ | :---: |
| **Total Problems** |  350  |
| Easy               |  75+  |
| Medium             | 200+  |
| Hard               |  75+  |

---

## 🎯 Recommended Interview Prep — Top 100

If you're short on time, focus on these problem numbers (by phase):

**Phase 1 (30 problems)**

```
1, 21, 26, 49, 53, 56, 88, 94, 100, 101, 102, 104, 121, 125, 136, 141, 144,
145, 155, 169, 200, 206, 217, 226, 230, 234, 238, 242, 283, 344
```

**Phase 2 (30 problems)**

```
3, 5, 11, 15, 17, 19, 20, 22, 33, 34, 39, 42, 46, 70, 75, 78, 79, 98, 105,
108, 110, 112, 124, 133, 139, 146, 150, 207, 215, 322
```

**Phase 3 (25 problems)**

```
23, 32, 37, 45, 51, 55, 62, 72, 76, 91, 114, 127, 128, 131, 138, 139, 148,
152, 153, 198, 200, 207, 215, 237, 239
```

**Phase 4 (15 problems)**

```
10, 37, 42, 44, 51, 72, 84, 124, 127, 140, 212, 295, 312, 329, 410
```

---

## ✅ How to Use This Roadmap

1. Work through **Phase 1 → Phase 4** in order — each phase builds on the last.
2. Within each topic, solve **Easy → Medium → Hard**.
3. Save **Dynamic Programming** for last — it depends on nearly everything else.
4. Use the **Top 100** list above if you're prepping under time pressure.
