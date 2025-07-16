import { useEffect, useRef } from "react";

export default function WelcomeSound() {
    const hasPlayedRef = useRef(false);

    useEffect(() => {
        // Only play once per session
        if (hasPlayedRef.current) return;

        const playWelcomeSound = () => {
            try {
                // First play the human voice
                const speakWelcome = () => {
                    if ('speechSynthesis' in window) {
                        const welcomeMessage = 'Welcome to Maharaja Feast! Experience Royalty on Every Plate! Browse our Digital Menu below and indulge in a feast fit for kings and queens.';
                        const utterance = new SpeechSynthesisUtterance(welcomeMessage);
                        utterance.rate = 0.7; // Slower for the longer message
                        utterance.pitch = 1.0; // Normal pitch
                        utterance.volume = 0.8; // Pleasant volume

                        // Try to use a more pleasant voice if available
                        const voices = speechSynthesis.getVoices();
                        const preferredVoice = voices.find(voice =>
                            voice.name.includes('Google') ||
                            voice.name.includes('Microsoft') ||
                            voice.name.includes('Natural') ||
                            voice.lang.includes('en-US')
                        );

                        if (preferredVoice) {
                            utterance.voice = preferredVoice;
                        }

                        speechSynthesis.speak(utterance);
                    }
                };

                // Then play the musical chimes
                const playChimes = () => {
                    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

                    // Create a beautiful royal welcome chime sequence
                    const playTone = (frequency: number, startTime: number, duration: number, volume: number = 0.1) => {
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();

                        oscillator.connect(gainNode);
                        gainNode.connect(audioContext.destination);

                        oscillator.frequency.setValueAtTime(frequency, startTime);
                        oscillator.type = 'sine';

                        gainNode.gain.setValueAtTime(0, startTime);
                        gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.1);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

                        oscillator.start(startTime);
                        oscillator.stop(startTime + duration);
                    };

                    // Royal welcome chime sequence (C Major chord progression)
                    const now = audioContext.currentTime;

                    // First chord - C Major (C4, E4, G4)
                    playTone(261.63, now + 0.1, 0.8, 0.05); // C4 - reduced volume
                    playTone(329.63, now + 0.1, 0.8, 0.04); // E4
                    playTone(392.00, now + 0.1, 0.8, 0.03); // G4

                    // Second chord - F Major (F4, A4, C5)
                    playTone(349.23, now + 0.5, 0.8, 0.05); // F4
                    playTone(440.00, now + 0.5, 0.8, 0.04); // A4
                    playTone(523.25, now + 0.5, 0.8, 0.03); // C5

                    // Final chord - G Major (G4, B4, D5)
                    playTone(392.00, now + 0.9, 1.2, 0.05); // G4
                    playTone(493.88, now + 0.9, 1.2, 0.04); // B4
                    playTone(587.33, now + 0.9, 1.2, 0.03); // D5

                    // High sparkle notes
                    playTone(783.99, now + 1.3, 0.6, 0.02); // G5
                    playTone(880.00, now + 1.5, 0.6, 0.02); // A5
                    playTone(987.77, now + 1.7, 0.8, 0.02); // B5
                };

                // Play voice first, then chimes after a short delay
                speakWelcome();
                setTimeout(playChimes, 500);

                hasPlayedRef.current = true;
            } catch (error) {
                console.log('Welcome sound not available:', error);
            }
        };

        // Play sound after a short delay to ensure page is loaded
        const timer = setTimeout(() => {
            playWelcomeSound();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return null; // This component doesn't render anything
}