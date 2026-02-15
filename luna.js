document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loveForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form behavior

    // Optionally capture values
    const name = document.getElementById("name").value;
    const letter = document.getElementById("letter").value;

    // Redirect to another page (letter.html)
    // You can pass data via query string if you want
    window.location.href = "letter.html";
  });
});
