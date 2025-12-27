import React from "react";
import styles from "./SpotifyPlayer.module.css"; // você pode reutilizar o mesmo CSS
import anima from "../../styles/animations.module.css";

function SpotifyPlayer() {
  return (
    <div className={`${styles.spotifyPlayer} ${anima.slideInTop}`}>
      <iframe
        src="https://open.spotify.com/embed/playlist/1l5b5VCePWaBoKhzybA4Sd"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player"
      ></iframe>
      <p style={{fontFamily: "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",  fontWeight: 'bold', textAlign: 'center', marginTop: '-2px', fontSize: '11.50px', color: '#ffffff', margin: '-2px 0 0 0', textShadow: '0 0 10px #df0c53e8', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'}}>
        ▶︎ Dá play aqui antes de descer ❤️
      </p>
    </div>
  );
}

export default SpotifyPlayer;



/*import { useEffect, useRef, useState } from "react";
import styles from "./SpotifyPlayer.module.css";
import anima from "../../styles/animations.module.css";

function SpotifyPlayer() {
  const tracks = [
    "5wcZuhzXFf7At0N0RmVV6b", // Partilhar — ANAVITÓRIA
    "5lvvqOEWpUvs2jaFkQTFWJ", // Quando bate aquela saudade - Rubel
    "1dGr1c8CrMLDpV6mPbImSI", // Lover — Taylor Swift
    "352FuGmGJClPjojSYjNrXG", // Já sei Namorar — Tribalistas
    "1W0OCrMsRP1SLTEdw3JwEz", // Sweet Dreams - Last Shadow Puppets
    "2VyaGJJI8dOiv36F8vHZIL", // Slow Dawn - Chase Atlantic
    "3U4isOIWM3VvDubwSI3y7a", // All of Me — John Legend
    "5uCax9HTNlzGybIStD3vDh", // Say You Won’t Let Go — James Arthur
    "5TTGoX70AFrTvuEtqHK37S", // No1. Party Anthem — Arctic Monkeys
    "1Q7EgiMOuwDcB0PJC6AzON", // Best Part — Daniel Caesar & H.E.R
    "3AJwUDP919kvQ9QcozQPxg", // Yellow — Coldplay
    "28jyMOvRd82hQp95Z9ftXw", // Her - Chase Atlantic
    "0tgVpDi06FyKpA1z0VMD4v", // Perfect — Ed Sheeran
    "5XeFesFbtLpXzIVDNQP22n", // I Wanna Be Yours — Arctic Monkeys
  ];

  const TIMEOUT_MS = 5000; // tempo para esperar o load do iframe antes de tentar próxima faixa


/*import styles from "./SpotifyPlayer.module.css";
import anima from "../../styles/animations.module.css";

function SpotifyPlayer() {
  return (
    <div className={`${styles.spotifyPlayer} ${anima.slideInTop}`}>
      <iframe
        src="https://open.spotify.com/embed/track/1PQRwFvNM7xV65bIkHmDtx?utm_source=generator"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Player"
      ></iframe>
    </div>
  );
}

export default SpotifyPlayer;*/