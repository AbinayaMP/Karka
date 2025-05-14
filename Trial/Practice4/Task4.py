#1
a=int(input("Enter a number :"))
if a>=1 :
    print("Positive")
else :
    print("Negative")
#2
a=int(input("Enter a number :"))
if a%2==0 :
    print("Even")
else :
    print("Odd")  
#3
n=5
print(n**2)
#4
a=int(input("Enter number1 :"))
b=int(input("Enter number2 :"))
if a>b :
    print("a is greater")
else :
    print("b is greater")
#5
a=int(input("Enter year :"))
if (a%4==0 and a%400==0) :
    print("It is a leapyear")
else :
    print("not a leapyear")
#6
a=int(input("Enter score :"))
if a>=90 :
    print("A")
elif a>=80 :
    print("B")
elif a>=70 :
    print("C")
elif a>=60 :
    print("D")
else :
    print("F")
#7
a=int(input("Enter age :"))
if a<16 :
    print("You can't drive")
elif (a==16 or a==17) :
    print("You can drive but not vote")
elif (a>=18 and a<=24) :
    print("You can vote but not rent a car")
else :
    print("You can do pretty much anything")
#8
for i in range(1,101) :
    if i%3==0 and i%5==0 :
        print(i,"FizzBuzz")
    elif i%3==0 :
        print(i,"Fizz")
    elif i%5==0 :
        print(i,"Buzz")
    else :
        print(i)
#9
a=int(input("Enter year :"))
if (a%4==0 and a%100!=0) :
    print(a,"is a leap year")
else :
    print("not a leapyear")