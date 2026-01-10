import React from 'react';
import { Layers, Eye, EyeOff } from 'lucide-react';
import BlueprintCard from './BlueprintCard';

interface LayerControlProps {
  layers: Record<string, boolean>;
  toggleLayer: (layer: string) => void;
}

const LayerControl: React.FC<LayerControlProps> = ({ layers, toggleLayer }) => {
  return (
    <BlueprintCard title="Layers" code="LYR-01" className="h-full bg-[#1e3a8a]/50">
      <div className="space-y-1">
        {Object.keys(layers).map((layer) => (
          <button
            key={layer}
            onClick={() => toggleLayer(layer)}
            className={`w-full flex items-center justify-between p-2 text-xs font-code uppercase tracking-wider border transition-all ${
              layers[layer] 
                ? 'bg-blue-900/40 border-white/30 text-white' 
                : 'bg-transparent border-transparent text-white/40 hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-2">
                <div className={`w-3 h-3 border border-white ${layers[layer] ? 'bg-cyan-500' : 'bg-transparent'}`} />
                {layer}
            </div>
            {layers[layer] ? <Eye size={12} /> : <EyeOff size={12} />}
          </button>
        ))}
      </div>
    </BlueprintCard>
  );
};

export default LayerControl;