import React, { useContext, useState } from 'react';
import signIn from '../../firebase/userAuth';
import { userContext } from '../../firebase/userState';

export default function SignIn(props) {
    const [userDetail, setUserDetail] = useState({ email: "", password: "" });
    const { user, setUser } = useContext(userContext);

    const handleSignIn = async (e) => {
        e.preventDefault();
        signIn(userDetail)
            .then((data) => {
                setUser(data);
                props.setSignIn(true);
                console.log(user)
            })
            .catch(err => console.log(err));
    }
    const handleOnChange = (e) => {
        setUserDetail({
            ...userDetail,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='container'>
            <form name='signIn' onSubmit={handleSignIn}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" onChange={handleOnChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleOnChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
