recu_students = []

with open('arquivo.txt', 'r') as file:
    content = file.read()
    content = content.split()


convert = {content[i]: content[i + 1] for i in range(0, len(content), 2)}

for name, grade in convert.items():
    if (int(grade) < 6):
        recu_students.append(name)

recu_students = '\n'.join(recu_students)

with open('test.txt', 'w') as file:
    file.write(recu_students)
