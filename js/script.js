var today = new Date().toISOString().split('T')[0];
document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);

function myFunction() {
  alert("Important Update:\nWe are still under full operation and continue to serve our clients during the shelter-in-place order. Our regular hours are Monday through Saturday, 8am to 6pm.\n\nWhat you can expect from us:\nWorkers in full protective gear, sanitization of all contantacted surfaces, smaller groups of cleaners to prevent the spread of virus.");
}
