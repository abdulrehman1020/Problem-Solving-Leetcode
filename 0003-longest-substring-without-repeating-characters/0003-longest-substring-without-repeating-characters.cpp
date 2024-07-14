class Solution {
public:
    int lengthOfLongestSubstring(string s) {
       unordered_set<char> letter;
       int i=0;
       int j=0;
       int result =0;
       while(j<s.size()){
        if(letter.find(s[j]) == letter.end()){
            letter.insert(s[j]);
           result = max(result, j-i+1);
           j++; 
        }else{
            letter.erase(s[i]);
            i++;
        }
      
       }
       return result;
        
    }
};