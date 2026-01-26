import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/components/ArcadeEventCard.css';

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
          <div className="event-arcade-cabinet" style={{ '--neon-color': '#FF2B2B', height: '700px' } as any}>
            <div className="side-panel-l"></div>
            <div className="side-panel-r"></div>

            {/* Marquee */}
            <div className="cabinet-marquee">
              <div className="marquee-text">REGISTRATION</div>
            </div>

            {/* Display Screen Area - Form Content */}
            <div className="cabinet-screen-mount" style={{ flex: '1', margin: '10px 15px' }}>
              <div className="cabinet-screen">
                <div className="screen-overlay"></div>
                <div className="crt-effect"></div>
                <div className="relative z-10 w-full h-full p-6 overflow-y-auto custom-scrollbar">
                  <h2 className="font-retro text-sm text-center mb-4" style={{ color: '#FF2B2B', textShadow: '0 0 10px #FF2B2B' }}>
                    {eventTitle}
                  </h2>

                  <div className="space-y-4">
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
                        <div className="text-red-400 text-[10px] font-retro mt-0.5">{errors.fullName}</div>
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
                        <div className="text-red-400 text-[10px] font-retro mt-0.5">{errors.email}</div>
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
                        <div className="text-red-400 text-[10px] font-retro mt-0.5">{errors.phone}</div>
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
                        <div className="text-red-400 text-[10px] font-retro mt-0.5">{errors.college}</div>
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
                        <div className="text-red-400 text-[10px] font-retro mt-0.5">{errors.department}</div>
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
                        <div className="text-red-400 text-[10px] font-retro mt-0.5">{errors.year}</div>
                      )}
                    </div>

                    {/* Rules Checkbox */}
                    <label className="flex items-center gap-2 text-cyan-300 text-[10px] font-retro cursor-pointer pt-1">
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
                      <div className="text-red-400 text-[10px] font-retro">{errors.acceptRules}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Control Deck Section */}
            <div className="cabinet-controls" style={{ height: '100px' }}>
              <div className="joystick">
                <div className="joystick-knob"></div>
              </div>
              <div className="control-buttons">
                <div className="button red"></div>
                <div className="button green"></div>
                <div className="button blue"></div>
              </div>
            </div>

            {/* Cabinet Base / Kickplate */}
            <div className="cabinet-base">
              <div className="coin-door">
                <div className="coin-slot-row">
                  <div className="coin-door-light amber"></div>
                  <div className="coin-door-light cyan"></div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="master-register-btn"
                style={{
                  position: 'relative',
                  bottom: 'auto',
                  left: 'auto',
                  transform: 'none',
                  marginTop: '10px',
                  padding: '10px 30px',
                  fontSize: '0.9rem'
                }}
              >
                {isSubmitting ? 'PROCESSING' : 'REGISTER'}
              </button>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default EventRegistration;
