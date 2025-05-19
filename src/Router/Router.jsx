import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contect/Contact';
import Blog from '../Pages/Blog/Blog';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/contact',
        Component: Contact,
      },
      {
        path: '/blog',
        Component: Blog,
      },
      {
        path: '/signIn',
        Component: SignIn,
      },
      {
        path: '/signUp',
        Component: SignUp,
      },
    ],
  },
]);
