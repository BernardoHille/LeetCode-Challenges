class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        
        result = []
        soma = 0
        
        for x in nums:
            soma += x
            result.append(soma)
            
        
        return result