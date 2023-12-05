// Function to increase input size while typing
document.addEventListener('input', function (event) {
  if (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea') {
    event.target.style.width = 'calc(' + (event.target.value.length + 1) + 'ch)';
  }
});

// Function to handle form submission
document.getElementById('foundItemForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Display confirmation message
  const confirmation = document.getElementById('foundConfirmation');
  confirmation.innerHTML = `<p>Thank you for reporting the found item!<br>We'll reach out if there's a potential match.</p>`;

  // Clear form fields after submission
  document.getElementById('foundItemForm').reset();
});
