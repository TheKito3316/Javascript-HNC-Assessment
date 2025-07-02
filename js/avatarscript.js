// An array that holds all the filenames for the avatar images

// This is me adding in all the images in for the generate avatar, notice how each must be exact to the filename including the filetype.
let avatar = ["avatar1.png", "avatar2.png", "avatar3.png", "avatar4.png", "avatar5.png", "avatar6.png", "avatar7.png", "avatar8.png"];  




//This is the generate avatar button
const btnGen = document.getElementById("btnGen");
// This is the set avatar button
const btnSet = document.getElementById('btnSet');
// This is the element to display a random avatar
const avatar_display = document.getElementById('setavatar');
// This is the element to display the usernames inputted name
const name_holder = document.getElementById('name');
// This is the element to show the final selected avatar
const avatar_chosen = document.getElementById('avatar');

// This asks the user for a name
let first_name = prompt("Please enter your name");

// This displays the name in uppercase on the website
document.getElementById("name").innerHTML = first_name.toUpperCase();

// This is the function begin displaying random avatars
function display_avatars () {

    const randIndex = Math.floor(Math.random() * avatar.length);
    const chosen_avatar = avatar[randIndex];

    avatar_display.innerHTML = `<img src="images/${chosen_avatar}">`;
}


// This is the function to confirm the selected avatar chosen
function chose_avatar () {
const avatar_selected = avatar_display.querySelector('img');
    // Once an image is selected, it then copies it to the 'avatar' element and confirms the selection that was made
    avatar_chosen.innerHTML = `<img src ="${avatar_selected.src}" alt="Selected Avatar">`;
    alert("You have selected this Avatar!");
} 



 //This is the command for the button to generate avatars. As you can see display_avatars is the same as the function name so it now runs the code from that section. 
btnGen.addEventListener("click", display_avatars); 
//This is the code I use for when you hit Set avatar. As you can see chose_avatar is the same as the function name so it now runs the code from that section. 
btnSet.addEventListener("click", chose_avatar); 