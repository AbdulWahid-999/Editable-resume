// Wait for the DOM to load
window.addEventListener('DOMContentLoaded', () => {
    const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
  
    resumeForm.addEventListener('submit', function(event: Event) {
      event.preventDefault();
  
      const formData = new FormData(resumeForm);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const contact = formData.get('contact') as string;
      const education = formData.get('education') as string;
      const experience = formData.get('experience') as string;
      const skills = formData.get('skills') as string;
      const photoFile = formData.get('photo') as File;
  
      // Convert the uploaded photo to a base64 string if provided
      const reader = new FileReader();
      reader.onload = function(event) {
        const photoURL = event.target?.result as string;
  
        // Update the resume output with the photo and form details
        resumeOutput.innerHTML = `
          <h2>*** Your Generated Resume ***</h2>
          ${photoURL ? `<img src="${photoURL}" alt="User Photo" ">` : ""}
          <p><strong>Name:</strong> <${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Number:</strong> ${contact}</p>
          <p><strong>Education:</strong> ${education}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>Skills:</strong> ${skills}</p>
        `;
  
        resumeOutput.style.display = 'block';
      };
  
      if (photoFile) {
        reader.readAsDataURL(photoFile);
      } else {
        // If no photo is uploaded, display the details without a photo
        resumeOutput.innerHTML = `
          <h2>Your Generated Resume</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${contact}</p>
          <p><strong>Education:</strong> ${education}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>Skills:</strong> ${skills}</p>
        `;
  
        resumeOutput.style.display = 'block';
      }
    });
  });
  
  