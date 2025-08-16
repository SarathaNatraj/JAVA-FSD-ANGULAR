  const form = document.getElementById('bookingForm');
  const passengerNameInput = document.getElementById('passengerName');
  const destinationSelect = document.getElementById('destination');
  const ticketCountInput = document.getElementById('ticketCount');
  const messageDiv = document.getElementById('message');

// Event: DOMContentLoaded - ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Event: Form submission
 form.addEventListener('submit', (event) => {
   alert(" submit clicked ")
      event.preventDefault(); // prevent page reload

    const name = passengerNameInput.value.trim();
    const destination = destinationSelect.value;
    const tickets = parseInt(ticketCountInput.value);

    // Basic validation
    if (!name || !destination || tickets < 1) {
      showMessage('Please fill in all fields correctly.', 'error');
      return;
    }

    // Event handling logic: simulate booking
    const bookingDetails = `Booking confirmed for ${name} to ${destination} (Tickets: ${tickets})`;
    showMessage(bookingDetails, 'success');

    // Reset the form
    form.reset();


  });

  // Event: Real-time input feedback
  ticketCountInput.addEventListener('input', () => {
    if (parseInt(ticketCountInput.value) > 5) {
      showMessage('Maximum 5 tickets allowed per booking.', 'error');
    } else {
      messageDiv.textContent = '';
    }
  });

  // Utility: Show message
  function showMessage(msg, type) {
    messageDiv.textContent = msg;
    messageDiv.className = type;
  }
});

function handleSubmit(){
 
}
