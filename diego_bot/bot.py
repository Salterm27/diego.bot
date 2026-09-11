"""Chatbot que responde mensajes aleatorios con un 'ehhhh' entre cada palabra."""

import random
import time

from .respuestas import RESPUESTAS

MULETILLA = "ehhhh"
DEMORA_MINIMA = 1.0
DEMORA_MAXIMA = 2.0


def ehhhear(mensaje):
    """Intercala la muletilla entre cada palabra, al principio y al final."""
    palabras = mensaje.split()
    partes = [MULETILLA]
    for palabra in palabras:
        partes.append(palabra)
        partes.append(MULETILLA)
    return " ".join(partes)


def elegir_respuesta(rng=random):
    return rng.choice(RESPUESTAS)


def responder(_mensaje_usuario, rng=random, dormir=time.sleep):
    """Espera entre 1 y 2 segundos y devuelve una respuesta aleatoria 'ehhhh'-eada."""
    dormir(rng.uniform(DEMORA_MINIMA, DEMORA_MAXIMA))
    return ehhhear(elegir_respuesta(rng))
