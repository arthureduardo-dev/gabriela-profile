import { motion } from 'framer-motion';

const shapes = [
  // Triângulos (Play)
  { d: "M 0 100 L 100 100 L 50 0 Z", size: 30, color: "#8B5CF6", top: "10%", left: "15%", duration: 40 },
  { d: "M 0 100 L 100 100 L 50 0 Z", size: 20, color: "#a78bfa", top: "80%", left: "85%", duration: 50 },
  // Círculos (Botões/Live)
  { d: "M 50, 50 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0", size: 40, color: "#6D28D9", top: "5%", left: "80%", duration: 35 },
  { d: "M 50, 50 m -50, 0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0", size: 25, color: "#a78bfa", top: "75%", left: "10%", duration: 55 },
  // Cruzes (D-Pad)
  { d: "M 40 0 L 60 0 L 60 40 L 100 40 L 100 60 L 60 60 L 60 100 L 40 100 L 40 60 L 0 60 L 0 40 L 40 40 Z", size: 35, color: "#6D28D9", top: "40%", left: "90%", duration: 60 },
  { d: "M 40 0 L 60 0 L 60 40 L 100 40 L 100 60 L 60 60 L 60 100 L 40 100 L 40 60 L 0 60 L 0 40 L 40 40 Z", size: 25, color: "#8B5CF6", top: "50%", left: "5%", duration: 45 },
  // X (Botão)
  { d: "M 96.39 82.39 L 58 44 L 96.39 5.61 A 8 8 0 0 0 85.61 -5.17 L 47.22 33.22 L 8.83 -5.17 A 8 8 0 0 0 -1.94 5.61 L 36.44 44 L -1.94 82.39 A 8 8 0 0 0 8.83 93.17 L 47.22 54.78 L 85.61 93.17 A 8 8 0 0 0 96.39 82.39", size: 28, color: "#a78bfa", top: "15%", left: "50%", duration: 58 },
  // Quadrado (Botão)
  { d: "M 0 0 H 100 V 100 H 0 Z", size: 22, color: "#8B5CF6", top: "85%", left: "40%", duration: 52 },
];

const emotes = [
  { src: 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_79af754bd1c54adbabb5e675f6a9766a/default/dark/2.0', size: 50, top: '20%', left: '70%', duration: 48 },
  { src: 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_9774e49f46e74e32add778c1cadc1d1c/default/light/1.0', size: 45, top: '60%', left: '20%', duration: 53 },
  { src: 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_057177abe10e4ddc8720e512013a64a0/default/light/1.0', size: 55, top: '30%', left: '30%', duration: 42 },
  { src: 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_d9f7edd8a3434115b8c57debbaac8cd2/default/light/1.0', size: 40, top: '90%', left: '60%', duration: 65 },
  { src: 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_272a0eae61654738807f02b9b6eb4f5e/default/light/1.0', size: 60, top: '5%', left: '40%', duration: 38 },
  { src: 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_63466316ccff490eb59e8f06bc607d03/default/light/1.0', size: 48, top: '65%', left: '95%', duration: 58 },
  { src: 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_01134f330f864e7abae859c9d6d5460e/default/light/1.0', size: 52, top: '92%', left: '25%', duration: 46 },
  { src: 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_0e89453eb6624bfc81ea3051d4595d5a/default/light/1.0', size: 43, top: '45%', left: '65%', duration: 51 },
];

export const StreamerBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute"
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: ["0%", "20%", "-15%", "10%", "0%"],
            x: ["0%", "-10%", "15%", "-20%", "0%"],
            rotate: [0, 45, -90, 60, 0],
          }}
          transition={{
            duration: shape.duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            fill={shape.color}
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%', opacity: 0.3 }}
          >
            <path d={shape.d} />
          </svg>
        </motion.div>
      ))}
      {emotes.map((emote, index) => (
        <motion.div
          key={`emote-${index}`}
          className="absolute"
          style={{
            top: emote.top,
            left: emote.left,
            width: emote.size,
            height: emote.size,
          }}
          animate={{
            y: ["0%", "-15%", "20%", "-10%", "0%"],
            x: ["0%", "10%", "-15%", "20%", "0%"],
            rotate: [0, -30, 50, -10, 0],
          }}
          transition={{
            duration: emote.duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <img
            src={emote.src}
            alt=""
            className="w-full h-full"
            style={{ opacity: 0.4 }}
          />
        </motion.div>
      ))}
    </div>
  );
};