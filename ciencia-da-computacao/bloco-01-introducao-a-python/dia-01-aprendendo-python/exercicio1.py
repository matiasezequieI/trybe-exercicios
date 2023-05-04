def biggest_number(x, y):
    if x == y:
        return 'the numbers are equal'
    if x > y:
        return x
    else:
        return y


print(biggest_number(2, 5))
