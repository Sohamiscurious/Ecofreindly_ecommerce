import axios from 'axios'; // Import axios
import React, { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div``;
const Heading = styled.h2``;
const SubHeading = styled.h3`
  font-size: 20px;
  margin-top: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


const AddNewProduct = ({ props }) => {
    const [formData, setFormData] = useState(props || {
        product_id: 11,
        product_name: "Recycled Glass Tumbler",
        price: 12,
        quantity: 20,
        category: "Utensils",
        product_description: "Tumbler made from recycled glass materials",
        product_image: "glass_tumbler.jpg",
        materials: ["Recycled"],
        product_lifespan: "3 years",
        certifications: [],
        government_awards: [],
        material_sourcing: 0,
        packaging_eco_friendliness: 0,
        waste_generation: 0,
        product_lifespan: 0,
        recyclability: 0,
        energy_efficiency: 0,
        end_of_life_disposal: 0,
        material_type: 0,
        dispose_time: 0,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create a new object that includes formData
            const requestData = {
                ...formData,
            };

            // Make an HTTP POST request to your Express route
            const response = await axios.post('http://localhost:5000/api/products/', requestData);

            // Handle the response as needed
            console.log('Product added successfully:', response.data);
            // You can also redirect or display a success message to the user
        } catch (error) {
            console.error('Error adding product:', error);
            // Handle the error, display an error message, or take appropriate action
        }
    };


    return (
        <Wrapper>
            <Heading>Add New Product</Heading>

            <SubHeading>Basic Data</SubHeading>
            <Form onSubmit={handleSubmit}>
                {/* Product Name */}
                <div>
                    <Label htmlFor="product_name">Product Name:</Label>
                    <Input
                        type="text"
                        id="product_name"
                        name="product_name"
                        value={formData.product_name}
                        onChange={(e) => setFormData({ ...formData, product_name: e.target.value })}
                    />
                </div>

                {/* Price */}
                <div>
                    <Label htmlFor="price">Price:</Label>
                    <Input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                    />
                </div>

                {/* Quantity */}
                <div>
                    <Label htmlFor="quantity">Quantity:</Label>
                    <Input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                    />
                </div>

                {/* Category */}
                <div>
                    <Label htmlFor="category">Category:</Label>
                    <Input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    />
                </div>

                {/* Product Description */}
                <div>
                    <Label htmlFor="product_description">Product Description:</Label>
                    <TextArea
                        id="product_description"
                        name="product_description"
                        value={formData.product_description}
                        onChange={(e) => setFormData({ ...formData, product_description: e.target.value })}
                    />
                </div>

                {/* Product Image */}
                <div>
                    <Label htmlFor="product_image">Product Image:</Label>
                    <Input
                        type="text"
                        id="product_image"
                        name="product_image"
                        value={formData.product_image}
                        onChange={(e) => setFormData({ ...formData, product_image: e.target.value })}
                    />
                </div>

                {/* Materials (Array) */}
                <div>
                    <Label htmlFor="materials">Materials:</Label>
                    <Input
                        type="text"
                        id="materials"
                        name="materials"
                        value={formData.materials.join(', ')}
                        onChange={(e) => setFormData({ ...formData, materials: e.target.value.split(', ') })}
                    />
                </div>

                {/* Certifications (Array) */}
                <div>
                    <Label htmlFor="certifications">Certifications:</Label>
                    <Input
                        placeholder='seperate links by comma'
                        type="text"
                        id="certifications"
                        name="certifications"
                        value={formData.certifications.join(', ')}
                        onChange={(e) => setFormData({ ...formData, certifications: e.target.value.split(', ') })}
                    />
                </div>

                {/* Government Awards (Array) */}
                <div>
                    <Label htmlFor="government_awards">Government Awards:</Label>
                    <Input
                        type="text"
                        id="government_awards"
                        placeholder='seperate links by comma'
                        name="government_awards"
                        value={formData.government_awards.join(', ')}
                        onChange={(e) => setFormData({ ...formData, government_awards: e.target.value.split(', ') })}
                    />
                </div>

                <h3>Carbon Footprint</h3>

                <div>
                    <Label htmlFor="material_sourcing">material_sourcing</Label>
                    <Input placeholder="3" type="number" min="0" max="5" name="material_sourcing" />
                </div>
                <div>
                    <Label htmlFor="packaging_eco_friendliness">packaging_eco_friendliness</Label>
                    <Input placeholder="3" type="number" min="0" max="5" name="packaging_eco_friendliness" />
                </div>
                <div>
                    <Label htmlFor="waste_generation">waste_generation</Label>
                    <Input placeholder="3" type="number" min="0" max="5" name="waste_generation" />
                </div>
                <div>
                    <Label htmlFor="product_lifespan">product_lifespan</Label>
                    <Input placeholder="3" type="number" min="0" max="5" name="product_lifespan" />
                </div>
                <div>
                    <Label htmlFor="recyclability">recyclability</Label>
                    <Input placeholder="3" type="number" min="0" max="5" name="recyclability" />
                </div>
                <div>
                    <Label htmlFor="energy_efficiency">energy_efficiency</Label>
                    <Input placeholder="3" type="number" min="0" max="5" name="energy_efficiency" />
                </div>
                <div>
                    <Label htmlFor="end_of_life_disposal">end_of_life_disposal</Label>
                    <Input placeholder="3" type="number" min="0" max="5" name="end_of_life_disposal" />
                </div>

                <h3>Biodegradable</h3>
                <div>
                    <Label htmlFor="material_type">material_type</Label>
                    <Input placeholder="3" type="number" min="0" max="5" name="material_type" />
                </div>
                <div>
                    <Label htmlFor="dispose_time">dispose_time</Label>
                    <Input placeholder="3" type="number" min="0" max="5" name="dispose_time" />
                </div>

                <div>
                    <Button type="submit">Add Product</Button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default AddNewProduct;
