import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleLogin} className="btn btn-outline btn-circle">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;