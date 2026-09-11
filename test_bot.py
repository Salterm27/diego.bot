import random
import unittest

from diego_bot import RESPUESTAS, ehhhear, responder
from diego_bot.bot import DEMORA_MAXIMA, DEMORA_MINIMA


class TestEhhhear(unittest.TestCase):
    def test_intercala_y_envuelve(self):
        self.assertEqual(ehhhear("hola que tal"), "ehhhh hola ehhhh que ehhhh tal ehhhh")

    def test_una_palabra(self):
        self.assertEqual(ehhhear("hola"), "ehhhh hola ehhhh")

    def test_vacio(self):
        self.assertEqual(ehhhear(""), "ehhhh")


class TestResponder(unittest.TestCase):
    def test_demora_entre_uno_y_dos_segundos(self):
        demoras = []
        for _ in range(50):
            responder("hola", rng=random, dormir=demoras.append)
        for d in demoras:
            self.assertGreaterEqual(d, DEMORA_MINIMA)
            self.assertLessEqual(d, DEMORA_MAXIMA)

    def test_respuesta_viene_del_listado(self):
        posibles = {ehhhear(r) for r in RESPUESTAS}
        for _ in range(50):
            self.assertIn(responder("hola", dormir=lambda _s: None), posibles)


if __name__ == "__main__":
    unittest.main()
