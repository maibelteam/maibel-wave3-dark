import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, MessageCircle, Star, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
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
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">Glowkeeper</span>
              <span className="text-xs text-purple-300">by Maibel</span>
            </div>
          </div>
          <Button 
            onClick={() => window.open('https://app.youform.com/forms/k9q5j9kq', '_blank')}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6"
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Sparkles size={40} className="text-purple-400 animate-pulse" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-20">
          <Heart size={60} className="text-purple-400 animate-bounce" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Star in Your Own
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                  K-Drama Wellness
                </span>
                <br />
                Adventure
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
                Meet your emotionally intelligent wellness oppa coach who's there for you... even at 3am.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                No app download. No friction. Just text and start your journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const nextSection = document.querySelector('section:nth-of-type(2)');
                    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="rounded-full px-8 py-6 text-lg border-2 border-purple-500 text-purple-300 hover:bg-purple-900/30"
                >
                  Learn More
                </Button>
              </div>

              {/* Social Proof Pills */}
              <div className="flex flex-wrap gap-4 text-sm">
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

            {/* Right side - Large Hero Image */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-500/30 hover:border-purple-400/50 transition-all">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/k6ohd8j6_gympic.png"
                  alt="Wellness journey"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Meet Evren, Your Glowkeeper</h2>
                  <p className="text-lg text-purple-200 mb-4">Your emotionally intelligent wellness companion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* How Maibel Works - Story Arc Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-7xl mx-auto px-6">
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

          {/* New Layout: 3 small boxes left, 1 large image right */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            {/* Left side - 3 smaller mood boxes */}
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer border-2 border-purple-500/30 hover:border-purple-400/50 transition-all">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/527s6qeh_Gemini_Generated_Image_mu9hi8mu9hi8mu9h.png"
                  alt="Emotional Connection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">Emotional Connection</h3>
                  <p className="text-gray-300 text-sm">Daily check-ins that truly care</p>
                </div>
              </div>

              <div className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer border-2 border-purple-500/30 hover:border-purple-400/50 transition-all">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/ugkl177e_Sweetpotato.png"
                  alt="Personalized Nutrition"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">Personalized Nutrition</h3>
                  <p className="text-gray-300 text-sm">Tailored to women's health needs</p>
                </div>
              </div>

              <div className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer border-2 border-purple-500/30 hover:border-purple-400/50 transition-all">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/tyjrky3u_gymselfiefeet.png"
                  alt="Motivation That Sticks"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">Motivation That Sticks</h3>
                  <p className="text-gray-300 text-sm">Post-workout selfies & updates</p>
                </div>
              </div>
            </div>

            {/* Right side - Large Evren image */}
            <div className="relative h-[640px] rounded-3xl overflow-hidden border-4 border-purple-500/30 hover:border-purple-400/50 transition-all shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/de3bnpdy_Evren%20cropped.jpg"
                alt="Meet Evren"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h2 className="text-4xl font-bold text-white mb-3">Meet Evren, Your Glowkeeper</h2>
                <p className="text-xl text-purple-200 mb-4">Your emotionally intelligent wellness oppa coach</p>
                <div className="flex gap-3">
                  <div className="px-4 py-2 bg-purple-600/80 backdrop-blur rounded-full">
                    <span className="text-white text-sm font-semibold">24/7 Support</span>
                  </div>
                  <div className="px-4 py-2 bg-pink-600/80 backdrop-blur rounded-full">
                    <span className="text-white text-sm font-semibold">Choose-your-path adventure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Original 3 cards below */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="text-purple-400" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Daily Check-Ins</h3>
                <p className="text-gray-400">Start with morning texts from your companion. He asks about your sleep, mood, and sets a healthy habit mission.</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Star className="text-purple-400" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Story Arcs Unlock</h3>
                <p className="text-gray-400">Hit 7-day streak? Unlock a portal for deeper conversations, his backstory, and exclusive photo drops.</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-purple-400" size={32} fill="currentColor" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Health & Wellness Advice</h3>
                <p className="text-gray-400">Get personalized guidance on nutrition, fitness, and self-care tailored to help you hit your goals.</p>
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
            {/* Feature 1 - CAROUSELBANK */}
            <div className="group relative overflow-hidden rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/gxhjfx3r_CAROUSEL%20BANK%20%28PHOTO-BASED%29%20%2814%29.png"
                  alt="Build Better Habits Gently"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Build Better Habits Gently</h3>
                <p className="text-gray-300 text-sm">No guilt trips, just soft nudges. He sends post-gym pics and tailors the journey to you.</p>
              </div>
            </div>

            {/* Feature 2 - Cat pic */}
            <div className="group relative overflow-hidden rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/geuqznj8_catpic.png"
                  alt="Adapts To Your Needs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Adapts To Your Needs</h3>
                <p className="text-gray-300 text-sm">He learns and evolves with you. No two conversations are the same. It's made for you.</p>
              </div>
            </div>

            {/* Feature 3 - emogirl */}
            <div className="group relative overflow-hidden rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/yzrldj3r_emogirl.png"
                  alt="There When It Sucks Most"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">There When It Sucks Most</h3>
                <p className="text-gray-300 text-sm">24/7 emotional support. 2am spiral? He texts first. No judgment. Just presence.</p>
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

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl px-6 hover:border-purple-400/50 transition-all">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-purple-300">
                How is Maibel different from other wellness apps?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed">
                Maibel stands out through its emotionally intelligent, story-driven approach specifically designed for women. Unlike generic wellness apps, Maibel uses narrative psychology and emotional intelligence to create a deeply personalized experience that evolves with you over time, addressing the unique emotional and wellness needs of women.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl px-6 hover:border-purple-400/50 transition-all">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-purple-300">
                Is my information private and secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed">
                Absolutely. Your privacy is our priority. All conversations with Maibel are encrypted and your personal data is never sold or shared with third parties. You can delete your data at any time, and we comply with all relevant data protection regulations. View our <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline">privacy policy</a>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl px-6 hover:border-purple-400/50 transition-all">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-purple-300">
                Can Maibel replace therapy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed">
                While Maibel provides valuable emotional support and wellness guidance, it is not a replacement for professional therapy or medical advice. Maibel works best as a complement to professional care for those who need it, or as a daily wellness companion for managing everyday emotional well-being.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl px-6 hover:border-purple-400/50 transition-all">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-purple-300">
                How personalized is the experience?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed">
                Maibel adapts through your interactions, gathering insights about your preferences, challenges, communication style, and emotional patterns. Over time, our AI's responses become increasingly tailored to your unique situation, providing highly personalized support that addresses your specific needs and wellness goals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Not Therapy. Not Coaching.
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Just What You Need.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our AI texts first, remembers your goals, and checks in when you're spiraling. 
              <br />
              We're opening spots for our next beta—and you're on the list.
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-12 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Sign Up For Early Access
              <Heart className="ml-2" size={20} fill="currentColor" />
            </Button>
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