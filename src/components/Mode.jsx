import React, { useEffect, useState } from 'react';
import { Paintbrush } from 'lucide-react'; // icon for 🎨
import { motion } from 'framer-motion';

const themes = {
  Light: {
    '--bg-color': '#ffffff',      // pure white
    '--text-color': '#1f2937',    // slate-800
  },
  Dark: {
    '--bg-color': '#0d1117',      // GitHub dark bg
    '--text-color': '#c9d1d9',    // soft light text
  },
  Warm: {
    '--bg-color': '#fdf6e3',      // warm beige
    '--text-color': '#654321',    // warm brown
  },
  AWS: {
    '--bg-color': '#232f3e',      // official AWS navy
    '--text-color': '#ff9900',    // AWS orange
  },
  GCP: {
    '--bg-color': '#e8f0fe',      // Google Cloud light blue
    '--text-color': '#1a73e8',    // Google Blue
  },
};

const Mode = () => {
  const [open, setOpen] = useState(false);

  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    if (theme) {
      Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
  };

  useEffect(() => {
    applyTheme('Dark'); // Default theme
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition"
        title="Theme"
      >
        <Paintbrush size={20} />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -5 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 w-52 bg-white bg-opacity-90 text-black p-3 rounded-lg shadow-lg z-50 backdrop-blur"
        >
          <div className="flex flex-col gap-2">
            {Object.keys(themes).map((name) => (
              <button
                key={name}
                onClick={() => applyTheme(name)}
                className="w-full text-left px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              >
                {name}
              </button>
            ))}

            <label className="text-sm font-medium mt-1">Custom Background:</label>
            <input
              type="color"
              onChange={(e) => {
                document.documentElement.style.setProperty('--bg-color', e.target.value);
              }}
              className="w-full h-8 rounded-md cursor-pointer border"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Mode;
