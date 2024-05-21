class Solution {
public:
    vector<int> findArray(vector<int>& pref) {
        int prev = pref[0];// prev -- store the (i-1)th value of original vector
        int aux; // temporary variable
        for(int i = 1;i<pref.size();i++){
            aux=prev^pref[i];
            prev = pref[i];
            pref[i] = aux;
        }
        return pref;
    }
};