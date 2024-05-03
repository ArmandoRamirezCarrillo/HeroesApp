import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth';
import { MemoryRouter, RouterProvider, createMemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter/>', () => {

    test('Debe de mostrar el login si no esta autenticado', () => {
        
        const contextValue = {
            logged: false,
          };
       
          const router = createMemoryRouter(AppRouter, {
            initialEntries: ["/marvel", "/login"],
            initialIndex: 1,
          });
       
          render(
            <AuthContext.Provider value={contextValue}>
              <RouterProvider router={router} />
            </AuthContext.Provider>
          );
    });

});