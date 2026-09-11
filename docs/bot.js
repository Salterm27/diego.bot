// Misma logica que diego_bot/bot.py, para correr en el navegador.
import { RESPUESTAS } from "./respuestas.js?v=__VERSION__";

export const MULETILLA = "ehhhh";
export const DEMORA_MINIMA = 1000;
export const DEMORA_MAXIMA = 2000;

// Intercala la muletilla entre cada palabra, al principio y al final.
export function ehhhear(mensaje) {
  const palabras = mensaje.split(/\s+/).filter(Boolean);
  const partes = [MULETILLA];
  for (const palabra of palabras) {
    partes.push(palabra, MULETILLA);
  }
  return partes.join(" ");
}

export function elegirRespuesta(rng = Math.random) {
  return RESPUESTAS[Math.floor(rng() * RESPUESTAS.length)];
}

export function demoraAleatoria(rng = Math.random) {
  return DEMORA_MINIMA + rng() * (DEMORA_MAXIMA - DEMORA_MINIMA);
}

// Espera entre 1 y 2 segundos y devuelve una respuesta aleatoria "ehhhh"-eada.
export async function responder(_mensajeUsuario, { rng = Math.random, dormir } = {}) {
  const espera = dormir ?? ((ms) => new Promise((r) => setTimeout(r, ms)));
  await espera(demoraAleatoria(rng));
  return ehhhear(elegirRespuesta(rng));
}
