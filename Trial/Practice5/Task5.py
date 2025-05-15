#1
for i in range(1,11) :
    print(i)
#2
for i in range(1,21) :
    if i%2==0 :
        print(i,"even")
#3
for i in range(1,21):
    if i%3==0 :
        print(i,"Odd")
#4
n=5
num=1
for i in range (1,n+1) :
  num*=i
  print(num)
#5
count=0
for i in range(1,101) :
    count+=i
    print(count)
#6
total=0
a=[10,20,30,40,50]
for i in a :
  total+=i
  avg=total/len(a)
  print(avg)
#7 square
n=5
for i in range(n) :
  row=""
  for j in range(n) :
    row += "*"
  print(row)
#7 rectangle
n=5
l=10
for i in range(n) :
    row=" "
    for j in range(l) :
        row+="*"
    print(row)
#8
for i in range(1,6) :
    print(i)
#9
for i in range(1,11) :
    print(i)
#10
a=[10,20,30,40,10]
if (a[0]==a[4]) :
  print("True")
else :
  print("False")
#11
for i in range(1,51):
    if i%5==0 :
        print(i)
#12
b="w"
for i in b :
  if (b=="a"or b=="e"or b=="i"or b=="o"or b=="u") :
    print("Vowel")
  else :
    print("consonant")
#13
odd=[]
even=[]
for i in range(10,56) :
  if i%2==0 :
    even.append(i)
  else :
    odd.append(i)
    print(len(even),"even number")
    print(len(odd),"odd number")
#14
for i in range(1,26) :
    if i%5!=0 :
        print(i)
#15
num=[3,5,7,0,1]
factorials=[]
for i in num :
    fact=1
    for j in range(1,i+1) :
        fact*=j
    factorials.append(fact)
print(factorials)
#16
a=500
b=10
if a*b>500 :
    print(a+b)
else :
    print(a*b)
#17
a=10
b=20
if a>b :
    print(a)
else :
    print(b)
#18
a=10
b=30
c=20
if a>b :
    print("a is greater")
elif b>c :
    print("b is greater")
else :
    print("c is greater")
#19
x=[23,4,-6,23,-9,21,3,-45,-8]
for i in (x) :
    if i>=1 :
      print(i,"positive")
    else :
      print(i,"negative")
