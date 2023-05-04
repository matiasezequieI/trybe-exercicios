list = [7, 9, 6, 10, 8]


def check_average(grades):
    sum = 0
    for x in grades:
        sum += x
    average = sum / len(grades)
    return average


print(check_average(list))
