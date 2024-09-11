document.addEventListener("DOMContentLoaded", () => {
    const navigationRequest = new XMLHttpRequest();
    const landingPageRequest = new XMLHttpRequest();
    
  
    navigationRequest.onload = function () {
      if (navigationRequest.status === 200) {
        document.getElementById("navigation").innerHTML = navigationRequest.responseText;
      }
    };
  
    landingPageRequest.onload = function () {
      if (landingPageRequest.status === 200) {
        document.getElementById("landingPage").innerHTML = landingPageRequest.responseText;
      }
    };
  
    navigationRequest.open("GET", "/components/navigation.html", true);
    navigationRequest.send();
  
    landingPageRequest.open("GET", "/views/landingPage.html", true);
    landingPageRequest.send();
  });
  