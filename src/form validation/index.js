import React from 'react'

export default function FormValidation() {
    function validate() {

        const form = document.getElementById('form');
        // console.log("form********", form);
        const name = document.getElementById('name');
        // console.log("name********", name);
        const password = document.getElementById('password');
        // console.log("password********", password);
        const password2 = document.getElementById('password2');
        // console.log("password2********", password2);

        if (name == null || name == "") {
            console.log("please fill the details")
        }
    }



    return (
        <div>
            <h1>Form </h1>
            <form id='form'>
                <input type='name' name='name' placeholder='Enter Yor name' id='name' />
                <input type='Password' name='password' placeholder='Enter your Password' id='password' />
                <input type='Password' name='password2' placeholder='Enter your Password' id='password2' />
                <button onSubmit={validate()}>submit</button>

            </form>



        </div>
    )
}
