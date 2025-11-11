'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';
import { GameButton } from '@/components/interface';
import Image from 'next/image';

type Food = {
    name: string;
    image: string;
    group: string;
    isHealthy: boolean;
};

export default function FoodChoiceGame() {
    const [foods, setFoods] = useState<Food[]>([]);
    const [selectedFoods, setSelectedFoods] = useState<Food[]>([]);
    const [score, setScore] = useState<number>(0);
    const [feedback, setFeedback] = useState<string>('');
    const [showResults, setShowResults] = useState(false);

    const maxSelections = 10;

    const foodGroups = {
        hortaliças: { ideal: 3, pointsPerItem: 60 },
        proteínas: { ideal: 2, pointsPerItem: 50 },
        carbs_bons: { ideal: 2, pointsPerItem: 49 },
        leguminosas: { ideal: 1, pointsPerItem: 50 },
        frutas: { ideal: 1, pointsPerItem: 50 },
        carbs_ruins: { ideal: 0, pointsPerItem: 30 },
        doces: { ideal: 0, pointsPerItem: 0 }
    };

    const essentialGroups = ['hortaliças', 'proteínas', 'carbs_bons', 'leguminosas', 'frutas'];
    const bombaGroups = ['carbs_ruins', 'doces'];

    useEffect(() => {
        fetch('/data/foods.json')
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);

    const toggleFood = (food: Food) => {
        const alreadySelected = selectedFoods.find(f => f.name === food.name);
        if (alreadySelected) {
            setSelectedFoods(selectedFoods.filter(f => f.name !== food.name));
        } else if (selectedFoods.length < maxSelections) {
            setSelectedFoods([...selectedFoods, food]);
        }
    };



const evaluateChoices = () => {
    const groupCount: Record<string, number> = {};
    Object.keys(foodGroups).forEach(group => groupCount[group] = 0);

    selectedFoods.forEach(food => {
        if (groupCount[food.group] !== undefined) {
            groupCount[food.group]++;
        }
    });

    let totalScore = 0;
    let maxScore = 0;

    Object.entries(foodGroups).forEach(([group, config]) => {
        const selected = groupCount[group] || 0;
        const ideal = config.ideal;
        const pointsPerItem = config.pointsPerItem;

        const groupScore = Math.min(selected, ideal) * pointsPerItem;
        totalScore += groupScore;
        maxScore += ideal * pointsPerItem;
    });

    const bombaCount = selectedFoods.filter(f => bombaGroups.includes(f.group)).length;
    const missingGroups = essentialGroups.filter(group => groupCount[group] === 0).length;

    totalScore -= bombaCount * 20;
    totalScore -= missingGroups * 15;

    const finalScore = Math.max(Math.min(totalScore, maxScore), 0);
    const percentage = Math.round((finalScore / maxScore) * 210);

    setScore(percentage);
    setFeedback(getFeedbackMessage(percentage, bombaCount));
    setShowResults(true);
};

    const getFeedbackMessage = (percentage: number, bombaCount: number) => {
        if (percentage <= 50) return "Cuidado com suas escolhas! Elas não representam uma refeição equilibrada e saudável. Procure incluir em seu prato alimentos de grupos variados e integrais. Evite frituras, alimentos ricos em sal e açúcar.";

        if (percentage <= 74) 
            return "Você está no caminho certo! Fez boas escolhas, mas pode melhorar a variedade entre os grupos e evitar frituras, alimentos ricos em sal e açúcar."

        if (percentage <= 99) {
            return bombaCount > 0
                ? "Parabéns! Suas opções representam escolhas saudáveis que contribuem para melhor qualidade de vida e saúde. Continue assim. Atenção às frituras e doces, o consumo destes alimentos deve ser esporádico."
                : "Parabéns! Suas opções representam escolhas saudáveis que contribuem para melhor qualidade de vida e saúde. Continue assim!";
        }
        return "Parabéns! Suas escolhas representam um prato equilibrado e saudável. Seja exemplo para sua família e amigos. Continue assim!";
    };


    const getFeedbackColor = (percentage: number): string => {
        if (percentage <= 50) return 'text-red-600';
        if (percentage <= 74) return 'text-yellow-600';
        if (percentage <= 99) return 'text-green-600';
        return 'text-blue-700';
    };


    return (
        <>
            <NavBar />
            <Hero>
                <h2 className="rounded-4xl bg-white text-center p-3 text-blue-900 text-3xl font-extrabold drop-shadow-xl">
                    Monte seu Prato
                </h2>

                <div className="rounded-4xl p-3 flex flex-col space-y-2 text-black">
                    {showResults && (
                        <>
                            <div className={`rounded-2xl bg-white/75 p-3 flex justify-evenly text-balck ${getFeedbackColor(score)}`}>
                                <span className='font-bold text-3xl'>Adequação:</span>
                                <div className='font-bold text-3xl'>{score}%</div>
                            </div>

                            <div className={`rounded-2xl bg-white/75 p-5 text-3xl text-center ${getFeedbackColor(score)}`}>
                                {feedback}
                            </div>
                        </>
                    )}

                    {!showResults && (
                        <div className="rounded-2xl bg-white/80 p-2 text-center  sticky top-2 z-10">
                            {selectedFoods.length}/{maxSelections} alimentos selecionados
                        </div>
                    )}

                    {!showResults && (
                        <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white/75 p-2">
                            {foods.map((food, index) => {
                                const isSelected = selectedFoods.some(f => f.name === food.name);
                                return (
                                    <div
                                        key={index}
                                        className={`w-25 h-25 rounded-2xl bg-blue-900 p-3 text-white text-center flex items-center flex-col justify-center cursor-pointer ${isSelected ? 'ring-4 ring-green-400' : ''}`}
                                        onClick={() => toggleFood(food)}
                                    >
                                        <Image
                                            src={food.image}
                                            alt={food.name}
                                            width={2000}
                                            height={2000}
                                            quality={100}
                                            className="w-20 sm:w-32 hover:scale-110 transition-all"
                                        />
                                        <p>{food.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    <div className="flex justify-evenly p-0.5 space-x-2 text-white text-center">
                            <GameButton class="w-1/2 rounded-2xl bg-[#e42313] p-3 uppercase font-semibold " gamename="Voltar" url="/Games/GameSelector"/>
                        <button
                            className={`w-1/2 rounded-2xl p-3 font-semibold uppercase ${selectedFoods.length === maxSelections ? 'bg-blue-900' : 'bg-gray-400 cursor-not-allowed'
                                }`}
                            onClick={evaluateChoices}
                            disabled={selectedFoods.length !== maxSelections}
                        >
                            avaliar
                        </button>

                    </div>

                </div>
            </Hero>
            <Footer />
        </>
    );
}
