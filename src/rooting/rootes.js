import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Layout from './Layout';
import FormAnnonce from '../components/FormAnnonce';
import ListeVoiture from '../components/ListeVoiture'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'form',
        element: <FormAnnonce />,
      },
      {
        path: 'form/voiture',
        element: <ListeVoiture />,
      },
    ],
  },
]);