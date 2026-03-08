import { motion } from 'framer-motion';

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    type?: 'words' | 'chars';
}

export default function SplitText({
    text,
    className = "",
    delay = 0,
    duration = 0.8,
    stagger = 0.05,
    type = 'words'
}: SplitTextProps) {
    const items = type === 'words' ? text.split(' ') : text.split('');

    return (
        <span className={`inline-block ${className}`}>
            {items.map((item, index) => (
                <span
                    key={index}
                    className="inline-block overflow-hidden"
                    style={{ paddingRight: type === 'words' ? '0.25em' : '0' }}
                >
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{
                            duration: duration,
                            ease: [0.16, 1, 0.3, 1], // Cinematic ease-out
                            delay: delay + (index * stagger)
                        }}
                    >
                        {item === ' ' && type === 'chars' ? '\u00A0' : item}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
