class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        
        fizzbuzz_list = []
        
        for num in range(1,n + 1):
            if num%3 == 0 and num%5 != 0:
                fizzbuzz_list.append("Fizz")
            
            if num%5 == 0 and num%3 != 0:
                fizzbuzz_list.append("Buzz")
                
                
            if num%3 != 0 and num%5 != 0:
                fizzbuzz_list.append(str(num))
                
            if num%3 == 0 and num%5 == 0:
                fizzbuzz_list.append("FizzBuzz")
                
        return fizzbuzz_list