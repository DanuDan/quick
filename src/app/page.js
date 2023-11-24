'use client'
import 'react-toastify/dist/ReactToastify.css';
import UserLayout from '@/components/Layouts/UserLayout'
import { Provider } from 'react-redux'
import store from './store/store'
import { ToastContainer } from 'react-toastify'


export default function Home({ children }) {
  return (

    <main>
      <Provider store={store}>
        <UserLayout>

        </UserLayout>
        <ToastContainer />
      </Provider>
    </main>

  )
}
