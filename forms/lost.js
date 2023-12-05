document.getElementById('lostItemForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const itemName = document.getElementById('itemName').value;
    const description = document.getElementById('description').value;
    const contact = document.getElementById('contact').value;
    
    // Display confirmation message
    const confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = `Thank you for submitting! Your ${itemName} has been reported lost. We'll contact you at ${contact} if found.`;
    
    // Clear form fields
    document.getElementById('lostItemForm').reset();
  });
  