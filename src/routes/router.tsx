import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/Landing'
import ErrorPage from './ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
])
