
/**
 * Get the CarbonFootPrintScore for a product
 * @param {string} productType the type of product
 * @param {Object} props properties for the category
 * @param {number} props.material_sourcing - 5 if self made, 3 if local and 0 if imported 
 * @param {number} props.packaging_eco_friendliness - 5 ecofriendly package, 0 no eco-friendly package
 * @param {number} props.waste_generation - 5 bio-degradable, 3 minimal, 0 non bio waste
 * @param {number} props.product_lifespan - (0-5) 
 * @param {number} props.recyclability - (0-5) 
 * @param {number} props.energy_effiency - (0-5) electricity used
 * @param {number} props.end_of_life_disposal - (0-5) 0 - throw away, 1 - burn, 2 - burry, 3- water soluble, 4- no end of life
 */
const calculateBioDegradForProduct = (props) => {
    let seeds = 0;
    let max_possible_count = 2;
    seeds += props.material_type / 5;
    seeds += props.dispose_time / 5;
    return seeds / max_possible_count * 100;
};


// Testing
// const propsForBioDegrad = {
//     material_type: 2,
//     dispose_time: 5
// };



// console.log(propsForBioDegrad, calculateBioDegradForProduct(propsForBioDegrad));