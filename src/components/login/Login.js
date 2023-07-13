import React from 'react'
import axiosConfig from '../../axiosConfig';


function Login() {

    function sendLoginInfo(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log(email);
        console.log(password);
        axiosConfig.post('api/korisnik/login',{
            email: email,
            sifra: password
            }
            )
            .then((response) => {
                console.log(response);
                console.log(response.data);
                console.log(response.data.id);
                console.log(JSON.stringify(response.data));
                localStorage.setItem('korisnik',JSON.stringify(response.data));
                window.location.href = '/';
            }
            )
            .catch((error) => {
                console.log(error);
            }
            );

    }
    
  return (
            
    <div>
        <h1>Login</h1>
        <form>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type='button' id='login' onClick={()=>sendLoginInfo()}>Login</button>
        </form>
    </div>
  )
}

export default Login