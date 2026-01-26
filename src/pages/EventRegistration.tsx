import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EventRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { eventId, eventTitle } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    teamName: '',
    acceptRules: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.college.trim()) newErrors.college = 'College name is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (!formData.year) newErrors.year = 'Year of study is required';
    if (!formData.acceptRules) newErrors.acceptRules = 'You must accept the rules';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Redirect to payment
      navigate('/payment-success', {
        state: {
          eventId,
          eventTitle,
          transactionId: `TXN${Date.now()}`,
          amount: '500',
        },
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target as any;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="relative min-h-screen bg-black/95 overflow-hidden">
      {/* Neon Glitch Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0033] via-[#2d1b4e] to-[#1a0033]" />
        
        {/* Neon Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        <div className="absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-magenta-500 to-transparent opacity-40" />
        <div className="absolute top-40 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
        <div className="absolute bottom-40 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-40" />
        
        {/* Scanlines */}
        <div className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px)',
          }}
        />
        
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Navbar />

      <main className="relative z-10 min-h-screen flex items-center justify-center py-8 px-4">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-cyan-400 hover:text-magenta-400 transition-colors mb-6 font-retro text-xs tracking-widest uppercase"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={16} />
            Back
          </motion.button>

          {/* Arcade Machine Container */}
          <div 
            className="relative bg-cover bg-center rounded-3xl overflow-hidden"
            style={{
              backgroundImage: 'url(/images/ArcadeCard-BG.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              aspectRatio: '1/1.3',
            }}
          >
            {/* Neon Border Glow */}
            <div className="absolute inset-0 rounded-3xl" style={{
              boxShadow: 'inset 0 0 60px rgba(0,245,212,0.4), inset 0 0 30px rgba(255,43,43,0.3), 0 0 80px rgba(0,245,212,0.3)',
            }} />

            {/* Top Title Section */}
            <div className="absolute top-8 left-0 right-0 px-6 z-30 text-center">
              <h2 className="font-retro text-lg tracking-widest uppercase font-bold" 
                style={{
                  color: '#FF2B2B',
                  textShadow: '0 0 20px rgba(255,43,43,0.8)',
                  letterSpacing: '0.15em',
                }}>
                {eventTitle?.substring(0, 20)}
              </h2>
            </div>

            {/* Display Screen Area - Form Content */}
            <div className="absolute top-[16%] left-[8%] right-[8%] h-[48%] z-10">
              <div className="relative w-full h-full bg-black/80 rounded-lg overflow-y-auto p-4" style={{
                boxShadow: `0 0 40px #FF2B2B, inset 0 0 20px rgba(255,43,43,0.2)`,
                border: '2px solid #FF2B2B',
              }}>
                {/* Scanlines in Display */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px)',
                  }}
                />

                <div className="relative z-10 space-y-2">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="NAME"
                      className="w-full px-2 py-1 bg-black/60 border border-cyan-400/50 text-cyan-300 font-retro text-xs placeholder:text-cyan-600 focus:outline-none focus:border-magenta-400"
                    />
                    {errors.fullName && (
                      <div className="text-red-400 text-xs font-retro mt-0.5">{errors.fullName}</div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="EMAIL"
                      className="w-full px-2 py-1 bg-black/60 border border-cyan-400/50 text-cyan-300 font-retro text-xs placeholder:text-cyan-600 focus:outline-none focus:border-magenta-400"
                    />
                    {errors.email && (
                      <div className="text-red-400 text-xs font-retro mt-0.5">{errors.email}</div>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="PHONE"
                      className="w-full px-2 py-1 bg-black/60 border border-cyan-400/50 text-cyan-300 font-retro text-xs placeholder:text-cyan-600 focus:outline-none focus:border-magenta-400"
                    />
                    {errors.phone && (
                      <div className="text-red-400 text-xs font-retro mt-0.5">{errors.phone}</div>
                    )}
                  </div>

                  {/* College Input */}
                  <div>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="COLLEGE"
                      className="w-full px-2 py-1 bg-black/60 border border-cyan-400/50 text-cyan-300 font-retro text-xs placeholder:text-cyan-600 focus:outline-none focus:border-magenta-400"
                    />
                    {errors.college && (
                      <div className="text-red-400 text-xs font-retro mt-0.5">{errors.college}</div>
                    )}
                  </div>

                  {/* Department Input */}
                  <div>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="DEPT"
                      className="w-full px-2 py-1 bg-black/60 border border-cyan-400/50 text-cyan-300 font-retro text-xs placeholder:text-cyan-600 focus:outline-none focus:border-magenta-400"
                    />
                    {errors.department && (
                      <div className="text-red-400 text-xs font-retro mt-0.5">{errors.department}</div>
                    )}
                  </div>

                  {/* Year Select */}
                  <div>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-2 py-1 bg-black/60 border border-cyan-400/50 text-cyan-300 font-retro text-xs focus:outline-none focus:border-magenta-400"
                    >
                      <option value="">YEAR</option>
                      <option value="1">1st</option>
                      <option value="2">2nd</option>
                      <option value="3">3rd</option>
                      <option value="4">4th</option>
                    </select>
                    {errors.year && (
                      <div className="text-red-400 text-xs font-retro mt-0.5">{errors.year}</div>
                    )}
                  </div>

                  {/* Rules Checkbox */}
                  <label className="flex items-center gap-2 text-cyan-300 text-xs font-retro cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      name="acceptRules"
                      checked={formData.acceptRules}
                      onChange={handleChange}
                      className="w-3 h-3 accent-magenta-500"
                    />
                    <span>ACCEPT RULES</span>
                  </label>
                  {errors.acceptRules && (
                    <div className="text-red-400 text-xs font-retro">{errors.acceptRules}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Screen Bezel Overlay */}
            <img
              src="/images/arcade_no_bg.png"
              alt="Screen Frame"
              className="absolute top-[16%] left-[8%] right-[8%] h-[48%] object-cover pointer-events-none z-20"
            />

            {/* Control Lights Section */}
            <div className="absolute bottom-32 left-0 right-0 z-30">
              {/* Joystick Lights */}
              <div className="flex justify-center gap-12 mb-3">
                {/* Red Lights */}
                <motion.div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: '#FF2B2B' }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: '#FF2B2B' }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, delay: 0.2, repeat: Infinity }}
                />
              </div>

              {/* Button Lights */}
              <div className="flex justify-center gap-2">
                {['#00F5D4', '#FFD700', '#9B5DE5', '#FF2B2B'].map((color, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: color }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Section - Register Button */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-3 px-4 font-retro text-sm tracking-widest uppercase font-bold rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: '#FF2B2B',
                  color: 'white',
                  boxShadow: isSubmitting ? 'none' : '0 0 30px rgba(255,43,43,0.6)',
                  border: '2px solid #FF2B2B',
                }}
                whileHover={!isSubmitting ? { 
                  scale: 1.05,
                  boxShadow: '0 0 50px rgba(255,43,43,0.8)'
                } : {}}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'PROCESSING' : 'REGISTER'}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default EventRegistration;

