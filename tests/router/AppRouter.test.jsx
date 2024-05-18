import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { AppRoutes } from '../../src/router/AppRoutes';

describe('Pruebas en <AppRouter/>', () => {

    test('Debe de mostrar el login si no esta autenticado', () => {
        
        const contextValue = {
            logged: false,
          };
       
          const router = createMemoryRouter(AppRoutes, {
            initialEntries: ["/marvel", "/login"],
            initialIndex: 1,
          });
       
          render(
            <AuthContext.Provider value={contextValue}>
              <RouterProvider router={router} />
            </AuthContext.Provider>
          );

          expect(screen.getAllByText('Login').length).toBe(2);
    });

    test('Debe de mostrar el componente de marvel si esta autenticado', () => {
      
      const contextValue = {
        logged: true,
        user: {
          name: 'Armando',
          id: 'ABC'
        },
      };

      const router = createMemoryRouter(AppRoutes, {
        initialEntries: ["/login", "/marvel"],
        initialIndex: 1,
      });

      render(
        <AuthContext.Provider value={contextValue}>
          <RouterProvider router={router}/>
        </AuthContext.Provider>
      );

      expect(screen.getAllByText('Marvel Comics').length).toBeGreaterThanOrEqual(1);

    });

});