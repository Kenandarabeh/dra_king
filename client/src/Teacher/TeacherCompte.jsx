import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../utils/Theme";
import { useState } from "react";
import {
    BrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
    } from "react-router-dom";
import Menu from './components/Menu'
import Navbar from "../components/Navbar";
import Home from './Home';
import Modules from './Modules';
import Gategory from './Gategory';



const Container = styled.div`
    display: flex;
`;
const Main = styled.div`
    flex: 7;
    background-color: ${({theme})=>theme.soft};
`

const Wrapper = styled.div`
    padding: 22px 96px;
`


const TeacherCompte = () => {
    const [darkMode, setDarkMode] = useState(true)
    return (
    <>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
            <BrowserRouter>
            <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Main>
            <Navbar/>
            <Wrapper>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home/>}/>
                    <Route path='Modules'>
                        <Route path=':id' element={<Modules/>}/>
                    </Route>
                    <Route path='Gategory'>
                        <Route path=':id' element={<Gategory/>}/>
                    </Route>
                </Route>
            </Routes>
            </Wrapper>
            </Main>
            </BrowserRouter>
        </Container>
        </ThemeProvider>
    </>
    )
}

export default TeacherCompte