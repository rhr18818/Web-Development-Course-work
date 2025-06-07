# Merge Two Sorted Lists - Recursion Tree

## Example Input
- **list1**: 1 → 2 → 4 → null
- **list2**: 1 → 3 → 4 → null

## Detailed Recursion Tree

```
mergeTwoLists(1→2→4→null, 1→3→4→null)
├─ list1.val (1) == list2.val (1), but condition is list1.val < list2.val
├─ Since 1 ≮ 1 (false), go to else branch
├─ list2.next = mergeTwoLists(1→2→4→null, 3→4→null)
│  │
│  └─ mergeTwoLists(1→2→4→null, 3→4→null)
│     ├─ list1.val (1) < list2.val (3) ✓
│     ├─ list1.next = mergeTwoLists(2→4→null, 3→4→null)
│     │  │
│     │  └─ mergeTwoLists(2→4→null, 3→4→null)
│     │     ├─ list1.val (2) < list2.val (3) ✓
│     │     ├─ list1.next = mergeTwoLists(4→null, 3→4→null)
│     │     │  │
│     │     │  └─ mergeTwoLists(4→null, 3→4→null)
│     │     │     ├─ list1.val (4) < list2.val (3) ✗
│     │     │     ├─ list2.next = mergeTwoLists(4→null, 4→null)
│     │     │     │  │
│     │     │     │  └─ mergeTwoLists(4→null, 4→null)
│     │     │     │     ├─ list1.val (4) < list2.val (4) ✗
│     │     │     │     ├─ list2.next = mergeTwoLists(4→null, null)
│     │     │     │     │  │
│     │     │     │     │  └─ mergeTwoLists(4→null, null)
│     │     │     │     │     ├─ list2 === null ✓
│     │     │     │     │     └─ return list1 (4→null)
│     │     │     │     │
│     │     │     │     ├─ list2.next = 4→null
│     │     │     │     └─ return list2 (4→4→null)
│     │     │     │
│     │     │     ├─ list2.next = 4→4→null
│     │     │     └─ return list2 (3→4→4→null)
│     │     │
│     │     ├─ list1.next = 3→4→4→null
│     │     └─ return list1 (2→3→4→4→null)
│     │
│     ├─ list1.next = 2→3→4→4→null
│     └─ return list1 (1→2→3→4→4→null)
│
├─ list2.next = 1→2→3→4→4→null
└─ return list2 (1→1→2→3→4→4→null)
```

## Step-by-Step Execution

### Call Stack Depth and Returns

1. **Level 0**: `mergeTwoLists([1,2,4], [1,3,4])`
   - Condition: `1 < 1` → False
   - Execute: `list2.next = mergeTwoLists([1,2,4], [3,4])`

2. **Level 1**: `mergeTwoLists([1,2,4], [3,4])`
   - Condition: `1 < 3` → True
   - Execute: `list1.next = mergeTwoLists([2,4], [3,4])`

3. **Level 2**: `mergeTwoLists([2,4], [3,4])`
   - Condition: `2 < 3` → True
   - Execute: `list1.next = mergeTwoLists([4], [3,4])`

4. **Level 3**: `mergeTwoLists([4], [3,4])`
   - Condition: `4 < 3` → False
   - Execute: `list2.next = mergeTwoLists([4], [4])`

5. **Level 4**: `mergeTwoLists([4], [4])`
   - Condition: `4 < 4` → False
   - Execute: `list2.next = mergeTwoLists([4], null)`

6. **Level 5**: `mergeTwoLists([4], null)`
   - Condition: `list2 === null` → True
   - **Return**: `[4]`

### Return Journey (Unwinding)

- **Level 5 → 4**: Returns `[4]`, so `list2` becomes `[4,4]`, return `[4,4]`
- **Level 4 → 3**: Returns `[4,4]`, so `list2` becomes `[3,4,4]`, return `[3,4,4]`
- **Level 3 → 2**: Returns `[3,4,4]`, so `list1` becomes `[2,3,4,4]`, return `[2,3,4,4]`
- **Level 2 → 1**: Returns `[2,3,4,4]`, so `list1` becomes `[1,2,3,4,4]`, return `[1,2,3,4,4]`
- **Level 1 → 0**: Returns `[1,2,3,4,4]`, so `list2` becomes `[1,1,2,3,4,4]`, return `[1,1,2,3,4,4]`

## Key Observations

1. **Base Cases**: The recursion stops when one of the lists becomes `null`
2. **Comparison Logic**: At each level, we compare the current heads of both lists
3. **Pointer Manipulation**: The smaller value's node gets its `next` pointer updated with the result of the recursive call
4. **Return Value**: Each recursive call returns the head of the merged portion
5. **Maximum Depth**: The recursion depth equals the total number of nodes in the shorter list plus any additional comparisons

## Final Result
**Input**: `[1,2,4]` and `[1,3,4]`  
**Output**: `[1,1,2,3,4,4]`