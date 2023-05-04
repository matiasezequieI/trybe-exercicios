list = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']


def bigger_name(names):
    biggest_name = ''
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(bigger_name(list))
