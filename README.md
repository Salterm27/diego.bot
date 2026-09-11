# diego.bot

Chatbot que ante cualquier mensaje espera entre 1 y 2 segundos y responde con un
mensaje aleatorio de un listado pre-establecido, agregando `ehhhh` entre cada
palabra, al principio y al final.

Hay dos frentes con la misma logica: una **interfaz web** (que corre en GitHub
Pages) y un **chat de consola** en Python.

## Web (GitHub Pages)

Todo corre en el navegador, no hay backend. Se publica desde la carpeta `docs/`.

```
vos> hola
bot> ehhhh Anda ehhhh a ehhhh laburar ehhhh un ehhhh poco ehhhh
```

### Publicar

El workflow `.github/workflows/pages.yml` sube `docs/` en cada push a `main`.
Para que funcione hay que habilitarlo una sola vez:

**Settings → Pages → Build and deployment → Source: GitHub Actions.**

(Alternativa sin Actions: Source *Deploy from a branch*, rama `main`, carpeta
`/docs`.)

Queda publicado en `https://<usuario>.github.io/diego.bot/`.

### Probar local

```bash
python3 -m http.server 8000 --directory docs
# abrir http://localhost:8000
```

Hace falta servirlo por HTTP (no `file://`) porque usa modulos ES.

## Consola (Python)

```bash
python3 -m diego_bot
```

Salir con `salir`, `chau`, `exit`, `quit` o Ctrl-C.

## Estructura

| Archivo | Que hace |
| --- | --- |
| `docs/index.html` | Pagina del chat |
| `docs/estilos.css` | Estilos (responsive, burbujas, modo oscuro) |
| `docs/app.js` | UI: burbujas, indicador de "pensando", foco y bloqueo del input |
| `docs/bot.js` | Logica: demora aleatoria, eleccion y `ehhhh`-eado |
| `docs/respuestas.js` | El listado de respuestas de la web |
| `diego_bot/` | La misma logica en Python, para consola |
| `test/bot.test.js` | Tests de la version JS |
| `test_bot.py` | Tests de la version Python |

Para agregar respuestas, editá `docs/respuestas.js` (web) y/o
`diego_bot/respuestas.py` (consola).

## Tests

```bash
node --test test/bot.test.js
python3 -m unittest -q test_bot.py
```
