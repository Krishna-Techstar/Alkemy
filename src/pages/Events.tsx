import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Gamepad2, Music, Palette, ChevronRight, Search, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import ArcadeCard from '@/components/ArcadeEventCard';
import GlitchText from '@/components/GlitchText';

const technicalEvents = [
  {
    id: 'tech-1',
    title: 'CODE DEMOGORGON',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    date: 'Feb 15',
    time: '09:00-18:00',
    location: 'Main Auditorium',
    fee: '₹500',
    prizePool: '₹1,00,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'tech-2',
    title: 'WEB WARRIORS',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
    date: 'Feb 16',
    time: '10:00-17:00',
    location: 'CS Lab 1',
    fee: '₹400',
    prizePool: '₹80,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'tech-3',
    title: 'DATA NEXUS',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1516383740770-fbdc00924c50?w=600&h=400&fit=crop',
    date: 'Feb 17',
    time: '14:00-19:00',
    location: 'CS Lab 2',
    fee: '₹450',
    prizePool: '₹90,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'tech-4',
    title: 'CYBER SHIELD',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1506399773649-6f3ee62b8b27?w=600&h=400&fit=crop',
    date: 'Feb 18',
    time: '11:00-16:00',
    location: 'CS Block',
    fee: '₹350',
    prizePool: '₹70,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'tech-5',
    title: 'AI ALGORITHM',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1677442d019cecf31da389cf990db51a51a055ffe?w=600&h=400&fit=crop',
    date: 'Feb 19',
    time: '09:30-17:30',
    location: 'Main Auditorium',
    fee: '₹550',
    prizePool: '₹1,10,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'tech-6',
    title: 'BINARY BLITZ',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1517694712262-b8890f1aaaa5?w=600&h=400&fit=crop',
    date: 'Feb 20',
    time: '13:00-18:00',
    location: 'Lab Block',
    fee: '₹300',
    prizePool: '₹60,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'tech-7',
    title: 'CIRCUIT MASTER',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
    date: 'Feb 21',
    time: '10:00-15:00',
    location: 'Electronics Lab',
    fee: '₹400',
    prizePool: '₹75,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'tech-8',
    title: 'MOBILE MAVEN',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1512941691920-25bda61d23d5?w=600&h=400&fit=crop',
    date: 'Feb 22',
    time: '09:00-17:00',
    location: 'CS Lab 1',
    fee: '₹480',
    prizePool: '₹95,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'tech-9',
    title: 'CLOUD COMPUTE',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846f88e?w=600&h=400&fit=crop',
    date: 'Feb 23',
    time: '14:00-20:00',
    location: 'Main Hall',
    fee: '₹520',
    prizePool: '₹1,05,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'tech-10',
    title: 'HAWKINS AV CLUB',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    date: 'Feb 24',
    time: '10:00-16:00',
    location: 'Lab Block',
    fee: '₹600',
    prizePool: '₹1,50,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'tech-11',
    title: 'QUANTUM QUEST',
    category: 'TECHNICAL',
    icon: <Code size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1620936356578-46cd30ff860d?w=600&h=400&fit=crop',
    date: 'Feb 25',
    time: '11:00-18:00',
    location: 'CS Block',
    fee: '₹550',
    prizePool: '₹1,20,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
];

const culturalEvents = [
  {
    id: 'cult-1',
    title: 'UPSIDE DOWN BEATS',
    category: 'CULTURAL',
    icon: <Music size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=600&h=400&fit=crop',
    date: 'Feb 15',
    time: '18:00-22:00',
    location: 'Main Stage',
    fee: '₹250',
    prizePool: '₹60,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
  {
    id: 'cult-2',
    title: 'STRANGER ARTS',
    category: 'CULTURAL',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    date: 'Feb 16',
    time: '14:00-18:00',
    location: 'Art Studio',
    fee: '₹150',
    prizePool: '₹40,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
  {
    id: 'cult-3',
    title: 'DANCE DIMENSION',
    category: 'CULTURAL',
    icon: <Music size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
    date: 'Feb 17',
    time: '18:30-22:00',
    location: 'Main Stage',
    fee: '₹200',
    prizePool: '₹50,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
  {
    id: 'cult-4',
    title: 'DRAMA DELUXE',
    category: 'CULTURAL',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&h=400&fit=crop',
    date: 'Feb 18',
    time: '19:00-21:30',
    location: 'Auditorium Hall',
    fee: '₹180',
    prizePool: '₹45,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
  {
    id: 'cult-5',
    title: 'POETRY PLATFORM',
    category: 'CULTURAL',
    icon: <Music size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    date: 'Feb 19',
    time: '17:00-20:00',
    location: 'Central Hall',
    fee: '₹100',
    prizePool: '₹30,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
  {
    id: 'cult-6',
    title: 'FASHION FINALE',
    category: 'CULTURAL',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop',
    date: 'Feb 20',
    time: '18:00-21:00',
    location: 'Grand Stage',
    fee: '₹220',
    prizePool: '₹55,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
  {
    id: 'cult-7',
    title: 'COMEDY CARNIVAL',
    category: 'CULTURAL',
    icon: <Music size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1514306688772-2b0c5bfb29d3?w=600&h=400&fit=crop',
    date: 'Feb 21',
    time: '19:30-22:00',
    location: 'Main Stage',
    fee: '₹150',
    prizePool: '₹35,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
  {
    id: 'cult-8',
    title: 'JAZZ JUNCTION',
    category: 'CULTURAL',
    icon: <Music size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop',
    date: 'Feb 22',
    time: '20:00-23:00',
    location: 'Music Hall',
    fee: '₹280',
    prizePool: '₹65,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
  {
    id: 'cult-9',
    title: 'PHOTOGRAPHY FEST',
    category: 'CULTURAL',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1456307156835-f9b2b0ee2eb7?w=600&h=400&fit=crop',
    date: 'Feb 23',
    time: '10:00-17:00',
    location: 'Art Block',
    fee: '₹120',
    prizePool: '₹32,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
  {
    id: 'cult-10',
    title: 'INSTRUMENTAL IDOL',
    category: 'CULTURAL',
    icon: <Music size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1466618262305-50218a9ebf60?w=600&h=400&fit=crop',
    date: 'Feb 24',
    time: '17:00-21:00',
    location: 'Music Wing',
    fee: '₹200',
    prizePool: '₹50,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
  {
    id: 'cult-11',
    title: 'DOCUMENTARY DIVE',
    category: 'CULTURAL',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop',
    date: 'Feb 25',
    time: '15:00-18:30',
    location: 'Screening Hall',
    fee: '₹100',
    prizePool: '₹25,000',
    glowColor: 'hsla(0, 100%, 56%, 0.6)',
    neonColor: '#FF2B2B',
  },
];

const esportsEvents = [
  {
    id: 'esports-1',
    title: 'ARCADE MADNESS',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1538481143235-a9d432e0c323?w=600&h=400&fit=crop',
    date: 'Feb 15',
    time: '15:00-21:00',
    location: 'Game Arena',
    fee: '₹300',
    prizePool: '₹75,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
  {
    id: 'esports-2',
    title: 'CS GO CHAMPION',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1534444176404-f75d988be66c?w=600&h=400&fit=crop',
    date: 'Feb 16',
    time: '14:00-20:00',
    location: 'Gaming Hall',
    fee: '₹400',
    prizePool: '₹1,00,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
  {
    id: 'esports-3',
    title: 'VALORANT VAULT',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1571847104046-e7e1446d64d9?w=600&h=400&fit=crop',
    date: 'Feb 17',
    time: '16:00-22:00',
    location: 'Arena Block',
    fee: '₹350',
    prizePool: '₹85,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
  {
    id: 'esports-4',
    title: 'DOTA DOMINATOR',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=600&h=400&fit=crop',
    date: 'Feb 18',
    time: '17:00-23:00',
    location: 'Gaming Hall',
    fee: '₹420',
    prizePool: '₹1,10,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
  {
    id: 'esports-5',
    title: 'MOBILE LEGENDS',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70674ce0?w=600&h=400&fit=crop',
    date: 'Feb 19',
    time: '15:30-21:00',
    location: 'Game Arena',
    fee: '₹250',
    prizePool: '₹60,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
  {
    id: 'esports-6',
    title: 'CALL OF DUTY',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1538419255657-48131f751fcc?w=600&h=400&fit=crop',
    date: 'Feb 20',
    time: '14:00-20:00',
    location: 'Arena Block',
    fee: '₹380',
    prizePool: '₹90,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
  {
    id: 'esports-7',
    title: 'OVERWATCH OMEGA',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1571847104046-e7e1446d64d9?w=600&h=400&fit=crop',
    date: 'Feb 21',
    time: '15:00-21:30',
    location: 'Gaming Hall',
    fee: '₹330',
    prizePool: '₹80,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
  {
    id: 'esports-8',
    title: 'FORTNITE FRENZY',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=400&fit=crop',
    date: 'Feb 22',
    time: '16:00-22:00',
    location: 'Game Arena',
    fee: '₹300',
    prizePool: '₹70,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
  {
    id: 'esports-9',
    title: 'PUBG PARAMOUNT',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1560252585-0e4a7ebf9b1c?w=600&h=400&fit=crop',
    date: 'Feb 23',
    time: '14:30-20:30',
    location: 'Arena Block',
    fee: '₹280',
    prizePool: '₹65,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
  {
    id: 'esports-10',
    title: 'LEAGUE LEGEND',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    date: 'Feb 24',
    time: '17:00-23:00',
    location: 'Gaming Hall',
    fee: '₹410',
    prizePool: '₹1,05,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
  {
    id: 'esports-11',
    title: 'MINECRAFT MASTER',
    category: 'ESPORTS',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1559305029-2b79f3f8f97e?w=600&h=400&fit=crop',
    date: 'Feb 25',
    time: '15:00-21:00',
    location: 'Game Arena',
    fee: '₹200',
    prizePool: '₹50,000',
    glowColor: 'hsla(168, 100%, 48%, 0.6)',
    neonColor: '#00F5D4',
  },
];

const sportsEvents = [
  {
    id: 'sports-1',
    title: 'FOOTBALL FEVER',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
    date: 'Feb 15',
    time: '07:00-18:00',
    location: 'Sports Ground',
    fee: '₹500',
    prizePool: '₹1,00,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'sports-2',
    title: 'BADMINTON BATTLE',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1611339555312-e607c04352fd?w=600&h=400&fit=crop',
    date: 'Feb 16',
    time: '08:00-17:00',
    location: 'Sports Complex',
    fee: '₹300',
    prizePool: '₹60,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'sports-3',
    title: 'VOLLEYBALL VORTEX',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
    date: 'Feb 17',
    time: '09:00-18:00',
    location: 'Court Hall',
    fee: '₹350',
    prizePool: '₹70,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'sports-4',
    title: 'CRICKET CLASH',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1445621684183-74489b95a41b?w=600&h=400&fit=crop',
    date: 'Feb 18',
    time: '07:30-17:30',
    location: 'Cricket Field',
    fee: '₹450',
    prizePool: '₹90,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'sports-5',
    title: 'BASKETBALL BLITZ',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1546519638-68711109d298?w=600&h=400&fit=crop',
    date: 'Feb 19',
    time: '08:00-17:00',
    location: 'Gym Hall',
    fee: '₹380',
    prizePool: '₹80,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'sports-6',
    title: 'TENNIS TOURNAMENT',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34c8?w=600&h=400&fit=crop',
    date: 'Feb 20',
    time: '06:00-18:00',
    location: 'Tennis Court',
    fee: '₹320',
    prizePool: '₹65,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'sports-7',
    title: 'TABLE TENNIS TROPHY',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    date: 'Feb 21',
    time: '09:00-17:00',
    location: 'TT Hall',
    fee: '₹250',
    prizePool: '₹50,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'sports-8',
    title: 'ATHLETICS ARENA',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1450747132835-c51cebae62cc?w=600&h=400&fit=crop',
    date: 'Feb 22',
    time: '07:00-16:00',
    location: 'Track Field',
    fee: '₹400',
    prizePool: '₹85,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'sports-9',
    title: 'SWIMMING SUPREME',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop',
    date: 'Feb 23',
    time: '06:00-12:00',
    location: 'Swimming Pool',
    fee: '₹280',
    prizePool: '₹55,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'sports-10',
    title: 'KABADDI KINGDOM',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1532438527246-5ac73c4fde47?w=600&h=400&fit=crop',
    date: 'Feb 24',
    time: '08:00-18:00',
    location: 'Open Ground',
    fee: '₹350',
    prizePool: '₹75,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
  {
    id: 'sports-11',
    title: 'CHESS CHAMPIONSHIP',
    category: 'SPORTS',
    icon: <Palette size={64} strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1570303008158-f9d5f3d3a5c6?w=600&h=400&fit=crop',
    date: 'Feb 25',
    time: '10:00-17:00',
    location: 'Board Room',
    fee: '₹200',
    prizePool: '₹45,000',
    glowColor: 'hsla(265, 75%, 67%, 0.6)',
    neonColor: '#9B5DE5',
  },
];

const allEvents = [...technicalEvents, ...culturalEvents, ...esportsEvents, ...sportsEvents];

const categories = [
  {
    id: 'technical',
    title: 'TECHNICAL',
    description: 'Hackathons, coding battles, and robotics challenges await the brightest minds.',
    icon: <Code size={64} strokeWidth={1.5} />,
    color: 'from-electric-purple to-neon-magenta',
    borderColor: 'border-electric-purple',
    count: technicalEvents.length,
  },
  {
    id: 'cultural',
    title: 'CULTURAL',
    description: 'Music, dance, drama, and art performances that ignite the soul.',
    icon: <Music size={64} strokeWidth={1.5} />,
    color: 'from-neon-red to-crimson-glow',
    borderColor: 'border-neon-red',
    count: culturalEvents.length,
  },
  {
    id: 'esports',
    title: 'ESPORTS',
    description: 'Gaming tournaments featuring the hottest titles and fiercest competition.',
    icon: <Gamepad2 size={64} strokeWidth={1.5} />,
    color: 'from-cyber-blue to-cyan-500',
    borderColor: 'border-cyber-blue',
    count: esportsEvents.length,
  },
  {
    id: 'sports',
    title: 'SPORTS',
    description: 'Athletic events that push limits and celebrate physical excellence.',
    icon: <Palette size={64} strokeWidth={1.5} />,
    color: 'from-neon-magenta to-pink-500',
    borderColor: 'border-neon-magenta',
    count: sportsEvents.length,
  },
];

const Events = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Get events for active category
  const getEventsByCategory = (categoryId: string) => {
    switch (categoryId) {
      case 'technical':
        return technicalEvents;
      case 'cultural':
        return culturalEvents;
      case 'esports':
        return esportsEvents;
      case 'sports':
        return sportsEvents;
      default:
        return [];
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/events/${categoryId}`);
  };

  return (
    <div className="relative min-h-screen bg-deep-space overflow-hidden">
      {/* Neon Glitch Background - inspired by VHS/Cyberpunk aesthetic */}
      <div className="fixed inset-0 z-0">
        {/* Dark purple base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0033] via-[#2d1b4e] to-[#1a0033]" />

        {/* Neon purple glow center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(280,80%,50%,0.25)_0%,_transparent_60%)]" />

        {/* Cyan horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent opacity-50 shadow-lg shadow-[#00F5D4]" />
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#00F5D4] to-transparent opacity-35" />
        <div className="absolute top-2/3 right-0 w-1/3 h-1.5 bg-gradient-to-l from-[#00F5D4] to-transparent opacity-45" />

        {/* Magenta/Pink vertical glitch lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#FF00FF] via-[#FF1493] to-transparent opacity-40 shadow-lg shadow-[#FF00FF]" />
        <div className="absolute right-1/3 top-1/4 h-1/2 w-1 bg-gradient-to-b from-transparent via-[#FF00FF] to-transparent opacity-45" />

        {/* Red accent lines */}
        <div className="absolute left-0 top-1/2 w-1/4 h-1 bg-gradient-to-r from-[#FF2B2B] to-transparent opacity-40" />
        <div className="absolute right-0 bottom-1/3 w-1/3 h-1 bg-gradient-to-l from-[#FF2B2B] via-[#FF00FF] to-transparent opacity-35" />

        {/* Additional cyan accents */}
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1 bg-gradient-to-l from-[#00F5D4] to-transparent opacity-40" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-1 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Scanlines - Heavy VHS effect */}
      <div className="fixed inset-0 z-20 pointer-events-none scanlines opacity-50" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Page Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs md:text-sm text-neon-red tracking-[0.3em] uppercase mb-4 font-retro">
              CHOOSE YOUR PATH
            </p>
            
            <GlitchText
              text="EVENT CATEGORIES"
              className="text-4xl md:text-6xl lg:text-7xl mb-4"
            />
            
            {/* Decorative lines */}
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="w-32 md:w-48 h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent shadow-glow-red" />
            </div>

            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              Explore a diverse range of events tailored to your interests. Find your perfect match and join the action.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <div className="relative max-w-2xl mx-auto">
              {/* Search Container */}
              <div className="relative group">
                {/* Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-red via-electric-purple to-neon-red rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />

                {/* Actual Input */}
                <div className="relative flex items-center bg-black/40 backdrop-blur-md border border-neon-red/30 rounded-lg px-6 py-4 focus-within:border-neon-red focus-within:shadow-glow-red transition-all duration-300">
                  {/* Search Icon */}
                  <Search className="text-neon-red mr-4 flex-shrink-0" size={24} />

                  {/* Input Field */}
                  <input
                    type="text"
                    placeholder="Search events, locations, or titles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none font-body"
                  />

                  {/* Clear Button */}
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => setSearchQuery('')}
                      className="ml-2 p-2 text-muted-foreground hover:text-neon-red transition-colors rounded-lg hover:bg-neon-red/10"
                    >
                      <X size={20} />
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 w-full">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="text-left w-full focus:outline-none"
              >
                <motion.div
                  className={`group relative overflow-hidden rounded-xl border transition-all duration-500 cursor-pointer h-80 w-full p-8 ${category.borderColor}`}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 20px 25px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-all duration-500`}
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm group-hover:bg-black/40 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <motion.div
                        className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4 group-hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-white">{category.icon}</div>
                      </motion.div>

                      <h3
                        className={`font-heading text-2xl md:text-3xl mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      >
                        {category.title}
                      </h3>

                      <p className="text-sm md:text-base text-gray-200">
                        {category.description}
                      </p>
                    </div>

                    <motion.div
                      className="flex items-center justify-between"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-xs md:text-sm font-display tracking-widest text-gray-300">
                        {category.count} EVENTS
                      </span>

                      <motion.div
                        className={`p-2 rounded-full border bg-gradient-to-r ${category.color}`}
                        whileHover={{ scale: 1.2, rotate: 90 }}
                      >
                        <ChevronRight size={20} className="text-white" />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.button>
            ))}
          </div>

          {/* Section Divider */}
          <motion.div
            className="my-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-electric-purple" />
              <div className="w-2 h-2 bg-electric-purple rounded-full" />
              <div className="font-retro text-xs text-muted-foreground">
                FEATURED EVENTS
              </div>
              <div className="w-2 h-2 bg-electric-purple rounded-full" />
              <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-electric-purple" />
            </div>
          </motion.div>

          {/* Featured Events Carousels */}
          <div className="space-y-16">
            {/* TECHNICAL Featured Events */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-heading text-white mb-2">
                  TECHNICAL FEATURED
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-electric-purple to-neon-magenta" />
              </div>

              {/* Horizontal Carousel */}
              <div className="relative w-full overflow-hidden">
                <motion.div
                  className="flex gap-12 w-full"
                  animate={{ x: [0, -100 * technicalEvents.length * 2] }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {[...technicalEvents.slice(0, 5), ...technicalEvents.slice(0, 5)].map((event, idx) => (
                    <motion.div
                      key={`tech-${idx}`}
                      className="flex-shrink-0 w-72"
                      whileHover={{ scale: 1.05, y: -10 }}
                    >
                      <ArcadeCard
                        id={event.id}
                        title={event.title}
                        category={event.category}
                        icon={event.icon}
                        image={event.image}
                        date={event.date}
                        time={event.time}
                        location={event.location}
                        fee={event.fee}
                        prizePool={event.prizePool}
                        description=""
                        glowColor={event.glowColor}
                        neonColor={event.neonColor}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* ESPORTS Featured Events */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-heading text-white mb-2">
                  ESPORTS FEATURED
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-cyber-blue to-cyan-500" />
              </div>

              {/* Horizontal Carousel */}
              <div className="relative w-full overflow-hidden">
                <motion.div
                  className="flex gap-12 w-full"
                  animate={{ x: [0, -100 * esportsEvents.length * 2] }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {[...esportsEvents.slice(0, 5), ...esportsEvents.slice(0, 5)].map((event, idx) => (
                    <motion.div
                      key={`esports-${idx}`}
                      className="flex-shrink-0 w-72"
                      whileHover={{ scale: 1.05, y: -10 }}
                    >
                      <ArcadeCard
                        id={event.id}
                        title={event.title}
                        category={event.category}
                        icon={event.icon}
                        image={event.image}
                        date={event.date}
                        time={event.time}
                        location={event.location}
                        fee={event.fee}
                        prizePool={event.prizePool}
                        description=""
                        glowColor={event.glowColor}
                        neonColor={event.neonColor}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* CULTURAL Featured Events */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-heading text-white mb-2">
                  CULTURAL FEATURED
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-neon-red to-crimson-glow" />
              </div>

              {/* Horizontal Carousel */}
              <div className="relative w-full overflow-hidden">
                <motion.div
                  className="flex gap-12 w-full"
                  animate={{ x: [0, -100 * culturalEvents.length * 2] }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {[...culturalEvents.slice(0, 5), ...culturalEvents.slice(0, 5)].map((event, idx) => (
                    <motion.div
                      key={`cultural-${idx}`}
                      className="flex-shrink-0 w-72"
                      whileHover={{ scale: 1.05, y: -10 }}
                    >
                      <ArcadeCard
                        id={event.id}
                        title={event.title}
                        category={event.category}
                        icon={event.icon}
                        image={event.image}
                        date={event.date}
                        time={event.time}
                        location={event.location}
                        fee={event.fee}
                        prizePool={event.prizePool}
                        description=""
                        glowColor={event.glowColor}
                        neonColor={event.neonColor}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* SPORTS Featured Events */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-heading text-white mb-2">
                  SPORTS FEATURED
                </h3>
                <div className="h-1 w-32 bg-gradient-to-r from-neon-magenta to-pink-500" />
              </div>

              {/* Horizontal Carousel */}
              <div className="relative w-full overflow-hidden">
                <motion.div
                  className="flex gap-12 w-full"
                  animate={{ x: [0, -100 * sportsEvents.length * 2] }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {[...sportsEvents.slice(0, 5), ...sportsEvents.slice(0, 5)].map((event, idx) => (
                    <motion.div
                      key={`sports-${idx}`}
                      className="flex-shrink-0 w-72"
                      whileHover={{ scale: 1.05, y: -10 }}
                    >
                      <ArcadeCard
                        id={event.id}
                        title={event.title}
                        category={event.category}
                        icon={event.icon}
                        image={event.image}
                        date={event.date}
                        time={event.time}
                        location={event.location}
                        fee={event.fee}
                        prizePool={event.prizePool}
                        description=""
                        glowColor={event.glowColor}
                        neonColor={event.neonColor}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Corner Star */}
      <motion.div
        className="fixed bottom-4 right-4 z-20"
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-8 h-8 text-foreground/50">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
export { technicalEvents, culturalEvents, esportsEvents, sportsEvents };
