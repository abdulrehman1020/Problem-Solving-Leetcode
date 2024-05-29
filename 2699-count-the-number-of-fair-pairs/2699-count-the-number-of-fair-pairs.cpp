class Solution {
public:
    long long countFairPairs(vector<int>& nums, int lower, int upper) {
        sort(nums.begin(),nums.end());
        long long count=0,i=0,j=nums.size()-1;
        while(i<j){
            if((nums[i]+nums[j])<lower){
                // cout<<i<<" "<<j<<endl;
                count+=(j-i);
                i++;
            }
            else if((nums[i]+nums[j])>=lower){
                j--;
            }
            
        }
        i=0,j=nums.size()-1;
        while(i<j){
            if(nums[i]+nums[j]>upper){
                // cout<<i<<" "<<j<<endl;
                count+=(j-i);
                j--;
            }
            else
                i++;
        }
        
        long long res=(nums.size()*(nums.size()-1))/2;
        // cout<<res<<" "<<count<<endl;
        return res-count;
    }
};