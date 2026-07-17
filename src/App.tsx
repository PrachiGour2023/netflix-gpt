import { RouterProvider } from 'react-router/dom'
import { AppRoutes } from './routes/AppRoutes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { auth } from './utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from './redux/slice/userSlice'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }))
      } else {
        dispatch(removeUser())
      }
    })
  }, [])

  return (
    <>
      <RouterProvider router={AppRoutes} />
    </>
  )
}

export default App
