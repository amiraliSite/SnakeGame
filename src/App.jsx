// App.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  FaUser, FaLock, FaRobot,
  FaTrophy, FaMoon, FaSun, FaSignOutAlt, FaRedo, FaMapMarkerAlt,
  FaBullseye, FaScroll, FaBook, FaGithub, FaLinkedin, FaTwitter,
  FaTelegram, FaEnvelope, FaLaptopCode, FaRocket, FaHeart, 
  FaExclamationTriangle, FaPen, FaSadTear, FaFistRaised, 
 FaStar,  FaFlag
} from 'react-icons/fa';
import {
  GiSnake, GiLadder
} from 'react-icons/gi';
import {
  IoPersonOutline, IoLockClosedOutline, IoEyeOutline,
  IoEyeOffOutline,
} from 'react-icons/io5';

import {
  MdSportsEsports
} from 'react-icons/md';

import {
   CgDice1, CgDice2, CgDice3, CgDice4, CgDice5, CgDice6,

} from 'react-icons/cg';
import {
  RiDiceLine, RiDiceFill, RiRobotLine,
  RiRocketLine,
  RiLoaderLine,
 
} from 'react-icons/ri';
import {
  SiReact
} from 'react-icons/si';

// ═══════════════════════════════════════════════════════
// 🎨 STYLES (CSS-in-JS)
// ═══════════════════════════════════════════════════════
const GlobalStyles = ({ dark }) => {
  const bg = dark ? '#0a0e1a' : '#f0f2f5';
  const bgCard = dark ? '#131729' : '#ffffff';
  const bgSec = dark ? '#1a1f36' : '#f8f9fb';
  const text = dark ? '#e8e8f0' : '#1a1a2e';
  const textSec = dark ? '#7a7f9a' : '#6b7280';
  const accent = '#00d4ff';
  const accent2 = '#ff2d7b';
  const border = dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)';

  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;800;900&display=swap');

      *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

      body {
        font-family: 'Vazirmatn', sans-serif;
        background: ${bg};
        color: ${text};
        min-height: 100vh;
        transition: background 0.5s, color 0.4s;
        overflow-x: hidden;
      }

      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: ${bg}; }
      ::-webkit-scrollbar-thumb { background: ${accent}; border-radius: 8px; }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(60px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(0,212,255,0.3); }
        50% { box-shadow: 0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(255,45,123,0.2); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes shake {
        0%, 100% { transform: rotate(0deg) scale(1); }
        15% { transform: rotate(-12deg) scale(1.1); }
        30% { transform: rotate(10deg) scale(1.05); }
        45% { transform: rotate(-8deg) scale(1.1); }
        60% { transform: rotate(6deg) scale(1.02); }
        75% { transform: rotate(-3deg) scale(1.05); }
      }
      @keyframes progressFill {
        0% { width: 0%; }
        100% { width: 100%; }
      }
      @keyframes ripple {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(4); opacity: 0; }
      }
      @keyframes particle {
        0% { transform: translateY(0) rotate(0deg); opacity:1; }
        100% { transform: translateY(-200px) rotate(720deg); opacity:0; }
      }
      @keyframes borderGlow {
        0%,100% { border-color: ${accent}; }
        50% { border-color: ${accent2}; }
      }
      @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
      }
      @keyframes blink {
        50% { border-color: transparent; }
      }
      @keyframes confetti-fall {
        0% { transform: translateY(-100vh) rotate(0deg); opacity:1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity:0; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      @keyframes iconBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }

      .loading-wrap {
        display:flex; flex-direction:column; align-items:center;
        justify-content:center; min-height:100vh; position:relative; overflow:hidden;
      }
      .loading-wrap::before {
        content:''; position:absolute; top:-50%; left:-50%;
        width:200%; height:200%;
        background: conic-gradient(from 0deg, transparent, ${accent}, transparent, ${accent2}, transparent);
        animation: spin 4s linear infinite; opacity:0.05;
      }

      .loader-ring {
        width:100px; height:100px; position:relative; z-index:1;
      }
      .loader-ring div {
        position:absolute; width:100%; height:100%;
        border-radius:50%; border:4px solid transparent;
      }
      .loader-ring div:nth-child(1) {
        border-top-color: ${accent}; animation: spin 1.2s linear infinite;
      }
      .loader-ring div:nth-child(2) {
        border-right-color: ${accent2}; animation: spin 1.6s linear infinite reverse;
        width:75%; height:75%; top:12.5%; left:12.5%;
      }
      .loader-ring div:nth-child(3) {
        border-bottom-color: #ffaa00; animation: spin 2s linear infinite;
        width:50%; height:50%; top:25%; left:25%;
      }
      .loader-icon {
        position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
        font-size:2rem; animation: float 2s ease-in-out infinite; z-index:2;
        color:${accent};
      }
      .progress-bar-wrap {
        width:280px; height:6px; background:${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
        border-radius:10px; margin-top:30px; overflow:hidden; z-index:1;
      }
      .progress-bar-fill {
        height:100%; border-radius:10px;
        background: linear-gradient(90deg, ${accent}, ${accent2});
        animation: progressFill 2.8s ease-in-out forwards;
      }
      .load-text {
        margin-top:16px; font-size:1.1rem; font-weight:600;
        background: linear-gradient(135deg, ${accent}, ${accent2});
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        z-index:1;
      }
      .load-sub {
        margin-top:8px; font-size:0.85rem; color:${textSec}; z-index:1;
        display:flex; align-items:center; gap:6px;
      }

      .login-wrap {
        display:flex; align-items:center; justify-content:center;
        min-height:100vh; padding:20px; animation: fadeIn 0.6s ease;
      }
      .login-card {
        background: ${bgCard}; border:1px solid ${border};
        border-radius:24px; padding:48px 36px; width:100%; max-width:420px;
        box-shadow: 0 25px 80px ${dark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.08)'};
        animation: slideUp 0.6s ease; position:relative; overflow:hidden;
      }
      .login-card::before {
        content:''; position:absolute; top:0; left:0; right:0; height:4px;
        background: linear-gradient(90deg, ${accent}, ${accent2});
      }
      .login-icon {
        text-align:center; margin-bottom:10px;
        animation: float 3s ease-in-out infinite;
        color:${accent}; font-size:3.5rem;
        display:flex; justify-content:center;
      }
      .login-title {
        text-align:center; font-size:1.8rem; font-weight:900; margin-bottom:8px;
        background: linear-gradient(135deg, ${accent}, ${accent2});
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
      }
      .login-sub {
        text-align:center; color:${textSec}; font-size:0.9rem; margin-bottom:30px;
        display:flex; align-items:center; justify-content:center; gap:8px;
      }
      .form-grp { margin-bottom:20px; }
      .form-grp label {
        display:flex; align-items:center; gap:8px; margin-bottom:8px; font-weight:600;
        font-size:0.9rem; color:${textSec};
      }
      .input-wrap {
        position:relative;
      }
      .input-icon {
        position:absolute; left:14px; top:50%; transform:translateY(-50%);
        color:${textSec}; font-size:1.1rem; pointer-events:none;
        transition: color 0.3s;
      }
      .form-input {
        width:100%; padding:14px 18px 14px 44px; font-size:1rem; font-family:inherit;
        background:${bgSec}; border:2px solid ${border}; border-radius:14px;
        color:${text}; transition: all 0.3s; outline:none;
      }
      .form-input:focus {
        border-color:${accent};
        box-shadow: 0 0 0 4px ${dark ? 'rgba(0,212,255,0.15)' : 'rgba(0,212,255,0.1)'};
      }
      .form-input:focus + .input-icon, .input-wrap:focus-within .input-icon {
        color:${accent};
      }
      .form-input::placeholder { color:${textSec}; opacity:0.6; }
      .toggle-pass {
        position:absolute; right:14px; top:50%; transform:translateY(-50%);
        background:none; border:none; color:${textSec}; cursor:pointer;
        font-size:1.1rem; padding:4px; transition: color 0.3s;
      }
      .toggle-pass:hover { color:${accent}; }
      .btn-primary {
        width:100%; padding:15px; font-size:1.05rem; font-weight:800;
        font-family:inherit; border:none; border-radius:14px; cursor:pointer;
        background: linear-gradient(135deg, ${accent}, ${accent2});
        color:#fff; transition: all 0.3s; margin-top:8px; position:relative; overflow:hidden;
        display:flex; align-items:center; justify-content:center; gap:10px;
      }
      .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(0,212,255,0.35);
      }
      .btn-primary:active { transform: translateY(0); }
      .btn-primary:disabled {
        opacity:0.5; cursor:not-allowed; transform:none !important;
        box-shadow:none !important;
      }
      .login-error {
        background: ${dark ? 'rgba(255,45,123,0.1)' : 'rgba(255,45,123,0.08)'};
        color: ${accent2}; padding:12px; border-radius:10px;
        text-align:center; margin-bottom:16px; font-size:0.9rem; font-weight:600;
        border: 1px solid ${accent2}40;
        display:flex; align-items:center; justify-content:center; gap:8px;
      }

      .game-wrap {
        max-width:1100px; margin:0 auto; padding:20px;
        animation: fadeIn 0.5s ease;
      }
      .game-topbar {
        display:flex; justify-content:space-between; align-items:center;
        flex-wrap:wrap; gap:12px; margin-bottom:24px;
      }
      .game-logo {
        font-size:1.5rem; font-weight:900;
        background: linear-gradient(135deg, ${accent}, ${accent2});
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        display:flex; align-items:center; gap:10px;
      }
      .topbar-btns { display:flex; gap:10px; align-items:center; }
      .user-badge {
        display:flex; align-items:center; gap:8px;
        padding:8px 14px; background:${bgCard}; border:1px solid ${border};
        border-radius:12px; font-size:0.85rem; font-weight:600;
      }
      .icon-btn {
        width:44px; height:44px; border-radius:12px; border:1px solid ${border};
        background:${bgCard}; color:${text}; font-size:1.2rem;
        cursor:pointer; display:flex; align-items:center; justify-content:center;
        transition: all 0.3s;
      }
      .icon-btn:hover {
        border-color:${accent}; transform:scale(1.1);
        box-shadow: 0 0 20px ${dark ? 'rgba(0,212,255,0.2)' : 'rgba(0,212,255,0.1)'};
        color:${accent};
      }

      .stats-grid {
        display:grid; grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
        gap:14px; margin-bottom:24px;
      }
      .stat-card {
        background:${bgCard}; border:1px solid ${border}; border-radius:16px;
        padding:18px; text-align:center; transition: all 0.3s;
      }
      .stat-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 30px ${dark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.06)'};
      }
      .stat-icon {
        font-size:1.8rem; margin-bottom:6px;
        display:flex; justify-content:center;
        color:${accent};
      }
      .stat-val { font-size:1.5rem; font-weight:900; color:${accent}; }
      .stat-label { font-size:0.8rem; color:${textSec}; margin-top:4px; }

      .board-area {
        display:grid; grid-template-columns: 1fr 320px; gap:24px;
        align-items:start;
      }
      @media(max-width:900px) {
        .board-area { grid-template-columns:1fr; }
      }

      .board-wrap {
        background:${bgCard}; border:1px solid ${border}; border-radius:20px;
        padding:16px; position:relative; overflow:hidden;
      }
      .board-wrap::after {
        content:''; position:absolute; inset:0; border-radius:20px;
        pointer-events:none; animation: borderGlow 3s ease-in-out infinite;
        border: 2px solid transparent;
      }
      .board-grid {
        display:grid; grid-template-columns: repeat(10, 1fr); gap:3px;
      }
      .cell {
        aspect-ratio:1; border-radius:8px; display:flex; align-items:center;
        justify-content:center; font-size:0.7rem; font-weight:700;
        position:relative; transition: all 0.3s; cursor:default;
        border:1px solid ${border}; flex-direction:column;
      }
      .cell:hover { transform:scale(1.08); z-index:2; }
      .cell-even { background: ${dark ? '#1e2340' : '#eef1f8'}; }
      .cell-odd { background: ${dark ? '#252a4a' : '#e2e7f2'}; }
      .cell-snake { background: linear-gradient(135deg, #ff3366, #cc0044) !important; color:#fff; }
      .cell-ladder { background: linear-gradient(135deg, #00cc66, #009944) !important; color:#fff; }
      .cell-start { background: linear-gradient(135deg, ${accent}, #0088cc) !important; color:#fff; }
      .cell-end { background: linear-gradient(135deg, #ffaa00, #ff6600) !important; color:#fff; }
      .cell-num { font-size:0.6rem; opacity:0.7; margin-bottom:1px; }
      .cell-content {
        font-size:1.1rem; line-height:1;
        display:flex; align-items:center; justify-content:center;
      }
      .cell .players-on {
        display:flex; gap:2px; position:absolute; bottom:2px;
      }
      .player-dot {
        width:16px; height:16px; border-radius:50%;
        border:2px solid #fff; font-size:0.55rem;
        display:flex; align-items:center; justify-content:center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        color:#fff;
      }
      .p1-dot { background: ${accent}; }
      .p2-dot { background: ${accent2}; }

      .side-panel { display:flex; flex-direction:column; gap:16px; }
      .panel-card {
        background:${bgCard}; border:1px solid ${border}; border-radius:16px;
        padding:20px; transition: all 0.3s;
      }
      .panel-card:hover {
        box-shadow: 0 8px 25px ${dark ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.05)'};
      }
      .panel-title {
        font-size:1rem; font-weight:800; margin-bottom:14px;
        display:flex; align-items:center; gap:8px;
      }

      .dice-area { text-align:center; }
      .dice-btn {
        width:90px; height:90px; border-radius:20px; border:3px solid ${border};
        background: linear-gradient(135deg, ${bgSec}, ${bgCard});
        font-size:2.8rem; cursor:pointer; transition: all 0.3s;
        display:flex; align-items:center; justify-content:center;
        margin:0 auto 14px; color:${accent};
      }
      .dice-btn:hover:not(:disabled) {
        border-color:${accent}; transform:scale(1.1) rotate(5deg);
        box-shadow: 0 0 30px rgba(0,212,255,0.3);
      }
      .dice-btn:disabled { opacity:0.4; cursor:not-allowed; }
      .dice-btn.rolling { animation: shake 0.6s ease; }
      .turn-text {
        font-size:1rem; font-weight:700; color:${accent};
        display:flex; align-items:center; justify-content:center; gap:8px;
      }

      .log-list {
        max-height:200px; overflow-y:auto; display:flex;
        flex-direction:column; gap:6px;
      }
      .log-item {
        padding:8px 12px; border-radius:10px; font-size:0.8rem;
        background:${bgSec}; border:1px solid ${border};
        display:flex; align-items:center; gap:8px;
      }
      .log-icon { color:${accent}; font-size:1rem; }
      .log-time { font-size:0.7rem; color:${textSec}; margin-right:auto; direction:ltr; }

      .msg-bar {
        text-align:center; padding:16px; border-radius:14px;
        background: linear-gradient(135deg, ${dark ? 'rgba(0,212,255,0.08)' : 'rgba(0,212,255,0.06)'}, ${dark ? 'rgba(255,45,123,0.08)' : 'rgba(255,45,123,0.06)'});
        border:1px solid ${border}; font-weight:700; font-size:1rem;
        margin-bottom:20px; animation: fadeIn 0.3s ease;
        display:flex; align-items:center; justify-content:center; gap:10px;
      }

      .winner-overlay {
        position:fixed; inset:0; background:rgba(0,0,0,0.7);
        display:flex; align-items:center; justify-content:center;
        z-index:1000; animation: fadeIn 0.3s ease;
      }
      .winner-card {
        background:${bgCard}; border-radius:28px; padding:50px 40px;
        text-align:center; max-width:400px; width:90%;
        animation: slideUp 0.5s ease; border:2px solid ${accent};
        box-shadow: 0 0 60px rgba(0,212,255,0.3);
      }
      .winner-icon {
        font-size:4rem; margin-bottom:10px;
        animation: float 2s ease-in-out infinite;
        color:${accent};
        display:flex; justify-content:center;
      }
      .winner-title {
        font-size:2rem; font-weight:900; margin-bottom:10px;
        background: linear-gradient(135deg, ${accent}, ${accent2});
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
      }
      .winner-sub { color:${textSec}; margin-bottom:24px; }
      .btn-secondary {
        padding:14px 32px; font-size:1rem; font-weight:700; font-family:inherit;
        border:2px solid ${accent}; background:transparent; color:${accent};
        border-radius:14px; cursor:pointer; transition: all 0.3s;
        display:inline-flex; align-items:center; gap:8px;
      }
      .btn-secondary:hover {
        background:${accent}; color:#fff;
        box-shadow: 0 8px 25px rgba(0,212,255,0.3);
      }

      .confetti-piece {
        position:fixed; width:10px; height:10px; z-index:1001;
        animation: confetti-fall linear forwards; pointer-events:none;
      }

      .footer {
        text-align:center; padding:50px 20px 30px; margin-top:60px;
        border-top:1px solid ${border}; position:relative;
      }
      .footer::before {
        content:''; position:absolute; top:0; left:50%; transform:translateX(-50%);
        width:80px; height:3px; border-radius:4px;
        background: linear-gradient(90deg, ${accent}, ${accent2});
      }
      .footer-avatar {
        width:90px; height:90px; border-radius:50%;
        border:3px solid ${accent}; margin:0 auto 16px;
        display:flex; align-items:center; justify-content:center;
        font-size:2.5rem; background:${bgCard};
        box-shadow: 0 0 30px rgba(0,212,255,0.2);
        animation: glow 3s ease-in-out infinite;
        color:${accent};
      }
      .footer-name {
        font-size:1.4rem; font-weight:900;
        background: linear-gradient(135deg, ${accent}, ${accent2});
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        margin-bottom:6px;
      }
      .footer-role {
        color:${textSec}; font-size:0.9rem; margin-bottom:20px;
        display:flex; align-items:center; justify-content:center; gap:8px;
      }
      .footer-links { display:flex; gap:12px; justify-content:center; margin-bottom:20px; }
      .footer-link {
        width:42px; height:42px; border-radius:12px; border:1px solid ${border};
        background:${bgCard}; display:flex; align-items:center; justify-content:center;
        font-size:1.2rem; cursor:pointer; transition: all 0.3s; text-decoration:none;
        color:${text};
      }
      .footer-link:hover {
        border-color:${accent}; transform:translateY(-4px);
        box-shadow: 0 8px 20px rgba(0,212,255,0.2);
        color:${accent};
      }
      .footer-copy {
        font-size:0.8rem; color:${textSec};
        display:flex; align-items:center; justify-content:center; gap:6px;
      }
      .footer-version {
        display:inline-flex; align-items:center; gap:6px; margin-top:8px; padding:4px 14px;
        background: linear-gradient(135deg, ${accent}20, ${accent2}20);
        border-radius:20px; font-size:0.75rem; font-weight:700;
        color:${accent}; border:1px solid ${accent}30;
      }

      .guide-item {
        display:flex; align-items:center; gap:10px;
        padding:6px 0; font-size:0.85rem;
      }
      .guide-icon {
        color:${accent}; font-size:1.1rem;
        display:flex; align-items:center;
      }

      @media(max-width:600px) {
        .login-card { padding:36px 24px; }
        .game-logo { font-size:1.2rem; }
        .stats-grid { grid-template-columns: repeat(2,1fr); }
        .cell { font-size:0.55rem; border-radius:5px; }
        .cell-content { font-size:0.85rem; }
        .cell-num { font-size:0.5rem; }
        .player-dot { width:12px; height:12px; font-size:0.5rem; }
        .dice-btn { width:70px; height:70px; font-size:2.2rem; }
        .board-wrap { padding:10px; }
        .board-grid { gap:2px; }
        .user-badge span { display:none; }
      }
    `}</style>
  );
};

// ═══════════════════════════════════════════════════════
// 🗺️ BOARD CONFIG
// ═══════════════════════════════════════════════════════
const SNAKES = { 16:6, 47:26, 49:11, 56:53, 62:19, 64:60, 87:24, 93:73, 95:75, 98:78 };
const LADDERS = { 1:38, 4:14, 9:31, 21:42, 28:84, 36:44, 51:67, 71:91, 80:100 };

const DICE_FACES = [
  <CgDice1 key="1" />,
  <CgDice2 key="2" />,
  <CgDice3 key="3" />,
  <CgDice4 key="4" />,
  <CgDice5 key="5" />,
  <CgDice6 key="6" />
];

const CELL_EMOJIS = {};
Object.keys(SNAKES).forEach(k => CELL_EMOJIS[k] = 'snake');
Object.keys(LADDERS).forEach(k => { if(!CELL_EMOJIS[k]) CELL_EMOJIS[k] = 'ladder'; });

// ═══════════════════════════════════════════════════════
// 🔄 STORAGE UTILS
// ═══════════════════════════════════════════════════════
const store = {
  get: (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
  remove: (k) => localStorage.removeItem(k),
};

// ═══════════════════════════════════════════════════════
// 🔢 BOARD NUMBER MAPPING
// ═══════════════════════════════════════════════════════
function getBoardCells() {
  const cells = [];
  for (let row = 0; row < 10; row++) {
    const isEvenRow = row % 2 === 0;
    for (let col = 0; col < 10; col++) {
      const num = isEvenRow
        ? (9 - row) * 10 + col + 1
        : (9 - row) * 10 + (9 - col) + 1;
      cells.push(num);
    }
  }
  return cells;
}

// ═══════════════════════════════════════════════════════
// ⏳ LOADING SCREEN
// ═══════════════════════════════════════════════════════
function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('بارگذاری منابع');

  useEffect(() => {
    const phases = ['بارگذاری منابع', 'آماده‌سازی بازی', 'اتصال به سرور'];
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 4 + 1;
      if (p > 100) p = 100;
      setProgress(Math.floor(p));
      setPhase(phases[Math.min(Math.floor(p / 35), 2)]);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 400);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-wrap">
      <div className="loader-ring">
        <div /><div /><div />
        <span className="loader-icon"><RiDiceFill /></span>
      </div>
      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: `${progress}%`, animation:'none', transition:'width 0.1s' }} />
      </div>
      <p className="load-text">{phase}... {progress}%</p>
      <p className="load-sub">
        <RiRocketLine /> بازی مار و پله v2.0
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 🔐 LOGIN SCREEN
// ═══════════════════════════════════════════════════════
function LoginScreen({ onLogin }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!user.trim()) return setError('لطفاً نام کاربری را وارد کنید');
    if (!pass.trim()) return setError('لطفاً رمز عبور را وارد کنید');
    if (pass.length < 3) return setError('رمز عبور باید حداقل ۳ کاراکتر باشد');

    setLoading(true);
    setTimeout(() => {
      const userData = {
        username: user.trim(),
        loginTime: new Date().toISOString(),
      };
      store.set('snakeGame_user', userData);
      store.set('snakeGame_history', [
        ...(store.get('snakeGame_history') || []),
        { type: 'login', time: userData.loginTime, user: user.trim() }
      ]);
      onLogin(userData);
    }, 800);
  };

  return (
    <div className="login-wrap">
      <div className="login-card">
        <div className="login-icon"><MdSportsEsports /></div>
        <h1 className="login-title">مار و پله</h1>
        <p className="login-sub">
          <RiRobotLine /> ورود به بازی آنلاین با هوش مصنوعی
        </p>

        {error && (
          <div className="login-error">
            <FaExclamationTriangle /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-grp">
            <label><FaUser /> نام کاربری</label>
            <div className="input-wrap">
              <input
                className="form-input"
                type="text"
                placeholder="نام خود را وارد کنید..."
                value={user}
                onChange={e => setUser(e.target.value)}
                autoFocus
              />
              <span className="input-icon"><IoPersonOutline /></span>
            </div>
          </div>
          <div className="form-grp">
            <label><FaLock /> رمز عبور</label>
            <div className="input-wrap">
              <input
                className="form-input"
                type={showPass ? 'text' : 'password'}
                placeholder="رمز عبور..."
                value={pass}
                onChange={e => setPass(e.target.value)}
              />
              <span className="input-icon"><IoLockClosedOutline /></span>
              <button
                type="button"
                className="toggle-pass"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
          </div>
          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? (
              <><RiLoaderLine style={{animation:'spin 1s linear infinite'}} /> در حال ورود...</>
            ) : (
              <><FaRocket /> ورود به بازی</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 🎲 DICE COMPONENT
// ═══════════════════════════════════════════════════════
function Dice({ value, rolling, onClick, disabled }) {
  return (
    <div className="dice-area">
      <button
        className={`dice-btn ${rolling ? 'rolling' : ''}`}
        onClick={onClick}
        disabled={disabled || rolling}
      >
        {rolling ? <RiDiceFill style={{animation:'spin 0.5s linear infinite'}} /> : DICE_FACES[(value || 1) - 1]}
      </button>
      {value > 0 && !rolling && (
        <div style={{ fontSize:'0.9rem', color:'var(--text-secondary,#888)', marginTop:4, display:'flex', alignItems:'center', justifyContent:'center', gap:6 }}>
          عدد: <strong style={{ color:'#00d4ff' }}>{value}</strong>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 🏆 WINNER OVERLAY
// ═══════════════════════════════════════════════════════
function WinnerOverlay({ winner, onRestart }) {
  const colors = ['#ff3366','#00d4ff','#ffaa00','#00ff88','#ff00aa','#ff6600','#aa66ff'];
  return (
    <>
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            background: colors[i % colors.length],
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            width: `${6 + Math.random() * 8}px`,
            height: `${6 + Math.random() * 8}px`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <div className="winner-overlay" onClick={onRestart}>
        <div className="winner-card" onClick={e => e.stopPropagation()}>
          <div className="winner-icon">
            {winner === 'player' ? <FaTrophy /> : <FaSadTear />}
          </div>
          <h2 className="winner-title">
            {winner === 'player' ? 'شما برنده شدید!' : 'کامپیوتر برنده شد!'}
          </h2>
          <p className="winner-sub">
            {winner === 'player'
              ? 'تبریک! شما بازی مار و پله را بردید!'
              : 'دفعه بعد حتماً می‌بری!'}
            {winner === 'player' && <FaFistRaised style={{ marginLeft: 8, color: '#00d4ff' }} />}
          </p>
          <button className="btn-secondary" onClick={onRestart}>
            <FaRedo /> بازی مجدد
          </button>
        </div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════
// 🎮 GAME SCREEN
// ═══════════════════════════════════════════════════════
function GameScreen({ user, dark, onToggleTheme, onLogout }) {
  const boardCells = React.useMemo(() => getBoardCells(), []);

  const [playerPos, setPlayerPos] = useState(1);
  const [aiPos, setAiPos] = useState(1);
  const [diceVal, setDiceVal] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [turn, setTurn] = useState('player');
  const [message, setMessage] = useState('تاس بزنید تا بازی شروع شود!');
  const [winner, setWinner] = useState(null);
  const [logs, setLogs] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const logRef = useRef(null);

  // Load saved state
  useEffect(() => {
    const saved = store.get('snakeGame_state');
    if (saved && !saved.winner) {
      setPlayerPos(saved.playerPos || 1);
      setAiPos(saved.aiPos || 1);
      setTurn(saved.turn || 'player');
      setDiceVal(saved.diceVal || 0);
      setLogs(saved.logs || []);
      setMoveCount(saved.moveCount || 0);
      setMessage(saved.message || 'تاس بزنید!');
    }
  }, []);

  // Save state on change
  useEffect(() => {
    if (playerPos > 1 || aiPos > 1 || moveCount > 0) {
      store.set('snakeGame_state', { playerPos, aiPos, turn, diceVal, logs, moveCount, message, winner });
    }
  }, [playerPos, aiPos, turn, diceVal, logs, moveCount, message, winner]);

  // Auto scroll logs
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [logs]);

  const addLog = useCallback((text, icon = 'note') => {
    const time = new Date().toLocaleTimeString('fa-IR', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
    setLogs(prev => [...prev.slice(-50), { text, icon, time }]);
  }, []);

  const getLogIcon = (icon) => {
    switch(icon) {
      case 'player': return <FaUser style={{color:'#00d4ff'}} />;
      case 'ai': return <FaRobot style={{color:'#ff2d7b'}} />;
      case 'snake': return <GiSnake style={{color:'#ff3366'}} />;
      case 'ladder': return <GiLadder style={{color:'#00cc66'}} />;
      case 'win': return <FaTrophy style={{color:'#ffaa00'}} />;
      case 'restart': return <FaRedo style={{color:'#00d4ff'}} />;
      default: return <FaPen style={{color:'#7a7f9a'}} />;
    }
  };

  const applyRules = useCallback((pos) => {
    if (SNAKES[pos]) {
      return { newPos: SNAKES[pos], action: 'snake', from: pos, to: SNAKES[pos] };
    }
    if (LADDERS[pos]) {
      return { newPos: LADDERS[pos], action: 'ladder', from: pos, to: LADDERS[pos] };
    }
    return { newPos: pos, action: 'none' };
  }, []);

  const rollDice = useCallback(() => {
    if (rolling || winner) return;
    setRolling(true);
    setMessage('در حال چرخش تاس...');

    const val = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      setDiceVal(val);
      setRolling(false);
      setMoveCount(m => m + 1);

      if (turn === 'player') {
        const newPos = Math.min(playerPos + val, 100);
        const { newPos: finalPos, action, from, to } = applyRules(newPos);

        if (newPos === playerPos + val && newPos <= 100) {
          let msg = `شما ${val} آوردید → خانه ${newPos}`;
          let logIcon = 'player';
          if (action === 'snake') {
            msg += ` مار! سقوط به خانه ${to}`;
            logIcon = 'snake';
          }
          if (action === 'ladder') {
            msg += ` نردبان! صعود به خانه ${to}`;
            logIcon = 'ladder';
          }
          setMessage(msg);
          addLog(msg, logIcon);
        }

        setPlayerPos(finalPos);

        if (finalPos >= 100) {
          setWinner('player');
          addLog('شما برنده شدید!', 'win');
          return;
        }

        setTurn('ai');
        setTimeout(() => aiTurn(val), 1200);
      }
    }, 700);
  }, [rolling, winner, turn, playerPos, applyRules, addLog]);

  const aiTurn = useCallback((playerDice) => {
    if (winner) return;
    setRolling(true);
    setMessage('کامپیوتر در حال تاس زدن...');

    setTimeout(() => {
      const val = Math.floor(Math.random() * 6) + 1;
      setDiceVal(val);
      setRolling(false);

      setAiPos(prev => {
        const newPos = Math.min(prev + val, 100);
        const { newPos: finalPos, action, to } = applyRules(newPos);

        let msg = `کامپیوتر ${val} آورد → خانه ${newPos}`;
        let logIcon = 'ai';
        if (action === 'snake') {
          msg += ` سقوط به ${to}`;
          logIcon = 'snake';
        }
        if (action === 'ladder') {
          msg += ` صعود به ${to}`;
          logIcon = 'ladder';
        }
        setMessage(msg);
        addLog(msg, logIcon);

        if (finalPos >= 100) {
          setTimeout(() => setWinner('ai'), 300);
          addLog('کامپیوتر برنده شد!', 'win');
          return finalPos;
        }

        setTimeout(() => {
          setTurn('player');
          setMessage('نوبت شماست! تاس بزنید');
        }, 600);

        return finalPos;
      });
    }, 800);
  }, [winner, applyRules, addLog]);

  const restart = useCallback(() => {
    setPlayerPos(1);
    setAiPos(1);
    setDiceVal(0);
    setTurn('player');
    setWinner(null);
    setLogs([]);
    setMoveCount(0);
    setMessage('تاس بزنید تا بازی شروع شود!');
    store.remove('snakeGame_state');
    addLog('بازی جدید شروع شد', 'restart');
  }, [addLog]);

  return (
    <div className="game-wrap">
      {/* TOP BAR */}
      <div className="game-topbar">
        <div className="game-logo">
          <GiSnake /> مار و پله
        </div>
        <div className="topbar-btns">
          <div className="user-badge">
            <FaUser /> <span>{user.username}</span>
          </div>
          <button className="icon-btn" onClick={onToggleTheme} title="تغییر تم">
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <button className="icon-btn" onClick={onLogout} title="خروج">
            <FaSignOutAlt />
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><FaMapMarkerAlt /></div>
          <div className="stat-val">{playerPos}</div>
          <div className="stat-label">موقعیت شما</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{color:'#ff2d7b'}}><FaRobot /></div>
          <div className="stat-val">{aiPos}</div>
          <div className="stat-label">موقعیت کامپیوتر</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FaBullseye /></div>
          <div className="stat-val">{moveCount}</div>
          <div className="stat-label">تعداد حرکات</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon"><FaRedo /></div>
          <div className="stat-val">{turn === 'player' ? 'شما' : <FaRobot style={{fontSize:'1.2rem'}} />}</div>
          <div className="stat-label">نوبت</div>
        </div>
      </div>

      {/* MESSAGE */}
      <div className="msg-bar">
        <RiDiceLine /> {message}
      </div>

      {/* BOARD + SIDE */}
      <div className="board-area">
        {/* BOARD */}
        <div className="board-wrap">
          <div className="board-grid">
            {boardCells.map((num, idx) => {
              const isSnake = !!SNAKES[num];
              const isLadder = !!LADDERS[num];
              const isStart = num === 1;
              const isEnd = num === 100;
              const hasP1 = playerPos === num;
              const hasP2 = aiPos === num;

              let cls = 'cell ' + (idx % 2 === 0 ? 'cell-even' : 'cell-odd');
              if (isSnake) cls += ' cell-snake';
              if (isLadder) cls += ' cell-ladder';
              if (isStart) cls += ' cell-start';
              if (isEnd) cls += ' cell-end';

              return (
                <div key={num} className={cls}>
                  <span className="cell-num">{num}</span>
                  <span className="cell-content">
                    {isSnake ? <GiSnake /> : isLadder ? <GiLadder /> : isStart ? <FaFlag /> : isEnd ? <FaTrophy /> : ''}
                  </span>
                  {(hasP1 || hasP2) && (
                    <div className="players-on">
                      {hasP1 && <div className="player-dot p1-dot"><FaUser style={{fontSize:'0.5rem'}} /></div>}
                      {hasP2 && <div className="player-dot p2-dot"><FaRobot style={{fontSize:'0.5rem'}} /></div>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SIDE PANEL */}
        <div className="side-panel">
          <div className="panel-card">
            <div className="panel-title">
              <RiDiceFill /> تاس
            </div>
            <Dice
              value={diceVal}
              rolling={rolling}
              onClick={rollDice}
              disabled={turn !== 'player' || !!winner}
            />
            <div className="turn-text">
              {turn === 'player' ? <><FaUser /> نوبت شماست</> : <><FaRobot /> نوبت کامپیوتر</>}
            </div>
          </div>

          <div className="panel-card">
            <div className="panel-title">
              <FaScroll /> تاریخچه حرکات
            </div>
            <div className="log-list" ref={logRef}>
              {logs.length === 0 ? (
                <div style={{ textAlign:'center', color:'#888', padding:20, fontSize:'0.85rem', display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
                  <FaScroll style={{fontSize:'1.5rem', opacity:0.3}} />
                  هنوز حرکتی انجام نشده
                </div>
              ) : logs.map((log, i) => (
                <div key={i} className="log-item">
                  <span className="log-icon">{getLogIcon(log.icon)}</span>
                  <span style={{ flex:1 }}>{log.text}</span>
                  <span className="log-time">{log.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-card">
            <div className="panel-title">
              <FaBook /> راهنما
            </div>
            <div style={{ fontSize:'0.82rem', lineHeight:1.8, color: dark ? '#aab' : '#556' }}>
              <div className="guide-item">
                <span className="guide-icon"><GiSnake /></span>
                <span><strong>مار:</strong> سقوط به خانه پایین‌تر</span>
              </div>
              <div className="guide-item">
                <span className="guide-icon"><GiLadder /></span>
                <span><strong>نردبان:</strong> صعود به خانه بالاتر</span>
              </div>
              <div className="guide-item">
                <span className="guide-icon"><RiDiceFill /></span>
                <span>روی تاس کلیک کنید</span>
              </div>
              <div className="guide-item">
                <span className="guide-icon"><FaTrophy /></span>
                <span>اولین نفری که به ۱۰۰ برسد برنده است</span>
              </div>
            </div>
          </div>

          <button className="btn-secondary" onClick={restart} style={{ width:'100%', justifyContent:'center' }}>
            <FaRedo /> شروع مجدد
          </button>
        </div>
      </div>

      {/* WINNER */}
      {winner && <WinnerOverlay winner={winner} onRestart={restart} />}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 🦶 FOOTER
// ═══════════════════════════════════════════════════════
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-avatar"><FaLaptopCode /></div>
      <div className="footer-name">امیرعلی محمدی</div>
      <div className="footer-role">
        <FaRocket /> توسعه‌دهنده فول‌استک | طراح بازی
      </div>
      <div className="footer-links">
        <a className="footer-link" href="#" title="GitHub"><FaGithub /></a>
        <a className="footer-link" href="#" title="LinkedIn"><FaLinkedin /></a>
        <a className="footer-link" href="#" title="Twitter"><FaTwitter /></a>
        <a className="footer-link" href="#" title="Telegram"><FaTelegram /></a>
        <a className="footer-link" href="#" title="Email"><FaEnvelope /></a>
      </div>
      <div className="footer-copy">
        ساخته شده با <FaHeart style={{color:'#ff2d7b'}} /> و <SiReact style={{color:'#61dafb'}} /> React
      </div>
      <div className="footer-version">
        <FaStar /> نسخه 2.0.0
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════
// 🏗️ MAIN APP
// ═══════════════════════════════════════════════════════
export default function App() {
  const [phase, setPhase] = useState('loading');
  const [user, setUser] = useState(null);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = store.get('snakeGame_theme');
    if (savedTheme !== null) setDark(savedTheme);

    const savedUser = store.get('snakeGame_user');
    if (savedUser) {
      setUser(savedUser);
      setPhase('game');
    }
  }, []);

  const handleLoadingDone = useCallback(() => setPhase('login'), []);

  const handleLogin = useCallback((userData) => {
    setUser(userData);
    setPhase('game');
  }, []);

  const handleLogout = useCallback(() => {
    store.remove('snakeGame_user');
    store.remove('snakeGame_state');
    setUser(null);
    setPhase('login');
  }, []);

  const toggleTheme = useCallback(() => {
    setDark(prev => {
      const next = !prev;
      store.set('snakeGame_theme', next);
      return next;
    });
  }, []);

  return (
    <>
      <GlobalStyles dark={dark} />

      {phase === 'loading' && <LoadingScreen onComplete={handleLoadingDone} />}
      {phase === 'login' && <LoginScreen onLogin={handleLogin} />}
      {phase === 'game' && (
        <>
          <GameScreen
            user={user}
            dark={dark}
            onToggleTheme={toggleTheme}
            onLogout={handleLogout}
          />
          <Footer />
        </>
      )}
    </>
  );
}