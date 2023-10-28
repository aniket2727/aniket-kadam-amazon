const clickableImages = document.querySelectorAll('.clickable-image');

        // Add click event listener to each clickable image
        clickableImages.forEach(function(image) {
            image.addEventListener('click', function() {
                // Get the destination URL from the "data-href" attribute
                const destinationUrl = image.getAttribute('data-href');
                // Redirect to the destination URL when the image is clicked
                window.location.href = destinationUrl;
            });
        });