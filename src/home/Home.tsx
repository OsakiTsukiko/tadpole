import '../scss/styles.css'
import { NavLink, Outlet, useNavigate } from "react-router";
import { useTadpoles } from '../TadpoleProvider';
import { useEffect } from 'react';
import Navbar from './Navbar';
import { ImportantButtonInput } from '../auth/Input';

function Home() {
    let navigate = useNavigate();

    const { currentTP, setTP } = useTadpoles();

    useEffect(() => {
        if (currentTP == null) {
            navigate("/login");
        }
    }, [currentTP, navigate]);

    return (
        <div className='home'>
            <div className='left-bar'>
                <span className='username roboto'>{currentTP?.username}</span>
                <span className='description roboto'>{currentTP?.description}</span>
                <div className='hr'></div>
                <Navbar />
                <div className='padding'></div>
                <div className='footer-cont'>
                    <ImportantButtonInput text='Log Out' onclick={() => { setTP(null); }} disabled={false} />
                </div>
            </div>
            <div className='content'>
                <Outlet context={currentTP} />
            </div>
        </div>
    )
}

export default Home
