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
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-dashed" style={{ borderColor: '#e7e5e4' }}>
                <div className="flex items-center gap-2" style={{ color: '#292524' }}>
                    <Users className="h-5 w-5" />
                    <span className="font-serif text-xl font-bold">Servings</span>
                </div>

                <div className="flex items-center gap-4 rounded-full p-1 border shadow-sm" style={{ backgroundColor: '#ffffff', borderColor: '#e7e5e4' }}>
                    <button
                        onClick={() => setServings(Math.max(1, servings - 1))}
                        className="h-10 w-10 flex items-center justify-center rounded-full transition-colors"
                        style={{ backgroundColor: '#f5f5f4', color: '#57534e' }}
                    >
                        <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-xl font-bold w-6 text-center" style={{ color: '#292524' }}>{servings}</span>
                    <button
                        onClick={() => setServings(servings + 1)}
                        className="h-10 w-10 flex items-center justify-center rounded-full transition-colors"
                        style={{ backgroundColor: '#ffedd5', color: '#c2410c' }}
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
                            className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all shadow-sm"
                            style={isChecked
                                ? { backgroundColor: '#f5f5f4', opacity: 0.5 }
                                : { backgroundColor: '#ffffff' }
                            }
                        >
                            <div className="flex items-center gap-4">
                                {isChecked
                                    ? <CheckCircle2 className="h-6 w-6 shrink-0" style={{ color: '#15803d' }} />
                                    : <Circle className="h-6 w-6 shrink-0" style={{ color: '#d6d3d1' }} />
                                }
                                <span
                                    className={`text-lg font-medium ${isChecked ? 'line-through' : ''}`}
                                    style={{ color: isChecked ? '#78716c' : '#292524' }}
                                >
                                    {ing.name}
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="block font-bold text-lg" style={{ color: '#c2410c' }}>
                                    {amount}
                                </span>
                                <span className="text-xs font-bold uppercase" style={{ color: '#a8a29e' }}>
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