
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
const calculateCarbonFootprintForProduct = (productType, props) => {
    let seeds = 0;
    let max_possible_count = 7;
    switch (productType) {
        case 'Beauty':
            // Set properties for self-made product
            seeds += props.material_sourcing / 5;
            seeds += props.packaging_eco_friendliness / 5;
            seeds += props.waste_generation / 5;
            seeds += props.product_lifespan / 5;
            seeds += props.recyclability / 5;
            seeds += props.energy_efficiency / 5;
            max_possible_count = 5;
            break;

        case 'Clothes':
            // Set properties for local product
            seeds += props.material_sourcing / 5;
            seeds += props.packaging_eco_friendliness / 5;
            seeds += props.waste_generation / 5;
            seeds += props.product_lifespan / 5;
            seeds += props.recyclability / 5;
            seeds += props.energy_efficiency / 5;
            seeds += props.end_of_life_disposal / 5;
            max_possible_count = 7;
            break;

        case 'Utensils':
            // Set properties for imported product
            seeds += props.material_sourcing / 5;
            seeds += props.product_lifespan / 5;
            seeds += props.energy_efficiency / 5;
            seeds += props.end_of_life_disposal / 5;
            max_possible_count = 4;
            break;

        default:
            seeds += props.material_sourcing / 5;
            seeds += props.packaging_eco_friendliness / 5;
            seeds += props.waste_generation / 5;
            seeds += props.product_lifespan / 5;
            seeds += props.recyclability / 5;
            seeds += props.energy_efficiency / 5;
            seeds += props.end_of_life_disposal / 5;

    }
    return seeds / max_possible_count * 100;
};


// Testing
// const propsForBeauty = {
//     material_sourcing: 5,
//     packaging_eco_friendliness: 5,
//     waste_generation: 5,
//     product_lifespan: 3,
//     recyclability: 5,
//     energy_efficiency: 3,
//     end_of_life_disposal: 1
// };

// const propsCategory = [
//     "Beauty",
//     "Clothes",
//     "Utensils"
// ]

// console.log(propsForBeauty, calculateCarbonFootprintForProduct(propsCategory[1], props = propsForBeauty));