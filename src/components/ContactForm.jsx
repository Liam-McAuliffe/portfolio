import { useState } from 'react';

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      className="bg-white dark:bg-navy-deep py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="container mx-auto max-w-xl">
        <h2 className="text-navy-deep dark:text-teal text-center font-montserrat text-3xl font-bold mb-12">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-inter font-medium mb-1 text-charcoal dark:text-grey-soft`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={`w-full p-3 rounded bg-grey-soft dark:bg-charcoal text-charcoal dark:text-grey-soft border border-transparent focus:outline-none focus:ring-2 focus:ring-transparent`}
              placeholder="Your Name"
              disabled={isLoading}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-inter font-medium mb-1 text-charcoal dark:text-grey-soft`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`w-full p-3 rounded bg-grey-soft dark:bg-charcoal text-charcoal dark:text-grey-soft border border-transparent focus:outline-none focus:ring-2 focus:ring-transparent`}
              placeholder="your.email@example.com"
              disabled={isLoading}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-inter font-medium mb-1 text-charcoal dark:text-grey-soft`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className={`w-full p-3 rounded bg-grey-soft dark:bg-charcoal text-charcoal dark:text-grey-soft border border-transparent focus:outline-none focus:ring-2 focus:ring-transparent`}
              placeholder="Your message..."
              disabled={isLoading}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full rounded bg-teal dark:bg-teal text-navy-deep dark:text-navy-deep px-6 py-3 font-montserrat font-bold transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {statusMessage && (
              <p
                className={`mt-4 text-center text-sm ${
                  statusMessage.startsWith('Error')
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-green-600 dark:text-green-400'
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
