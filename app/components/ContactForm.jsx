import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from './Button'

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mldlpyrv");
    
    if (state.succeeded) {
      return (
        <div className="`bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg p-6 rounded-xl shadow-xl text-center my-6">
          <div className="text-green-400 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-semibold mb-2 text-orange-400">Message Sent!</h3>
          <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon!</p>
        </div>
      );
    }
    
    return (
      <form 
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg"
      >
        <div className="mb-4">
          <input
            id="name"
            type="text" 
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
          />
        </div>
        
        <div className="mb-4">
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
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
            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
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