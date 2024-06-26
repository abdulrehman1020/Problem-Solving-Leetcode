/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
private:
    void dfs(TreeNode* root, int depth, int &maxDepth, int &sum){
        if (root == nullptr){
            return;
        }
        dfs(root->left, depth+1, maxDepth, sum);
        dfs(root->right, depth+1, maxDepth, sum);
        if (root->left == nullptr && root->right == nullptr && depth >= maxDepth){
            sum = (depth == maxDepth) ? sum + root->val : root->val;
        }
        maxDepth = max(maxDepth, depth);
        return;
    }
public:
    int deepestLeavesSum(TreeNode* root) {
        int maxDepth = 0, sum = 0;
        dfs(root, 0, maxDepth, sum);
        return sum;
    }
};