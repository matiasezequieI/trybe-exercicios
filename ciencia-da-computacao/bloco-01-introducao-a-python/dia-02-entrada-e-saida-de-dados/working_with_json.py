import json


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon['type']
]


print(grass_type_pokemons[0])
