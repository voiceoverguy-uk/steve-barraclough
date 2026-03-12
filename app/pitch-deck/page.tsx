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
            fontSize: "4.5vw",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.5vh",
          }}
        >
          A Website Built for
        </h1>
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "4.5vw",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "3vh",
          }}
        >
          <span style={{ color: AMBER }}>Steve Barraclough</span>
        </h1>
        <h2
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "2.5vw",
            fontWeight: 600,
            color: "#ffffffbb",
            marginBottom: "4vh",
          }}
        >
          Gas Engineers
        </h2>
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
          <div
            className="rounded-lg flex items-center gap-2"
            style={{ backgroundColor: `${AMBER}22`, padding: "0.6em 1em" }}
          >
            <svg className="text-amber-300" style={{ width: "1.2vw", height: "1.2vw" }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <span style={{ color: AMBER_LIGHT, fontSize: "1.1vw", fontWeight: 500 }}>Worcester Bosch Accredited</span>
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
            Your Customers <span style={{ color: BLUE_ACCENT }}>Google First,</span>{" "}
            Call Second
          </h2>
          <p style={{ fontSize: "1.5vw", color: "#555", lineHeight: 1.6, marginBottom: "3vh" }}>
            Most people searching for a gas engineer will never scroll past the first page of Google. Without a professional website, potential customers are finding your competitors instead.
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
              <span style={{ fontSize: "1.3vw", color: "#444", fontWeight: 500 }}>75% judge a business by its website quality</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-full flex-shrink-0 flex items-center justify-center" style={{ width: "1.8vw", height: "1.8vw", backgroundColor: `${AMBER}20` }}>
                <span style={{ color: AMBER, fontSize: "1vw", fontWeight: 700 }}>3</span>
              </div>
              <span style={{ fontSize: "1.3vw", color: "#444", fontWeight: 500 }}>Competitors with websites are winning your jobs</span>
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
            fontSize: "3.8vw",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "4vh",
          }}
        >
          Your Business <span style={{ color: AMBER }}>Deserves Better</span>
        </h2>
        <p style={{ fontSize: "1.5vw", color: "#ffffffaa", lineHeight: 1.6, maxWidth: "60vw", marginBottom: "5vh" }}>
          A professional website isn&apos;t just a digital brochure &mdash; it&apos;s a 24/7 salesperson that builds trust before you even pick up the phone.
        </p>
        <div className="flex gap-6" style={{ width: "100%", justifyContent: "center" }}>
          <div className="rounded-xl text-center" style={{ backgroundColor: `${BLUE_ACCENT}30`, padding: "3vh 2vw", width: "22%", border: `1px solid ${BLUE_ACCENT}40` }}>
            <svg style={{ width: "2.5vw", height: "2.5vw", color: AMBER, margin: "0 auto 1.5vh" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5vw", fontWeight: 700, color: "#fff", marginBottom: "1vh" }}>Build Trust</h3>
            <p style={{ fontSize: "1.1vw", color: "#ffffff88", lineHeight: 1.4 }}>Show credentials, reviews, and Gas Safe registration instantly</p>
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
            <p style={{ fontSize: "1.1vw", color: "#ffffff88", lineHeight: 1.4 }}>Look more professional than every competitor without a website</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", backgroundColor: AMBER }} />
    </SlideWrapper>
  );
}

