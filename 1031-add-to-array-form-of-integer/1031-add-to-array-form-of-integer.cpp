class Solution {
public:
    vector<int> addToArrayForm(vector<int>& num, int k) {
       int i = num.size()-1;
       int carry =0;
       vector<int> res;
       while(i>=0 || k > 0 || carry > 0){
        int v1 =0;
        if(i>=0) v1 = num[i];
        int sum = carry + v1 + (k%10);
        res.push_back(sum%10);
        carry = sum/10;
        k=k/10;
        i--;
       }
       reverse(res.begin(), res.end());
       return res;   
    }
};