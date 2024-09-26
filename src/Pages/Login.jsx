import { Link } from "react-router-dom";

const Login = () => {

    const handleLoginForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const male = form.male.checked;  
        const female = form.female.checked;  
        const active = form.active.checked;  
        const inactive = form.inactive.checked;  
        const user = { name, email, male, female, active,inactive};
        console.log(user);

        fetch('http://localhost:5000/users', {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
              alert("User Successfully added");
              form.reset();
            }
        })
    };


    return (
        <div className="max-w-6xl mx-auto mt-10">
            <Link to="/users">
                <button className="flex items-center gap-3 shadow-xl py-3 px-4 text-blue-600">
                    <p className="font-semibold">All New User </p>
                </button>
            </Link>
            {/* login information */}
            <div>
                <p className="text-center font-medium text-2xl">New User</p>
                <p className="text-center">Use the below form to create a account</p>
            </div>
            <form onSubmit={handleLoginForm}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name="name" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <p>Gender</p>
                    <div className="flex gap-3">
                        <p>Male</p>
                        <input type="checkbox" name="male" id="" />
                    </div>
                    <div className="flex item-center gap-3">
                        <p>Female</p>
                        <input type="checkbox" name="female" id="" />
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <p>Status</p>
                    <div className="flex gap-3">
                        <p>Active</p>
                        <input type="checkbox" name="active" id="" />
                    </div>
                    <div className="flex item-center gap-3">
                        <p>Inactive</p>
                        <input type="checkbox" name="inactive" id="" />
                    </div>
                </div>
                <div className="mt-4">
                    <button className="btn btn-error py-3 w-full text-white">Send Now</button>
                </div>
            </form>
        </div>
    );
};

export default Login;