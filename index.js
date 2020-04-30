// document.addEventListener('DOMContentLoaded', () => {
//     console.log('Web Playground - Callbacks vs Promises');
// });

// Callbacks section

// loginUser = (useremail, password, callback) => {
//     setTimeout(() => {
//         callback({ useremail});
        
//     }, 3500);
// }

// getUserVideos = (email, callback) => {
//     setTimeout(() => {
//         callback(['Interstellar','Blade Runner 2049', 'The Avengers - End Game']);
//     }, 1500);
// }

// loginUser('joeyvico@gmail.com', 67867, user => {
//     console.log(user);
//     getUserVideos(user.email, videos => {
//         console.log(videos);
//     });
// });


// Converting the above code to Promises

loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === 67867) {
                console.log(email);
                resolve(email);
            } else {
                reject(new Error('User email login error'));
            }
        }, 3500);
        
    });
}

getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'joeyvico@gmail.com') {
                resolve(['Interstellar', 'Blade Runner 2049', 'Ex Machina']);
            } else {
                reject(new Error('Wrong or no email was provided, so no videos'));
            }
        },  1500);
     
    });
}

// Run the code
loginUser('joeyvico@gmail.com', 67867)
.then(email => getUserVideos(email))
.then(videos => console.log(videos))
.catch(error => console.log('Correctly handled error: ' + error))
