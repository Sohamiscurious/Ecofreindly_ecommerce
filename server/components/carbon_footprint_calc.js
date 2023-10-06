
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


// Define a schema for storing carbon footprint scores
const CarbonFootprintSchema = new Schema({
    productType: String,
    score: Number,
});

//   const CarbonFootprintModel = mongoose.model('CarbonFootprint', CarbonFootprintSchema);

const calculateCarbonFootprintForProduct = (productType, props) => {
    let score = 0;
    switch (productType) {
        case 'Beauty':
            // Set properties for self-made product
            score+= props.material_sourcing;
            score+= props.packaging_eco_friendliness;
            score+= props.waste_generation;
            score+= props.product_lifespan;
            score+= props.recyclability;
            score+= props.energy_efficiency;
            score+= props.end_of_life_disposal;
            break;

        case 'Clothes':
            // Set properties for local product
            score+= props.material_sourcing;
            score+= props.packaging_eco_friendliness;
            score+= props.waste_generation;
            score+= props.product_lifespan;
            score+= props.recyclability;
            score+= props.energy_efficiency;
            score+= props.end_of_life_disposal;
            break;

        case 'Utensils':
            // Set properties for imported product
            score+= props.material_sourcing;
            score+= props.packaging_eco_friendliness;
            score+= props.waste_generation;
            score+= props.product_lifespan;
            score+= props.recyclability;
            score+= props.energy_efficiency;
            score+= props.end_of_life_disposal;
            break;

        default:
            console.error('Invalid product type');
            return null;
    }

    const carbonFootprintScore = getCarbonFootPrintScore(
        material_sourcing,
        packaging_eco_friendliness,
        waste_generation,
        product_lifespan,
        recyclability,
        energy_efficiency,
        end_of_life_disposal
    );

    const carbonFootprintDocument = new CarbonFootprintModel({
        productType: productType,
        score: carbonFootprintScore,
        // Add other fields as needed to store additional information
    });

    carbonFootprintDocument.save()
        .then(() => {
            console.log('Carbon footprint score saved to the database.');
        })
        .catch((error) => {
            console.error('Error saving carbon footprint score:', error);
        });

    return carbonFootprintScore;
};

// Example usage:
const propsForSelfMade = {
    packaging_eco_friendliness: 5,
    waste_generation: 5,
    product_lifespan: 4,
    recyclability: 3,
    energy_efficiency: 4,
    end_of_life_disposal: 1,
};

const selfMadeScore = calculateCarbonFootprintForProduct('self-made', propsForSelfMade);