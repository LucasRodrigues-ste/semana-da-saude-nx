'use client'

import { useEffect, useState } from "react";
import Hero from "@/components/Hero/Hero";
import { GameButton } from "@/components/interface";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import perguntasData from "../../../../public/data/perguntas.json"; 

interface Pergunta {
  pergunta: string;
  opcoes: string[];
  respostaCorreta: string;
  curiosidade: string;
}

export default function QuizGame() {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string>('');
  const [mostrarCuriosidade, setMostrarCuriosidade] = useState(false);

  useEffect(() => {
    setPerguntas(perguntasData);
  }, []);

  const perguntaAtual = perguntas[indiceAtual];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRespostaSelecionada(e.target.value);
  };

  const handleResponder = () => {
    setMostrarCuriosidade(true);
  };

  const handleProxima = () => {
    setRespostaSelecionada('');
    setMostrarCuriosidade(false);
    setIndiceAtual((prev) => prev + 1);
  };

  return (
    <>
      <NavBar />
      <Hero>

        <h2 className="rounded-4xl bg-white/50 backdrop:blur-md text-center text-black text-3xl font-extrabold drop-shadow-xl">
          Sabores e Saberes
        </h2>

        {perguntaAtual && (
          <div className="rounded-4xl bg-white/50 backdrop:blur-md p-3 flex flex-col space-y-2 text-black">
            <div className="rounded-4xl bg-white/75 p-3 text-center drop-shadow-lg drop-shadow-black/25">
              {indiceAtual + 1}/10
            </div>

            <div className="rounded-4xl bg-white/75 p-3 text-center drop-shadow-lg drop-shadow-black/25">
              {perguntaAtual.pergunta}
            </div>

            <form className="rounded-4xl bg-white/75 p-3 space-y-3 drop-shadow-lg drop-shadow-black/25">
              {perguntaAtual.opcoes.map((opcao: string, index: number) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`opcao${index}`}
                    name="resposta"
                    value={opcao}
                    checked={respostaSelecionada === opcao}
                    onChange={handleChange}
                  />
                  <label htmlFor={`opcao${index}`} className="p-2">
                    {opcao}
                  </label>
                </div>
              ))}
            </form>

            <div className="flex justify-evenly p-0.5 space-x-2 text-white">

              <button
                className="w-full rounded-2xl bg-blue-700 drop-shadow-lg drop-shadow-black/50 p-3"
                onClick={handleResponder}
              >
                Responder Pergunta
              </button>
            </div>

            {mostrarCuriosidade && (
              <div className="rounded-4xl bg-white/75 text-center text-black p-3">
                {respostaSelecionada === perguntaAtual.respostaCorreta
                  ? "✅ Resposta correta!"
                  : "❌ Resposta incorreta."}
                <br />
                <strong>Curiosidade:</strong> {perguntaAtual.curiosidade}
                <br />
                <button
                  className="w-full mt-2 rounded-2xl bg-blue-700 drop-shadow-lg drop-shadow-black/50 p-3 text-white"
                  onClick={handleProxima}
                >
                  Próxima Pergunta
                </button>
              </div>
            )}
          </div>
        )}

        {!perguntaAtual && (
          <div className="rounded-3xl bg-white/75 text-center text-black p-3 flex flex-col space-y-5">
            <p >
              🎉 Fim do quiz! Obrigado por jogar! 🎉
            </p>

            <button className="w-full rounded-2xl bg-red-500 drop-shadow-lg drop-shadow-black/50 p-3 text-white">
              <GameButton gamename="Voltar ao menu" url="/Games/GameSelector"/>
            </button>
          </div>
        )}

      </Hero>
      <Footer />
    </>
  );
}