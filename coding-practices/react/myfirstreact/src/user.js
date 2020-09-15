import React from 'react';

const userList = ["Anil", "Sunil", "Binil", "Vinil", "Dinil"]

const myUser = function() {
    return <hello>
                <h2> From user component</h2>
                <p>User component works!!</p>
                <h3>Total users : {userList.length}</h3>
                <h4>Users Details</h4>
                {
                    userList.map((user) => {
                        return <p>{user}</p>    
                    })
                    // userList.map(user => <p>{user}</p>) //ES6 way
                }
            </hello>
}

export default myUser;

// why export?
// if you want to import a fun or a class, you need the export in the source file!