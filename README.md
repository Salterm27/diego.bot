# diego.bot

El Diez que te contesta cualquiera. Ante cualquier mensaje espera entre 1 y 2
segundos, la piensa, y responde con una frase al azar de un listado fijo,
metiendo `ehhhh` entre cada palabra, al principio y al final.

> Homenaje de hincha. No tiene relacion con Diego Armando Maradona, su familia
> ni nadie que lo represente: es un chiste con frases celebres y otras
> inventadas. Si vas a publicarlo, no lo presentes como si fuera el.

Hay dos frentes con la misma logica: una **interfaz web** (que corre en GitHub
Pages) y un **chat de consola** en Python.

## Web (GitHub Pages)

Todo corre en el navegador, no hay backend. Se publica desde la carpeta `docs/`.

```
vos>  que haces diego
D10S> ehhhh La ehhhh pelota ehhhh no ehhhh se ehhhh mancha ehhhh
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

### Cache

Los assets se referencian como `estilos.css?v=__VERSION__`. El workflow
reemplaza ese placeholder por el SHA del commit antes de publicar, asi que
cada deploy cambia la URL de los archivos y el navegador no sirve CSS ni
modulos viejos de su cache. Si editas los `docs/` a mano, dejá el
placeholder tal cual: se reemplaza solo en el deploy.

## Consola (Python)

```bash
python3 -m diego_bot
```

Salir con `salir`, `chau`, `exit`, `quit` o Ctrl-C.

## Estructura

| Archivo | Que hace |
| --- | --- |
| `docs/index.html` | Pagina del chat |
| `docs/estilos.css` | Estilos: cancha, tiras albicelestes, el 10 y el dorado |
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
