import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Download, ExternalLink, AlertCircle, MessageCircle, Mail, Phone } from 'lucide-react';

export default function Resources() {
  useEffect(() => {
    document.title = "Resources — OA Care";
    return () => { document.title = "OA Care"; };
  }, []);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* PAGE HEADER */}
        <div className="bg-white border-b border-slate-100 py-10 md:py-14">
          <div className="container-main">
            <div className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">Home / Resources</div>
            <h1 className="section-title mb-0">Resources & Support</h1>
            <p className="section-subtitle mb-0 mt-2">Guides, links and support for OA patients</p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="bg-white section-pad">
          <div className="container-main max-w-4xl mx-auto">
            <div className="card bg-gradient-to-r from-primary to-primary-light text-white flex flex-col md:flex-row items-center gap-6 p-8 border-0">
              <div className="shrink-0">
                <FileText className="w-16 h-16 text-white/80" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-heading text-white mb-1 mt-0">OA Patient Guide</h2>
                <p className="text-blue-100 mb-1 text-sm">Hip & Knee Osteoarthritis — Complete Patient Handbook</p>
                <p className="text-blue-200 text-xs m-0">Includes symptoms, treatments, exercises and daily tips</p>
              </div>
              <div className="shrink-0 mt-4 md:mt-0">
                <button className="bg-white text-primary hover:bg-blue-50 rounded-xl px-6 py-3 font-semibold flex items-center gap-2 border-0 cursor-pointer transition-colors">
                  <Download className="w-4 h-4 shrink-0" /> Download PDF
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-background section-pad">
          <div className="container-main">
            <h2 className="section-title text-center">Useful Links</h2>
            <p className="section-subtitle text-center mb-8">Trusted external resources for more information</p>
            
            <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <a href="https://www.arthritis.org/" target="_blank" rel="noopener noreferrer" className="card hover:shadow-md hover:-translate-y-0.5 transition-all group flex items-start gap-4 no-underline block cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ExternalLink className="text-primary w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 mb-1 mt-0">Arthritis Foundation</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3 m-0">Comprehensive information on all types of arthritis, treatments, and community support.</p>
                  <div className="text-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" /> Visit
                  </div>
                </div>
              </a>

              <a href="https://www.who.int/news-room/fact-sheets/detail/osteoarthritis" target="_blank" rel="noopener noreferrer" className="card hover:shadow-md hover:-translate-y-0.5 transition-all group flex items-start gap-4 no-underline block cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ExternalLink className="text-primary w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 mb-1 mt-0">WHO Osteoarthritis Facts</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3 m-0">Global statistics and public health perspective on osteoarthritis from the World Health Organization.</p>
                  <div className="text-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" /> Visit
                  </div>
                </div>
              </a>

              <a href="https://www.nhs.uk/conditions/osteoarthritis/" target="_blank" rel="noopener noreferrer" className="card hover:shadow-md hover:-translate-y-0.5 transition-all group flex items-start gap-4 no-underline block cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ExternalLink className="text-primary w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 mb-1 mt-0">NHS Guide to OA</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3 m-0">Detailed clinical guide covering diagnosis, prevention, and treatment options available.</p>
                  <div className="text-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" /> Visit
                  </div>
                </div>
              </a>

              <a href="https://oarsi.org/" target="_blank" rel="noopener noreferrer" className="card hover:shadow-md hover:-translate-y-0.5 transition-all group flex items-start gap-4 no-underline block cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ExternalLink className="text-primary w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 mb-1 mt-0">OARSI</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3 m-0">Osteoarthritis Research Society International — for those interested in the latest clinical research.</p>
                  <div className="text-primary text-sm font-medium flex items-center gap-1 group-hover:underline">
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" /> Visit
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-white section-pad">
          <div className="container-main max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="text-red-500 w-6 h-6 shrink-0" />
                <h3 className="text-red-800 font-heading font-bold text-xl m-0">When to Seek Urgent Help</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-red-400 w-4 h-4 shrink-0 mt-0.5" />
                  <span className="text-sm text-red-700 leading-relaxed">Sudden severe increase in joint pain</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-red-400 w-4 h-4 shrink-0 mt-0.5" />
                  <span className="text-sm text-red-700 leading-relaxed">Joint becomes hot, red and very swollen</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-red-400 w-4 h-4 shrink-0 mt-0.5" />
                  <span className="text-sm text-red-700 leading-relaxed">Unable to bear weight on the joint</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-red-400 w-4 h-4 shrink-0 mt-0.5" />
                  <span className="text-sm text-red-700 leading-relaxed">Joint locks or suddenly gives way</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-red-400 w-4 h-4 shrink-0 mt-0.5" />
                  <span className="text-sm text-red-700 leading-relaxed">Fever with joint pain</span>
                </div>
              </div>
              
              <div className="border-t border-red-200 mt-5 pt-4">
                <p className="font-semibold text-red-800 text-sm m-0">Contact your doctor or go to the nearest emergency department immediately</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-background section-pad">
          <div className="max-w-4xl mx-auto px-4">
            <div className="card max-w-md mx-auto text-center border border-slate-100">
              <MessageCircle className="text-primary w-10 h-10 mx-auto mb-3 shrink-0" />
              <h3 className="font-heading font-bold text-xl text-primary-dark mb-2 mt-0">Need More Help?</h3>
              <p className="text-slate-500 text-sm mb-5 leading-relaxed">
                Our support team is available during business hours for technical questions regarding the platform.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-slate-600 text-sm mb-2">
                <Mail className="w-4 h-4 text-primary shrink-0" /> support@oacare.in
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-600 text-sm mb-2">
                <Phone className="w-4 h-4 text-primary shrink-0" /> +91 1800 123 4567
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-50">
                <p className="text-xs text-slate-400 m-0">This website does not provide personal medical advice</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
