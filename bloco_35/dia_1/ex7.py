# Exercício 7 : Agora iremos explorar o outro protocolo de transporte que aprendemos. Crie um servidor UDP usando o mesmo módulo socketserver . Nosso servidor UDP deverá:
#   Imprimir no console toda mensagem recebida (não esqueça de converter também para string).
#   Responder com os dados recebidos (como um eco).
#   Utilize a porta 8084.
#     Dicas:
#       todas as dicas do exercício 4 se aplicam
#       telnet não funciona com udp -- use netcat


from socketserver import UDPServer, DatagramRequestHandler

ADDRESS = "", 8084


class EchoHandler(DatagramRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())


if __name__ == "__main__":
    with UDPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()
