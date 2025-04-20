const currentDate = new Date();
const currentDay = currentDate.getDay();

// Calculate the start of the week (Sunday)
const startOfWeek = new Date(currentDate);
startOfWeek.setDate(currentDate.getDate() - currentDay);

// Function to add days to a date
function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

// Function to determine the suffix for a given date
function getDateSuffix(date) {
    if (date >= 11 && date <= 13) {
        return 'th';
    }
    switch (date % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

// Business hours for each day of the week
const businessHours = {
    sunday: "11AM - 7PM",
    montuesday: "Closed", // Combined for Monday and Tuesday
    wednesday: "4PM - 8PM",
    thursday: "4PM - 8PM",
    friday: "4PM - 10PM",
    saturday: "12PM - 10PM",
};

// Holiday hours for specific dates (format: "MM-DD")
const holidayHours = {
    "10-31": "Closed 🎃",  // Halloween
    "12-25": "Closed 🎄",  // Christmas
    "12-26": "Closed 🎁",  // Boxing day
    "12-27": "12PM - 10PM<br>(Holiday Hours)",
    "01-01": "Closed 🌟",  // New Years
    "01-02": "12PM - 6PM",
    "01-03": "12PM - 10PM<br>(Holiday Hours)",
	"04-20": "Closed 🐣",  // Easter Sunday 2025
};

// Object to map each day of the week to its class name and assign the date
const dayToClassMapping = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
};

// Loop through each day of the week and update the HTML accordingly
for (let i = 0; i < 7; i++) {
    let dayClassName = dayToClassMapping[i];
    const businessHourDiv = document.querySelector(`.business-hour.${dayClassName}`);
    const currentDayDate = addDays(startOfWeek, i);
    const formattedDate = `${String(currentDayDate.getMonth() + 1).padStart(2, '0')}-${String(currentDayDate.getDate()).padStart(2, '0')}`;
    const isHoliday = holidayHours.hasOwnProperty(formattedDate);

    // Handling the combined Monday and Tuesday special case
    if (i === 1) {
        dayClassName = "montuesday";
        const montuesdayDiv = document.querySelector(`.business-hour.${dayClassName}`);
        if (montuesdayDiv) {
            const dayLabel = montuesdayDiv.querySelector('p:first-child');
            const hourLabel = montuesdayDiv.querySelector('p:nth-child(2)');
            const mondayDate = addDays(startOfWeek, 1);
            const tuesdayDate = addDays(startOfWeek, 2);
            const mondaySuffix = getDateSuffix(mondayDate.getDate());
            const tuesdaySuffix = getDateSuffix(tuesdayDate.getDate());

            // Update the day and date label
            dayLabel.innerHTML = `<b>MON + TUES</b><br>${mondayDate.getDate()}${mondaySuffix} + ${tuesdayDate.getDate()}${tuesdaySuffix}`;

            // Update the hours
            hourLabel.innerHTML = businessHours.montuesday;
        }
        // Skip to the next iteration to avoid handling Tuesday separately
        continue;
    }

    // Update the other days
    if (businessHourDiv) {
        const dayLabel = businessHourDiv.querySelector('p:first-child');
        const hourLabel = businessHourDiv.querySelector('p:nth-child(2)');
        const dateSuffix = getDateSuffix(currentDayDate.getDate());

        // Update the day and date label
        if (dayLabel) {
            dayLabel.innerHTML = `<b>${dayLabel.textContent.split(' ')[0]}</b><br>${currentDayDate.getDate()}${dateSuffix}`;
        }

        // Update the hours: check if today is a holiday
        if (hourLabel) {
            hourLabel.innerHTML = isHoliday ? holidayHours[formattedDate] : businessHours[dayClassName];
        }
    }
}

// Highlight the current day
let currentDayClassName = dayToClassMapping[currentDay];
if (currentDay === 1 || currentDay === 2) {
    currentDayClassName = "montuesday";
}
const currentBusinessHourDiv = document.querySelector(`.business-hour.${currentDayClassName}`);
if (currentBusinessHourDiv) {
    currentBusinessHourDiv.classList.add("highlight");
}
