import { Box, Button, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveProduct } from '../features/productSlice';


const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const createProduct = async() => {
        await dispatch(saveProduct({title, price}));
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
            <Button colorScheme='teal' variant='solid' mt={3} onClick={createProduct}>
                Simpan
            </Button>
        </Box>
    )
}

export default AddProduct