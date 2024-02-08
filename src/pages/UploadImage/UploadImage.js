import React, { useContext, useState } from 'react';
import { userContext } from '../../firebase/userState';
import { uploadFile } from '../../firebase/CRUDOperations';

export default function UploadImage() {
    const { user } = useContext(userContext);
    const [file, setFile] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(file);
        let query = {
            "gender" : "men",
            "cloth" : "hoodie",
            "color" : "black"
        }
        uploadFile(user,file,query).then((mess)=>{console.log(mess)});
    }
    const handleChange = (e) => {
        console.log(user);
        setFile(e.target.files[0]);
    }
    return (
        <div className='container my-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload Image</label>
                    <input className="form-control" type="file" id="formFile" name='fileUpload' onChange={handleChange} />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary mb-3'>
                        upload
                    </button>
                </div>
            </form>
        </div>
    )
}
