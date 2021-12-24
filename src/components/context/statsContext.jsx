import React, { createContext, useContext, useState } from 'react';

export const StatsContext = createContext([]);
const useStatsContext = () => useContext(StatsContext);

export const StatsProvider = ({ children }) => {
    const [totalStats, setTotalStats] = useState([]);

    console.log(totalStats)

    const handleStats = (heroe) => {
        if (Object.keys(totalStats).length === 0) {
            setTotalStats(heroe);
        } else {
            const handleCombat =
                parseInt(totalStats.powerstats.combat) + parseInt(heroe.powerstats.combat);
            const handleDurability =
                parseInt(totalStats.powerstats.durability) + parseInt(heroe.powerstats.durability);
            const handleIntelligence =
                parseInt(totalStats.powerstats.intelligence) + parseInt(heroe.powerstats.intelligence);
            const handlePower = parseInt(totalStats.powerstats.power) + parseInt(heroe.powerstats.power);
            const handleSpeed = parseInt(totalStats.powerstats.speed) + parseInt(heroe.powerstats.speed);
            const handleStrength =
                parseInt(totalStats.powerstats.strength) + parseInt(heroe.powerstats.strength);
            const newStats = {
                combat: handleCombat.toString(),
                durability: handleDurability.toString(),
                intelligence: handleIntelligence.toString(),
                power: handlePower.toString(),
                speed: handleSpeed.toString(),
                strength: handleStrength.toString(),
            };
            setTotalStats(newStats);
        }
    };

    const deleteStats = (heroe) => {
        const newCombat =
            parseInt(totalStats.powerstats.combat) - parseInt(heroe.powerstats.combat);
        const newDurability =
            parseInt(totalStats.powerstats.durability) - parseInt(heroe.powerstats.durability);
        const newIntelligence =
            parseInt(totalStats.powerstats.intelligence) -
            parseInt(heroe.stats.intelligence);
        const newPower =
            parseInt(totalStats.powerstats.power) - parseInt(heroe.powerstats.power);
        const newSpeed =
            parseInt(totalStats.powerstats.speed) - parseInt(heroe.powerstats.speed);
        const newStrength =
            parseInt(totalStats.powerstats.strength) - parseInt(heroe.powerstats.strength);
        const newStats = {
            combat: newCombat.toString(),
            durability: newDurability.toString(),
            intelligence: newIntelligence.toString(),
            power: newPower.toString(),
            speed: newSpeed.toString(),
            strength: newStrength.toString(),
        };
        setTotalStats(newStats);
    };

    return (
        <StatsContext.Provider
            value={{
                handleStats,
                deleteStats,
                totalStats,
            }}
        >
            {children}
        </StatsContext.Provider>
    );
};

export default useStatsContext;
