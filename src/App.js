import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react'
import AddProduct from './components/AddProduct';
import ShowProduct from './components/ShowProduct';
import EditProduct from './components/EditProduct';


function App() {
  return (
    <ChakraProvider>
      <Container maxW='container.xl' mt={5} p={5}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ShowProduct />}/>
            <Route path='/add' element={<AddProduct />}/>
            <Route path='/edit/:id' element={<EditProduct />}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}

export default App;
