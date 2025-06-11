import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore"
import { Eye, EyeClosed, Loader2, LockKeyhole, Mail, MessageCircleMore, UserRound  } from "lucide-react"
import { Link } from "react-router-dom"
import AuthImagePattern from "../components/AuthImagePattern"
import toast from "react-hot-toast"

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    })

    const { signup, isSigningUp } = useAuthStore()
    const validateForm = () => {
        if (!formData.fullName.trim()) return toast.error("Please, Enter your full name.")
        if (!formData.email.trim()) return toast.error("Please, Enter your email.")
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format")
        if (formData.password.length < 6) return toast.error("Password must be at least 6 characters")

        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const success = validateForm()
        if (success === true) signup(formData)
    }

  return (
    <div className="min-h-screen grid lg: grid-cols-2">
        {/* left side */}
        <div className="flex flex-col justify-center items-center p-6 sm:p-12">
            <div className="w-full max-w-md space-y-8">
                {/* LOGO */}
                <div className="text-center mb-8">
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <MessageCircleMore className="size-6 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold mt-2">Create Account</h1>
                        <p className="text-base-content/60">Get Started with your free account</p>
                    </div>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium mb-2">Full Name</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <UserRound  className="size-5 text-base-content/40 z-10" />
                            </div>
                            <input 
                                type="text"
                                className={`input input-bordered w-full pl-10 `} 
                                placeholder="John Doe"
                                value={formData.fullName}
                                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium mb-2">Email</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="size-5 text-base-content/40 z-10" />
                            </div>
                            <input 
                                type="email"
                                className={`input input-bordered w-full pl-12`} 
                                placeholder="your@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium mb-2">Password</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <LockKeyhole className="size-5 text-base-content/40 z-10" />
                            </div>
                            <input 
                                type={showPassword ? "text" : "password"}
                                className={`input input-bordered w-full pl-12`} 
                                placeholder="Enter Your Password"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                            <button 
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <Eye className="size-5 text-base-content/40" />
                                ) : (
                                    <EyeClosed className="size-5 text-base-content/40" />
                                )}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
                        {isSigningUp ? (
                            <>
                                <Loader2 className="size-5 animate-spin" />
                                Loading...
                            </>
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-base-content/60">
                        Already have an account?{" "}
                        <Link to="/login" className="link link-primary">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>

        {/* right side */}
        <AuthImagePattern
            title="Join our community"
            subtitle="Friendship isn’t about who you’ve known the longest—it’s about who walks into your life and never leaves."
        />
    </div>
  )
}

export default SignUpPage