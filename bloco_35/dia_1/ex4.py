# Exercício 4 : Agora iremos para a camada de transporte. Crie um servidor TCP usando o módulo socketserver que já vem embutido com o Python. Nosso servidor TCP deverá:
#   Responder com um "Olá, client", logo quando estabelecer uma conexão.
#   Imprimir no console todo dado recebido.
#   Responder com os dados recebidos (como um eco).
#   Utilize a porta 8085.
#   Perceba que o servidor sozinho não faz nada. Ele precisa que alguém se conecte a ele, então para testá-lo você pode utilizar o comando telnet localhost 8085 , onde telnet é a aplicação que iremos utilizar, localhost é o local onde o servidor está (no caso, o seu próprio PC) e 8085 é a porta em que o servidor está escutando conexões.
#     Dicas:
#       a documentação do módulo traz exemplos de como instanciar seu servidor TCP
#       na mesma documentação, temos exemplos de classes para responder as requisições
#       os dados na requisição vêm em bytes -- não strings! bytes podem ser decodificados em string com a codificação correta
#       do mesmo jeito, para responder você pode precisar codificar strings em bytes
#       telnet sempre envia ASCII, já o netcat envia no encoding do sistema (em Linux, geralmente utf-8, mas confirme com o comando locale )


from socketserver import TCPServer, StreamRequestHandler

ADDRESS = "", 8085


class EchoHandler(StreamRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        # Usar b'' é um jeito literal de escrever bytes em ascii
        self.wfile.write(b"Hello, World!\n")
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode('ascii').strip())

if __name__ == "__main__":
    # usando with nosso TCPServer vai arrumar a casa direitinho quando encerrado
    with TCPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()
