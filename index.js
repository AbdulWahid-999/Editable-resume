// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', function () {
    var resumeForm = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var formData = new FormData(resumeForm);
        var name = formData.get('name');
        var email = formData.get('email');
        var contact = formData.get('contact');
        var education = formData.get('education');
        var experience = formData.get('experience');
        var skills = formData.get('skills');
        var photoFile = formData.get('photo');
        // Convert the uploaded photo to a base64 string if provided
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var photoURL = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            // Update the resume output with the photo and form details
            resumeOutput.innerHTML = "\n          <h2>*** Your Generated Resume ***</h2>\n          ".concat(photoURL ? "<img src=\"".concat(photoURL, "\" alt=\"User Photo\" \">") : "", "\n          <p><strong>Name:</strong> ").concat(name, "</p>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <p><strong>Number:</strong> ").concat(contact, "</p>\n          <p><strong>Education:</strong> ").concat(education, "</p>\n          <p><strong>Experience:</strong> ").concat(experience, "</p>\n          <p><strong>Skills:</strong> ").concat(skills, "</p>\n        ");
            resumeOutput.style.display = 'block';
        };
        if (photoFile) {
            reader.readAsDataURL(photoFile);
        }
        else {
            // If no photo is uploaded, display the details without a photo
            resumeOutput.innerHTML = "\n          <h2>Your Generated Resume</h2>\n          <p><strong>Name:</strong> ".concat(name, "</p>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <p><strong>Phone Number:</strong> ").concat(contact, "</p>\n          <p><strong>Education:</strong> ").concat(education, "</p>\n          <p><strong>Experience:</strong> ").concat(experience, "</p>\n          <p><strong>Skills:</strong> ").concat(skills, "</p>\n        ");
            resumeOutput.style.display = 'block';
        }
    });
});
