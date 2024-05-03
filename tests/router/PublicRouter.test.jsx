import { render, screen } from '@testing-library/react'
import { PublicRouter } from '../../src/router/PublicRouter'
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en <PublicRoute/>', () => {

    test('Debe de mostrar el chilren si no esta autenticado', () => {
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRouter> <h1>Ruta Publica</h1> </PublicRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy();
        // screen.debug();
    });

    test('Debe de navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={<PublicRouter> <h1>Ruta Publica</h1> </PublicRouter>}/>
                        <Route path='marvel' element={<h1>Pagina Marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Pagina Marvel')).toBeTruthy();
    })

})