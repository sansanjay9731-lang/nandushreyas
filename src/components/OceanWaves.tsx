import { useRef, useEffect } from 'react';

interface OceanWavesProps {
    position?: 'top' | 'bottom';
    variant?: 'subtle' | 'full';
    className?: string;
}

export default function OceanWaves({ position = 'bottom', variant = 'subtle', className = '' }: OceanWavesProps) {
    return (
        <div className={`absolute ${position === 'top' ? 'top-0 rotate-180' : 'bottom-0'} left-0 w-full pointer-events-none z-10 ${className}`}>
            <svg
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                className={`w-full ${variant === 'full' ? 'h-[120px] md:h-[160px]' : 'h-[60px] md:h-[80px]'}`}
            >
                <defs>
                    <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.08" />
                        <stop offset="50%" stopColor="#C9A96E" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#C9A96E" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.04" />
                        <stop offset="50%" stopColor="#C9A96E" stopOpacity="0.10" />
                        <stop offset="100%" stopColor="#C9A96E" stopOpacity="0.03" />
                    </linearGradient>
                    <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0D0D0D" stopOpacity="0" />
                        <stop offset="100%" stopColor="#0D0D0D" stopOpacity="1" />
                    </linearGradient>
                </defs>

                {/* Wave layer 1 — slowest, largest */}
                <path fill="url(#waveGrad1)" className="animate-wave-1">
                    <animate
                        attributeName="d"
                        dur="8s"
                        repeatCount="indefinite"
                        values="
                            M0,40 C180,80 360,10 540,50 C720,90 900,20 1080,60 C1260,100 1350,30 1440,50 L1440,120 L0,120 Z;
                            M0,50 C180,20 360,80 540,40 C720,10 900,70 1080,30 C1260,60 1350,80 1440,40 L1440,120 L0,120 Z;
                            M0,30 C180,70 360,30 540,60 C720,80 900,40 1080,50 C1260,20 1350,70 1440,60 L1440,120 L0,120 Z;
                            M0,40 C180,80 360,10 540,50 C720,90 900,20 1080,60 C1260,100 1350,30 1440,50 L1440,120 L0,120 Z"
                    />
                </path>

                {/* Wave layer 2 — medium speed */}
                <path fill="url(#waveGrad2)" className="animate-wave-2">
                    <animate
                        attributeName="d"
                        dur="6s"
                        repeatCount="indefinite"
                        values="
                            M0,60 C240,30 480,80 720,50 C960,20 1200,70 1440,40 L1440,120 L0,120 Z;
                            M0,45 C240,70 480,25 720,55 C960,80 1200,35 1440,55 L1440,120 L0,120 Z;
                            M0,55 C240,40 480,65 720,35 C960,60 1200,45 1440,60 L1440,120 L0,120 Z;
                            M0,60 C240,30 480,80 720,50 C960,20 1200,70 1440,40 L1440,120 L0,120 Z"
                    />
                </path>

                {/* Wave layer 3 — fastest, subtle */}
                <path fill="url(#waveGrad1)" opacity="0.4" className="animate-wave-3">
                    <animate
                        attributeName="d"
                        dur="4s"
                        repeatCount="indefinite"
                        values="
                            M0,70 C160,50 320,80 480,60 C640,40 800,70 960,55 C1120,40 1280,65 1440,50 L1440,120 L0,120 Z;
                            M0,55 C160,75 320,45 480,65 C640,80 800,50 960,65 C1120,45 1280,60 1440,70 L1440,120 L0,120 Z;
                            M0,65 C160,45 320,70 480,50 C640,60 800,40 960,70 C1120,55 1280,45 1440,60 L1440,120 L0,120 Z;
                            M0,70 C160,50 320,80 480,60 C640,40 800,70 960,55 C1120,40 1280,65 1440,50 L1440,120 L0,120 Z"
                    />
                </path>

                {/* Solid fade at the bottom */}
                <rect x="0" y="90" width="1440" height="30" fill="url(#waveGrad3)" />
            </svg>
        </div>
    );
}

/**
 * Full-screen animated ocean canvas for the hero background
 */
export function OceanCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let time = 0;

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            ctx.clearRect(0, 0, w, h);

            // Draw multiple wave layers
            const layers = [
                { amplitude: 18, frequency: 0.003, speed: 0.008, yOffset: h * 0.65, color: 'rgba(201,169,110,0.06)' },
                { amplitude: 14, frequency: 0.004, speed: 0.012, yOffset: h * 0.70, color: 'rgba(201,169,110,0.04)' },
                { amplitude: 10, frequency: 0.005, speed: 0.016, yOffset: h * 0.75, color: 'rgba(201,169,110,0.03)' },
                { amplitude: 22, frequency: 0.002, speed: 0.006, yOffset: h * 0.60, color: 'rgba(201,169,110,0.03)' },
            ];

            layers.forEach(layer => {
                ctx.beginPath();
                ctx.moveTo(0, h);

                for (let x = 0; x <= w; x += 2) {
                    const y = layer.yOffset +
                        Math.sin(x * layer.frequency + time * layer.speed) * layer.amplitude +
                        Math.sin(x * layer.frequency * 1.5 + time * layer.speed * 0.7) * (layer.amplitude * 0.5);
                    ctx.lineTo(x, y);
                }

                ctx.lineTo(w, h);
                ctx.closePath();
                ctx.fillStyle = layer.color;
                ctx.fill();
            });

            // Shimmer highlights
            for (let i = 0; i < 3; i++) {
                const shimmerX = (Math.sin(time * 0.003 + i * 2) * 0.5 + 0.5) * w;
                const shimmerY = h * 0.65 + Math.sin(shimmerX * 0.004 + time * 0.01) * 15;
                const grad = ctx.createRadialGradient(shimmerX, shimmerY, 0, shimmerX, shimmerY, 60);
                grad.addColorStop(0, 'rgba(201,169,110,0.08)');
                grad.addColorStop(1, 'rgba(201,169,110,0)');
                ctx.fillStyle = grad;
                ctx.fillRect(shimmerX - 60, shimmerY - 60, 120, 120);
            }

            time++;
            animId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            style={{ opacity: 0.7 }}
        />
    );
}
