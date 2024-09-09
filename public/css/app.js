// Show the admin login form and hide the member form
function showAdminForm() {
    document.getElementById('admin-form').style.display = 'block';
    document.getElementById('member-form').style.display = 'none';
  }
  
  // Show the member sign-up form and hide the admin form
  function showMemberForm() {
    document.getElementById('admin-form').style.display = 'none';
    document.getElementById('member-form').style.display = 'block';
  }
  
  // Optionally handle the form submissions
  document.getElementById('adminLogin').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    console.log(`Admin Email: ${email}, Password: ${password}`);
    // You can add your backend logic here for admin login
  });
  
  document.getElementById('memberSignUp').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('member-name').value;
    const email = document.getElementById('member-email').value;
    const password = document.getElementById('member-password').value;
    console.log(`Member Name: ${name}, Email: ${email}, Password: ${password}`);
    // You can add your backend logic here for member sign-up
  });
  