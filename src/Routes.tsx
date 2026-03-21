import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import ErrorPage from '@/error-page';
import PrivateLayouts from '@/Layouts/PrivateLayouts';
import DeclarationPage from '@/Pages/DeclarationPage';
import Home from '@/Pages/Home';
import CreateDeclarationPage from './Pages/CreateDeclarationPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            element: <Home />,
        },
      {
        path: "private",
        element: <PrivateLayouts />,
        children: [
      {
        path: "declaration",
        element: <DeclarationPage />,
        
      },
     {
        path: "declaration/new",
        element: <CreateDeclarationPage />,
        
      },
    ],
      },
    ],
  },
]);

export default router