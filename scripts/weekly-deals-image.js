// Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
var dayOfWeek = new Date().getDay();

var imgSrc;
switch(dayOfWeek) {
    case 0: // Sunday
    case 1: // Monday
    case 2: // Tuesday
    case 6: // Saturday
        imgSrc = 'https://res.cloudinary.com/di8j84ent/image/upload/q_auto/v1715473287/weekly-sm_1_m696op.svg';
        break;
    case 3: // Wednesday
        imgSrc = 'https://res.cloudinary.com/di8j84ent/image/upload/q_auto/v1715473640/wed_vtfbix.svg';
        break;
    case 4: // Thursday
        imgSrc = 'https://res.cloudinary.com/di8j84ent/image/upload/q_auto/v1715473502/thur_nxvrnu.svg';
        break;
    case 5: // Friday
        imgSrc = 'https://res.cloudinary.com/di8j84ent/image/upload/q_auto/v1715473499/fri_aq6xtu.svg';
        break;
}

// Set the source for the image
document.getElementById('weeklyDealImage').src = imgSrc;
