// Follows the example on branch callbacks-vs-promises
// loginUser(email, password) => getUserVideos(email)

loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Loggin in ...');
            if (password === 68989) {
                console.log('Successfullly logged in with user email: ' + email);
                resolve({ useremail: email });
            } else {
                reject(new Error('User email not found'));
            }
        }, 2000);
    });
};

getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting videos....from useremail: ' + email);
            if (email === 'joeyvico@gmail.com') {
                resolve(['Interstellar', 'Blade Runenr 2049','Minority Report'])
            } else {
                reject(new Error('Wrong email or email not provided'));
            }
        }, 2250);
    });
};

// loginUser('joeyvico@gmail.com', 68989)
// .then(user => getUserVideos(user.useremail))
// .then(videos => console.log(videos))
// .catch(error => console.log('Exception handled correctly: ' + error));


//Async and await
 displayUser = async() => {
     try {
        const loggedInUser = await loginUser('joeyvico@gmail.com', 68989);
        const videos = await getUserVideos(loggedInUser.useremail);
        console.log(videos);
     } 
     catch (err) {
         console.error('Something went wrong: ' + err);
     }
    
}

displayUser();