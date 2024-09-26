import { useLoaderData } from "react-router-dom";

const Update = () => {

    const loadedUsers = useLoaderData();
    console.log(loadedUsers);
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const male = form.male.checked;  
        const female = form.female.checked;  
        const active = form.active.checked;  
        const inactive = form.inactive.checked; 
        console.log(name, email, male, female, active, inactive);
    };

    return (
        <div className="max-w-6xl mx-auto mt-9">
            <form onSubmit={handleUpdate}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input defaultValue={loadedUsers?.name} type="text" name="name" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input defaultValue={loadedUsers?.email} type="email" name="email" placeholder="Email" className="input input-bordered" />
                </div>

                <div className="flex items-center gap-4 mt-4">
                    <p>Gender</p>
                    <div className="flex gap-3">
                        <p>Male</p>
                        <input defaultChecked={loadedUsers?.male} type="checkbox" name="male" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p>Female</p>
                        <input defaultChecked={loadedUsers?.female} type="checkbox" name="female" />
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                    <p>Status</p>
                    <div className="flex gap-3">
                        <p>Active</p>
                        <input defaultChecked={loadedUsers?.active} type="checkbox" name="active" />
                    </div>
                    <div className="flex items-center gap-3">
                        <p>Inactive</p>
                        <input defaultChecked={loadedUsers?.inactive} type="checkbox" name="inactive" />
                    </div>
                </div>

                <div className="mt-4">
                    <button className="btn btn-error py-3 w-full text-white">Update Now</button>
                </div>
            </form>
        </div>
    );
};

export default Update;
