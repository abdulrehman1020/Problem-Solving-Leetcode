class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
       unordered_map<int, int> mp;
       int res = 0;
       for(int i = 0; i<nums.size(); i++){
        mp[nums[i]]++;
       } 
       for(auto el:mp){
        int cnt = el.second;
        res += cnt * (cnt -1) /2;
       }
       return res;
    }
};