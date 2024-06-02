class Solution {
public:
    void sort_score(vector<vector<int>>&score, int k){
        sort(score.begin(),score.end(),[k](vector<int>&x,vector<int>&y){
            return x[k] > y[k]; 
        });
// sort using custom comparator..
    }
    vector<vector<int>> sortTheStudents(vector<vector<int>>& score, int k) {
        sort_score(score,k);
        return score;
    }
};