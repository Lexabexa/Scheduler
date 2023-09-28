
$(document).ready(function() {
  //display current day and time
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  $("#currentTime").text(dayjs().format("hh:mm:ss a"));
});
  
  //save button function to save to local storage 
  $(".saveBtn").click(function() {
    const description = $(this).siblings(".description").val();
    const timeBlockId = $(this).parent().attr("id");
    localStorage.setItem(timeBlockId, description);
  });
  
  //listener for click events on the save button. 
  $(".description").each(function(){
    const timeBlockId = $(this).parent().attr('id');
    const savedDescription = localStorage.getItem(timeBlockId);
    if (savedDescription) {
      $(this).val(savedDescription);
    }
  });
  
  // the past, present, or future class to each time
  // block by comparing the id to the current hour.
  const currentHour = dayjs().hour();
  $(".time-block").each(function() {
    const timeBlockHour = parseInt($(this).attr("id"));
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  
  //refresh storage
  $(document).ready(function() {
    var refreshBtn = $("#Refresh");
    refreshBtn.on("click", function() {
      localStorage.clear();
      $(".description").val("");
    });
  });