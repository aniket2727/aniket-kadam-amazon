



const toggleBtn = document.getElementById('toggleBtn');
const slideMenu = document.getElementById('slideMenu');
const toggleBtn1 = document.getElementById('toggleBtn1');

let menuOpen = false;

toggleBtn.addEventListener('click', function (event) {
    if (!menuOpen) {
        slideMenu.style.left = '0'; // Slide the menu in
    } else {
        slideMenu.style.left = '-250px'; // Slide the menu out
    }
    menuOpen = !menuOpen; // Toggle the menu state
});

toggleBtn1.addEventListener('click', function (event) {
    if (!menuOpen) {
        slideMenu.style.left = '0'; // Slide the menu in
    } else {
        slideMenu.style.left = '-250px'; // Slide the menu out
    }
    menuOpen = !menuOpen; // Toggle the menu state
});



//-----------------------------------pop up



window.onload = function() {
    var popup = document.querySelector('.popup');
    var bodyContents = document.querySelectorAll('.navbar, .first-row, .fcontainer-row, .sec-2,.main-div,.sec-21,.sec-22, .container1,.back-btn,.sec-3,.signin,.foot-panel1,.foot-panel3,.foot-panel4,.foot-panel2');

    function openPopup() {
        popup.classList.add('active');
        bodyContents.forEach(function(content) {
            content.classList.add('blur');
        });
    }

    function closePopup() {
        popup.classList.remove('active');
        bodyContents.forEach(function(content) {
            content.classList.remove('blur');
        });
    }

    openPopup();

    document.querySelector('.close-btn').addEventListener('click', closePopup);
};


const changeColorButton = document.getElementById('changeColorButton');
const body = document.body;
const originalBackgroundColor = window.getComputedStyle(body).backgroundColor;

let isBlack = false;

changeColorButton.addEventListener('click', () => {
    if (isBlack) {
        body.style.backgroundColor = originalBackgroundColor;
    } else {
        body.style.backgroundColor = 'black';
    }
    isBlack = !isBlack;
});






const slowTextElements = document.querySelectorAll('.slow-text');
const navbar = document.querySelector('.navbar');
const inputField = document.querySelector('.main-input input');
const menu = document.querySelector('.first-row');
//const container = document.querySelector('.container');


function toggleNavbarColorAndText() {
    slowTextElements.forEach(element => {
        element.classList.toggle('active');
    });
    navbar.classList.toggle('active');
    inputField.classList.toggle('active'); 
    menu.classList.toggle('active');
    //container.classList.toggle('active');
}

changeColorButton.addEventListener('click', function() {
    toggleNavbarColorAndText();

    // Change button text based on navbar state
    if (inputField.classList.contains('active')) {
        changeColorButton.textContent = 'Normal mode';
    } else {
        changeColorButton.textContent = 'Dark Mode';
    }
});


///geolocations
document.addEventListener("DOMContentLoaded", function() {
    const latitudeElement = document.getElementById('latitude');
    const longitudeElement = document.getElementById('longitude');
    const weatherInfo = document.getElementById('weather-info');
    const showLocationButton = document.getElementById('show-location-button');
    const locationPopup = document.getElementById('location-popup');
    const goBackButton = document.getElementById('go-back-button');

    showLocationButton.addEventListener('click', function () {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                latitudeElement.innerText = `Latitude: ${lat}`;
                longitudeElement.innerText = `Longitude: ${lon}`;
                locationPopup.style.display = 'flex';

                // API call to fetch weather data
                const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
               // const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=${apiKey}`;
                const apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
                fetch(apiUrl, { method: 'GET' })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        const cityName = data.city.name;
                        const temperature = data.list[0].temp.day + " °C";
                        weatherInfo.innerText = `Weather in ${cityName}: ${temperature}`;
                    })
                    .catch(error => {
                        console.error("Error fetching weather data: " + error);
                        weatherInfo.innerText = "Error fetching weather data.";
                    });
            }, function (error) {
                console.error("Error getting geolocation data: " + error);
            });
        } else {
            console.error("Geolocation is not supported by your browser.");
        }
    });

    goBackButton.addEventListener('click', function () {
        locationPopup.style.display = 'none';
    });
});



// this is slider for images




const slidercontent = document.querySelector('.block');


const prevb = document.getElementById('prev');

const nextb = document.getElementById('next');

let currentIndex = 0;

const sliderwidth = document.querySelector('.block').clientWidth;

function slideTo(index) {
    const newPosition = -index * sliderwidth;
    slidercontent.style.transform = `translateX(${newPosition}px)`;
}

nextb.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slidercontent.children.length;
    slideTo(currentIndex);

})

prevb.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slidercontent.children.length) % slidercontent.children.length;
    slideTo(currentIndex);

});




//   ---------------------------------------------------------------------------------------------

// scetions slider 1
const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");




rightbtn.addEventListener('click', function (event) {
    console.log("done")
    const conet = document.querySelector('.product-slide');
    conet.scrollLeft += 1100;
    event.preventDefault();
});



leftbtn.addEventListener('click', function (event) {
    console.log("done")
    const conet = document.querySelector('.product-slide');
    conet.scrollLeft -= 1100;
    event.preventDefault();
});

//-------------------------------------------------------------------------------------
const leftbtn1 = document.querySelector(".l-btn1");
const rightbtn1 = document.querySelector(".r-btn1");




rightbtn1.addEventListener('click', function (event) {
    console.log("done")
    const conet = document.querySelector('.product-slide1');
    conet.scrollLeft += 1100;
    event.preventDefault();
});


leftbtn1.addEventListener('click', function (event) {
    console.log("done")
    const conet = document.querySelector('.product-slide1');
    conet.scrollLeft -= 1100;
    event.preventDefault();
});


//----------------------------------------------------------------------------------
const leftbtn2 = document.querySelector(".l-btn2");
const rightbtn2 = document.querySelector(".r-btn2");

rightbtn2.addEventListener('click', function (event) {
    console.log("done")
    const conet = document.querySelector('.product-slide2');
    conet.scrollLeft += 1100;
    event.preventDefault();
});



leftbtn2.addEventListener('click', function (event) {
    console.log("done")
    const conet = document.querySelector('.product-slide2');
    conet.scrollLeft -= 1100;
    event.preventDefault();
});
//---------------------------------------------------------------------------
const leftbtn3 = document.querySelector(".l-btn3");
const rightbtn3 = document.querySelector(".r-btn3");

rightbtn3.addEventListener('click', function (event) {
    console.log("done")
    const conet = document.querySelector('.product-slide3');
    conet.scrollLeft += 1100;
    event.preventDefault();
});



leftbtn3.addEventListener('click', function (event) {
    console.log("done")
    const conet = document.querySelector('.product-slide3');
    conet.scrollLeft -= 1100;
    event.preventDefault();
});

//-------------------------------------------------------------------------------------------------



    // Get all elements with class "clickable-image"
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


//------------------------------------------------------------------------------------


    // Get all elements with class "clickable-image"
    const clickableImages1 = document.querySelectorAll('.clickable-image1');

    // Add click event listener to each clickable image
    clickableImages1.forEach(function(image) {
        image.addEventListener('click', function() {
            // Get the destination URL from the "data-href" attribute
            const destinationUrl = image.getAttribute('data-href');
            // Redirect to the destination URL when the image is clicked
            window.location.href = destinationUrl;
        });
    });


