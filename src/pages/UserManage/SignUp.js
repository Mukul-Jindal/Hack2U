import React, { useContext, useState } from 'react';
import { signUp } from '../../firebase/userAuth';
import { userContext } from '../../firebase/userState';

export default function SignUp() {
    const [userDetail, setUserDetail] = useState({ email: "", password: "", confirmPassword: "" });
    const { setUser } = useContext(userContext);


    const handleSignIn = async (e) => {
        e.preventDefault();
        if (userDetail.password === userDetail.confirmPassword) {
            signUp(userDetail)
                .then((data) => {
                    setUser(data);
                    console.log(data)
                }).catch(err => console.log(err));
        }
        else {
            console.log("Password mismatched");
        }
    }
    const handleOnChange = (e) => {
        setUserDetail({
            ...userDetail,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='container'>
            <form name='signUp' onSubmit={handleSignIn}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Set Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='confirmPassword' onChange={handleOnChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
