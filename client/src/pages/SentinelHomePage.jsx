import React from 'react';
import {
  Activity,
  ShieldAlert,
  BellRing,
  Lock,
  HeartPulse,
  Clock,
  ArrowRight,
} from "lucide-react";
import "./SentinelHomePage.css";
import lakshmanImg from "../assets/lakshman.jpg";
import nanaImg from "../assets/nana.jpg";
import joshuaImg from "../assets/joshua.jpg";

const TEAM = [
  {
    name: "Laksh Jairam",
    role: "Frontend Developer",
    bio: "Focused on crafting intuitive monitoring dashboards and real-time alerts that keep users informed and safe.",
    avatar: lakshmanImg,
  },
  {
    name: "Nana Prempeh",
    role: "Frontend Developer",
    bio: "Brings the visual design to life, implementing polished UI patterns for immediate threat detection recognition.",
    avatar: nanaImg,
  },
  {
    name: "Joshua Subray",
    role: "Backend Developer",
    bio: "Owns the real-time alerting pipeline and predictive AI logic, connecting early-warning agents to the interface.",
    avatar: joshuaImg,
  },
];

export default function SentinelHomePage() {
  return (
    <div className="home-container">
      {/* ── Atmospheric blobs ── */}
      <div className="home-blob-1" />
      <div className="home-blob-2" />
      <div className="home-blob-3" />

      {/* ══════════════════ Hero ══════════════════ */}
      <main className="home-inner">
        <div className="home-eyebrow">
          <span className="home-eyebrow-dot" />
          Proactive Health & Safety
        </div>

        <h1 className="home-headline">
          Always watching out for
          <br />
          <em>you & your loved ones</em>
        </h1>

        <p className="home-subheadline">
          Care Compass: Sentinel provides real-time health monitoring, early risk detection, and immediate crisis alerts — keeping you safe when it matters most.
        </p>

        <div className="home-cta-group">
          <button className="home-cta-primary">
            View Dashboard
            <ArrowRight className="home-cta-icon" size={18} strokeWidth={2.5} />
          </button>
          <button className="home-cta-secondary">
            Learn how it works
          </button>
        </div>

        {/* Feature cards */}
        <div className="home-features">
          <div className="home-feature-card">
            <div className="home-feature-icon-wrap">
              <Activity
                size={22}
                strokeWidth={1.75}
                className="home-feature-svg"
              />
            </div>
            <h3>Real-time Alerts</h3>
            <p>
              Receive instant notifications for potential health risks and sudden shifts in well-being.
            </p>
          </div>
          <div className="home-feature-card">
            <div className="home-feature-icon-wrap">
              <ShieldAlert
                size={22}
                strokeWidth={1.75}
                className="home-feature-svg"
              />
            </div>
            <h3>Early Detection</h3>
            <p>
              Advanced analytics identify early warning signs before they escalate into crises.
            </p>
          </div>
          <div className="home-feature-card">
            <div className="home-feature-icon-wrap">
              <BellRing
                size={22}
                strokeWidth={1.75}
                className="home-feature-svg"
              />
            </div>
            <h3>Emergency Response</h3>
            <p>
              Direct, automated connection to designated emergency contacts and response services.
            </p>
          </div>
        </div>

        {/* Trust strip */}
        <div className="home-trust">
          <span className="home-trust-item">
            <Lock size={14} strokeWidth={2} className="home-trust-svg" />
            Secure & Encrypted
          </span>
          <span className="home-trust-divider" />
          <span className="home-trust-item">
            <HeartPulse size={14} strokeWidth={2} className="home-trust-svg" />
            24/7 Monitoring
          </span>
          <span className="home-trust-divider" />
          <span className="home-trust-item">
            <Clock size={14} strokeWidth={2} className="home-trust-svg" />
            Instant Response
          </span>
        </div>
      </main>

      {/* ══════════════════ Meet the Team ══════════════════ */}
      <section className="home-team">
        <div className="home-team-inner">
          <div className="home-team-header">
            <div className="home-eyebrow home-eyebrow--centered">
              <span className="home-eyebrow-dot" />
              The people behind it
            </div>
            <h2 className="home-team-headline">Meet the Sentinel Team</h2>
            <p className="home-team-sub">
              Care Compass: Sentinel was built by six students from Humber Polytechnic's Computer Programming & Analysis program.
            </p>
          </div>

          <div className="home-team-grid">
            {TEAM.map((member) => (
              <div className="home-team-card" key={member.name}>
                <div className="home-team-avatar-wrap">
                  <img
                    src={member.avatar}
                    alt={`Photo of ${member.name}`}
                    className="home-team-avatar"
                    loading="lazy"
                  />
                </div>
                <div className="home-team-card-body">
                  <p className="home-team-role">{member.role}</p>
                  <h3 className="home-team-name">{member.name}</h3>
                  <p className="home-team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
