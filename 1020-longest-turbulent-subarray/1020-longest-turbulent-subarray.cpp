class Solution {
public:
    int maxTurbulenceSize(vector<int>& arr) {
           if (arr.size() < 2) return arr.size();
        
        int res = 1;
        int l = 0; // Start pointer of the current turbulent subarray

        for (int r = 1; r < arr.size(); ++r) {
            if (arr[r-1] > arr[r]) {
                if (r == 1 || arr[r-2] < arr[r-1]) {
                    // Start or continue a valid turbulent subarray
                    res = max(res, r - l + 1);
                } else {
                    // Restart the turbulent subarray
                    l = r - 1;
                    res = max(res, 2); // Since two elements can form a valid subarray
                }
            } else if (arr[r-1] < arr[r]) {
                if (r == 1 || arr[r-2] > arr[r-1]) {
                    // Start or continue a valid turbulent subarray
                    res = max(res, r - l + 1);
                } else {
                    // Restart the turbulent subarray
                    l = r - 1;
                    res = max(res, 2); // Since two elements can form a valid subarray
                }
            } else {
                // Reset the start pointer if two consecutive elements are equal
                l = r;
            }
        }
        
        return res;
    }
};