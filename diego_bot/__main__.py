"""Chat interactivo por consola. Salir con 'salir', 'chau' o Ctrl-C."""

import sys

from .bot import responder

SALIDAS = {"salir", "chau", "exit", "quit"}


def main():
    print("diego.bot listo. Tirale un centro (o \"salir\" para cortar).")
    while True:
        try:
            entrada = input("vos> ")
        except (EOFError, KeyboardInterrupt):
            print()
            break
        if entrada.strip().lower() in SALIDAS:
            break
        print(f"D10S> {responder(entrada)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
