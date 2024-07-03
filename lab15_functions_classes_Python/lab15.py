"""
Milpa Curiel
Tuesday, June 25, 2024
"""
print ("\n============function===================")
#define (def) a function that takes two numbers and return  the sum of them
def addition(x,y):
    return x+y

#calling function addition()
result = addition(2,5)
print(result)
print(addition (8,-10))

#define a function to calculate the area of a rectangle using the length and the width
def arearectangle(length, width):
    area = length*width
    return  area

#calling function area rectangle
print (f"The area of a rectable is {arearectangle(3,5)}")

#define a function to check if a number is positive, negative or 0
def ispositive(num):
    if num>0:
        return "positive"
    elif num<0:
        return "negative"
    else:
        return "zero"
    
#call function  ispositive()
n = 0
print(f"The number is {ispositive((n))}")

#define a function that check if a number is even number%2 == 0
def iseven(num):
    try:
        if num%2==0:
             return True
        else:
            return False
    except:
        return "ERROR"

x = "Peter Pan"
print(f"Is the number even? {iseven(x)}")

print ("\n============classes===================")

class MyClass:
    #property/attributes (variable)
    i = 12345   

    #method(function)
    def testing(self):
        return "Hello World!"

#calling class MyClass

#step 1: create the instance/copy of the class
newclass = MyClass()

#step 2: call the instance class
instanceproperty = newclass.i

#step 3: call the instance method
instancemethod = newclass.testing()

#print results
print(f"Instance class property {instanceproperty}")
print(f"Instance class method {instancemethod}")

print ("\n============CAR CLASS EXAMPLE===================")
class Car:
    # instantition object of the class ... empty class
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    #method to return the information of the car
    def get_descriptive_car(self):
        return (f"{self.year}, {self.make} {self.model}")
#create an instance of the class Car
newcar = Car("Audi", "a4", 2020)

#access method get_descriptive_car
car_description = newcar.get_descriptive_car()
print(car_description)