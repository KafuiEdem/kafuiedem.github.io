// document.addEventListener('DOMContentLoaded', function () {
//     const aboutContent = document.getElementById('about-content');

//     // Fetch the README file content
//     fetch('about_me.md')
//         .then(response => response.text())
//         .then(data => {
//             // Convert Markdown to HTML using marked.js
//             const htmlContent = marked.parse(data);
//             console.log(htmlContent)

//             // Insert the HTML content into the placeholder
//             aboutContent.innerHTML = htmlContent;
//         })
//         .catch(error => {
//             console.error('Error fetching README content:', error);
//         });
// });



document.addEventListener('DOMContentLoaded', function () {
    const aboutContent = document.getElementById('about-content');
    const profilePicture = document.getElementById('profile-picture');

    // Fetch the README file content
    fetch('about_me.md')
        .then(response => response.text())
        .then(data => {
            // Convert Markdown to HTML using marked.js
            const htmlContent = marked.parse(data)
            // console.log(htmlContent)
            aboutContent.innerHTML = htmlContent;
            
            
            // Extract the image URL from the HTML content
            const imageMatch = htmlContent.match(/<img src="([^"]+)" alt="Profile Picture">/);
            // console.log(imageMatch[0])
            // if (imageMatch && imageMatch.length > 1) {
            //     const imageUrl = imageMatch[1];
            //     // Set the image URL as the src attribute
            //     profilePicture.src = imageUrl;
                
            // }

            profilePicture.innerHTML = imageMatch[0]
            const originalImage = aboutContent.querySelector('img[alt="Profile Picture"]');
            if (originalImage) {
                originalImage.style.display = 'none';
            }

            
        })
        .catch(error => {
            console.error('Error fetching README content:', error);
        });
});
