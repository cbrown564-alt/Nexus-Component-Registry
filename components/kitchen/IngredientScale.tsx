import React, { useState } from 'react';
import { Users, Minus, Plus, CheckCircle2, Circle } from 'lucide-react';
import KitchenCard from './KitchenCard';

const IngredientScale = () => {
    const [servings, setServings] = useState(4);
    const [checked, setChecked] = useState<Record<number, boolean>>({});

    const toggleCheck = (i: number) => {
        setChecked(prev => ({ ...prev, [i]: !prev[i] }));
    };

    const ingredients = [
        { name: "Pasta (Rigatoni)", baseAmount: 500, unit: "g" },
        { name: "Olive Oil", baseAmount: 2, unit: "tbsp" },
        { name: "Yellow Onion", baseAmount: 1, unit: "medium" },
        { name: "Garlic Cloves", baseAmount: 3, unit: "cloves" },
        { name: "Heavy Cream", baseAmount: 250, unit: "ml" },
        { name: "Tomato Paste", baseAmount: 100, unit: "g" },
        { name: "Vodka", baseAmount: 60, unit: "ml" },
    ];

    const scale = servings / 4;

    return (
        <KitchenCard className="p-6 h-full flex flex-col bg-[#FFFBF7]">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-stone-200 border-dashed">
                <div className="flex items-center gap-2 text-stone-800">
                    <Users className="h-5 w-5" />
                    <span className="font-serif text-xl font-bold">Servings</span>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-full p-1 border border-stone-200 shadow-sm">
                    <button
                        onClick={() => setServings(Math.max(1, servings - 1))}
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 transition-colors"
                    >
                        <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-xl font-bold text-stone-800 w-6 text-center">{servings}</span>
                    <button
                        onClick={() => setServings(servings + 1)}
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 text-orange-700 transition-colors"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                {ingredients.map((ing, i) => {
                    const amount = Math.round((ing.baseAmount * scale) * 10) / 10;
                    const isChecked = checked[i];

                    return (
                        <div
                            key={i}
                            onClick={() => toggleCheck(i)}
                            className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${isChecked
                                ? 'bg-stone-100 opacity-50'
                                : 'bg-white hover:bg-white/80 shadow-sm'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                {isChecked
                                    ? <CheckCircle2 className="h-6 w-6 text-green-700 shrink-0" />
                                    : <Circle className="h-6 w-6 text-stone-300 shrink-0" />
                                }
                                <span className={`text-lg font-medium ${isChecked ? 'line-through text-stone-500' : 'text-stone-800'}`}>
                                    {ing.name}
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="block font-bold text-lg text-orange-700">
                                    {amount}
                                </span>
                                <span className="text-xs font-bold uppercase text-stone-400">
                                    {ing.unit}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </KitchenCard>
    );
};

export default IngredientScale;