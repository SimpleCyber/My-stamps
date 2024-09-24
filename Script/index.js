function redirectToDetails(imagePath, event) {
    event.preventDefault();  // Prevent default anchor behavior
    const encodedImagePath = encodeURIComponent(imagePath);  // Encode the image path
    window.location.href = './html/stampdetail.html?image=' + encodedImagePath;
}