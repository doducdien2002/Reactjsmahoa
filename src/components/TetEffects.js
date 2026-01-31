// import React from "react";

// // Tết Decorations - Falling Petals (Smaller and more subtle)
// const FallingPetals = () => {
//   const petals = Array.from({ length: 15 }, (_, i) => ({
//     id: i,
//     left: Math.random() * 100,
//     delay: Math.random() * 8,
//     duration: 12 + Math.random() * 6,
//     size: 6 + Math.random() * 6,
//   }));

//   return (
//     <>
//       <style>{`
//         @keyframes fall {
//           0% {
//             transform: translateY(-10vh) rotate(0deg);
//             opacity: 0;
//           }
//           10% {
//             opacity: 0.6;
//           }
//           90% {
//             opacity: 0.4;
//           }
//           100% {
//             transform: translateY(110vh) rotate(360deg);
//             opacity: 0;
//           }
//         }
//         @keyframes sway {
//           0%, 100% {
//             transform: translateX(0);
//           }
//           50% {
//             transform: translateX(25px);
//           }
//         }
//       `}</style>
//       {petals.map((petal) => (
//         <div
//           key={petal.id}
//           className="absolute pointer-events-none"
//           style={{
//             left: `${petal.left}%`,
//             animation: `fall ${petal.duration}s linear ${petal.delay}s infinite, sway 4s ease-in-out infinite`,
//             fontSize: `${petal.size}px`,
//             zIndex: 9999,
//           }}
//         >
//           🌸
//         </div>
//       ))}
//     </>
//   );
// };

// // Fireworks Effect (Less frequent, more elegant)
// const Fireworks = () => {
//   const [sparks, setSparks] = React.useState([]);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       const newSpark = {
//         id: Date.now(),
//         x: 15 + Math.random() * 70, // Avoid edges
//         y: 15 + Math.random() * 40,
//       };
//       setSparks((prev) => [...prev.slice(-3), newSpark]); // Reduce to 3 max
//     }, 3500); // Less frequent

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes explode {
//           0% {
//             transform: scale(0);
//             opacity: 0;
//           }
//           20% {
//             opacity: 0.8;
//           }
//           100% {
//             transform: scale(2.5);
//             opacity: 0;
//           }
//         }
//       `}</style>
//       {sparks.map((spark) => (
//         <div
//           key={spark.id}
//           className="absolute pointer-events-none"
//           style={{
//             left: `${spark.x}%`,
//             top: `${spark.y}%`,
//             animation: 'explode 2s ease-out forwards',
//             zIndex: 9999,
//           }}
//         >
//           <div className="text-2xl">✨</div>
//         </div>
//       ))}
//     </>
//   );
// };

// // Red Lanterns (Smaller and positioned better)
// const RedLanterns = () => {
//   return (
//     <>
//       <style>{`
//         @keyframes swingLantern {
//           0%, 100% {
//             transform: rotate(-3deg);
//           }
//           50% {
//             transform: rotate(3deg);
//           }
//         }
//       `}</style>
//       <div className="absolute top-4 left-[8%] pointer-events-none" style={{ zIndex: 9999 }}>
//         <div className="text-4xl opacity-80" style={{ animation: 'swingLantern 4s ease-in-out infinite' }}>
//           🏮
//         </div>
//       </div>
//       <div className="absolute top-4 right-[8%] pointer-events-none" style={{ zIndex: 9999 }}>
//         <div className="text-4xl opacity-80" style={{ animation: 'swingLantern 4.5s ease-in-out infinite 0.5s' }}>
//           🏮
//         </div>
//       </div>
//     </>
//   );
// };

// // Lucky Coins (Fewer and smaller)
// const LuckyCoins = () => {
//   const coins = Array.from({ length: 6 }, (_, i) => ({
//     id: i,
//     left: 10 + i * 15,
//     delay: i * 0.8,
//   }));

//   return (
//     <>
//       <style>{`
//         @keyframes coinFall {
//           0% {
//             transform: translateY(-30px) rotate(0deg);
//             opacity: 0;
//           }
//           15% {
//             opacity: 0.7;
//           }
//           85% {
//             opacity: 0.5;
//           }
//           100% {
//             transform: translateY(100vh) rotate(720deg);
//             opacity: 0;
//           }
//         }
//       `}</style>
//       {coins.map((coin) => (
//         <div
//           key={coin.id}
//           className="absolute text-xl pointer-events-none"
//           style={{
//             left: `${coin.left}%`,
//             animation: `coinFall 8s linear ${coin.delay}s infinite`,
//             zIndex: 9999,
//           }}
//         >
//           🪙
//         </div>
//       ))}
//     </>
//   );
// };

// // Golden Sparkles (Smaller, more subtle)
// const GoldenSparkles = () => {
//   const sparkles = [
//     { top: '15%', left: '12%', delay: '0s', size: '1.2rem' },
//     { top: '25%', right: '18%', delay: '0.8s', size: '1rem' },
//     { top: '45%', left: '22%', delay: '1.6s', size: '1.5rem' },
//     { top: '65%', right: '15%', delay: '2.4s', size: '1.1rem' },
//     { top: '85%', left: '20%', delay: '3.2s', size: '1.3rem' },
//   ];

//   return (
//     <>
//       <style>{`
//         @keyframes sparkle {
//           0%, 100% {
//             opacity: 0.2;
//             transform: scale(0.9);
//           }
//           50% {
//             opacity: 0.6;
//             transform: scale(1.1);
//           }
//         }
//       `}</style>
//       {sparkles.map((sparkle, i) => (
//         <div
//           key={i}
//           className="absolute pointer-events-none"
//           style={{
//             top: sparkle.top,
//             left: sparkle.left,
//             right: sparkle.right,
//             fontSize: sparkle.size,
//             animation: `sparkle 3s ease-in-out ${sparkle.delay} infinite`,
//             zIndex: 9998,
//           }}
//         >
//           ✨
//         </div>
//       ))}
//     </>
//   );
// };

// // Floating Lucky Clouds (New elegant effect)
// const LuckyClouds = () => {
//   const clouds = [
//     { left: '5%', top: '20%', delay: '0s', duration: '25s' },
//     { left: '75%', top: '40%', delay: '5s', duration: '30s' },
//     { left: '45%', top: '60%', delay: '10s', duration: '28s' },
//   ];

//   return (
//     <>
//       <style>{`
//         @keyframes floatCloud {
//           0% {
//             transform: translateX(0) translateY(0);
//             opacity: 0.3;
//           }
//           50% {
//             transform: translateX(30px) translateY(-20px);
//             opacity: 0.5;
//           }
//           100% {
//             transform: translateX(0) translateY(0);
//             opacity: 0.3;
//           }
//         }
//       `}</style>
//       {clouds.map((cloud, i) => (
//         <div
//           key={i}
//           className="absolute pointer-events-none text-3xl"
//           style={{
//             left: cloud.left,
//             top: cloud.top,
//             animation: `floatCloud ${cloud.duration} ease-in-out ${cloud.delay} infinite`,
//             zIndex: 9997,
//           }}
//         >
//           ☁️
//         </div>
//       ))}
//     </>
//   );
// };

// // Main TetEffects Component - Subtle and beautiful for entire page
// const TetEffects = () => {
//   return (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 9998 }}>
//       <FallingPetals />
//       <Fireworks />
//       <RedLanterns />
//       <LuckyCoins />
//       <GoldenSparkles />
//       <LuckyClouds />
//     </div>
//   );
// };

// export default TetEffects;