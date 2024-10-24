const currentDay = new Date().getDay();

const dayToClassMapping = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
};

let dayClassName = dayToClassMapping[currentDay];

if (currentDay === 1 || currentDay === 2) {
    dayClassName = "montuesday";
}

const businessHourDiv = document.querySelector(`.business-hour.${dayClassName}`);

if (businessHourDiv) {
    businessHourDiv.classList.add("highlight");
}
