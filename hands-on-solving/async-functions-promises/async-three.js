// When you need to do multiple async operations in sequence
function loadUserData(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: userId, name: "John Doe" });
        }, 2000);
    });
}

function loadUserPosts(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { title: "My First Post", author: user.name },
                { title: "Another Post", author: user.name }
            ]);
        }, 500);
    });
}

function loadPostComments(posts) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { text: "Great post!", postTitle: posts[0].title },
                { text: "Thanks for sharing!", postTitle: posts[0].title }
            ]);
        }, 1000);
    });
}

// Chain promises together
console.log("Starting chain...");

async function loadEverything() {
    try{
        const user = await loadUserData(1)
    const posts = await loadUserPosts(user)
    const comment = await loadPostComments(posts)
    console.log(comment)
    } catch (e) {
        console.error(e)
    }
    
}

loadEverything()