"use client"

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff, Upload, CheckCircle } from "lucide-react"
import Navbar from "@/components/Navbar"
import ParticleBackground from "@/components/ParticleBackground"
import authService, { SignupData, SigninData, AuthResponse } from "@/services/authService"
import { useToast } from "@/components/ui/use-toast"

export default function SignupPage() {
  const [isSignIn, setIsSignIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null)
  const [profilePhotoPreview, setProfilePhotoPreview] = useState<string>("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    collegeName: "",
    department: "",
    yearOfStudy: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const navigate = useNavigate()
  const { toast } = useToast()

  // Calculate clearance level dynamically based on form completion
  const calculateClearanceLevel = () => {
    if (isSignIn) {
      let filled = 0
      if (formData.email.trim()) filled++
      if (formData.password.trim()) filled++
      return (filled / 2) * 100
    } else {
      let filled = 0
      if (formData.fullName.trim()) filled++
      if (formData.email.trim()) filled++
      if (formData.mobileNumber.trim()) filled++
      if (formData.collegeName.trim()) filled++
      if (formData.department.trim()) filled++
      if (formData.yearOfStudy) filled++
      if (formData.password.trim()) filled++
      if (formData.confirmPassword.trim()) filled++
      if (agreedToTerms) filled++
      return (filled / 9) * 100
    }
  }

  const clearanceLevel = calculateClearanceLevel()

  // Email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Profile photo must be less than 5MB",
          variant: "destructive",
        })
        return
      }

      setProfilePhoto(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfilePhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!isSignIn) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required"
      }

      if (!formData.mobileNumber.trim()) {
        newErrors.mobileNumber = "Mobile number is required"
      } else if (!/^\d{10}$/.test(formData.mobileNumber.replace(/\D/g, ""))) {
        newErrors.mobileNumber = "Please enter a valid 10-digit mobile number"
      }

      if (!formData.collegeName.trim()) {
        newErrors.collegeName = "College name is required"
      }

      if (!formData.department.trim()) {
        newErrors.department = "Department is required"
      }

      if (!formData.yearOfStudy) {
        newErrors.yearOfStudy = "Year of study is required"
      }

      if (!formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Please confirm your password"
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      }

      if (!agreedToTerms) {
        newErrors.terms = "You must accept the terms and conditions"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors above",
        variant: "destructive"
      })
      return
    }

    setIsLoading(true)

    try {
      // Store user data in localStorage
      localStorage.setItem('authToken', 'demo-token-' + Date.now())
      localStorage.setItem('userName', formData.fullName)
      localStorage.setItem('userEmail', formData.email)
      localStorage.setItem('userCollege', formData.collegeName)
      localStorage.setItem('userDepartment', formData.department)
      localStorage.setItem('userYear', formData.yearOfStudy)
      localStorage.setItem('userPhone', formData.mobileNumber)

      if (profilePhotoPreview) {
        localStorage.setItem('userPhoto', profilePhotoPreview)
      }

      toast({
        title: isSignIn ? "Logged In" : "Account Created",
        description: `Welcome ${formData.fullName}!`,
      })

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
        collegeName: "",
        department: "",
        yearOfStudy: "",
      })
      setProfilePhoto(null)
      setProfilePhotoPreview("")
      setAgreedToTerms(false)

      // Redirect to home or dashboard
      setTimeout(() => {
        navigate("/")
      }, 1500)

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred"
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In integration
    toast({
      title: "Coming Soon",
      description: "Google Sign-In will be available soon",
    })
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-deep-space">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{
            filter: "brightness(0.6) contrast(1.2) saturate(1.3)",
            mixBlendMode: "normal",
          }}
        >
          <source
            src="/bg.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(5,8,20,0.7) 0%, rgba(5,8,20,0.5) 50%, rgba(0,0,0,0.85) 100%)"
          }}
        />
      </div>

      {/* Ember Particles */}
      <ParticleBackground />

      {/* VHS Scanlines */}
      <div className="absolute inset-0 vhs-scanlines pointer-events-none z-20" />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen pt-20 px-4">
        {/* Clearance Level Header */}
        <div className="w-full max-w-lg mb-6">
          <p 
            className="text-center text-foreground/60 text-sm tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            CLEARANCE LEVEL
          </p>
          
          {/* Progress Bar */}
          <div className="relative h-6 bg-deep-space border border-neon-red/30 rounded overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-red to-crimson-glow transition-all duration-500"
              style={{ width: `${clearanceLevel}%` }}
            />
            {/* Stripes overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.2) 8px, rgba(0,0,0,0.2) 16px)"
              }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">{Math.round(clearanceLevel)}%</span>
          </div>
        </div>

        {/* File Folder Container */}
        <div className="relative w-full max-w-lg">
          {/* Folder Tabs */}
          <div className="absolute -top-3 left-8 right-8 flex">
            <div 
              className="h-6 w-32 rounded-t-lg"
              style={{ 
                background: "linear-gradient(180deg, #E8DCC4 0%, #D4C4A8 100%)",
              }}
            />
            <div 
              className="h-6 w-24 rounded-t-lg ml-auto"
              style={{ 
                background: "linear-gradient(180deg, #D4C4A8 0%, #C4B498 100%)",
              }}
            />
          </div>

          {/* Main Folder Body */}
          <div 
            className="relative rounded-lg p-6 md:p-8"
            style={{
              background: "linear-gradient(180deg, #E8DCC4 0%, #D4C4A8 50%, #C4B498 100%)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
            }}
          >
            {/* Hawkins Stamps */}
            <div className="flex justify-between items-start mb-4">
              <div 
                className="px-3 py-1 border-2 border-crimson-glow text-crimson-glow text-xs tracking-wider rotate-[-3deg]"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                <span className="block text-lg">HAWKINS</span>
                <span className="text-[8px]">THEORETICAL LABORATORY</span>
              </div>
              <div 
                className="px-3 py-1 border-2 border-crimson-glow text-crimson-glow text-xs tracking-wider rotate-[2deg]"
                style={{ fontFamily: 'var(--font-bebas)' }}
              >
                <span className="block text-lg">HAWKINS</span>
                <span className="text-[8px]">THEORETICAL LABORATORY</span>
              </div>
            </div>

            {/* CONFIDENTIAL Side Label */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 transform rotate-90 origin-right"
              style={{ 
                fontFamily: 'var(--font-bebas)',
                color: '#8B7355',
                letterSpacing: '0.3em',
                fontSize: '20px'
              }}
            >
             CONFIDENTIAL 
            </div>

            {/* Form Title */}
            <div className="text-center mb-6">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setIsSignIn(false)
                    setErrors({})
                    setFormData({
                      fullName: "",
                      email: "",
                      mobileNumber: "",
                      password: "",
                      confirmPassword: "",
                      collegeName: "",
                      department: "",
                      yearOfStudy: "",
                    })
                    setProfilePhoto(null)
                    setProfilePhotoPreview("")
                    setAgreedToTerms(false)
                  }}
                  className={`text-3xl md:text-4xl tracking-[0.1em] transition-all ${
                    !isSignIn ? 'text-crimson-glow' : 'text-[#8B7355]/50'
                  }`}
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  SIGNUP
                </button>
                <span 
                  className="text-3xl md:text-4xl text-[#8B7355]"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  /
                </span>
                <button
                  onClick={() => {
                    setIsSignIn(true)
                    setErrors({})
                    setFormData({
                      fullName: "",
                      email: "",
                      mobileNumber: "",
                      password: "",
                      confirmPassword: "",
                      collegeName: "",
                      department: "",
                      yearOfStudy: "",
                    })
                  }}
                  className={`text-3xl md:text-4xl tracking-[0.1em] transition-all ${
                    isSignIn ? 'text-crimson-glow' : 'text-[#8B7355]/50'
                  }`}
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  SIGNIN
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {!isSignIn && (
                <>
                  {/* Full Name Field */}
                  <div>
                    <label 
                      className="block text-[#5C4A32] text-sm tracking-wider mb-1 uppercase"
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`w-full px-4 py-2 bg-white/80 border-2 rounded text-[#3a3a3a] focus:outline-none transition-colors ${
                        errors.fullName 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-[#8B7355]/30 focus:border-crimson-glow'
                      }`}
                      placeholder="Your full name"
                      disabled={isLoading}
                    />
                    {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Mobile Number Field */}
                  <div>
                    <label 
                      className="block text-[#5C4A32] text-sm tracking-wider mb-1 uppercase"
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      MOBILE NUMBER
                    </label>
                    <input
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                      className={`w-full px-4 py-2 bg-white/80 border-2 rounded text-[#3a3a3a] focus:outline-none transition-colors ${
                        errors.mobileNumber 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-[#8B7355]/30 focus:border-crimson-glow'
                      }`}
                      placeholder="9876543210"
                      disabled={isLoading}
                    />
                    {errors.mobileNumber && <p className="text-red-600 text-xs mt-1">{errors.mobileNumber}</p>}
                  </div>

                  {/* College Name Field */}
                  <div>
                    <label 
                      className="block text-[#5C4A32] text-sm tracking-wider mb-1 uppercase"
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      COLLEGE NAME
                    </label>
                    <input
                      type="text"
                      value={formData.collegeName}
                      onChange={(e) => handleInputChange('collegeName', e.target.value)}
                      className={`w-full px-4 py-2 bg-white/80 border-2 rounded text-[#3a3a3a] focus:outline-none transition-colors ${
                        errors.collegeName 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-[#8B7355]/30 focus:border-crimson-glow'
                      }`}
                      placeholder="Your college name"
                      disabled={isLoading}
                    />
                    {errors.collegeName && <p className="text-red-600 text-xs mt-1">{errors.collegeName}</p>}
                  </div>

                  {/* Department Field */}
                  <div>
                    <label 
                      className="block text-[#5C4A32] text-sm tracking-wider mb-1 uppercase"
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      DEPARTMENT / BRANCH
                    </label>
                    <input
                      type="text"
                      value={formData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      className={`w-full px-4 py-2 bg-white/80 border-2 rounded text-[#3a3a3a] focus:outline-none transition-colors ${
                        errors.department 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-[#8B7355]/30 focus:border-crimson-glow'
                      }`}
                      placeholder="Computer Science"
                      disabled={isLoading}
                    />
                    {errors.department && <p className="text-red-600 text-xs mt-1">{errors.department}</p>}
                  </div>

                  {/* Year of Study Field */}
                  <div>
                    <label 
                      className="block text-[#5C4A32] text-sm tracking-wider mb-1 uppercase"
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      YEAR OF STUDY
                    </label>
                    <select
                      value={formData.yearOfStudy}
                      onChange={(e) => handleInputChange('yearOfStudy', e.target.value)}
                      className={`w-full px-4 py-2 bg-white/80 border-2 rounded text-[#3a3a3a] focus:outline-none transition-colors ${
                        errors.yearOfStudy 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-[#8B7355]/30 focus:border-crimson-glow'
                      }`}
                      disabled={isLoading}
                    >
                      <option value="">Select Year</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                    </select>
                    {errors.yearOfStudy && <p className="text-red-600 text-xs mt-1">{errors.yearOfStudy}</p>}
                  </div>

                  {/* Profile Photo Upload */}
                  <div>
                    <label 
                      className="block text-[#5C4A32] text-sm tracking-wider mb-1 uppercase"
                      style={{ fontFamily: 'var(--font-bebas)' }}
                    >
                      PROFILE PHOTO (Optional)
                    </label>
                    {profilePhotoPreview ? (
                      <div className="relative w-full h-24 rounded border-2 border-[#8B7355]/30 overflow-hidden">
                        <img 
                          src={profilePhotoPreview} 
                          alt="Preview" 
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setProfilePhoto(null)
                            setProfilePhotoPreview("")
                          }}
                          className="absolute top-1 right-1 px-2 py-1 bg-crimson-glow text-white text-xs rounded"
                        >
                          REMOVE
                        </button>
                      </div>
                    ) : (
                      <label className="block w-full p-3 border-2 border-dashed border-[#8B7355]/30 rounded cursor-pointer hover:border-crimson-glow transition-colors text-center">
                        <Upload size={18} className="mx-auto mb-1 text-[#8B7355]" />
                        <span className="text-xs text-[#5C4A32]">Click to upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="hidden"
                          disabled={isLoading}
                        />
                      </label>
                    )}
                  </div>

                  {/* Terms and Conditions */}
                  <div>
                    <label className="flex items-start gap-2 p-2 cursor-pointer hover:bg-white/30 rounded transition-colors">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="mt-1"
                        disabled={isLoading}
                      />
                      <span className="text-xs text-[#5C4A32]">
                        I agree to the Terms and Conditions
                      </span>
                    </label>
                    {errors.terms && <p className="text-red-600 text-xs mt-1">{errors.terms}</p>}
                  </div>
                </>
              )}

              {/* Email Field */}
              <div>
                <label 
                  className="block text-[#5C4A32] text-sm tracking-wider mb-1 uppercase"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-2 bg-white/80 border-2 rounded text-[#3a3a3a] focus:outline-none transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-[#8B7355]/30 focus:border-crimson-glow'
                  }`}
                  placeholder="your@email.com"
                  disabled={isLoading}
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label 
                  className="block text-[#5C4A32] text-sm tracking-wider mb-1 uppercase"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`w-full px-4 py-2 bg-white/80 border-2 rounded text-[#3a3a3a] focus:outline-none transition-colors ${
                      errors.password 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-[#8B7355]/30 focus:border-crimson-glow'
                    }`}
                    placeholder="Enter password"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-[#8B7355]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password}</p>}
              </div>

              {!isSignIn && (
                /* Confirm Password Field */
                <div>
                  <label 
                    className="block text-[#5C4A32] text-sm tracking-wider mb-1 uppercase"
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className={`w-full px-4 py-2 bg-white/80 border-2 rounded text-[#3a3a3a] focus:outline-none transition-colors ${
                        errors.confirmPassword 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-[#8B7355]/30 focus:border-crimson-glow'
                      }`}
                      placeholder="Confirm password"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-2.5 text-[#8B7355]"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-red-600 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>
              )}

              {isSignIn && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded accent-crimson-glow"
                      disabled={isLoading}
                    />
                    <span className="text-xs text-[#5C4A32]">REMEMBER ME</span>
                  </label>
                  <button
                    type="button"
                    className="text-xs text-crimson-glow hover:text-crimson-glow/80 transition-colors"
                    disabled={isLoading}
                  >
                    FORGOT PASSWORD?
                  </button>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex-1 py-3 text-white tracking-[0.15em] uppercase rounded transition-all ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-neon-red hover:bg-crimson-glow'
                  }`}
                  style={{ 
                    fontFamily: 'var(--font-bebas)',
                    boxShadow: isLoading ? 'none' : "0 4px 15px rgba(255, 43, 43, 0.4)"
                  }}
                >
                  {isLoading ? "PROCESSING..." : (isSignIn ? "SIGN IN" : "REGISTER")}
                </button>
                
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-[#8B7355]/30 rounded text-[#5C4A32] text-sm tracking-wider transition-all hover:border-[#8B7355] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'var(--font-bebas)' }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="hidden sm:inline">SIGN IN WITH GOOGLE</span>
                  <span className="sm:hidden">GOOGLE</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
