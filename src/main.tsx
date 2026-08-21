import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/routes/router'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { ThemeProvider } from './app/providers/ThemeProvider/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
