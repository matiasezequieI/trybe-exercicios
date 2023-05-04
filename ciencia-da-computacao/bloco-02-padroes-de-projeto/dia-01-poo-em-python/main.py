from pessoa import Pessoa
from ventilador import Ventilador
from secador import Secador
from batedeira import Batedeira
from maquina_de_lavar import MaquinaDeLavar
from tv import Tv


ventilador_branco = Ventilador("branco", potencia=250, tensao=220, preco=100)
pessoa = Pessoa("Maria", saldo_na_conta=2000)
pessoa.comprar_ventilador(ventilador_branco)
# print(pessoa)


secador = Secador("Branco", "450", "127", "400")
batedeira = Batedeira("Prata", "200", "127", "290")
maquina_de_lavar = MaquinaDeLavar("Preta", "6000", "127", "1300")

tv = Tv(39)
tv.aumentar_volume()
tv.mudar_canal(32)
print(tv)
