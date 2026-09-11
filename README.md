# diego.bot

Chatbot de consola: ante cualquier mensaje espera entre 1 y 2 segundos y responde
con un mensaje aleatorio de un listado pre-establecido, agregando `ehhhh` entre
cada palabra, al principio y al final.

## Uso

```bash
python3 -m diego_bot
```

```
vos> hola
bot> ehhhh Anda ehhhh a ehhhh laburar ehhhh un ehhhh poco ehhhh
```

Salir con `salir`, `chau`, `exit`, `quit` o Ctrl-C.

## Estructura

- `diego_bot/respuestas.py` — el listado de respuestas (editalo para agregar más).
- `diego_bot/bot.py` — demora aleatoria, elección de respuesta y el `ehhhh`-eado.
- `diego_bot/__main__.py` — loop interactivo de consola.
- `test_bot.py` — tests.

## Tests

```bash
python3 -m unittest -q test_bot.py
```
