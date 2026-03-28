"use client";

import { useState } from "react";

const NAVY = "#0d1b2a";
const DARK_SLATE = "#1e293b";
const AMBER = "#d4a017";
const AMBER_LIGHT = "#f0d060";
const OFF_WHITE = "#f8f6f1";
const WARM_GRAY = "#e8e5df";
const BLUE_ACCENT = "#003da5";

function SlideWrapper({ children, bg = OFF_WHITE }: { children: React.ReactNode; bg?: string }) {
  return (
    <div
      className="w-full flex-shrink-0 relative overflow-hidden"
      style={{
        aspectRatio: "16/9",
        backgroundColor: bg,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {children}
    </div>
  );
}

function Slide1() {
  return (
    <SlideWrapper bg={NAVY}>
      <img
        src="/images/pitch-hero.png"
        crossOrigin="anonymous"
        alt="Gas engineer at work"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.35 }}
      />
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY}ee 0%, ${NAVY}88 50%, ${NAVY}cc 100%)` }} />
      <div className="relative z-10 flex flex-col justify-center items-start h-full" style={{ padding: "6% 7%" }}>
        <div
          className="inline-flex items-center gap-2 rounded-full mb-6"
          style={{
            backgroundColor: `${AMBER}20`,
            border: `1px solid ${AMBER}50`,
            padding: "0.5em 1.2em",
          }}
        >
          <div className="rounded-full" style={{ width: "0.5em", height: "0.5em", backgroundColor: AMBER }} />
          <span style={{ color: AMBER, fontSize: "1.1vw", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
            Website Proposal
          </span>
        </div>
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "4vw",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.5vh",
          }}
        >
          A Website Designed to Bring You
        </h1>
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "4vw",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "3vh",
          }}
        >
          <span style={{ color: AMBER }}>More Local Jobs</span>
        </h1>
        <p
          style={{
            fontSize: "1.4vw",
            color: "#ffffffbb",
            lineHeight: 1.6,
            maxWidth: "55vw",
            marginBottom: "4vh",
          }}
        >
          A professional website for Steve Barraclough Gas Engineers that builds trust, shows customers you&apos;re the one to call, and helps local customers find you online.
        </p>
        <div className="flex items-center gap-4">
          <div
            className="rounded-lg flex items-center gap-2"
            style={{ backgroundColor: `${BLUE_ACCENT}44`, padding: "0.6em 1em" }}
          >
            <svg className="text-white" style={{ width: "1.2vw", height: "1.2vw" }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span style={{ color: "#ffffff", fontSize: "1.1vw", fontWeight: 500 }}>Gas Safe Registered</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", backgroundColor: AMBER }} />
    </SlideWrapper>
  );
}

function Slide2() {
  return (
    <SlideWrapper bg={OFF_WHITE}>
      <div className="absolute top-0 right-0" style={{ width: "40%", height: "100%", background: `linear-gradient(180deg, ${NAVY}08 0%, ${NAVY}03 100%)` }} />
      <div className="relative flex h-full" style={{ padding: "6% 7%" }}>
        <div className="flex flex-col justify-center" style={{ width: "55%" }}>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
            <span style={{ color: BLUE_ACCENT, fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              The Problem
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "3.5vw",
              fontWeight: 800,
              color: NAVY,
              lineHeight: 1.15,
              marginBottom: "3vh",
            }}
          >
            Most Customers <span style={{ color: BLUE_ACCENT }}>Google</span>{" "}
            Before They Call
          </h2>
          <p style={{ fontSize: "1.5vw", color: "#555", lineHeight: 1.6, marginBottom: "3vh" }}>
            When people need a gas engineer, the first thing they do is search on Google. Without a professional website, potential customers often choose a competitor who looks more established online.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="rounded-full flex-shrink-0 flex items-center justify-center" style={{ width: "1.8vw", height: "1.8vw", backgroundColor: `${AMBER}20` }}>
                <span style={{ color: AMBER, fontSize: "1vw", fontWeight: 700 }}>1</span>
              </div>
              <span style={{ fontSize: "1.3vw", color: "#444", fontWeight: 500 }}>97% of consumers search online for local services</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full flex-shrink-0 flex items-center justify-center" style={{ width: "1.8vw", height: "1.8vw", backgroundColor: `${AMBER}20` }}>
                <span style={{ color: AMBER, fontSize: "1vw", fontWeight: 700 }}>2</span>
              </div>
              <span style={{ fontSize: "1.3vw", color: "#444", fontWeight: 500 }}>75% judge a business by its website</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full flex-shrink-0 flex items-center justify-center" style={{ width: "1.8vw", height: "1.8vw", backgroundColor: `${AMBER}20` }}>
                <span style={{ color: AMBER, fontSize: "1vw", fontWeight: 700 }}>3</span>
              </div>
              <span style={{ fontSize: "1.3vw", color: "#444", fontWeight: 500 }}>Competitors with better websites are winning the call</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center" style={{ width: "45%" }}>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              width: "85%",
              aspectRatio: "3/4",
              backgroundColor: NAVY,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full" style={{ padding: "10%" }}>
              <svg style={{ width: "6vw", height: "6vw", color: `${AMBER}60` }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <p style={{ color: "#ffffff99", fontSize: "1.3vw", textAlign: "center", marginTop: "2vh", fontWeight: 500 }}>
                &ldquo;gas engineer Pontefract&rdquo;
              </p>
              <div className="w-full mt-4" style={{ borderTop: `1px solid ${AMBER}30` }}>
                <div className="flex items-center gap-2 mt-3" style={{ opacity: 0.4 }}>
                  <div className="rounded" style={{ width: "1vw", height: "1vw", backgroundColor: "#666" }} />
                  <div className="rounded" style={{ height: "0.6vw", backgroundColor: "#444", flex: 1 }} />
                </div>
                <div className="flex items-center gap-2 mt-2" style={{ opacity: 0.3 }}>
                  <div className="rounded" style={{ width: "1vw", height: "1vw", backgroundColor: "#555" }} />
                  <div className="rounded" style={{ height: "0.6vw", backgroundColor: "#333", flex: 1 }} />
                </div>
                <div className="flex items-center gap-2 mt-2" style={{ opacity: 0.2 }}>
                  <div className="rounded" style={{ width: "1vw", height: "1vw", backgroundColor: "#444" }} />
                  <div className="rounded" style={{ height: "0.6vw", backgroundColor: "#222", flex: 1 }} />
                </div>
              </div>
              <p style={{ color: AMBER, fontSize: "1vw", marginTop: "2vh", fontWeight: 600 }}>
                Where&apos;s your business?
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide3() {
  return (
    <SlideWrapper bg={NAVY}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${DARK_SLATE} 100%)` }} />
      <div className="relative flex flex-col justify-center items-center h-full text-center" style={{ padding: "6% 10%" }}>
        <div className="flex items-center gap-2 mb-4">
          <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
          <span style={{ color: AMBER, fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            The Opportunity
          </span>
          <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
        </div>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "3.5vw",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "4vh",
          }}
        >
          Your Website Works Even When <span style={{ color: AMBER }}>You&apos;re on a Job</span>
        </h2>
        <p style={{ fontSize: "1.5vw", color: "#ffffffaa", lineHeight: 1.6, maxWidth: "60vw", marginBottom: "5vh" }}>
          A well-designed website is not just an online brochure &mdash; it helps build trust, answers questions, and turns visitors into real enquiries while you&apos;re busy working.
        </p>
        <div className="flex gap-6" style={{ width: "100%", justifyContent: "center" }}>
          <div className="rounded-xl text-center" style={{ backgroundColor: `${BLUE_ACCENT}30`, padding: "3vh 2vw", width: "22%", border: `1px solid ${BLUE_ACCENT}40` }}>
            <svg style={{ width: "2.5vw", height: "2.5vw", color: AMBER, margin: "0 auto 1.5vh" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5vw", fontWeight: 700, color: "#fff", marginBottom: "1vh" }}>Build Trust</h3>
            <p style={{ fontSize: "1.1vw", color: "#ffffff88", lineHeight: 1.4 }}>Show credentials, Gas Safe registration, and customer reviews instantly</p>
          </div>
          <div className="rounded-xl text-center" style={{ backgroundColor: `${BLUE_ACCENT}30`, padding: "3vh 2vw", width: "22%", border: `1px solid ${BLUE_ACCENT}40` }}>
            <svg style={{ width: "2.5vw", height: "2.5vw", color: AMBER, margin: "0 auto 1.5vh" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5vw", fontWeight: 700, color: "#fff", marginBottom: "1vh" }}>Generate Leads</h3>
            <p style={{ fontSize: "1.1vw", color: "#ffffff88", lineHeight: 1.4 }}>Turn website visitors into phone calls and quote requests</p>
          </div>
          <div className="rounded-xl text-center" style={{ backgroundColor: `${BLUE_ACCENT}30`, padding: "3vh 2vw", width: "22%", border: `1px solid ${BLUE_ACCENT}40` }}>
            <svg style={{ width: "2.5vw", height: "2.5vw", color: AMBER, margin: "0 auto 1.5vh" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5vw", fontWeight: 700, color: "#fff", marginBottom: "1vh" }}>Stand Out</h3>
            <p style={{ fontSize: "1.1vw", color: "#ffffff88", lineHeight: 1.4 }}>Look more professional than competitors who rely only on Facebook</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", backgroundColor: AMBER }} />
    </SlideWrapper>
  );
}

function Slide4() {
  return (
    <SlideWrapper bg={NAVY}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${DARK_SLATE} 100%)` }} />
      <div className="relative flex h-full" style={{ padding: "6% 7%" }}>
        <div className="flex flex-col justify-center" style={{ width: "55%" }}>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
            <span style={{ color: AMBER, fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Local SEO
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "3.5vw",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "3vh",
            }}
          >
            Built to Rank on <span style={{ color: AMBER }}>Google Locally</span>
          </h2>
          <p style={{ fontSize: "1.4vw", color: "#ffffffaa", lineHeight: 1.6, marginBottom: "4vh" }}>
            Every page is designed to help your business appear when people search for gas engineers in your area.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="rounded-full flex-shrink-0 flex items-center justify-center" style={{ width: "1.8vw", height: "1.8vw", backgroundColor: `${AMBER}25` }}>
                <svg style={{ width: "1vw", height: "1vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span style={{ fontSize: "1.3vw", color: "#ffffffcc", fontWeight: 500 }}>Show up for searches like &ldquo;Gas Engineer Pontefract&rdquo;</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full flex-shrink-0 flex items-center justify-center" style={{ width: "1.8vw", height: "1.8vw", backgroundColor: `${AMBER}25` }}>
                <svg style={{ width: "1vw", height: "1vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span style={{ fontSize: "1.3vw", color: "#ffffffcc", fontWeight: 500 }}>Target local service areas across West Yorkshire</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full flex-shrink-0 flex items-center justify-center" style={{ width: "1.8vw", height: "1.8vw", backgroundColor: `${AMBER}25` }}>
                <svg style={{ width: "1vw", height: "1vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span style={{ fontSize: "1.3vw", color: "#ffffffcc", fontWeight: 500 }}>Build trust signals that turn visitors into callers</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center" style={{ width: "45%" }}>
          <div className="flex flex-col gap-3" style={{ width: "85%" }}>
            <div className="rounded-xl" style={{ backgroundColor: `${BLUE_ACCENT}25`, padding: "2.5vh 2vw", border: `1px solid ${BLUE_ACCENT}40` }}>
              <div className="flex items-center gap-2 mb-2">
                <svg style={{ width: "1.5vw", height: "1.5vw", color: AMBER }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <span style={{ fontSize: "1.2vw", color: "#ffffffcc", fontWeight: 600 }}>Google Search</span>
              </div>
              <p style={{ fontSize: "1.1vw", color: "#ffffff88" }}>&ldquo;gas engineer near me&rdquo;</p>
            </div>
            <div className="rounded-xl" style={{ backgroundColor: `${BLUE_ACCENT}25`, padding: "2.5vh 2vw", border: `1px solid ${BLUE_ACCENT}40` }}>
              <div className="flex items-center gap-2 mb-2">
                <svg style={{ width: "1.5vw", height: "1.5vw", color: AMBER }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span style={{ fontSize: "1.2vw", color: "#ffffffcc", fontWeight: 600 }}>Local Results</span>
              </div>
              <p style={{ fontSize: "1.1vw", color: "#ffffff88" }}>Pontefract, Castleford, Wakefield &amp; more</p>
            </div>
            <div className="rounded-xl" style={{ backgroundColor: `${AMBER}15`, padding: "2.5vh 2vw", border: `1px solid ${AMBER}30` }}>
              <div className="flex items-center gap-2 mb-2">
                <svg style={{ width: "1.5vw", height: "1.5vw", color: AMBER }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span style={{ fontSize: "1.2vw", color: AMBER, fontWeight: 600 }}>Phone Rings</span>
              </div>
              <p style={{ fontSize: "1.1vw", color: "#ffffff88" }}>Customer finds you and calls</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", backgroundColor: AMBER }} />
    </SlideWrapper>
  );
}

function Slide5() {
  return (
    <SlideWrapper bg={OFF_WHITE}>
      <img
        src="/images/pitch-customers.png"
        crossOrigin="anonymous"
        alt="Happy customers"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.12 }}
      />
      <div className="relative flex flex-col h-full" style={{ padding: "5% 7%" }}>
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
            <span style={{ color: BLUE_ACCENT, fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Social Proof
            </span>
            <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "3.2vw",
              fontWeight: 800,
              color: NAVY,
              lineHeight: 1.15,
            }}
          >
            Customer <span style={{ color: BLUE_ACCENT }}>Reviews</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-5 flex-1">
          <div className="rounded-xl flex flex-col" style={{ backgroundColor: "#ffffffee", padding: "3vh 2vw", border: "1px solid #e0ddd6", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div className="flex gap-1 mb-2">
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p style={{ fontSize: "1.15vw", color: "#555", lineHeight: 1.5, flex: 1, fontStyle: "italic" }}>
              &ldquo;Having heard of their work from a friend we used Steve and Steve and were not disappointed. True professionals from start to finish.&rdquo;
            </p>
            <div style={{ borderTop: "1px solid #e5e2db", paddingTop: "1.5vh", marginTop: "1.5vh" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.1vw", fontWeight: 700, color: NAVY }}>H. Mobley</p>
              <p style={{ fontSize: "1vw", color: "#888" }}>Wakefield</p>
            </div>
          </div>
          <div className="rounded-xl flex flex-col" style={{ backgroundColor: "#ffffffee", padding: "3vh 2vw", border: "1px solid #e0ddd6", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div className="flex gap-1 mb-2">
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p style={{ fontSize: "1.15vw", color: "#555", lineHeight: 1.5, flex: 1, fontStyle: "italic" }}>
              &ldquo;Really happy with the service, boiler has been spot on and it works great. Wish I&apos;d swapped it to the new Worcester years ago.&rdquo;
            </p>
            <div style={{ borderTop: "1px solid #e5e2db", paddingTop: "1.5vh", marginTop: "1.5vh" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.1vw", fontWeight: 700, color: NAVY }}>G. Harris</p>
              <p style={{ fontSize: "1vw", color: "#888" }}>Wakefield</p>
            </div>
          </div>
          <div className="rounded-xl flex flex-col" style={{ backgroundColor: "#ffffffee", padding: "3vh 2vw", border: "1px solid #e0ddd6", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div className="flex gap-1 mb-2">
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
            <p style={{ fontSize: "1.15vw", color: "#555", lineHeight: 1.5, flex: 1, fontStyle: "italic" }}>
              &ldquo;They turned up on time and didn&apos;t stop all day. The new boiler has made such a difference. They tidied away after and hardly stopped for a cup of tea.&rdquo;
            </p>
            <div style={{ borderTop: "1px solid #e5e2db", paddingTop: "1.5vh", marginTop: "1.5vh" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.1vw", fontWeight: 700, color: NAVY }}>D. Sander</p>
              <p style={{ fontSize: "1vw", color: "#888" }}>Snaith</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p style={{ fontSize: "1.2vw", color: "#777" }}>
            People trust businesses with real reviews.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide6() {
  return (
    <SlideWrapper bg="#f5f3ee">
      <div className="relative flex flex-col justify-center items-center h-full" style={{ padding: "5% 10%" }}>
        <div className="flex items-center gap-2 mb-4">
          <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
          <span style={{ color: BLUE_ACCENT, fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Investment
          </span>
          <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
        </div>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "3.2vw",
            fontWeight: 800,
            color: NAVY,
            lineHeight: 1.15,
            marginBottom: "1vh",
            textAlign: "center",
          }}
        >
          Simple, <span style={{ color: BLUE_ACCENT }}>Transparent</span> Pricing
        </h2>
        <p style={{ fontSize: "1.4vw", color: "#777", textAlign: "center", marginBottom: "4vh" }}>
          Everything you need to get online and stay online
        </p>
        <div className="flex gap-6 justify-center" style={{ width: "100%" }}>
          <div className="rounded-xl text-center flex flex-col" style={{ backgroundColor: "#ffffff", padding: "4vh 3vw", width: "35%", border: "1px solid #e0ddd6", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.2vw", fontWeight: 600, color: BLUE_ACCENT, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>Website Design &amp; Setup</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "4vw", fontWeight: 800, color: NAVY, lineHeight: 1 }}>
              <span style={{ fontSize: "2vw", verticalAlign: "top" }}>&pound;</span>850
            </p>
            <p style={{ fontSize: "1.1vw", color: "#888", marginTop: "1vh", marginBottom: "2vh" }}>one-time payment</p>
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: BLUE_ACCENT, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#555" }}>Custom website design</span>
              </div>
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: BLUE_ACCENT, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#555" }}>Mobile responsive layout</span>
              </div>
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: BLUE_ACCENT, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#555" }}>Local Google SEO setup</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl text-center flex flex-col" style={{ backgroundColor: NAVY, padding: "4vh 3vw", width: "35%", boxShadow: "0 8px 40px rgba(13,27,42,0.3)" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.2vw", fontWeight: 600, color: AMBER, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>Hosting &amp; Support</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "4vw", fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>
              <span style={{ fontSize: "2vw", verticalAlign: "top" }}>&pound;</span>15
            </p>
            <p style={{ fontSize: "1.1vw", color: "#ffffff88", marginTop: "1vh", marginBottom: "2vh" }}>per month</p>
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: AMBER, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#ffffffcc" }}>Fast secure hosting</span>
              </div>
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: AMBER, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#ffffffcc" }}>Updates and small changes when needed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: AMBER, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#ffffffcc" }}>Domain management</span>
              </div>
            </div>
          </div>
        </div>
        <p style={{ fontSize: "1.15vw", color: "#888", textAlign: "center", marginTop: "3vh" }}>
          Most agencies charge &pound;1500&ndash;&pound;3000 for a site like this. If you ever decide the website isn&apos;t useful, you can cancel hosting anytime.
        </p>
      </div>
    </SlideWrapper>
  );
}

function Slide7() {
  return (
    <SlideWrapper bg={NAVY}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${DARK_SLATE} 100%)` }} />
      <div className="relative flex flex-col justify-center items-center h-full" style={{ padding: "5% 7%" }}>
        <div className="flex items-center gap-2 mb-4">
          <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
          <span style={{ color: AMBER, fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Next Steps
          </span>
          <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
        </div>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "3.5vw",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "2vh",
            textAlign: "center",
          }}
        >
          What Happens <span style={{ color: AMBER }}>Next</span>
        </h2>
        <p style={{ fontSize: "1.4vw", color: "#ffffffaa", textAlign: "center", marginBottom: "5vh" }}>
          A simple, straightforward process from start to finish.
        </p>
        <div className="flex gap-5" style={{ width: "100%", justifyContent: "center" }}>
          <div className="rounded-xl flex flex-col" style={{ backgroundColor: `${AMBER}10`, padding: "3vh 2vw", width: "22%", border: `1px solid ${AMBER}30` }}>
            <div className="rounded-full flex items-center justify-center mb-3" style={{ width: "2.5vw", height: "2.5vw", backgroundColor: AMBER }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 800, color: NAVY }}>1</span>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 700, color: "#ffffff", marginBottom: "1vh" }}>We gather your details</h3>
            <p style={{ fontSize: "1.05vw", color: "#ffffff88", lineHeight: 1.5 }}>Services, areas covered, contact info, photos, and logos</p>
          </div>
          <div className="rounded-xl flex flex-col" style={{ backgroundColor: `${AMBER}10`, padding: "3vh 2vw", width: "22%", border: `1px solid ${AMBER}30` }}>
            <div className="rounded-full flex items-center justify-center mb-3" style={{ width: "2.5vw", height: "2.5vw", backgroundColor: AMBER }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 800, color: NAVY }}>2</span>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 700, color: "#ffffff", marginBottom: "1vh" }}>I design the website</h3>
            <p style={{ fontSize: "1.05vw", color: "#ffffff88", lineHeight: 1.5 }}>A clean, professional site built around your business</p>
          </div>
          <div className="rounded-xl flex flex-col" style={{ backgroundColor: `${AMBER}10`, padding: "3vh 2vw", width: "22%", border: `1px solid ${AMBER}30` }}>
            <div className="rounded-full flex items-center justify-center mb-3" style={{ width: "2.5vw", height: "2.5vw", backgroundColor: AMBER }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 800, color: NAVY }}>3</span>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 700, color: "#ffffff", marginBottom: "1vh" }}>You review and approve it</h3>
            <p style={{ fontSize: "1.05vw", color: "#ffffff88", lineHeight: 1.5 }}>Any small changes can be made before launch</p>
          </div>
          <div className="rounded-xl flex flex-col" style={{ backgroundColor: `${AMBER}10`, padding: "3vh 2vw", width: "22%", border: `1px solid ${AMBER}30` }}>
            <div className="rounded-full flex items-center justify-center mb-3" style={{ width: "2.5vw", height: "2.5vw", backgroundColor: AMBER }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 800, color: NAVY }}>4</span>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 700, color: "#ffffff", marginBottom: "1vh" }}>Your site goes live</h3>
            <p style={{ fontSize: "1.05vw", color: "#ffffff88", lineHeight: 1.5 }}>Ready to help local customers find and contact you</p>
          </div>
        </div>
        <p style={{ fontSize: "1.2vw", color: "#ffffffaa", textAlign: "center", marginTop: "4vh" }}>
          From start to finish, the whole process can be simple and stress-free.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", backgroundColor: AMBER }} />
    </SlideWrapper>
  );
}

