'use client';

import { motion } from 'framer-motion';

export default function PixelRunner() {
  const duration = 12;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 py-2 z-20 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute bottom-[25%]"
        style={{ left: '5%' }}
        animate={{
          left: ['-5%', '95%'],
          scaleX: [1, 1, -1, -1],
        }}
        transition={{
          left: {
            duration: duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'linear',
            times: [0, 0.499, 0.501, 1],
          },
          scaleX: {
            duration: duration,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'linear',
            times: [0, 1, 0, 1],
          },
        }}
      >
        <div className="pixel-runner scale-[3]"></div>
      </motion.div>
    </div>
  );
}
