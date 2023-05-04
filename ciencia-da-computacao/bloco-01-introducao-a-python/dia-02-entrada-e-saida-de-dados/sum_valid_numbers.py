numbers = input('Digite alguns números: ')
sum = 0

numbers = numbers.split(' ')

for number in numbers:
    if number.isdigit():
        sum += int(number)
    else:
        print(f"Erro ao somar valores, '{number}' não é um dígito.")

print(f"A soma dos dígitos válidos é: {sum}")
