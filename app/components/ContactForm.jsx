import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mldlpyrv");
    
    if (state.succeeded) {
      return (
        <div className="w-full max-w-md bg-[#161b22] p-6 rounded-xl shadow-md text-center">
          <div className="text-green-400 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon!</p>
        </div>
      );
    }
    
    return (
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#161b22] p-6 rounded-xl shadow-md"
      >
        <div className="mb-4">
          <input
            id="name"
            type="text" 
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-300 text-black border border-gray-700 focus:outline-none focus:border-orange-500 transition"
          />
        </div>
        
        <div className="mb-4">
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-300 text-black border border-gray-700 focus:outline-none focus:border-orange-500 transition"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 rounded bg-gray-300 text-black border border-gray-700 focus:outline-none focus:border-orange-500 transition"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={state.submitting}
          className="w-full p-3 rounded bg-orange-500 text-white font-bold hover:bg-orange-600 transition disabled:opacity-70"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    );
  }
  