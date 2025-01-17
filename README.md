# React Native Nested Object State Update Issue

This repository demonstrates a potential issue related to updating nested objects within the state in React Native. The use of the spread syntax (`...`) for this operation may result in performance issues or unexpected behavior when dealing with deeply nested objects or complex data structures.

## Problem

The provided code illustrates how updating a nested object using the spread operator can sometimes behave unexpectedly. While the code appears correct, it can lead to inefficiencies, especially in performance-sensitive situations. The root issue lies in the fact that the spread operator creates a completely new object, leading to more re-renders than might be strictly necessary.

## Solution

A more efficient approach is to use immer library, which simplifies immutable updates to nested objects significantly. Immer ensures changes are correctly applied without needing the explicit creation of new objects every time.

## How to Run

Clone this repository and run the React Native project using your preferred method. This will allow you to observe the described behavior and the efficiency improvement provided by the solution.

## Note

This demonstrates the potential complexities of state management in React Native and highlights the importance of choosing efficient update strategies, especially when working with complex data structures.