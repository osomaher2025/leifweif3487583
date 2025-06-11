
import { useState } from 'react';
import GradientButton from '../UI/GradientButton';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label text-white">Name</label>
        <input
          type="text"
          className="form-control bg-transparent border-light text-white"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label text-white">Email</label>
        <input
          type="email"
          className="form-control bg-transparent border-light text-white"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label text-white">Message</label>
        <textarea
          className="form-control bg-transparent border-light text-white"
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <GradientButton type="submit">
        Send Message
      </GradientButton>
    </form>
  );
};

export default ContactForm;
