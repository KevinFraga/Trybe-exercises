# Exercício 1 : Crie um projeto que irá simular a arquitetura que vimos em aula de uma maneira bem simples, ela terá um arquivo principal para a execução do programa que representará nosso Sistema Operacional e duas classes que representarão a Memória Principal e a Secundária .
# Cada tipo de memória irá armazenar os dados de fato na memória que ela representa, sendo a Principal armazenando tudo em memória RAM e a secundária no disco. Através do Python estaremos fazendo chamadas ao Sistema Operacional para realizar essas tarefas para gente, pois ele melhor do que ninguém saberá utilizar as memórias. O objetivo do nosso script será realizar a soma de uma lista de números aleatórios utilizando as duas implementações de memória. Os dados serão sempre armazenados como strings!

from time import perf_counter

from main_memory import MainMemory
from secondary_memory import SecondaryMemory

main = MainMemory()
secondary = SecondaryMemory()

# Numeros aleatórios a serem somados
RANDOM_NUMBERS = ["36912", "84300"] * 100

def timer(string, initial_time):
    """Função auxiliar para print temporizado"""
    print(string)
    print(f"Tempo para a tarefa terminar: {perf_counter() - initial_time:6f}\n")


# Desempenho da memória primária
main_load_init_time = perf_counter()
for number in RANDOM_NUMBERS:
    main.load(number)
timer("Números carregados na memória principal", main_load_init_time)

main_get_init_time = perf_counter()
main_sum = sum([main.get(i) for i in range(len(RANDOM_NUMBERS))])
timer(f"Soma na memória principal: {main_sum}", main_get_init_time)

main_clean_init_time = perf_counter()
main.clean()
timer("Clean na memória principal", main_clean_init_time)


# Desempenho da memória secundária
secondary_load_initial_time = perf_counter()
for number in RANDOM_NUMBERS:
    secondary.load(number)
timer("Números carregados na memória secundária", secondary_load_initial_time)

secondary_get_init_time = perf_counter()
secondary_sum = sum([secondary.get(i) for i in range(len(RANDOM_NUMBERS))])
timer(f"Soma na memória secundária: {secondary_sum}", secondary_get_init_time)

secondary_clean_init_time = perf_counter()
secondary.clean()
timer("Clean na memória secundária", secondary_clean_init_time)
