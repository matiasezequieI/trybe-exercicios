class Tv:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume > 99:
            self.__volume = 99
        self.__volume += 1

    def diminuir_volume(self):
        if self.__volume < 0:
            self.__volume = 0
        self.__volume -= 1

    def mudar_canal(self, canal):
        if canal < 1 or canal > 99:
            raise ValueError("Canal indisponível")
        self.__canal = canal

    def __str__(self) -> str:
        return f"""
        Volume: {self.__volume}
        Canal: {self.__canal}
        Tamanho: {self.__tamanho}
        Ligada: {self.__ligada}
        """

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def get_volume(self):
        return self.__volume

    def get_canal(self):
        return self.__canal

    def get_tamanho(self):
        return self.__tamanho

    def get_ligada(self):
        return self.__ligada
