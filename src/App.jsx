import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import FetchOld from './pages/FetchOld';
import FetchRQ from './pages/FetchRQ';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import FetchIndv from './components/UI/FetchIndv';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/usemutation-in-react-query/",
        element: <Home />
      },
      {
        path: "/usemutation-in-react-query/trad",
        element: <FetchOld />
      },
      {
        path: "/usemutation-in-react-query/rq",
        element: <FetchRQ />
      },
      {
        path: "/usemutation-in-react-query/rq/:id",
        element: <FetchIndv />,
      },
    ]
  }
]);

const App = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}>
      </RouterProvider>
    </QueryClientProvider>
  )
}

export default App