function submitApplication() {
  // Clear the input fields
  document.querySelector('input[placeholder="Name of the Applicant"]').value = '';
  document.querySelector('input[placeholder="xyz@email.com"]').value = '';

  // Show a pop-up message
  alert('Kindly check your mail & fill the application!');
}

  
  function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      // Calculate the offset of the section from the top of the page
      var offset = section.offsetTop;

      // Use the smooth scroll behavior
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  }

  


