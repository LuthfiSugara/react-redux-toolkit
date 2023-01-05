import { Box, Button, Flex, SimpleGrid, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct, getProducts, productSelectors } from '../features/productSlice';

const ShowProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector(productSelectors.selectAll);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const removeProduct = async(id) => {
        await dispatch(deleteProduct(id));
    }

    return (
        <Box shadow={'lg'}>
            <Button colorScheme={'green'} onClick={() => navigate('add')}>Add New Product</Button>
            <TableContainer mt={5}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>No</Th>
                            <Th>Title</Th>
                            <Th>Price</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products.map((product, index) => (
                            <Tr key={index}>
                                <Td>{index + 1}</Td>
                                <Td>{product.title}</Td>
                                <Td>{product.price}</Td>
                                <Td>
                                    <Flex gap={2}>
                                        <Button colorScheme='teal' onClick={() => navigate(`edit/${product.id}`)}>Ubah</Button>
                                        <Button colorScheme='red' onClick={() => removeProduct(product.id)}>Hapus</Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default ShowProduct