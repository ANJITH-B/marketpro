import { Timer } from 'lucide-react';

export const CountdownTimer = () => {
    return (
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl shadow-sm border border-orange-100">
            <Timer size={20} className="text-primary animate-pulse" />
            <span className="text-sm font-bold text-heading">Ending in:</span>
            <div className="flex gap-2">
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-primary">02</span>
                </div>
                <span className="font-bold text-gray-300">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-primary">14</span>
                </div>
                <span className="font-bold text-gray-300">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-primary">26</span>
                </div>
            </div>
        </div>
    )
}