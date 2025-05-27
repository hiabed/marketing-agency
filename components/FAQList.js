"use client"

import { useState, useEffect } from "react"
import { Plus } from "lucide-react"
import styles from "./FAQList.module.css"
import { faqData } from "./FAQ-data"

const FAQList = () => {
  const [openFaqs, setOpenFaqs] = useState({})
  const [activeSection, setActiveSection] = useState("site-internet")

  const sectionKeys = Object.keys(faqData)

  const toggleFaq = (sectionKey, questionIndex) => {
    const faqKey = `${sectionKey}-${questionIndex}`
    setOpenFaqs((prev) => ({
      ...prev,
      [faqKey]: !prev[faqKey],
    }))
  }

  const scrollToSection = (sectionKey) => {
    const element = document.getElementById(sectionKey)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionKeys
        .map((key) => ({
          key,
          element: document.getElementById(key),
        }))
        .filter((section) => section.element)

      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.key)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={styles.faqPageContainer}>
      {/* Sticky Sidebar */}
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>NAVIGATION RAPIDE</h3>
        <nav className={styles.sidebarNav}>
          {sectionKeys.map((sectionKey) => (
            <button
              key={sectionKey}
              onClick={() => scrollToSection(sectionKey)}
              className={`${styles.sidebarItem} ${activeSection === sectionKey ? styles.sidebarItemActive : ""}`}
            >
              {faqData[sectionKey].title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {sectionKeys.map((sectionKey) => (
          <section key={sectionKey} id={sectionKey} className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>{faqData[sectionKey].title}</h2>

            <div className={styles.faqList}>
              {faqData[sectionKey].questions.map((item, index) => {
                const faqKey = `${sectionKey}-${index}`
                const isOpen = openFaqs[faqKey]

                return (
                  <div key={index} className={styles.faqItem}>
                    <button
                      onClick={() => toggleFaq(sectionKey, index)}
                      className={styles.faqButton}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faqKey}`}
                    >
                      <span className={styles.faqQuestion}>{item.question}</span>
                      <Plus className={`${styles.faqIcon} ${isOpen ? styles.faqIconRotated : ""}`} />
                    </button>

                    {isOpen && (
                      <div id={`faq-answer-${faqKey}`} className={styles.faqAnswer}>
                        <div className={styles.faqAnswerContent}>
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default FAQList;
