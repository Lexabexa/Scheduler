// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
    //listener for click events on the save button. 
    const saveButtons = document.querySelectorAll('.saveBtn');
    saveButtons.forEach(saveButton => {
    saveButton.addEventListener('click', function() {
    const description = this.parentNode.querySelector('.description').value;
    const timeBlockId = this.parentNode.id;
    localStorage.setItem(timeBlockId, description);
    });
    
    
    // the past, present, or future class to each time
    // block by comparing the id to the current hour.
    const currentHour = dayjs().hour();

   const timeBlocks = document.querySelectorAll('.time-block');
   timeBlocks.forEach(timeBlock => {
    const timeBlockHour = parseInt(timeBlock.id);
    if (timeBlockHour < currentHour) {
    timeBlock.classList.add('past');
    } else if (timeBlockHour === currentHour) {
    timeBlock.classList.add('present');
    } else {
    timeBlock.classList.add('future');
    }
   });
  
    //current date in the header of the page
    const currentDate = new Date();
    const header = document.querySelector('header');
    const dateDisplay = document.createElement('p');
    dateDisplay.textContent = `Today is ${currentDate.toLocaleDateString()} and the time is ${currentDate.toLocaleTimeString()}.`;
    header.appendChild(dateDisplay);


  //save button function to save to local storage 
  $(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  });

  //refresh storage
  $("#Refresh").click(function(event) {
    event.preventDefault();
    $("textarea").val("");
    localStorage.clear();
  });
