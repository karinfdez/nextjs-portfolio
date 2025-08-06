import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from './Button'

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mldlpyrv");
    
    if (state.succeeded) {
      return (
        <div className="w-full max-w-md bg-orange-500/20 p-6 rounded-xl shadow-md text-center my-6">
          <div className="text-green-400 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-semibold mb-2 text-black">Message Sent!</h3>
          <p className="text-black">Thanks for reaching out. I'll get back to you soon!</p>
        </div>
      );
    }
    
    return (
      <form 
        onSubmit={handleSubmit}
        className="bg-orange-500/10 backdrop-blur-md border border-orange-500/30 shadow-lg shadow-orange-500/10 rounded-xl p-6"
      >
        <div className="mb-4">
          <input
            id="name"
            type="text" 
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-white/30 text-white placeholder-white/70 border border-orange-300 focus:outline-none focus:border-orange-500 backdrop-blur-sm shadow-sm transitionn"
          />
        </div>
        
        <div className="mb-4">
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-white/30 text-white placeholder-white/70 border border-orange-300 focus:outline-none focus:border-orange-500 backdrop-blur-sm shadow-sm transition"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-600 text-sm mt-1"
          />
        </div>
        
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full p-3 rounded bg-white/30 text-white placeholder-white/70 border border-orange-300 focus:outline-none focus:border-orange-500 backdrop-blur-sm shadow-sm transition"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-600 text-sm mt-1"
          />
        </div>
        
        <Button 
          label={state.submitting ? 'Sending...' : 'Send Message'}
          type="submit" 
          disabled={state.submitting}
          borderColor="border-orange-500"
          textColor="text-orange-500"
          hoverBgColor="hover:bg-orange-500"
          hoverTextColor="hover:text-white"
          className="mt-3 w-full"
        />
      </form>
    );
  }