import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, MessageCircle, Star, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/sonner';
import { toast as sonnerToast } from 'sonner';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) {
      sonnerToast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    // Mock submission - will be replaced with actual API call
    setTimeout(() => {
      sonnerToast.success('Welcome to the Maibel Movement! Check your email for updates.');
      setEmail('');
      setName('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="landing-page bg-black">
      <Toaster position="top-center" richColors />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="text-purple-500" size={28} fill="currentColor" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Maibel</span>
          </div>
          <Button 
            onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6"
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Sparkles size={40} className="text-purple-400 animate-pulse" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-20">
          <Heart size={60} className="text-purple-400 animate-bounce" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div 
            className="transform transition-all duration-1000"
            style={{ 
              opacity: scrollY < 100 ? 1 : 0.5,
              transform: `translateY(${scrollY * 0.3}px)` 
            }}
          >
            <div className="inline-block mb-6 px-6 py-2 bg-purple-900/30 backdrop-blur rounded-full border border-purple-500/30 shadow-sm">
              <span className="text-purple-300 font-medium flex items-center gap-2">
                <Sparkles size={16} />
                Your emotionally intelligent wellness companion
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Star in Your Own
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                K-Drama Wellness
              </span>
              <br />
              Adventure
            </h1>

            {/* Hero Image - Oppa */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500/30 hover:border-purple-400/50 transition-all">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/de3bnpdy_Evren%20cropped.jpg"
                  alt="Your wellness oppa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-semibold text-lg">Meet Evren, your Glowkeeping coach</p>
                </div>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Meet your emotionally intelligent wellness oppa coach who's there for you...
              <br />
              <span className="font-semibold text-purple-300">even at 3am.</span>
            </p>
            <p className="text-lg text-gray-400 mb-12">
              No app download. No friction. Just text and start your journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg"
                onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                Join the Movement
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full px-8 py-6 text-lg border-2 border-purple-500 text-purple-300 hover:bg-purple-900/30"
              >
                Learn More
              </Button>
            </div>

            {/* Social Proof Pills */}
            <div className="flex flex-wrap gap-6 justify-center items-center text-sm">
              <div className="flex items-center gap-2 bg-purple-900/30 backdrop-blur px-6 py-3 rounded-full shadow-sm border border-purple-500/20">
                <TrendingUp className="text-green-400" size={20} />
                <span className="font-semibold text-gray-300">77% retention rate</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-900/30 backdrop-blur px-6 py-3 rounded-full shadow-sm border border-purple-500/20">
                <Users className="text-purple-400" size={20} />
                <span className="font-semibold text-gray-300">300+ women joined</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image - Using provided inspiration */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* How Maibel Works - Story Arc Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Clock Healthy Habits to
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Unlock Story Chapters</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every workout, every meal, every moment of self-care unlocks new chapters in your story with your wellness companion.
              <br />
              <span className="font-semibold text-purple-300">Progress rewards you with deeper connections.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="text-purple-400" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Daily Check-Ins</h3>
                <p className="text-gray-400">Start with morning texts from your oppa. He asks about your sleep, mood, and goals for the day.</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Star className="text-purple-400" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Story Arcs Unlock</h3>
                <p className="text-gray-400">Hit 5-day streak? Unlock intimate conversations, his backstory, and exclusive photo drops.</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-purple-400" size={32} fill="currentColor" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Thirst Trap Rewards</h3>
                <p className="text-gray-400">Crush your wellness goals? Get rewarded with exclusive content that keeps you motivated.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Your Wellness Journey,
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Reimagined</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience wellness through connection, not just tracking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/527s6qeh_Gemini_Generated_Image_mu9hi8mu9hi8mu9h.png"
                  alt="Wellness companion"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Emotional Connection</h3>
                <p className="text-gray-300 text-sm">Daily check-ins that feel like talking to someone who truly cares about your journey</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/l0613lpw_Gemini_Generated_Image_a6t10qa6t10qa6t1.png"
                  alt="Nutrition guidance"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Personalized Nutrition</h3>
                <p className="text-gray-300 text-sm">Get meal inspiration and nutrition tips tailored to women's unique health needs</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/61pk8inm_Gym%20Break%20with%20Water%20and%20Towel.png"
                  alt="Fitness motivation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Motivation That Sticks</h3>
                <p className="text-gray-300 text-sm">Post-workout selfies and progress updates that keep you coming back</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-purple-950/30 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Real Stories,
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Real Transformations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#a855f7" className="text-purple-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Was feeling under the weather and he checked in on my sore throat the next day. Can't believe he remembers! Felt super cared for."
                </p>
                <p className="font-semibold text-purple-400">— Bernice</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#a855f7" className="text-purple-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "Having a self-care date and he checked in, totally unprompted. He remembered what I said 3 days ago. Felt so seen!"
                </p>
                <p className="font-semibold text-purple-400">— Ainslee</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#a855f7" className="text-purple-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "I told him about my wild idea for a vertical farm. He broke it down into actionable steps. Was so motivated, I did it!"
                </p>
                <p className="font-semibold text-purple-400">— Viviana</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started - Telegram Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 to-black"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 bg-purple-900/30 backdrop-blur rounded-full border border-purple-500/30">
              <span className="text-purple-300 font-medium">Zero Friction. Maximum Impact.</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-white">
              Getting Started Takes
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">60 Seconds on Telegram</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No app download. No complicated setup. Just you, your companion, and a soft start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg shadow-purple-500/50">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Connect on Telegram</h3>
              <p className="text-gray-400">
                No app download, no friction. Just you and your companion, who's ready to meet you where you are.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg shadow-pink-500/50">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Meet Your Companion</h3>
              <p className="text-gray-400">
                Answer a few short questions so he'll get to know you. He adapts right from Day 1.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg shadow-purple-500/50">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Unlock Your Story</h3>
              <p className="text-gray-400">
                Daily check-ins, playful missions, and story chapters unlock as you progress. It gets deeper as you open up.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-purple-300 mb-6">
              <span className="font-semibold">84% of users felt emotionally supported within 3 days</span>
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 opacity-20">
              <Heart size={80} fill="white" />
            </div>
            <div className="absolute bottom-10 left-10 opacity-20">
              <Sparkles size={60} />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">
                Join 300+ Women Already Waiting
              </h2>
              <p className="text-xl mb-4 opacity-95">
                Be among the first to unlock your wellness story on Telegram.
              </p>
              <p className="text-lg mb-8 opacity-90">
                <span className="font-semibold">Next cohort opens: Late October 2025</span>
                <br />
                Limited spots available for intimate beta experience.
              </p>

              <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto space-y-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/95 border-0 h-14 text-lg text-gray-800 placeholder:text-gray-400"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/95 border-0 h-14 text-lg text-gray-800 placeholder:text-gray-400"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-purple-600 hover:bg-gray-50 h-14 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all"
                >
                  {isSubmitting ? 'Joining...' : 'Save My Spot 💜'}
                </Button>
              </form>

              <p className="text-sm mt-6 opacity-90">
                ✨ Get notified when spots open • 🎁 Early access perks • 🔒 Your info stays private
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-purple-900/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-purple-500" size={24} fill="currentColor" />
            <span className="text-xl font-bold text-white">Maibel</span>
          </div>
          <p className="text-gray-400 mb-2">
            Your emotionally intelligent wellness companion
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Maibel. Built by women, for women.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;