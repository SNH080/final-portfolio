import React, { useState, useEffect, useRef } from "react";
import FixedNav from "./components/FixedNav/FixedNav";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";
import Section7 from "./components/Section7/Section7";
import Section8 from "./components/Section8/Section8";
import Section9 from "./components/Section9/Section9";
import WebNav from "./components/WebNav/WebNav"; // ← 추가
import "./styles/global.css";

function App() {
  const [activeId, setActiveId] = useState("");
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number | null>(
    null
  );
  const [currentSectionNum, setCurrentSectionNum] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const mid = window.innerHeight / 2;
    const topOffset = 100;

    const sectionIds = [
      "section1",
      "section2",
      "section3",
      "section4",
      "section5",
      "section6",
      "section7",
      "section8",
      "section9",
    ];

    let currentSection = "";
    let currentIndex: number | null = null;

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= mid && rect.bottom >= mid) {
          currentSection = id;
          currentIndex = sectionIds.indexOf(id);
          break;
        }
      }
    }
    for (let i = 0; i < sectionIds.length; i++) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= topOffset && rect.bottom > topOffset) {
          setCurrentSectionNum(i + 1); // section1 ~ section9 => 1 ~ 9
          break;
        }
      }
    }

    const sectionToNavMap: { [key: string]: string } = {
      section1: "home",
      section2: "home",
      section3: "menu",
      section4: "about",
      section5: "web",
      section6: "web",
      section7: "web",
      section8: "web",
      section9: "contact",
    };

    const newActiveId = sectionToNavMap[currentSection];
    if (newActiveId && newActiveId !== activeId) {
      setActiveId(newActiveId);
    }

    if (currentIndex !== null && currentIndex !== currentSectionIndex) {
      setCurrentSectionIndex(currentIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current ?? window;
    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "HOME", targetId: "section1" },
    { id: "menu", label: "MENU", targetId: "section3" },
    { id: "about", label: "ABOUT", targetId: "section4" },
    { id: "web", label: "WEB", targetId: "section5" },
    { id: "contact", label: "CONTACT", targetId: "section9" },
  ];

  return (
    <div>
      <FixedNav items={navItems} activeId={activeId} />

      {/* WebNav 조건부 렌더링 */}
      {/* {[4, 5, 6, 7].includes(currentSectionIndex ?? -1) && (
        <WebNav current={currentSectionIndex!} />
      )} */}

      {[5, 6, 7, 8].includes(currentSectionNum) && (
        <WebNav current={currentSectionNum} />
      )}

      <div className="main-container" ref={containerRef}>
        <section id="section1">
          <Section1 />
        </section>
        <section id="section2">
          <Section2 />
        </section>
        <section id="section3">
          <Section3 />
        </section>
        <section id="section4">
          <Section4 />
        </section>
        <section id="section5">
          <Section5 />
        </section>
        <section id="section6">
          <Section6 />
        </section>
        <section id="section7">
          <Section7 />
        </section>
        <section id="section8">
          <Section8 />
        </section>
        <section id="section9">
          <Section9 />
        </section>
      </div>
    </div>
  );
}

export default App;
