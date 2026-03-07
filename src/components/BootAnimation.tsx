import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BootAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3000),
      setTimeout(() => onComplete(), 3800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy overflow-hidden"
        >
          {/* CRT scanline overlay */}
          <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,180,216,0.1) 2px, rgba(0,180,216,0.1) 4px)",
            }}
          />

          {/* Power button flash */}
          <AnimatePresence>
            {phase === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute w-4 h-4 rounded-full bg-accent shadow-[0_0_40px_20px_hsl(199_80%_50%/0.6)]"
              />
            )}
          </AnimatePresence>

          {/* Screen flicker */}
          {phase >= 1 && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0.005 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-navy"
            >
              {/* Horizontal scan line */}
              <motion.div
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 1.5, ease: "linear", repeat: 1 }}
                className="absolute left-0 right-0 h-[2px] bg-accent/30 blur-[1px] z-20"
              />
            </motion.div>
          )}

          {/* Boot text */}
          {phase >= 1 && (
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-mono text-xs text-accent/60 mb-8 space-y-1"
              >
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 }}>
                  [SYSTEM] Initializing core modules...
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  [OK] Loading design engine v3.0
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  [OK] Connecting neural networks...
                </motion.p>
                {phase >= 2 && (
                  <>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 }}>
                      [OK] Rendering 3D pipeline...
                    </motion.p>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                      [READY] All systems operational
                    </motion.p>
                  </>
                )}
              </motion.div>

              {/* Logo reveal */}
              {phase >= 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 className="text-3xl md:text-5xl font-heading font-bold text-navy-foreground tracking-tight">
                    Maheshwari
                    <span className="text-accent"> Tech</span>
                  </h1>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mt-3 mx-auto"
                  />
                </motion.div>
              )}

              {/* Loading bar */}
              {phase >= 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 w-48 h-1 bg-navy-foreground/10 rounded-full mx-auto overflow-hidden"
                >
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_10px_hsl(199_80%_50%/0.5)]"
                  />
                </motion.div>
              )}
            </div>
          )}

          {/* Corner decorations */}
          {phase >= 1 && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-accent/50"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-accent/50"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-accent/50"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-accent/50"
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootAnimation;
