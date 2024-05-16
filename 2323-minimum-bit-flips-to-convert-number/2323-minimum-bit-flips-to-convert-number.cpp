class Solution {
public:
    int bitCount(int num){
         int count=0;
        while(num!=0){
            count+=num&1; //count the number of set bits
            num>>=1; //right shift one bit to change the LSB
        }
        return count;
    }
    int minBitFlips(int start, int goal) {
        return bitCount(start^goal);
    }
};