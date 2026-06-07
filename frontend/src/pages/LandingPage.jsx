import React from 'react';
import { Heart, Sparkles, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Toaster } from '../components/ui/sonner';

// TODO: swap YOUFORM_URL → Telegram bot URL when bot is live
const YOUFORM_URL = 'https://app.youform.com/forms/k9q5j9kq';

const LandingPage = () => {
  const handleCTA = () => window.open(YOUFORM_URL, '_blank');

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
            onClick={handleCTA}
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 shadow-lg shadow-purple-500/50 border-2 border-purple-400/50 hover:border-purple-300 transition-all"
          >
            Meet Evren
          </Button>
        </div>
      </nav>

      {/* ── SECTION 1: Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black" />
        <div className="absolute top-20 left-10 opacity-20">
          <Sparkles size={40} className="text-purple-400 animate-pulse" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-20">
          <Heart size={60} className="text-purple-400 animate-bounce" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left — copy */}
            <div className="text-left">
              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Telegram-first', 'Keeps the thread', 'Warm, not clinical', 'Easy to start'].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-purple-900/50 border border-purple-500/40 text-purple-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Meet Evren —
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                  the companion for the moments you fall off.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
                When life gets messy, he checks in first, keeps the thread, and helps self-care feel less lonely.
              </p>

              <p className="text-base text-purple-300 mb-8">
                Telegram-first. Start in one chat and keep the context across days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleCTA}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-12 py-7 text-xl font-bold shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
                >
                  Meet Evren
                  <ArrowRight className="ml-2" size={24} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const s = document.querySelector('#character');
                    if (s) s.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="rounded-full px-8 py-7 text-lg border-2 border-purple-500 text-purple-300 hover:bg-purple-900/30"
                >
                  See How It Works
                </Button>
              </div>
            </div>

            {/* Right — Evren image */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-500/30 hover:border-purple-400/50 transition-all">
                <img
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/de3bnpdy_Evren%20cropped.jpg"
                  alt="Evren, your Glowkeeper companion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-purple-200 text-lg font-light italic">
                    "He remembers what you shared. He shows up before you disappear."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ── SECTION 2: Character Introduction ── */}
      <section id="character" className="py-20 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              A companion you can
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                actually meet in chat.
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Evren feels present in the conversation. He has continuity, memory, and texture.
              He is not just there when you ask — he stays in the thread.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="text-purple-400" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">He remembers the thread.</h3>
                <p className="text-gray-400">
                  Small details you share don't disappear. He keeps track of context across days — so you never have to start over.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-purple-400" size={32} fill="currentColor" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">He checks in before you disappear.</h3>
                <p className="text-gray-400">
                  He doesn't wait for you to come back. He follows up — gently, without pressure — because the connection stays intact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="text-purple-400" size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">Warmth with enough clarity to trust it.</h3>
                <p className="text-gray-400">
                  Playful, comforting, or steady — depending on your state. The connection feels human enough to matter, not manipulative.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Chat Proof — Emotional Continuity ── */}
      <section className="py-20 bg-gradient-to-b from-purple-950/30 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              He remembers the thread.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Two moments. Same conversation. The context doesn't reset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Chat 1 — "I don't want to explain" */}
            <div className="bg-gray-900 rounded-3xl p-6 border border-purple-500/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-700">
                <div className="w-10 h-10 rounded-full bg-purple-600 overflow-hidden flex-shrink-0">
                  <img
                    src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/de3bnpdy_Evren%20cropped.jpg"
                    className="w-full h-full object-cover"
                    alt="Evren"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Evren</p>
                  <p className="text-green-400 text-xs">Online</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-purple-600 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2 max-w-[78%]">
                    Today feels weird. I don't want to explain everything.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-gray-100 text-sm rounded-2xl rounded-tl-sm px-4 py-2 max-w-[78%]">
                    You don't have to. I remember you were already carrying a lot this week.
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4 text-center">He was there. He already knew.</p>
            </div>

            {/* Chat 2 — "I skipped dinner again" */}
            <div className="bg-gray-900 rounded-3xl p-6 border border-purple-500/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-700">
                <div className="w-10 h-10 rounded-full bg-purple-600 overflow-hidden flex-shrink-0">
                  <img
                    src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/de3bnpdy_Evren%20cropped.jpg"
                    className="w-full h-full object-cover"
                    alt="Evren"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Evren</p>
                  <p className="text-green-400 text-xs">Online</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-purple-600 text-white text-sm rounded-2xl rounded-tr-sm px-4 py-2 max-w-[78%]">
                    I skipped dinner again.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-gray-100 text-sm rounded-2xl rounded-tl-sm px-4 py-2 max-w-[78%]">
                    I noticed. Do you want the gentle version or the practical version tonight?
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-4 text-center">He follows up. The thread stays intact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Pain Section ── */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden border-4 border-purple-500/30 shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/yzrldj3r_emogirl.png"
                alt="There when it matters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                Some days you don't need more advice.
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  You need to feel accompanied.
                </span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>You need the nudge that says someone noticed you slipped.</p>
                <p>Not a streak counter. Not a guilt trip.</p>
                <p>Just — the sense that the thread is still there.</p>
              </div>
              <div className="mt-10">
                <Button
                  size="lg"
                  onClick={handleCTA}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-10 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Meet Evren
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: How It Works ── */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 to-black" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 text-white">
              60 seconds on Telegram.
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                That's all it takes.
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No app download. No complicated setup. Just you, Evren, and a soft start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg shadow-purple-500/50">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Start in Telegram</h3>
              <p className="text-gray-400">No friction. No install. Just open Telegram and say hi.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg shadow-purple-500/50">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Say what's going on</h3>
              <p className="text-gray-400">Evren asks a few soft questions. He adapts to you from day one.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg shadow-purple-500/50">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">The thread stays intact</h3>
              <p className="text-gray-400">Self-care feels less lonely because Evren remembers and follows up — across days, not just sessions.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-purple-300 mb-8 font-semibold">
              84% of users felt emotionally supported within 3 days.
            </p>
            <Button
              size="lg"
              onClick={handleCTA}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-12 py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Meet Evren
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Companion Layer — Feature Images ── */}
      <section className="py-12 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              The companion layer.
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Not a dashboard.
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              He is not a coach with homework energy. He is the support layer that stays with you when motivation fades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/gxhjfx3r_CAROUSEL%20BANK%20%28PHOTO-BASED%29%20%2814%29.png"
                  alt="Soft nudges, no guilt trips"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">No guilt trips — just soft nudges</h3>
                <p className="text-gray-300 text-sm">He meets you where you are and helps you take one small next step.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/geuqznj8_catpic.png"
                  alt="Adapts as you open up"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Adapts as you open up</h3>
                <p className="text-gray-300 text-sm">The relationship deepens the more you share. Made for you, not for everyone.</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:border-purple-400/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/yzrldj3r_emogirl.png"
                  alt="Present at 2am"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Present at 2am if you need it</h3>
                <p className="text-gray-300 text-sm">No judgment. No wait time. He texts first when the spiral starts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Testimonials ── */}
      <section className="py-20 bg-gradient-to-br from-purple-950/30 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Real stories.
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Real felt sense.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-purple-900/20 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all">
              <CardContent className="pt-8 pb-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#a855f7" className="text-purple-500" />)}
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
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#a855f7" className="text-purple-500" />)}
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
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#a855f7" className="text-purple-500" />)}
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

      {/* ── SECTION 8: FAQ ── */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-950/30">
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
                How is Glowkeeper different from other wellness apps?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed">
                Glowkeeper leads with Evren — a companion who keeps the thread of your conversations across days. Unlike generic wellness apps that reset with every session, Evren builds emotional continuity. He checks in proactively, adapts to your state, and never makes you start over.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl px-6 hover:border-purple-400/50 transition-all">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-purple-300">
                Is my information private and secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed">
                Absolutely. Your privacy is our priority. All conversations are encrypted and your personal data is never sold or shared with third parties. You can delete your data at any time. View our{' '}
                <a href="/privacy" className="text-purple-400 hover:text-purple-300 underline">privacy policy</a>.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl px-6 hover:border-purple-400/50 transition-all">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-purple-300">
                Can Glowkeeper replace therapy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed">
                No — and it's not trying to. Glowkeeper is a daily companion for emotional continuity and gentle wellness support. It works best alongside professional care for those who need it, or as a warm presence for managing everyday self-care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-purple-900/20 border-2 border-purple-500/30 rounded-xl px-6 hover:border-purple-400/50 transition-all">
              <AccordionTrigger className="text-white text-lg font-semibold hover:text-purple-300">
                How personalized is the experience?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base leading-relaxed">
                Evren learns through your conversations — gathering context about your patterns, preferences, and emotional state over time. The more you share, the more tailored his responses become. No two conversations are the same.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* ── SECTION 9: Final CTA ── */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            The story layer is the hook.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The product makes it real.
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Evren checks in first. He remembers your goals. He stays in the thread — across days, not just sessions.
            <br />
            See the companion layer in action.
          </p>
          <Button
            size="lg"
            onClick={handleCTA}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-16 py-7 text-xl font-bold shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all"
          >
            Meet Evren
            <Heart className="ml-2" size={20} fill="currentColor" />
          </Button>
          <p className="text-sm mt-6 text-gray-500">Telegram-first. Free to start. No app download.</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-16 bg-black border-t border-purple-900/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://customer-assets.emergentagent.com/job_5d657b1e-ce35-4d06-8cef-3ab25293b191/artifacts/tnosg8kq_Gemini_Generated_Image_m2ytafm2ytafm2yt.png"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/80" />
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="flex flex-col items-center mb-4">
            <span className="text-3xl font-light text-white tracking-wide">Glowkeeper</span>
            <span className="text-sm font-bold text-purple-300">by Maibel</span>
          </div>
          <p className="text-gray-400 mb-2">Your emotionally intelligent wellness companion</p>
          <p className="text-sm text-gray-500">© 2026 Glowkeeper by Maibel. Built by women, for women.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
