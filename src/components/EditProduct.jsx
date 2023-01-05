import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts, productSelectors, updateProduct } from '../features/productSlice';

const EditProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const product = useSelector((state) => productSelectors.selectById(state, id));

    useEffect(() => {
        getProducts();
    }, [dispatch]);

    useEffect(() => {
        if(product){
            setTitle(product.title);
            setPrice(product.price);
        }
    }, []);
    
    const handleUpdate = async() => {
        await dispatch(updateProduct({id, title, price}));
        navigate('/');
    }

    return (
        <Box mt={5} shadow='md' p={3}>
            <Box>
                <Text>Title</Text>
                <Input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </Box>
            <Box>
                <Text>Price</Text>
                <Input placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
            </Box>
            <Button colorScheme='teal' variant='solid' mt={3} onClick={handleUpdate}>Update</Button>
        </Box>
    )
}

export default EditProduct