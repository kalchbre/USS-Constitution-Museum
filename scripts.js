$(document).ready(function() 
  {

  // Navigation Menu Functionality
  $(".submenu").hide();
  $(".has-dropdown").click(function(e)
    {
      e.stopPropagation();
      $(this).siblings(".has-dropdown").children(".submenu, .child-submenu").slideUp("fast");
      $(this).siblings(".has-dropdown").find("> a > .arrow").removeClass("open");
      $(this).children(".submenu, .child-submenu").slideToggle("fast");
      $(this).find("> a > .arrow").toggleClass("open");
    });

// Hamburger Toggle
  $(".hamburger").click(function() 
    {
    $(".navbar").toggleClass("active");
    $(".hamburger").toggleClass("active");
    });

//Ship and Museum Hours
  const shipHours = 
    {
    0: "Ship: Open 10 AM - 4 PM",
    1: "Closed",
    2: "Closed",
    3: "Ship: Open 10 AM - 4 PM",
    4: "Ship: Open 10 AM - 4 PM",
    5: "Ship: Open 10 AM - 4 PM",
     6: "Ship: Open 10 AM - 4 PM"
    };

  const museumHours = 
    {
    0: "Museum: Open 10 AM - 5 PM",
    1: "Museum: Open 10 AM - 5 PM",
    2: "Museum: Open 10 AM - 5 PM",
    3: "Museum: Open 10 AM - 5 PM",
    4: "Museum: Open 10 AM - 5 PM",
    5: "Museum: Open 10 AM - 5 PM",
    6: "Museum: Open 10 AM - 5 PM"
    };

  const DateET = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" })
    );
    const todayET = DateET.getDay();

  $("#ship-hours").text(shipHours[todayET]);
  $("#museum-hours").text(museumHours[todayET]);

  //Home Page Slideshow Functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) { showSlides(slideIndex += n); }
    function currentSlide(n) { showSlides(slideIndex = n); }

    function showSlides(n) {
        let $slides = $(".exhibit-slide");
        let $dots = $(".dot");

        if (n > $slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = $slides.length; }

        $slides.fadeOut(300);
        $dots.removeClass("active");

        let $currentSlide = $slides.eq(slideIndex - 1);
        $currentSlide.fadeIn(300);
        $dots.eq(slideIndex - 1).addClass("active");

        let newTitle = $currentSlide.data("title");
        $("#exhibit-title").text(newTitle);
    }

    let autoSlide = setInterval(() => { plusSlides(1); }, 5000);
    let autoSlideTimeout;
    let pauseDuration = 8000; // 10 seconds
    let userHovering = false;

    function pauseAutoScroll() {
        clearInterval(autoSlide);
        clearTimeout(autoSlideTimeout);

        autoSlideTimeout = setTimeout(() => {
            autoSlide = setInterval(() => { plusSlides(1); }, 5000);
        }, pauseDuration);
    }

    $(".prev").click(() => { plusSlides(-1); pauseAutoScroll(); });
    $(".next").click(() => { plusSlides(1); pauseAutoScroll(); });
    $(".dot").each(function(index) {
        $(this).click(() => { currentSlide(index + 1); pauseAutoScroll(); });
    });

  $(".slideshow-container").hover(
    function () {
        userHovering = true;
        clearInterval(autoSlide);
        clearTimeout(autoSlideTimeout);
    },
    function () {
        userHovering = false;
        clearInterval(autoSlide);
        clearTimeout(autoSlideTimeout);

        autoSlideTimeout = setTimeout(() => {
            if (!userHovering) {
                autoSlide = setInterval(() => { plusSlides(1); }, 5000);
            }
        }, pauseDuration);
    }
);
    // Home Page Scroll Arrow
    $(".scroll-arrow").click(function() {
        $('html, body').animate({ scrollTop: $("#target").offset().top }, 800);
    });

    //Header Hover Color
$("a:has(.image-hover-container)").on("mouseenter", function () {
    $(this)
        .closest(".info-1, .info-2, .info-3, .info-4, .events-1, .events-2, .events-3")
        .find("h3 > a, h4 > a")
        .toggleClass("hovered");
});

$("a:has(.image-hover-container)").on("mouseleave", function () {
    $(this)
        .closest(".info-1, .info-2, .info-3, .info-4, .events-1, .events-2, .events-3")
        .find("h3 > a, h4 > a")
        .toggleClass("hovered");
});

// About Page Slideshow
let aboutSlideIndex = 0;

    function aboutShowSlides() {
        const slides = document.getElementsByClassName("mySlides");
        if (!slides.length) return;

        for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";

        aboutSlideIndex++;
        if (aboutSlideIndex > slides.length) aboutSlideIndex = 1;

        slides[aboutSlideIndex - 1].style.display = "block";
        setTimeout(aboutShowSlides, 5000);
    }

    aboutShowSlides();

//dynamic calendar function source: https://codepen.io/xmark/pen/WQaXdv
  var Cal = function(divId) {

  //Store div id
  this.divId = divId;

  // Days of week, starting on Sunday
  this.DaysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  // Months, stating on January
  this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  // Set the current month, year
  var d = new Date();

  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDay = d.getDate();

};

// Add events in "YYYY-M-D" format HERE!
const events = {
  "2025-11-17": "Lt. William Bush Marine Corp Breakfast: Guest Speaker Representative Seth Moulton",
  "2025-11-20": "Sailing Through History: The Navy Before the Navy",
  "2025-12-6": "Sensory Sunday",
  "2025-12-20": "December School Vacation Week",
  "2025-12-21": "December School Vacation Week",
  "2025-12-22": "December School Vacation Week",
  "2025-12-23": "December School Vacation Week",
  "2025-12-24": "December School Vacation Week",
  "2025-12-25": "December School Vacation Week",
  "2025-12-26": "December School Vacation Week",
  "2025-12-27": "December School Vacation Week",
  "2025-12-28": "December School Vacation Week",
  "2025-12-29": "December School Vacation Week",
  "2025-12-30": "December School Vacation Week",
  "2025-12-31": "December School Vacation Week",
  "2026-1-1": "December School Vacation Week",
  "2026-1-2": "December School Vacation Week",
  "2026-1-3": "December School Vacation Week",
  "2026-1-4": "December School Vacation Week",
  "2026-1-5": "December School Vacation Week",
  "2026-1-6": "December School Vacation Week",
  "2026-2-5": "Leadership Forum"
};

// Goes to next month
Cal.prototype.nextMonth = function() {
  if ( this.currMonth == 11 ) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

// Goes to previous month
Cal.prototype.previousMonth = function() {
  if ( this.currMonth == 0 ) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Show current month
Cal.prototype.showcurr = function() {
  this.showMonth(this.currYear, this.currMonth);
};

// Show month (year, month)
Cal.prototype.showMonth = function(y, m) {

  var d = new Date()
  // First day of the week in the selected month
  , firstDayOfMonth = new Date(y, m, 1).getDay()
  // Last day of the selected month
  , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
  // Last day of the previous month
  , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();


  var html = '<table>';

  // Write selected month and year
  html += '<thead><tr>';
  html += '<td colspan="7" class="cal-header">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';


  // Write the header of the days of the week
  html += '<tr class="days">';
  for(var i=0; i < this.DaysOfWeek.length;i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';

  // Write the days
  var i=1;
  do {

    var dow = new Date(y, m, i).getDay();

    // If Sunday, start new row
    if ( dow == 0 ) {
      html += '<tr>';
    }
    // If not Sunday but first day of the month
    // it will write the last days from the previous month
    else if ( i == 1 ) {
      html += '<tr>';
      var k = lastDayOfLastMonth - firstDayOfMonth+1;
      for(var j=0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    // Write the current day in the loop
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    // Build date key for events
    let dateKey = y + "-" + (m + 1) + "-" + i;

    //popup text if event exists
    let popupText = events[dateKey] ? `<span class="popup">${events[dateKey]}</span>` : "";

    //determine class (today or normal)
    let cellClass = (chkY == y && chkM == m && i == this.currDay) ? "today" : "normal";

    // If the day has an event, add event-day class
    if (events[dateKey]) {
      cellClass += " event-day";
    }

    // Build cell HTML with popup span
    html += `<td class="${cellClass}">${i}${popupText}</td>`;

    // If Saturday, closes the row
    if ( dow == 6 ) {
      html += '</tr>';
    }
    // If not Saturday, but last day of the selected month
    // it will write the next few days from the next month
    else if ( i == lastDateOfMonth ) {
      var k=1;
      for(dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    i++;
  }while(i <= lastDateOfMonth);

  // Closes table
  html += '</table>';

  // Write HTML to the div
  document.getElementById(this.divId).innerHTML = html;
};

// link to specific div on Upcoming Events Page
var c = new Cal("divCal");
c.showcurr();

// Bind next & previous buttons
$("#btnNext").click(() => c.nextMonth());
$("#btnPrev").click(() => c.previousMonth());

// Get element by id
function getId(id) {
  return document.getElementById(id);
}
  });