function Slide4() {
  return (
    <SlideWrapper bg={OFF_WHITE}>
      <div className="relative flex h-full" style={{ padding: "5% 7%" }}>
        <div className="flex flex-col justify-center" style={{ width: "45%" }}>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
            <span style={{ color: BLUE_ACCENT, fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Introducing Your Website
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "3.2vw",
              fontWeight: 800,
              color: NAVY,
              lineHeight: 1.15,
              marginBottom: "3vh",
            }}
          >
            A Professional <span style={{ color: BLUE_ACCENT }}>Online Home</span> for Your Business
          </h2>
          <p style={{ fontSize: "1.4vw", color: "#555", lineHeight: 1.6, marginBottom: "3vh" }}>
            A custom-built website designed specifically for Steve Barraclough Gas Engineers &mdash; showcasing your services, credentials, and local expertise.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg style={{ width: "1.3vw", height: "1.3vw", color: BLUE_ACCENT, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span style={{ fontSize: "1.2vw", color: "#444" }}>Hero section with clear call-to-action</span>
            </div>
            <div className="flex items-center gap-2">
              <svg style={{ width: "1.3vw", height: "1.3vw", color: BLUE_ACCENT, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span style={{ fontSize: "1.2vw", color: "#444" }}>Full services breakdown</span>
            </div>
            <div className="flex items-center gap-2">
              <svg style={{ width: "1.3vw", height: "1.3vw", color: BLUE_ACCENT, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span style={{ fontSize: "1.2vw", color: "#444" }}>About your family business</span>
            </div>
            <div className="flex items-center gap-2">
              <svg style={{ width: "1.3vw", height: "1.3vw", color: BLUE_ACCENT, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span style={{ fontSize: "1.2vw", color: "#444" }}>Customer testimonials and contact form</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center" style={{ width: "55%" }}>
          <div className="relative" style={{ width: "90%" }}>
            <img
              src="/images/pitch-website-mockup.png"
              crossOrigin="anonymous"
              alt="Website mockup"
              className="w-full rounded-xl"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.15)" }}
            />
            <div
              className="absolute rounded-lg"
              style={{
                bottom: "-2vh",
                right: "-1vw",
                backgroundColor: AMBER,
                padding: "1vh 1.5vw",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "1.2vw", color: NAVY }}>
                Mobile Friendly
              </span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide5() {
  return (
    <SlideWrapper bg="#f5f3ee">
      <div className="relative flex flex-col h-full" style={{ padding: "5% 7%" }}>
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
            <span style={{ color: BLUE_ACCENT, fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              What&apos;s Included
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
            Key <span style={{ color: BLUE_ACCENT }}>Features</span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-1">
          <div className="rounded-xl" style={{ backgroundColor: "#ffffff", padding: "3vh 2vw", border: "1px solid #e0ddd6" }}>
            <div className="rounded-lg flex items-center justify-center mb-3" style={{ width: "3vw", height: "3vw", backgroundColor: `${BLUE_ACCENT}10` }}>
              <svg style={{ width: "1.5vw", height: "1.5vw", color: BLUE_ACCENT }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.4vw", fontWeight: 700, color: NAVY, marginBottom: "1vh" }}>Mobile-First Design</h3>
            <p style={{ fontSize: "1.1vw", color: "#666", lineHeight: 1.5 }}>Looks perfect on phones, tablets, and desktops &mdash; where most customers search</p>
          </div>
          <div className="rounded-xl" style={{ backgroundColor: "#ffffff", padding: "3vh 2vw", border: "1px solid #e0ddd6" }}>
            <div className="rounded-lg flex items-center justify-center mb-3" style={{ width: "3vw", height: "3vw", backgroundColor: `${AMBER}15` }}>
              <svg style={{ width: "1.5vw", height: "1.5vw", color: AMBER }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.4vw", fontWeight: 700, color: NAVY, marginBottom: "1vh" }}>Gas Safe Badge</h3>
            <p style={{ fontSize: "1.1vw", color: "#666", lineHeight: 1.5 }}>Prominent display of your Gas Safe registration number to build instant trust</p>
          </div>
          <div className="rounded-xl" style={{ backgroundColor: "#ffffff", padding: "3vh 2vw", border: "1px solid #e0ddd6" }}>
            <div className="rounded-lg flex items-center justify-center mb-3" style={{ width: "3vw", height: "3vw", backgroundColor: `${BLUE_ACCENT}10` }}>
              <svg style={{ width: "1.5vw", height: "1.5vw", color: BLUE_ACCENT }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.4vw", fontWeight: 700, color: NAVY, marginBottom: "1vh" }}>Worcester Bosch</h3>
            <p style={{ fontSize: "1.1vw", color: "#666", lineHeight: 1.5 }}>Showcases your accredited installer status with manufacturer branding</p>
          </div>
          <div className="rounded-xl" style={{ backgroundColor: "#ffffff", padding: "3vh 2vw", border: "1px solid #e0ddd6" }}>
            <div className="rounded-lg flex items-center justify-center mb-3" style={{ width: "3vw", height: "3vw", backgroundColor: `${AMBER}15` }}>
              <svg style={{ width: "1.5vw", height: "1.5vw", color: AMBER }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.4vw", fontWeight: 700, color: NAVY, marginBottom: "1vh" }}>Quote Request Form</h3>
            <p style={{ fontSize: "1.1vw", color: "#666", lineHeight: 1.5 }}>Easy-to-use contact form that sends enquiries straight to your inbox</p>
          </div>
          <div className="rounded-xl" style={{ backgroundColor: "#ffffff", padding: "3vh 2vw", border: "1px solid #e0ddd6" }}>
            <div className="rounded-lg flex items-center justify-center mb-3" style={{ width: "3vw", height: "3vw", backgroundColor: `${BLUE_ACCENT}10` }}>
              <svg style={{ width: "1.5vw", height: "1.5vw", color: BLUE_ACCENT }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.4vw", fontWeight: 700, color: NAVY, marginBottom: "1vh" }}>Areas Covered</h3>
            <p style={{ fontSize: "1.1vw", color: "#666", lineHeight: 1.5 }}>Interactive map showing Pontefract, Castleford, Wakefield, and all areas you serve</p>
          </div>
          <div className="rounded-xl" style={{ backgroundColor: "#ffffff", padding: "3vh 2vw", border: "1px solid #e0ddd6" }}>
            <div className="rounded-lg flex items-center justify-center mb-3" style={{ width: "3vw", height: "3vw", backgroundColor: `${AMBER}15` }}>
              <svg style={{ width: "1.5vw", height: "1.5vw", color: AMBER }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.4vw", fontWeight: 700, color: NAVY, marginBottom: "1vh" }}>Full Service List</h3>
            <p style={{ fontSize: "1.1vw", color: "#666", lineHeight: 1.5 }}>All gas, heating, and plumbing services clearly laid out for customers</p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide6() {
  return (
    <SlideWrapper bg={NAVY}>
      <div className="absolute inset-0" style={{ background: `linear-gradient(160deg, ${NAVY} 0%, #162436 50%, ${DARK_SLATE} 100%)` }} />
      <div className="relative flex h-full" style={{ padding: "5% 7%" }}>
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
              fontSize: "3.2vw",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "3vh",
            }}
          >
            Built to Win <span style={{ color: AMBER }}>Local Customers</span>
          </h2>
          <p style={{ fontSize: "1.4vw", color: "#ffffffaa", lineHeight: 1.6, marginBottom: "3vh" }}>
            Every page is optimised to help you rank on Google when local customers search for gas engineers in your area.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: "2.2vw", height: "2.2vw", backgroundColor: `${AMBER}20` }}>
                <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span style={{ fontSize: "1.3vw", color: "#ffffffcc", fontWeight: 500 }}>Optimised for &ldquo;gas engineer Pontefract&rdquo; and related searches</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: "2.2vw", height: "2.2vw", backgroundColor: `${AMBER}20` }}>
                <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span style={{ fontSize: "1.3vw", color: "#ffffffcc", fontWeight: 500 }}>Area coverage pages for West Yorkshire towns</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: "2.2vw", height: "2.2vw", backgroundColor: `${AMBER}20` }}>
                <svg style={{ width: "1.2vw", height: "1.2vw", color: AMBER }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span style={{ fontSize: "1.3vw", color: "#ffffffcc", fontWeight: 500 }}>Trust signals that convert visitors into callers</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center" style={{ width: "45%" }}>
          <div className="rounded-2xl overflow-hidden relative" style={{ width: "85%", aspectRatio: "1", backgroundColor: `${BLUE_ACCENT}20`, border: `1px solid ${BLUE_ACCENT}30` }}>
            <div className="flex flex-col items-center justify-center h-full" style={{ padding: "8%" }}>
              <svg style={{ width: "4vw", height: "4vw", color: AMBER, marginBottom: "2vh" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.8vw", fontWeight: 700, color: "#fff", textAlign: "center", marginBottom: "2vh" }}>
                Areas Covered
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="rounded-full" style={{ backgroundColor: `${NAVY}cc`, border: `1px solid ${AMBER}40`, padding: "0.4vh 1vw", fontSize: "1vw", color: AMBER, fontWeight: 500 }}>Pontefract</span>
                <span className="rounded-full" style={{ backgroundColor: `${NAVY}cc`, border: `1px solid ${AMBER}40`, padding: "0.4vh 1vw", fontSize: "1vw", color: AMBER, fontWeight: 500 }}>Castleford</span>
                <span className="rounded-full" style={{ backgroundColor: `${NAVY}cc`, border: `1px solid ${AMBER}40`, padding: "0.4vh 1vw", fontSize: "1vw", color: AMBER, fontWeight: 500 }}>Wakefield</span>
                <span className="rounded-full" style={{ backgroundColor: `${NAVY}cc`, border: `1px solid ${AMBER}40`, padding: "0.4vh 1vw", fontSize: "1vw", color: AMBER, fontWeight: 500 }}>Knottingley</span>
                <span className="rounded-full" style={{ backgroundColor: `${NAVY}cc`, border: `1px solid ${AMBER}40`, padding: "0.4vh 1vw", fontSize: "1vw", color: AMBER, fontWeight: 500 }}>Featherstone</span>
                <span className="rounded-full" style={{ backgroundColor: `${NAVY}cc`, border: `1px solid ${AMBER}40`, padding: "0.4vh 1vw", fontSize: "1vw", color: "#ffffffaa", fontWeight: 500 }}>+ more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", backgroundColor: AMBER }} />
    </SlideWrapper>
  );
}

function Slide7() {
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
            What Your <span style={{ color: BLUE_ACCENT }}>Customers See</span>
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
              &ldquo;Turned up on time, had our boiler sorted the same day, and were brilliant from start to finish.&rdquo;
            </p>
            <div style={{ borderTop: "1px solid #e5e2db", paddingTop: "1.5vh", marginTop: "1.5vh" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.1vw", fontWeight: 700, color: NAVY }}>Sarah M.</p>
              <p style={{ fontSize: "1vw", color: "#888" }}>Pontefract</p>
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
              &ldquo;Couldn&apos;t be happier with our new Worcester Bosch boiler. Neat, professional work, left the place spotless.&rdquo;
            </p>
            <div style={{ borderTop: "1px solid #e5e2db", paddingTop: "1.5vh", marginTop: "1.5vh" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.1vw", fontWeight: 700, color: NAVY }}>James T.</p>
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
              &ldquo;Steve was incredibly helpful with my landlord gas safety cert &mdash; booked me in quickly and sorted the paperwork straight away.&rdquo;
            </p>
            <div style={{ borderTop: "1px solid #e5e2db", paddingTop: "1.5vh", marginTop: "1.5vh" }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.1vw", fontWeight: 700, color: NAVY }}>Linda H.</p>
              <p style={{ fontSize: "1vw", color: "#888" }}>Castleford</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p style={{ fontSize: "1.2vw", color: "#777" }}>
            Real testimonials displayed prominently on the website to build confidence with new visitors
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide8() {
  return (
    <SlideWrapper bg={OFF_WHITE}>
      <div className="absolute top-0 left-0" style={{ width: "40%", height: "100%", background: `linear-gradient(180deg, ${NAVY}06 0%, transparent 100%)` }} />
      <div className="relative flex h-full" style={{ padding: "5% 7%" }}>
        <div className="flex flex-col justify-center" style={{ width: "50%" }}>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ height: "3px", width: "2vw", backgroundColor: AMBER }} />
            <span style={{ color: BLUE_ACCENT, fontSize: "1.1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Peace of Mind
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "3.2vw",
              fontWeight: 800,
              color: NAVY,
              lineHeight: 1.15,
              marginBottom: "3vh",
            }}
          >
            Hosting & <span style={{ color: BLUE_ACCENT }}>Ongoing Support</span>
          </h2>
          <p style={{ fontSize: "1.4vw", color: "#555", lineHeight: 1.6, marginBottom: "3vh" }}>
            Your website is looked after so you can focus on what you do best &mdash; serving customers.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3" style={{ width: "50%" }}>
          <div className="flex items-start gap-3 rounded-xl" style={{ backgroundColor: "#ffffff", padding: "2vh 1.5vw", border: "1px solid #e0ddd6" }}>
            <div className="rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: "2.5vw", height: "2.5vw", backgroundColor: `${BLUE_ACCENT}10` }}>
              <svg style={{ width: "1.3vw", height: "1.3vw", color: BLUE_ACCENT }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
              </svg>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 700, color: NAVY }}>Reliable Hosting</h4>
              <p style={{ fontSize: "1.1vw", color: "#666" }}>Fast, secure hosting with 99.9% uptime guarantee</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl" style={{ backgroundColor: "#ffffff", padding: "2vh 1.5vw", border: "1px solid #e0ddd6" }}>
            <div className="rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: "2.5vw", height: "2.5vw", backgroundColor: `${AMBER}15` }}>
              <svg style={{ width: "1.3vw", height: "1.3vw", color: AMBER }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 700, color: NAVY }}>Regular Updates</h4>
              <p style={{ fontSize: "1.1vw", color: "#666" }}>Security patches, content updates, and ongoing improvements</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl" style={{ backgroundColor: "#ffffff", padding: "2vh 1.5vw", border: "1px solid #e0ddd6" }}>
            <div className="rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: "2.5vw", height: "2.5vw", backgroundColor: `${BLUE_ACCENT}10` }}>
              <svg style={{ width: "1.3vw", height: "1.3vw", color: BLUE_ACCENT }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 700, color: NAVY }}>Domain Name</h4>
              <p style={{ fontSize: "1.1vw", color: "#666" }}>Your own professional web address included</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl" style={{ backgroundColor: "#ffffff", padding: "2vh 1.5vw", border: "1px solid #e0ddd6" }}>
            <div className="rounded-lg flex items-center justify-center flex-shrink-0" style={{ width: "2.5vw", height: "2.5vw", backgroundColor: `${AMBER}15` }}>
              <svg style={{ width: "1.3vw", height: "1.3vw", color: AMBER }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.3vw", fontWeight: 700, color: NAVY }}>Friendly Support</h4>
              <p style={{ fontSize: "1.1vw", color: "#666" }}>Direct access to your developer for any changes or questions</p>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide9() {
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
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.2vw", fontWeight: 600, color: BLUE_ACCENT, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>One-Off Build</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "4vw", fontWeight: 800, color: NAVY, lineHeight: 1 }}>
              <span style={{ fontSize: "2vw", verticalAlign: "top" }}>&pound;</span>XXX
            </p>
            <p style={{ fontSize: "1.1vw", color: "#888", marginTop: "1vh", marginBottom: "2vh" }}>one-time payment</p>
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: BLUE_ACCENT, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#555" }}>Custom design &amp; build</span>
              </div>
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: BLUE_ACCENT, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#555" }}>All features included</span>
              </div>
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: BLUE_ACCENT, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#555" }}>Mobile responsive</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl text-center flex flex-col relative" style={{ backgroundColor: NAVY, padding: "4vh 3vw", width: "35%", boxShadow: "0 8px 40px rgba(13,27,42,0.3)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ backgroundColor: AMBER, padding: "0.4vh 1.5vw" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.9vw", fontWeight: 700, color: NAVY }}>RECOMMENDED</span>
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.2vw", fontWeight: 600, color: AMBER, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>Monthly Hosting</p>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "4vw", fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>
              <span style={{ fontSize: "2vw", verticalAlign: "top" }}>&pound;</span>XX
            </p>
            <p style={{ fontSize: "1.1vw", color: "#ffffff88", marginTop: "1vh", marginBottom: "2vh" }}>per month</p>
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: AMBER, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#ffffffcc" }}>Fast, secure hosting</span>
              </div>
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: AMBER, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#ffffffcc" }}>Domain included</span>
              </div>
              <div className="flex items-center gap-2">
                <svg style={{ width: "1.1vw", height: "1.1vw", color: AMBER, flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ fontSize: "1.1vw", color: "#ffffffcc" }}>Updates &amp; support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}

function Slide10() {
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
        <p style={{ fontSize: "1.5vw", color: "#ffffffaa", lineHeight: 1.6, maxWidth: "50vw", marginBottom: "5vh" }}>
          Let&apos;s build a website that works as hard as you do. Get in touch to discuss your new online home.
        </p>
        <div className="flex gap-8 justify-center mb-6">
          <div className="text-center">
            <div className="rounded-full flex items-center justify-center mx-auto mb-2" style={{ width: "3.5vw", height: "3.5vw", backgroundColor: `${BLUE_ACCENT}30`, border: `1px solid ${BLUE_ACCENT}50` }}>
              <svg style={{ width: "1.5vw", height: "1.5vw", color: AMBER }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p style={{ fontSize: "1.2vw", color: "#ffffffcc", fontWeight: 600 }}>your@email.com</p>
            <p style={{ fontSize: "1vw", color: "#ffffff66" }}>Email</p>
          </div>
          <div className="text-center">
            <div className="rounded-full flex items-center justify-center mx-auto mb-2" style={{ width: "3.5vw", height: "3.5vw", backgroundColor: `${BLUE_ACCENT}30`, border: `1px solid ${BLUE_ACCENT}50` }}>
              <svg style={{ width: "1.5vw", height: "1.5vw", color: AMBER }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <p style={{ fontSize: "1.2vw", color: "#ffffffcc", fontWeight: 600 }}>07XXX XXXXXX</p>
            <p style={{ fontSize: "1vw", color: "#ffffff66" }}>Phone</p>
          </div>
        </div>
        <div className="rounded-xl" style={{ backgroundColor: `${AMBER}15`, border: `1px solid ${AMBER}30`, padding: "2vh 3vw" }}>
          <p style={{ fontSize: "1.3vw", color: AMBER, fontWeight: 600 }}>
            &ldquo;A great website pays for itself with just one or two extra jobs a month.&rdquo;
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", backgroundColor: AMBER }} />
    </SlideWrapper>
  );
}

const slides = [
  { component: Slide1, title: "Title" },
  { component: Slide2, title: "The Problem" },
  { component: Slide3, title: "Your Business Deserves Better" },
  { component: Slide4, title: "Introducing the Website" },
  { component: Slide5, title: "Key Features" },
  { component: Slide6, title: "Built to Win Local Customers" },
  { component: Slide7, title: "What Your Customers See" },
  { component: Slide8, title: "Hosting & Ongoing Support" },
  { component: Slide9, title: "Investment" },
  { component: Slide10, title: "Next Steps" },
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
