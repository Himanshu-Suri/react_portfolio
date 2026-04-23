export const PROJECTS = [
  {
    id: '01',
    date: 'Dec 2025 – Jan 2026',
    title: 'RF Signal Classifier',
    desc: 'End-to-end CNN pipeline for automated identification of RF signals — SSTV, APRS, FSK, and Noise. Generated spectrograms from raw IQ samples with 80/20 train-test splits, early stopping, and confusion matrix analysis. Built visualization tools for IQ waveforms and class probability outputs.',
    tags: ['PyTorch', 'CNN', 'SDR', 'IQ Analysis', 'FFT', 'Spectrogram', 'Python', 'Early Stopping'],
    accentTags: ['PyTorch', 'CNN', 'SDR'],
    github: 'https://github.com/Himanshu-Suri/CNN_classifier_for_cubesatsim',
    type: 'ML · RF',
    filter: 'ml',
  },
  {
    id: '02',
    date: 'Dec 2025 – Jan 2026',
    title: 'Real-Time Chat Application',
    desc: 'Full-stack MERN chat app with real-time messaging via Socket.io, JWT-based authentication, online presence tracking, and global state via Zustand. Responsive UI with TailwindCSS and Daisy UI. Deployed to cloud production.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'JWT', 'Zustand', 'TailwindCSS'],
    accentTags: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/Himanshu-Suri/chat-app',
    type: 'Full-Stack',
    filter: 'fullstack',
  },
]

export const GH_ICON = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.3.47-2.37 1.24-3.2-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.83 1.24 1.9 1.24 3.2 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .31.2.68.82.56C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)
