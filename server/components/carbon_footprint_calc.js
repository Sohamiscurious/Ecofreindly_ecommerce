
/**
 * Get the CarbonFootPrintScore for a product
 * @param {number} material_sourcing - 5 if self made, 3 if local and 0 if imported 
 * @param {number} packaging_eco_friendliness - 5 ecofriendly package, 0 no eco-friendly package
 * @param {number} waste_generation - 5 bio-degradable, 3 minimal, 0 non bio waste
 * @param {number} product_lifespan - (0-5) 
 * @param {number} recyclability - (0-5) 
 * @param {number} energy_effiency - (0-5) electricity used
 * @param {number} end_of_life_disposal - (0-5) 0 - throw away, 1 - burn, 2 - burry, 3- water soluble, 4- no end of life
 */

const getCarbonFootPrintScore = (
    material_sourcing,
    packaging_eco_friendliness,
    waste_generation,
    product_lifespan,
    recyclability,
    energy_effiency,
    end_of_life_disposal) => {
    let score = 0;
    score += material_sourcing * 1.0;
    score += packaging_eco_friendliness * 1.0;
    score += waste_generation * 3.0;
    score += product_lifespan * 1.0;
    score += recyclability * 2.0; // More important
    score += energy_effiency * 1.0;
    score += end_of_life_disposal * 2.0;
    return (score / 55 * 100); // normalize
}
