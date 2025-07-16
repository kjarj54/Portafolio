document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const formMessage = document.getElementById('form-message') as HTMLDivElement;
  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
  const submitText = document.getElementById('submit-text') as HTMLSpanElement;
  const submitLoading = document.getElementById('submit-loading') as HTMLSpanElement;

  if (!form || !formMessage || !submitBtn || !submitText || !submitLoading) {
    console.error('Required form elements not found');
    return;
  }

  function showMessage(message: string, isError: boolean = false) {
    formMessage.textContent = message;
    formMessage.className = `p-4 rounded-md mb-4 ${isError ? 'bg-red-100 text-red-700 border border-red-300' : 'bg-green-100 text-green-700 border border-green-300'}`;
    formMessage.classList.remove('hidden');
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 5000);
  }

  function setLoading(loading: boolean) {
    if (loading) {
      submitBtn.disabled = true;
      submitText.classList.add('hidden');
      submitLoading.classList.remove('hidden');
    } else {
      submitBtn.disabled = false;
      submitText.classList.remove('hidden');
      submitLoading.classList.add('hidden');
    }
  }

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    setLoading(true);

    try {
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        showMessage('Message sent successfully! I\'ll get back to you soon.');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showMessage('There was an error sending your message. Please try again.', true);
    } finally {
      setLoading(false);
    }
  });
});
