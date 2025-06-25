class Solution {
    nextLargerElement(arr) {
        // code here
        let ans = []
        let st = []
        for(let i=arr.length-1;i>=0;i--){
            while(st.length !=0 && arr[i]>=st[st.length-1]) {
                st.pop()
            }    
            if(st.length==0) ans[i] = -1
            else ans[i] = st[st.length-1]
            
            st.push(arr[i])
        }
        return ans
    }
}