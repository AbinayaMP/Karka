#1
def sayHello():
    print("Hello,World!")
sayHello()
#2
def add(a,b):
    c=a+b
    print(c)
add(20,40)
#3
def mul(x,y) :
    c=x*y
    print(c)
mul(10,20)
#4
def mul():
    a=10
    b=20
    c=a*b
    print(c)
mul()
#5
def div():
    a=10
    b=5
    c=a/b
    print(c)
div()
#6
def fact(n) :
    if n==0 or n==1 :
        return 1
    else :
        return n*fact(n-1)
print("Fact of 0 :",fact(0))
print("Fact of 1 :",fact(1))
print("Fact of 2 :",fact(2))
print("fact of 5 :",fact(5))
#7
def squ():
    a=5*5
    print(a)
squ()