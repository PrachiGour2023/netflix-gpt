import { RouterProvider } from 'react-router/dom';
import { AppRoutes } from './routes/AppRoutes.tsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getIndianMovies } from './redux/action/movieAction.tsx';
import type { AppDispatch } from './redux/store.ts';

function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getIndianMovies())
  } , [])

  return (
    <>
      <RouterProvider router={AppRoutes} />
    </>
  )
}

export default App
