          ###############Ali##################
          #lambda function with .map function#
#map function :is function is a built-in function in Python,
  #which applies a given function to each item of iterable#

# 1-we use a map function to squure each vakue in the array:
# list_of_num_even = [2,4,6,8,10,12,14]

# result = list(map(lambda num : num ** 2 , list_of_num_even)) 
# def sqqre(list):
#   for i in range(len(list)):
#     list[i] =list[i]**2
#   return list
# print (result)
# print(sqqre(list_of_num_even))

# 2-we use a map function to add the first array to the secont array: 
# first array is the:list_of_num_even
#second array is the:list_num_odd
list_of_num_even = [2,4,6,8,10,12,14]
list_num_odd = [1,3,5,9,11,13]

result_2 = list(map(lambda num1 , num2 : num1+num2,list_of_num_even,list_num_odd )) 

print(result_2)
# 3-we use a map to add the array with length of the same  array 
list_num =[1,2,3,4,5,6,7,8,9,10,11,12]

length = len(list_num)

result_3 = list(map(lambda num1  : num1+length ,list_num))

print(result_3)
