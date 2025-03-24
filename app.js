function calculateBooking() {
    // Get the selected destination and number of passengers
    const destination = document.getElementById("destination").value;
    const numPassengers = document.getElementById("passengers").value;

    // Define the prices for each destination
    let pricePerPerson;

    switch (destination) {
      case "paris":
        pricePerPerson = 500;
        break;
      case "tokyo":
        pricePerPerson = 800;
        break;
      case "newyork":
        pricePerPerson = 600;
        break;
      case "london":
        pricePerPerson = 450;
        break;
      default:
        pricePerPerson = 0;
        break;
      case "Usa":
        pricePerPerson = 560;
        break;
      case "canada":
        pricePerPerson = 780;
        break;
        
    }

    // Calculate the total cost
    const totalCost = pricePerPerson * numPassengers;

    // Display the booking details
    document.getElementById("bookingDetails").innerHTML = 
      `You have selected ${numPassengers} passenger(s) to ${destination.charAt(0).toUpperCase() + destination.slice(1)}.<br>
      Total cost: $${totalCost}.`;
  }