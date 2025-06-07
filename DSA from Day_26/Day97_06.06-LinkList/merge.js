
function mergeList(list1,list2){
    if(list1==null) return list2
    if(list2==null) return list2

    if(list1.val < list2.val){
        list1.next = mergeList(list1.next,list2)
        return list1 /// if ---> first element is smaller in list1 ---> ans list = list1
    }
    else{
        list2.next = mergeList(list1,list2.next)
        return list2 /// if ---> first element is smaller in list1 ---> ans list = list1
    }
}