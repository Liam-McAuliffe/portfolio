import { useState } from 'react';

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sectionBg = 'bg-white';
  const textColor = 'text-charcoal';
  const headingColor = 'text-navy-deep';
  const labelColor = 'text-charcoal';

  const buttonBg = 'bg-teal';
  const buttonText = 'text-navy-deep';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage('Success! Your message has been received.');
        event.target.reset();
      } else {
        setStatusMessage(`Error: ${result.message || 'Something went wrong.'}`);
      }
    } catch (error) {
      console.error('Failed to send form:', error);
      setStatusMessage(
        'Error: Could not send message. Please try again later.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-16 px-4 md:px-8 lg:px-16 ${sectionBg} ${textColor}`}
    >
      <div className="container mx-auto max-w-xl">
        <h2
          className={`text-center font-montserrat text-3xl font-bold mb-12 ${headingColor}`}
        >
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-inter font-medium mb-1 ${labelColor}`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={`w-full p-3 rounded <span class="math-inline">\{inputBg\} border border\-transparent focus\:outline\-none focus\:ring\-2 focus\:ring\-</span>{inputBorder} font-inter`}
              placeholder="Your Name"
              disabled={isLoading}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-inter font-medium mb-1 ${labelColor}`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`w-full p-3 rounded <span class="math-inline">\{inputBg\} border border\-transparent focus\:outline\-none focus\:ring\-2 focus\:ring\-</span>{inputBorder} font-inter`}
              placeholder="your.email@example.com"
              disabled={isLoading}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-inter font-medium mb-1 ${labelColor}`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className={`w-full p-3 rounded <span class="math-inline">\{inputBg\} border border\-transparent focus\:outline\-none focus\:ring\-2 focus\:ring\-</span>{inputBorder} font-inter`}
              placeholder="Your message..."
              disabled={isLoading}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full rounded ${buttonBg} ${buttonText} px-6 py-3 font-montserrat font-bold transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {statusMessage && (
              <p
                className={`mt-4 text-center text-sm ${
                  statusMessage.startsWith('Error')
                    ? 'text-red-600'
                    : 'text-green-600'
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
