import Footer from '@/Pages/Footer';
import { Outlet } from 'react-router';
import Header from '../Pages/Header';

export default function Root() {
  return (
    <>
        <Header />
        <main>
        <Outlet/>
            <Footer/>
        </main>
    </>
  )
}
