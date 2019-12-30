/**
 * Application JS file
 */
const github = new Github();
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;
  if (userText !== "") {
    console.log(userText);

    // Make http call
    github.getUser(userText).then(data => {
      if (data && data.profile && data.profile.message === "Not Found") {
        // If a profile is not present show an alert on the page for 3 seconds
        ui.showAlert("User Not Found", "alert alert-danger");
        ui.clearProfile();
        ui.clearRepos();
      } else {
        // If a profile is present show profile details and their latest 5 repos
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // If a profile is cleared then clear the UI for profile and their repo list
    ui.clearProfile();
    ui.clearRepos();
  }
});