function Slide8() {
  return (
    <SlideWrapper bg={NAVY}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${DARK_SLATE} 100%)` }} />
      <div className="relative flex flex-col justify-center items-center h-full text-center" style={{ padding: "6% 10%" }}>
        <div className="flex items-center gap-2 mb-4">
          <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
          <span style={{ color: AMBER, fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Let&apos;s Get Started
          </span>
          <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
        </div>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "4vw",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "3vh",
          }}
        >
          Ready to Grow <span style={{ color: AMBER }}>Your Business?</span>
        </h2>
        <p style={{ fontSize: "1.5vw", color: "#ffffffaa", lineHeight: 1.6, maxWidth: "50vw", marginBottom: "2vh" }}>
          Let&apos;s get your business showing up when people search for a gas engineer.
        </p>
        <p style={{ fontSize: "1.3vw", color: "#ffffffcc", fontWeight: 600, marginBottom: "4vh" }}>
          One extra boiler job easily pays for the entire website.
        </p>
        <div className="flex gap-8 justify-center mb-5">
          <div className="text-center">
            <div className="rounded-full flex items-center justify-center mx-auto mb-2" style={{ width: "3.5vw", height: "3.5vw", backgroundColor: `${BLUE_ACCENT}30`, border: `1px solid ${BLUE_ACCENT}50` }}>
              <svg style={{ width: "1.5vw", height: "1.5vw", color: AMBER }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p style={{ fontSize: "1.2vw", color: "#ffffffcc", fontWeight: 600 }}>guy@voiceoverguy.co.uk</p>
            <p style={{ fontSize: "1vw", color: "#ffffff66" }}>Email</p>
          </div>
          <div className="text-center">
            <div className="rounded-full flex items-center justify-center mx-auto mb-2" style={{ width: "3.5vw", height: "3.5vw", backgroundColor: `${BLUE_ACCENT}30`, border: `1px solid ${BLUE_ACCENT}50` }}>
              <svg style={{ width: "1.5vw", height: "1.5vw", color: AMBER }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <p style={{ fontSize: "1.2vw", color: "#ffffffcc", fontWeight: 600 }}>07973 350178</p>
            <p style={{ fontSize: "1vw", color: "#ffffff66" }}>Phone</p>
          </div>
        </div>
        <div className="rounded-xl" style={{ backgroundColor: `${AMBER}15`, border: `1px solid ${AMBER}30`, padding: "2vh 3vw" }}>
          <p style={{ fontSize: "1.3vw", color: AMBER, fontWeight: 600 }}>
            If you&apos;re happy to go ahead, the site can be live within 7 days.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", backgroundColor: AMBER }} />
    </SlideWrapper>
  );
}

const slides = [
  { component: Slide1, title: "Cover" },
  { component: Slide2, title: "The Problem" },
  { component: Slide3, title: "The Opportunity" },
  { component: Slide4, title: "Local SEO" },
  { component: Slide5, title: "Customer Reviews" },
  { component: Slide6, title: "Pricing" },
  { component: Slide7, title: "What Happens Next" },
  { component: Slide8, title: "Final Call to Action" },
];

export default function PitchDeck() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="w-full" style={{ maxWidth: "1400px", padding: "2vh 2vw" }}>
        <div className="flex items-center justify-between mb-4">
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.2vw", fontWeight: 700, color: "#ffffff" }}>
            Steve Barraclough Gas Engineers &mdash; Website Proposal
          </h1>
          <span style={{ fontSize: "1vw", color: "#ffffff66" }}>
            Slide {current + 1} of {slides.length}
          </span>
        </div>
        <div
          className="relative rounded-lg overflow-hidden"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
        >
          {slides.map((slide, i) => {
            const SlideComponent = slide.component;
            return (
              <div
                key={i}
                style={{ display: i === current ? "block" : "none" }}
              >
                <SlideComponent />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
            className="rounded-lg px-4 py-2 text-white disabled:opacity-30 transition-opacity"
            style={{ backgroundColor: "#333", fontSize: "1vw" }}
          >
            Previous
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === current ? "2vw" : "0.6vw",
                  height: "0.6vw",
                  backgroundColor: i === current ? AMBER : "#555",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent(Math.min(slides.length - 1, current + 1))}
            disabled={current === slides.length - 1}
            className="rounded-lg px-4 py-2 text-white disabled:opacity-30 transition-opacity"
            style={{ backgroundColor: "#333", fontSize: "1vw" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
