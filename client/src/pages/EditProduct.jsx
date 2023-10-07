import axios from 'axios'; // Import axios
import React, { useEffect, useState } from 'react';
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


const EditProduct = () => {
    const id = window.location.pathname.split('/').pop();
    const [product, setProduct] = useState({});
    const [formData, setFormData] = useState({
        biodegradable_score: '',
        carbon_footprint_score: '',
        category: '',
        certifications: [], // Provide an empty array as the default value
        government_awards: [], // Provide an empty array as the default value
        materials: [], // Provide an empty array as the default value
        price: '',
        product_description: '',
        product_id: '',
        product_image: '',
        product_name: '',
        quantity: '',
        userId: '',
        _id: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/products/find/${id}`
                );
                console.log(res.data);
                setProduct(res.data);
                setFormData(res.data);
            } catch (err) {
                // Handle errors here
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, [id]);


    // Update an existing product
    const handleSubmit = async () => {
        try {
            // Make an HTTP PUT request to your Express route with the updated data
            const response = await axios.put(`http://localhost:5000/api/products/${id}`, formData);

            // Handle the response as needed
            console.log('Product updated successfully:', response.data);
            // You can also redirect or display a success message to the user
        } catch (error) {
            console.error('Error updating product:', error);
            // Handle the error, display an error message, or take appropriate action
        }
    };

    // Call the updateProduct function when you want to update the product

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
                        value={formData.materials ? formData.materials.join(', ') : " "}
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
                        value={formData.certifications ? formData.certifications.join(', ') : ""}
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
                        value={formData.government_awards ? formData.government_awards.join(', ') : ""}
                        onChange={(e) => setFormData({ ...formData, government_awards: e.target.value.split(', ') })}
                    />
                </div>


                <div>
                    <Button type="submit">Update Product</Button>
                </div>
            </Form>
        </Wrapper>
    );
};

export default EditProduct;
