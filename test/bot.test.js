// Correr con: node --test test/bot.test.js
import test from "node:test";
import assert from "node:assert/strict";
import { RESPUESTAS } from "../docs/respuestas.js";
import { DEMORA_MAXIMA, DEMORA_MINIMA, ehhhear, responder } from "../docs/bot.js";

test("intercala la muletilla y envuelve el mensaje", () => {
  assert.equal(ehhhear("hola que tal"), "ehhhh hola ehhhh que ehhhh tal ehhhh");
  assert.equal(ehhhear("hola"), "ehhhh hola ehhhh");
  assert.equal(ehhhear(""), "ehhhh");
});

test("demora entre uno y dos segundos", async () => {
  const demoras = [];
  const dormir = (ms) => { demoras.push(ms); return Promise.resolve(); };
  for (let i = 0; i < 200; i++) await responder("hola", { dormir });
  for (const d of demoras) {
    assert.ok(d >= DEMORA_MINIMA && d <= DEMORA_MAXIMA, `demora fuera de rango: ${d}`);
  }
});

test("la respuesta sale del listado", async () => {
  const posibles = new Set(RESPUESTAS.map(ehhhear));
  const dormir = () => Promise.resolve();
  for (let i = 0; i < 200; i++) {
    assert.ok(posibles.has(await responder("hola", { dormir })));
  }
});

test("indices validos en los bordes del rng", async () => {
  const dormir = () => Promise.resolve();
  for (const v of [0, 0.999999999]) {
    const r = await responder("hola", { rng: () => v, dormir });
    assert.ok(new Set(RESPUESTAS.map(ehhhear)).has(r));
  }
});
