import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { LogOut, BarChart3, Settings, Eye, EyeOff, Download, QrCode } from "lucide-react"
import Navbar from "@/components/Navbar"
import ParticleBackground from "@/components/ParticleBackground"
import GlitchText from "@/components/GlitchText"
import NeonButton from "@/components/NeonButton"
import { useToast } from "@/components/ui/use-toast"

interface UserProfile {
  fullName: string
  email: string
  phone: string
  college: string
  department: string
  year: string
  photo?: string
}

interface Event {
  id: string
  name: string
  date: string
  status: "registered" | "completed" | "upcoming"
  category: string
}

interface Payment {
  id: string
  eventName: string
  amount: number
  status: "completed" | "pending" | "failed"
  transactionId: string
  date: string
}

interface DigitalPass {
  id: string
  eventName: string
  passId: string
  qrCode: string
}

export default function Profile() {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState<"profile" | "events" | "payments" | "pass" | "settings">("profile")
  const [theme, setTheme] = useState("dark")
  const [notifications, setNotifications] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const [profile, setProfile] = useState<UserProfile>({
    fullName: localStorage.getItem("userName") || "User",
    email: localStorage.getItem("userEmail") || "user@example.com",
    phone: localStorage.getItem("userPhone") || "9876543210",
    college: localStorage.getItem("userCollege") || "College Name",
    department: localStorage.getItem("userDepartment") || "Department",
    year: localStorage.getItem("userYear") || "1st Year",
    photo: localStorage.getItem("userPhoto") || undefined,
  })

  // Mock data for events
  const [events] = useState<Event[]>([
    { id: "1", name: "Coding Marathon", date: "2024-01-15", status: "completed", category: "Technical" },
    { id: "2", name: "Design Showcase", date: "2024-02-20", status: "upcoming", category: "Design" },
    { id: "3", name: "Hackathon 2024", date: "2024-03-10", status: "registered", category: "Technical" },
  ])

  // Mock data for payments
  const [payments] = useState<Payment[]>([
    { id: "1", eventName: "Hackathon 2024", amount: 500, status: "completed", transactionId: "TXN001", date: "2024-01-10" },
    { id: "2", eventName: "Design Showcase", amount: 300, status: "pending", transactionId: "TXN002", date: "2024-02-15" },
  ])

  // Mock data for digital passes
  const [passes] = useState<DigitalPass[]>([
    { id: "1", eventName: "Hackathon 2024", passId: "PASS-2024-001", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PASS-2024-001" },
    { id: "2", eventName: "Coding Marathon", passId: "PASS-2024-002", qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PASS-2024-002" },
  ])

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("authToken")
    if (!token) {
      toast({
        title: "Not Authenticated",
        description: "Please login to view your profile",
        variant: "destructive",
      })
      navigate("/")
    }
  }, [navigate, toast])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userName")
    localStorage.removeItem("userEmail")
    localStorage.removeItem("userCollege")
    localStorage.removeItem("userDepartment")
    localStorage.removeItem("userYear")
    localStorage.removeItem("userPhone")
    localStorage.removeItem("userPhoto")

    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    })
    navigate("/")
  }

  const handleDownloadPass = (pass: DigitalPass) => {
    toast({
      title: "Download Started",
      description: `Downloading pass for ${pass.eventName}`,
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
      case "successful":
        return "text-green-400"
      case "upcoming":
      case "pending":
        return "text-yellow-400"
      case "registered":
        return "text-blue-400"
      default:
        return "text-red-400"
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case "completed":
      case "successful":
        return "bg-green-400/20 border-green-400/50"
      case "upcoming":
      case "pending":
        return "bg-yellow-400/20 border-yellow-400/50"
      case "registered":
        return "bg-blue-400/20 border-blue-400/50"
      default:
        return "bg-red-400/20 border-red-400/50"
    }
  }

  return (
    <div className="relative min-h-screen bg-deep-space overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight-navy to-deep-space" />
      </div>

      <ParticleBackground />
      <div className="fixed inset-0 z-20 pointer-events-none scanlines opacity-20" />
      <Navbar />

      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlitchText
              text="USER DASHBOARD"
              className="text-5xl md:text-6xl lg:text-7xl"
            />
            <div className="flex justify-center mt-4">
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-electric-purple to-transparent shadow-glow-purple" />
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            className="glass-panel border border-border/50 mb-8 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {[
                { id: "profile", label: "PROFILE" },
                { id: "events", label: "MY EVENTS" },
                { id: "payments", label: "PAYMENTS" },
                { id: "pass", label: "DIGITAL PASS" },
                { id: "settings", label: "SETTINGS" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-2 rounded text-xs font-retro tracking-wider transition-all ${
                    activeTab === tab.id
                      ? "bg-electric-purple text-white shadow-glow-purple"
                      : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Profile Card */}
              <div className="glass-panel border border-border/50 p-8">
                <h2 className="text-2xl font-heading neon-text-purple mb-6">👤 PROFILE INFORMATION</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {/* Profile Photo */}
                  <div className="flex flex-col items-center">
                    {profile.photo ? (
                      <img
                        src={profile.photo}
                        alt="Profile"
                        className="w-32 h-32 rounded-lg border-2 border-electric-purple mb-4 object-cover"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-lg border-2 border-electric-purple mb-4 bg-muted/50 flex items-center justify-center">
                        <span className="text-4xl">👤</span>
                      </div>
                    )}
                  </div>

                  {/* Profile Details */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground font-retro tracking-widest mb-1">FULL NAME</p>
                        <p className="text-white font-heading text-lg">{profile.fullName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-retro tracking-widest mb-1">EMAIL</p>
                        <p className="text-white break-all">{profile.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-retro tracking-widest mb-1">PHONE</p>
                        <p className="text-white">{profile.phone}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-retro tracking-widest mb-1">COLLEGE</p>
                        <p className="text-white">{profile.college}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-retro tracking-widest mb-1">DEPARTMENT</p>
                        <p className="text-white">{profile.department}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-retro tracking-widest mb-1">YEAR</p>
                        <p className="text-white">{profile.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* EVENTS TAB */}
          {activeTab === "events" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading neon-text-cyan">📅 MY EVENTS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="glass-panel border border-border/50 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading text-lg text-white">{event.name}</h3>
                      <span className={`px-3 py-1 rounded text-xs font-retro tracking-wider border ${getStatusBgColor(event.status)} ${getStatusColor(event.status)}`}>
                        {event.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <p>
                        <span className="font-retro">DATE:</span> {new Date(event.date).toLocaleDateString()}
                      </p>
                      <p>
                        <span className="font-retro">CATEGORY:</span> {event.category}
                      </p>
                    </div>
                    <button className="w-full px-4 py-2 bg-electric-purple/20 border border-electric-purple text-electric-purple rounded text-xs font-retro tracking-wider hover:bg-electric-purple/30 transition-all">
                      VIEW DETAILS
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PAYMENTS TAB */}
          {activeTab === "payments" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading neon-text-red">💳 PAYMENTS</h2>
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div key={payment.id} className="glass-panel border border-border/50 p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div>
                        <p className="text-xs text-muted-foreground font-retro tracking-widest mb-1">EVENT</p>
                        <p className="font-heading text-white">{payment.eventName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-retro tracking-widest mb-1">AMOUNT</p>
                        <p className="font-heading text-electric-purple">₹{payment.amount}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-retro tracking-widest mb-1">TRANSACTION ID</p>
                        <p className="text-white text-sm">{payment.transactionId}</p>
                      </div>
                      <div className="flex items-end">
                        <span className={`px-3 py-1 rounded text-xs font-retro tracking-wider border ${getStatusBgColor(payment.status)} ${getStatusColor(payment.status)}`}>
                          {payment.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* DIGITAL PASS TAB */}
          {activeTab === "pass" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading neon-text-cyan">🎟️ DIGITAL PASSES</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {passes.map((pass) => (
                  <div key={pass.id} className="glass-panel border border-border/50 p-6">
                    <h3 className="font-heading text-lg text-white mb-4">{pass.eventName}</h3>
                    <div className="flex flex-col items-center mb-4">
                      <img
                        src={pass.qrCode}
                        alt="QR Code"
                        className="w-40 h-40 border-2 border-cyber-blue/50 p-2"
                      />
                      <p className="text-xs text-muted-foreground font-retro tracking-widest mt-4">PASS ID</p>
                      <p className="font-mono text-white text-sm">{pass.passId}</p>
                    </div>
                    <button
                      onClick={() => handleDownloadPass(pass)}
                      className="w-full px-4 py-2 bg-cyber-blue/20 border border-cyber-blue text-cyber-blue rounded text-xs font-retro tracking-wider hover:bg-cyber-blue/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={16} />
                      DOWNLOAD PASS
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === "settings" && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-panel border border-border/50 p-8">
                <h2 className="text-2xl font-heading neon-text-purple mb-6">⚙️ SETTINGS</h2>

                <div className="space-y-6">
                  {/* Theme Toggle */}
                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/30">
                    <div>
                      <p className="font-heading text-white mb-1">THEME</p>
                      <p className="text-xs text-muted-foreground">Switch between dark and light theme</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setTheme("dark")}
                        className={`px-3 py-1 rounded text-xs font-retro tracking-wider transition-all ${
                          theme === "dark"
                            ? "bg-electric-purple text-white"
                            : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                        }`}
                      >
                        DARK
                      </button>
                      <button
                        onClick={() => setTheme("light")}
                        className={`px-3 py-1 rounded text-xs font-retro tracking-wider transition-all ${
                          theme === "light"
                            ? "bg-electric-purple text-white"
                            : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                        }`}
                      >
                        LIGHT
                      </button>
                    </div>
                  </div>

                  {/* Notifications Toggle */}
                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/30">
                    <div>
                      <p className="font-heading text-white mb-1">NOTIFICATIONS</p>
                      <p className="text-xs text-muted-foreground">Receive updates about events and payments</p>
                    </div>
                    <button
                      onClick={() => setNotifications(!notifications)}
                      className={`px-4 py-2 rounded text-xs font-retro tracking-wider transition-all ${
                        notifications
                          ? "bg-neon-red/20 border border-neon-red text-neon-red"
                          : "bg-muted/30 border border-border/30 text-muted-foreground"
                      }`}
                    >
                      {notifications ? "ENABLED" : "DISABLED"}
                    </button>
                  </div>

                  {/* Change Password */}
                  <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                    <p className="font-heading text-white mb-4">CHANGE PASSWORD</p>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-muted-foreground font-retro tracking-widest mb-2">
                          CURRENT PASSWORD
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="w-full px-4 py-2 bg-deep-space border border-border/30 rounded text-white text-sm focus:border-electric-purple focus:outline-none"
                            placeholder="••••••••"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs text-muted-foreground font-retro tracking-widest mb-2">
                          NEW PASSWORD
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 bg-deep-space border border-border/30 rounded text-white text-sm focus:border-electric-purple focus:outline-none"
                          placeholder="••••••••"
                        />
                      </div>
                      <button className="w-full px-4 py-2 bg-electric-purple/20 border border-electric-purple text-electric-purple rounded text-xs font-retro tracking-wider hover:bg-electric-purple/30 transition-all">
                        UPDATE PASSWORD
                      </button>
                    </div>
                  </div>

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 bg-neon-red/20 border border-neon-red text-neon-red rounded font-heading tracking-wider hover:bg-neon-red/30 transition-all flex items-center justify-center gap-2"
                  >
                    <LogOut size={20} />
                    LOGOUT
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}
