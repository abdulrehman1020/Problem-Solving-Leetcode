class Solution {
public:
    void solveRec(int i,int total,int &ans,vector<int> &nums,int n){
        if(i==n){
            ans+=total;
            return;
        }

        //include
        solveRec(i+1,total^nums[i],ans,nums,n);

        //exclude
        solveRec(i+1,total,ans,nums,n);
    }

    int subsetXORSum(vector<int>& nums) {
        int n=nums.size();
        int ans=0,total=0;
        
        solveRec(0,total,ans,nums,n);
        return ans;
    }
};