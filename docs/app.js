import { responder } from "./bot.js";

const chat = document.getElementById("chat");
const formulario = document.getElementById("formulario");
const entrada = document.getElementById("entrada");
const boton = document.getElementById("enviar");

function agregarBurbuja(texto, quien, extra = "") {
  const div = document.createElement("div");
  div.className = `msg ${quien}${extra ? " " + extra : ""}`;
  div.textContent = texto;
  chat.append(div);
  chat.scrollTop = chat.scrollHeight;
  return div;
}

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  const mensaje = entrada.value.trim();
  if (!mensaje) return;

  agregarBurbuja(mensaje, "vos");
  entrada.value = "";
  entrada.disabled = true;
  boton.disabled = true;

  const pensando = agregarBurbuja("ehhhh...", "bot", "pensando");
  try {
    const respuesta = await responder(mensaje);
    pensando.remove();
    agregarBurbuja(respuesta, "bot");
  } finally {
    entrada.disabled = false;
    boton.disabled = false;
    entrada.focus();
  }
});

agregarBurbuja("ehhhh hola ehhhh", "bot");
entrada.focus();
