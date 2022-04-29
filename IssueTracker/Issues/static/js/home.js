$(document).ready(function() {
  console.log("Project Form");

  // ####################################################################
  // Click Events
  // ####################################################################
  
  // Open Pop-up Form Wrappers
  function openPopUp(){
    console.log("Pop-ups opened")
    $(".pop-ups").css("display", "flex");
    $(".pop-up-form").css("display", "flex");
  }

  // Close Pop-up Form Wrappers
  function closePopUp(){
    $(".pop-ups").css("display", "none");
    $(".pop-up-form").css("display", "none");
  }
  
  // New Project Form Popup
  $("#new_project").click(function() {
    openPopUp()
    $(".new_project_form").css("display", "inline-block");
  });

    // Project Detail Form Popup
    $(".project-title").click(function(){
      openPopUp()
      $(".project-detail-form").css("display", "inline-block");
    })

  // New Project Form Hide
  // - Cancel Button
  $(".cancel-button, .add-project").click(function() {
    closePopUp()
    $(".new_project_form").css("display", "none");
  });
  // - Click outside of form
  document.addEventListener("click", function(e) {
    e.preventDefault()
    let popUpWrapper = document.getElementsByClassName("pop-ups")[0];
    if (popUpWrapper == e.target) {
      closePopUp()
      $(".new_project_form").css("display", "none");
    }
  });

  // Delete Project
  $(".project-title .delete-button").click(function() {
    console.log("Delete Project")
  })

});
