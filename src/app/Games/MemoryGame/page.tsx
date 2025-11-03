'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';
import { GameButton } from '@/components/interface';
import Image from 'next/image';

type Card = {
  name: string;
  image: string;
  curiosidade: string;
  id: number;
  flipped: boolean;
  matched: boolean;
};

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [canFlip, setCanFlip] = useState(true);
  const [curiosidadeAtual, setCuriosidadeAtual] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/pares.json')
      .then((res) => res.json())
      .then((data) => {
        const duplicated = [...data, ...data].map((card, index) => ({
          ...card,
          id: index,
          flipped: false,
          matched: false,
        }));
        const shuffled = duplicated.sort(() => Math.random() - 0.5);
        setCards(shuffled);
      });
  }, []);

  useEffect(() => {
    if (curiosidadeAtual) {
      const timer = setTimeout(() => setCuriosidadeAtual(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [curiosidadeAtual]);

  const handleFlip = (index: number) => {
    if (!canFlip || cards[index].flipped || cards[index].matched) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    const newFlipped = [...flippedCards, index];
    setCards(newCards);
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setCanFlip(false);
      setMoves((prev) => prev + 1);

      const [first, second] = newFlipped;
      if (newCards[first].name === newCards[second].name) {
        newCards[first].matched = true;
        newCards[second].matched = true;
        setMatchedPairs((prev) => prev + 1);
        setCuriosidadeAtual(newCards[first].curiosidade);
        setFlippedCards([]);
        setCanFlip(true);
      } else {
        setTimeout(() => {
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setCards([...newCards]);
          setFlippedCards([]);
          setCanFlip(true);
        }, 1000);
      }
    }
  };

  return (
    <>
      <NavBar />
      <Hero>
        <h2 className="rounded-4xl bg-white/90 text-center text-black text-3xl font-extrabold drop-shadow-xl p-2">
          Jogo da Memória
        </h2>

          <div className="rounded-3xl bg-white/75 p-3 text-center drop-shadow-lg flex justify-evenly space-x-2 text-white">
            <span className="w-1/2 rounded-2xl bg-blue-900 p-3">Jogadas - {moves}</span>
            <span className="w-1/2 rounded-2xl bg-blue-900 p-3">Pares - {matchedPairs}</span>
          </div>

          {curiosidadeAtual && (
            <div className="rounded-4xl bg-yellow-100 text-center text-black p-3 mt-4 font-medium">
              🧠 <strong>Curiosidade:</strong> {curiosidadeAtual}
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white/75 p-2 drop-shadow-lg">
            {cards.map((card, index) => (
              <div
              key={card.id}
              className="rounded-2xl bg-blue-900 p-3 text-center text-white cursor-pointer items-center flex justify-center"
              onClick={() => handleFlip(index)}
              >
                <Image
                  src={card.flipped || card.matched ? card.image : '/images/15929 Mascote.png'}
                  alt={card.name}
                  quality={100}
                  width={100}
                  height={100}
                  
                  className="w-20 sm:w-32 hover:scale-110 transition-all items-center flex justify-center"
                />
              </div>
            ))}
          </div>

            <GameButton class="rounded-2xl bg-red-500 drop-shadow-lg p-3 text-white text-center" gamename="Voltar ao menu" url="/Games/GameSelector"/>

          {matchedPairs === cards.length / 2 && (
            <div className="rounded-4xl bg-green-200 text-center text-black p-3 mt-4 font-bold">
              🎉 Parabéns! Você completou o jogo em {moves} jogadas!
            </div>
          )}

      </Hero>
      <Footer />
    </>
  );
}
