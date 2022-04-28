$(document).ready(function() {
  console.log("Project Form");

  // ####################################################################
  // Click Events
  // ####################################################################
  // New Project Form Popup
  $("#new_project").click(function() {
    $(".pop-ups").css("display", "flex");
  });

  // New Project Form Hide

  // - Cancel Button
  $(".cancel-button, .add-project").click(function() {
    $(".pop-ups").css("display", "none");
  });

  // - Click outside of form
  document.addEventListener("click", function(e) {
    let popUpWrapper = document.getElementsByClassName("pop-ups")[0];
    if (popUpWrapper == e.target) {
      $(".pop-ups").css("display", "none");
    }
  });




  
});
