import { motion } from 'motion/react';

export function CTASection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pb-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
            >
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full -ml-20 -mb-20 blur-3xl"></div>
                </div>

                <div className="relative z-10 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                        Ready to build your <br />financial future?
                    </h2>
                    <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto">
                        Join thousands of entrepreneurs who are unlocking credit and growing their businesses with Finui.
                    </p>
                    <button
                        onClick={() => window.location.hash = '#auth'}
                        className="bg-white text-emerald-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-950/20"
                    >
                        Get Started Now
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
