/**
 * Node Modules
 */
import { Link, Form  } from "react-router-dom";


import { icon } from '../assets'



/**
 * Components
 */

import PageTitle from "../components/PageTitle";
import TextField from "../components/TextField";


function Register() {
  return (
    <>
        <PageTitle title='Create an account'/>
        

        <div className="">
            <div className="">
                <Link>
                    <img 
                     src={icon} 
                     alt="logo"
                     width={134}
                     height={25}
                     className=""
                    />
                </Link>

                <div className="">
                    <h2 className="">Create an account</h2>

                    <p className="">
                        Sign up today and unlock powerful tools to bring your ideas to life like never before!  
                    </p>

                    <Form
                     method="POST"
                     className=""
                    >
                    <TextField 
                        type='text'
                        name='name'
                        label='Full name'
                        placeholder='Full name'
                        required={true}
                        autoFocus={true}
                    />

                    <TextField
                        type='email'
                        name='email'
                        label='Email'
                        placeholder='Email'
                        required={true}
                    />

                    <TextField
                        type='password'
                        name='password'
                        label='Password'
                        placeholder='Enter your password'
                        required={true}
                    />
                    </Form>
                
                </div>
            </div>
        </div>
    </>
  );
}

export default Register
