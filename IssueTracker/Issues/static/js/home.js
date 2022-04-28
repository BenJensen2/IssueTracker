$(document).ready(function() {
  console.log("Project Form");

  // New Project Form Popup
  $("#new_project").click(function() {
    $(".pop-ups").css("display", "flex");
  });

  // New Project Form Hide
  // - Cancel Button
  $(".cancel-button, .add-project").click(function() {
    $(".pop-ups").css("display", "none");
  });
});
