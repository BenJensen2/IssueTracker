$(document).ready(function() {
  console.log("Project Form");

  // ####################################################################
  // Click Events
  // ####################################################################

  // Open Pop-up Form Wrappers
  function openPopUp() {
    console.log("Pop-ups opened");
    $(".pop-ups").css("display", "flex");
    $(".pop-up-form").css("display", "flex");
  }

  // Close Pop-up Form Wrappers
  function closePopUp() {
    // Hide Wrappers
    $(".pop-ups").css("display", "none");
    $(".pop-up-form").css("display", "none");
    // Set form action & method to get homepage
    $(".pop-up-form").children().attr("action", "/");
    $(".pop-up-form").children().attr("method", "get");
  }

  // New Project Form Popup
  function newProjectClick() {
    $("#new_project").click(function() {
      // Opens the Pop-Up Wrappers
      openPopUp();
      // Opens the project detail form
      $(".project-detail-form").css("display", "inline-block");
      // Changes the form action to "create_project" and method to "post"
      $(".pop-up-form").children().attr("action", "create_project");
      $(".pop-up-form").children().attr("method", "post");
    });
  }
  newProjectClick()

  // Project Detail Form Popup
  $(".project-title").click(function() {
    openPopUp();
    $(".project-detail-form").css("display", "inline-block");
  });

  // New Project Form Hide
  // - Cancel Button
  $(".cancel-button, .add-project").click(function() {
    closePopUp();
    $(".new_project_form").css("display", "none");
  });
  // - Click outside of form
  document.addEventListener("click", function(e) {
    e.preventDefault();
    let popUpWrapper = document.getElementsByClassName("pop-ups")[0];
    let newProjectButton = document.getElementById("new_project")
    console.log(e.target)
    if (e.target == newProjectButton){
      newProjectClick()
    }
    else if (popUpWrapper == e.target) {
      closePopUp();
      $(".new_project_form").css("display", "none");
    }
  });

  // Delete Project
  $(".project-title .delete-button").click(function() {
    console.log("Delete Project");
  });
});
