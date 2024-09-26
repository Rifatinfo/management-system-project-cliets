import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className='text-center text-2xl text-blue-800 mt-7'>User Management System</h1>
            <div>
                <Link to="/login">
                    <button className="flex items-center gap-3 shadow-xl py-3 px-4 text-blue-600">
                        <p className="font-semibold">New User </p>
                        <p><FaUser /></p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
