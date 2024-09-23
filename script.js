const colors = [
  '#90ceea', // Light blue
  '#ffcccb', // Light red
  '#ffe5b4', // Light orange
  '#d1e7dd', // Light green
  '#e3f2fd', // Light blue-gray
  '#e0bbff', // Light purple
  '#f1f8e9', // Light green
];

function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    
    // Call showPopup here
    showPopup(true);
    
    // Create a new 'recommendation' element
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    
    // Set random background color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
    
    element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;
    
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}
