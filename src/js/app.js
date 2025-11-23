import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "position-right", // social media bar position (position-left or position-right)
        //for social media links, only update usernames
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // Avatar
let avatar = "";
if (variables.avatarURL) {
  avatar = variables.avatarURL;
} else {
  avatar = "https://via.placeholder.com/150";
}


let fullName = "";
if (variables.name && variables.lastName) {
  fullName = variables.name + " " + variables.lastName;
} else if (variables.name) {
  fullName = variables.name;
} else if (variables.lastName) {
  fullName = variables.lastName;
} else {
  fullName = "";
}


let role = "";
if (variables.role) {
  role = variables.role;
} else {
  role = "";
}


let location = "";
if (variables.city && variables.country) {
  location = variables.city + ", " + variables.country;
} else if (variables.city) {
  location = variables.city;
} else if (variables.country) {
  location = variables.country;
} else {
  location = "";
}


let socialClass = "";
if (variables.socialMediaPosition) {
  socialClass = variables.socialMediaPosition;
} else {
  socialClass = "position-left";
}


let twitter = "";
if (variables.twitter) {
  twitter = '<li><a href="https://twitter.com/' + variables.twitter + '"><i class="fab fa-twitter"></i></a></li>';
}

let github = "";
if (variables.github) {
  github = '<li><a href="https://github.com/' + variables.github + '"><i class="fab fa-github"></i></a></li>';
}

let linkedin = "";
if (variables.linkedin) {
  linkedin = '<li><a href="https://linkedin.com/in/' + variables.linkedin + '"><i class="fab fa-linkedin"></i></a></li>';
}

let instagram = "";
if (variables.instagram) {
  instagram = '<li><a href="https://instagram.com/' + variables.instagram + '"><i class="fab fa-instagram"></i></a></li>';
}

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>Lucy Boilett</h1>
          <h2>Web Developer</h2>
          <h3>Miami, USA</h3>
          <ul class="position-right">
            <li><a href="https://twitter.com/4geeksacademy"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/4geeksacademy"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/school/4geeksacademy"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/4geeksacademy"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (position-left or position-right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
