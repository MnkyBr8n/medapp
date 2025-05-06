const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
// Mobile nav toggle
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('show');
  });
  
  // Basic form validation
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const role = document.getElementById('role').value;
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
  
      const errorMsg = document.getElementById('errorMessage');
  
      if (!role || !name || !email || !password) {
        errorMsg.textContent = 'All fields are required.';
        return;
      }
  
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMsg.textContent = 'Enter a valid email address.';
        return;
      }
  
      if (password.length < 6) {
        errorMsg.textContent = 'Password must be at least 6 characters.';
        return;
      }
  
      errorMsg.textContent = '';
      alert('Form submitted successfully!');
      signupForm.reset();
    });
  }
  function openForm(doctorName) {
    document.getElementById('feedbackModal').style.display = 'flex';
    document.getElementById('formTitle').innerText = `Write a Review for ${doctorName}`;
  }
  
  function closeForm() {
    document.getElementById('feedbackModal').style.display = 'none';
    document.getElementById('reviewForm').reset();
    document.getElementById('reviewError').textContent = '';
  }
  
  document.getElementById('reviewForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('patientName').value.trim();
    const feedback = document.getElementById('patientFeedback').value.trim();
    const rating = document.getElementById('rating').value;
  
    const errorBox = document.getElementById('reviewError');
    if (!name || !feedback || !rating) {
      errorBox.textContent = 'Please complete all fields.';
      return;
    }
  
    alert('Review submitted successfully!');
    closeForm();
  });
    