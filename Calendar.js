document.addEventListener("DOMContentLoaded", function () {
  const monthyear = document.getElementById("month-year");
  const daysContainer = document.getElementById("days");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let CurrentDate = new Date();
  let Today = new Date();

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    // Display current month and year
    monthyear.textContent = `${months[month]} ${year}`;

    // Clear previous days
    daysContainer.innerHTML = "";

    // Populate days of the month
    for (let i = 1; i <= lastDay; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = i;

      // Highlight today's date
      if (
        i === Today.getDate() &&
        month === Today.getMonth() &&
        year === Today.getFullYear()
      ) {
        dayDiv.classList.add("today");
      }
      daysContainer.appendChild(dayDiv);
    }
  }

  // Initial render of the calendar when page is loaded
  renderCalendar(CurrentDate);
});


