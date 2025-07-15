import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";

const App = () => {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  // Ref pour le formulaire (section Contact)
  const formRef = useRef(null);
  const faqData = [
    {
      question: "Combien de temps prend la création du site ?",
      answer: `Cela dépend de l'offre :
        • Site Essentiel : livré en 72h
        • Pack Pro : livré sous 7 jours
        • Site E-commerce : livré sous 14 jours
        • Application mobile : 4 à 6 semaines`,
    },
    {
      question: "Puis-je modifier mon site plus tard ?",
      answer: `Oui. Vous êtes formé(e) à la gestion des contenus, et je reste disponible pour les mises à jour via la maintenance annuelle.`,
    },
    {
      question: "Le site est-il adapté aux mobiles ?",
      answer: `Oui, tous les sites sont responsive, adaptés aux smartphones/tablettes et optimisés pour le référencement local.`,
    },
    {
      question:
        "Que se passe-t-il si je n’ai pas encore de logo ou de photos ?",
      answer: `Pas de souci ! Je peux vous guider pour créer un logo simple ou utiliser des images libres de droits en attendant.`,
    },
    {
      question: "Y a-t-il des frais cachés ?",
      answer: `Non, tout est transparent. Vous payez le tarif indiqué. L’hébergement et le nom de domaine sont inclus la première année.`,
    },
    {
      question: "Est-ce que je suis propriétaire du site une fois livré ?",
      answer: `Oui, vous êtes 100% propriétaire du site. Vous recevez les accès complets (admin, domaine, etc.).`,
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu peux ajouter envoi API / mail ou webhook
    setSubmitted(true);
    setContact({ name: "", email: "", message: "" });
  };
  // Fonction appelée au clic sur une offre
  const handleOffreClick = (offreName) => {
    // Remplir le textarea avec le nom de l'offre
    setContact((prev) => ({
      ...prev,
      message: `Je suis intéressé par l'offre : ${offreName}`,
    }));

    // Scroll vers le formulaire
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const openModal = (type) => {
    if (type === "mentions") {
      setModalContent(`
        <h2>Mentions légales</h2>
        <p>Éditeur : MonSiteEn72h<br/>
        Responsable de publication : MonSiteEn72h<br/>
        Hébergeur : GitHub<br/>
        Contact : contact@monsiteen72h.com</p>
      `);
    } else if (type === "confidentialite") {
      setModalContent(`
        <h2>Politique de confidentialité</h2>
        <p>Nous collectons uniquement les données nécessaires au bon fonctionnement du site (formulaire de contact).<br/>
        Aucune donnée n’est revendue ou utilisée à d'autres fins.</p>
      `);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto", // ← Centrage horizontal
        backgroundColor: "#fff",
        color: "#333",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Helmet pour SEO */}
      <Helmet>
        <title>
          Création de sites vitrines en Guadeloupe – Boostez votre activité
        </title>
        <meta
          name="description"
          content="Des sites vitrines modernes, optimisés pour Google, pour booster votre visibilité et vos contacts en Guadeloupe. Contactez-moi via WhatsApp !"
        />
        <meta
          name="keywords"
          content="site vitrine, création site, Guadeloupe, SEO local, site responsive"
        />
        <meta name="author" content="monsiteEn72h" />
        <meta
          property="og:title"
          content="Création de sites vitrines en Guadeloupe"
        />
        <meta
          property="og:description"
          content="Des sites modernes pour booster votre visibilité locale."
        />
        <meta property="og:image" content="https://tonsite.com/preview.jpg" />
        <meta
          property="og:url"
          content="https://Aymrick97.github.io/monsiteEn72h/"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(90deg, #feb47b 0%, #ff7e5f 100%)",
          color: "#fff",
          padding: "60px 20px",
          borderRadius: 12,
          maxWidth: 900,
          textAlign: "center",
          boxShadow: "0 8px 16px rgba(255, 126, 95, 0.4)",
          marginBottom: 40,
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: 20, fontWeight: "700" }}>
          Boostez votre activité en Guadeloupe
        </h1>
        <p style={{ fontSize: "1.4rem", marginBottom: 30 }}>
          Des sites vitrines modernes, optimisés pour Google, qui convertissent.
        </p>
        <a
          href="https://wa.me/590690980697?text=Bonjour,%20je%20souhaite%20un%20site%20vitrine."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#fff",
            color: "#ff7e5f",
            fontWeight: "700",
            padding: "16px 36px",
            borderRadius: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            boxShadow: "0 6px 12px rgba(255, 126, 95, 0.5)",
            transition: "background-color 0.3s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#ffe5d0")
          }
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
          aria-label="Contactez-moi sur WhatsApp"
        >
          Me contacter sur WhatsApp 📲
        </a>
      </section>

      {/* Pourquoi un site ? */}
      <section
        style={{
          maxWidth: 900,
          marginBottom: 50,
          padding: "0 20px",
          textAlign: "center",
        }}
        aria-label="Avantages d'un site vitrine"
      >
        <h2 style={{ fontSize: "2rem", marginBottom: 25, fontWeight: "700" }}>
          Pourquoi un site vitrine ?
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: 20,
            fontSize: "1.1rem",
            color: "#555",
          }}
        >
          {[
            "Visibilité 24h/24 sur Google",
            "Crédibilité professionnelle",
            "Fiche Google Maps optimisée",
            "Contact direct via WhatsApp",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                flex: "1 1 200px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: "#ff7e5f", fontWeight: "700" }}>✔</span>{" "}
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Offres */}
      <section
        style={{
          backgroundColor: "#fff5f0",
          borderRadius: 12,
          maxWidth: 960,
          padding: "40px 20px",
          boxShadow: "0 8px 20px rgba(255, 126, 95, 0.2)",
          marginBottom: 60,
          textAlign: "center",
        }}
        aria-label="Offres de création de site vitrine"
      >
        <h2
          style={{
            fontSize: "2.2rem",
            marginBottom: 40,
            fontWeight: "700",
            color: "#ff7e5f",
          }}
        >
          Mes offres
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          {/* Offre 1 */}
          <div
            onClick={() => handleOffreClick("Site Essentiel")}
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              flex: "1 1 280px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: 16,
                fontWeight: "700",
              }}
            >
              Site Essentiel
            </h3>
            <p>1 page responsive, SEO local</p>
            <p
              style={{
                fontWeight: "700",
                marginTop: 30,
                fontSize: "1.3rem",
                color: "#333",
              }}
            >
              299 €
            </p>
          </div>

          {/* Offre 2 */}
          <div
            onClick={() => handleOffreClick("Pack Pro")}
            style={{
              backgroundColor: "#ff7e5f",
              borderRadius: 12,
              padding: 30,
              color: "#fff",
              flex: "1 1 320px",
              boxShadow: "0 8px 20px rgba(255, 126, 95, 0.7)",
              cursor: "pointer",
              border: "3px solid #fff",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3
              style={{
                fontSize: "1.7rem",
                marginBottom: 18,
                fontWeight: "700",
              }}
            >
              Pack Pro
            </h3>
            <p>SEO + fiche Google + WhatsApp intégré</p>
            <p
              style={{
                fontWeight: "700",
                marginTop: 30,
                fontSize: "1.5rem",
              }}
            >
              450 €
            </p>
          </div>

          {/* Offre 3 */}
          <div
            onClick={() => handleOffreClick("Site Vitrine + Réseaux")}
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 24,
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              flex: "1 1 280px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: 16,
                fontWeight: "700",
              }}
            >
              Site Vitrine + Réseaux
            </h3>
            <p>Site + gestion réseaux sociaux</p>
            <p
              style={{
                fontWeight: "700",
                marginTop: 30,
                fontSize: "1.3rem",
                color: "#333",
              }}
            >
              800 €
            </p>
          </div>
        </div>
      </section>

      {/* Détails Offres */}
      {/* Offres détaillées incluant sites, e-commerce et applications */}
      <section
        style={{
          maxWidth: "95vw",
          width: "100%",
          margin: "50px auto",
          padding: "0 20px",
          boxSizing: "border-box",
          textAlign: "center",
        }}
        aria-label="Détails des offres"
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: 30,
            fontWeight: "700",
            color: "#ff7e5f",
          }}
        >
          Détail des offres
        </h2>
        <table
          style={{
            width: "100%",
            maxWidth: 700,
            margin: "0 auto",
            borderCollapse: "collapse",
            fontSize: "1.1rem",
            color: "#555",
            tableLayout: "fixed",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#feb47b", color: "#fff" }}>
              <th style={{ padding: "12px", border: "1px solid #ff7e5f" }}>
                Offre
              </th>
              <th style={{ padding: "12px", border: "1px solid #ff7e5f" }}>
                Contenu
              </th>
              <th style={{ padding: "12px", border: "1px solid #ff7e5f" }}>
                Tarif
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                offre: "Site Essentiel (livrable en 72h)",
                contenu: "1 page, responsive, SEO local de base",
                tarif: "299 €",
              },
              {
                offre: "Pack Pro (livrable en 7 jours)",
                contenu:
                  "3 sections, SEO local + fiche Google + WhatsApp intégré",
                tarif: "450 €",
              },
              {
                offre: "Option QR Code",
                contenu: "QR code à coller en boutique menant au site",
                tarif: "+50 €",
              },
              {
                offre: "Maintenance annuelle",
                contenu:
                  "Petites mises à jour + renouvellement nom de domaine/hébergement",
                tarif: "79 €/an",
              },
              {
                offre: "E-commerce (livrable en 14 jours)",
                contenu:
                  "Site boutique simple avec gestion des produits, paiement sécurisé",
                tarif: "1 200 €",
              },
              {
                offre: "Application Mobile (livrable en 4 à 6 semaines)",
                contenu:
                  "Application iOS et Android sur mesure (catalogue, carte, réservation, paiement...)",
                tarif: "à partir de 3 500 €",
              },
            ].map(({ offre, contenu, tarif }, i) => (
              <tr
                key={i}
                style={{
                  backgroundColor: i % 2 === 0 ? "#fff5f0" : "#ffe9dd",
                }}
              >
                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ff7e5f",
                    fontWeight:
                      offre.startsWith("Site") ||
                      offre.startsWith("Pack") ||
                      offre.startsWith("E-commerce") ||
                      offre.startsWith("Application")
                        ? "700"
                        : "normal",
                    color:
                      offre.startsWith("Site") ||
                      offre.startsWith("Pack") ||
                      offre.startsWith("E-commerce") ||
                      offre.startsWith("Application")
                        ? "#ff7e5f"
                        : "#555",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {offre}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ff7e5f",
                    textAlign: "left",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {contenu}
                </td>
                <td
                  style={{
                    padding: "12px",
                    border: "1px solid #ff7e5f",
                    fontWeight: "700",
                    color: "#ff7e5f",
                    whiteSpace: "nowrap", // pour éviter de casser les tarifs sur 2 lignes
                  }}
                >
                  {tarif}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Témoignages */}
      <section
        style={{
          maxWidth: 900,
          marginBottom: 50,
          padding: "0 20px",
          textAlign: "center",
        }}
        aria-label="Témoignages clients"
      >
        <h2 style={{ fontSize: "2rem", marginBottom: 25, fontWeight: "700" }}>
          Ce que disent mes clients
        </h2>
        <div
          style={{
            display: "flex",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            {
              name: "Marie D.",
              text: "Grâce au site, mon salon de coiffure a gagné beaucoup de nouveaux clients ! Très satisfait.",
            },
            {
              name: "Caribbeancare",
              text: "Nous leur avons a fait confiance pour notre projet (site + deux applications) et nous sommes très satisfaits",
            },
            {
              name: "Jean P.",
              text: "Un service professionnel, rapide, et le référencement local est super!.",
            },
            {
              name: "Ekodeal",
              text: "Commande d'une application avec maquette. Livrée en temps et en heure. Vraiment top.",
            },
            {
              name: "Sophie L.",
              text: "J'ai enfin une présence en ligne qui me correspond et qui convertit vraiment.",
            },
          ].map((t, i) => (
            <blockquote
              key={i}
              style={{
                flex: "1 1 260px",
                backgroundColor: "#fff5f0",
                padding: 20,
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(255,126,95,0.15)",
                fontStyle: "italic",
                color: "#555",
              }}
              aria-label={`Témoignage de ${t.name}`}
            >
              “{t.text}”
              <footer
                style={{
                  marginTop: 12,
                  fontWeight: "700",
                  color: "#ff7e5f",
                }}
              >
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          maxWidth: 900,
          marginBottom: 50,
          padding: "0 20px",
          textAlign: "center",
        }}
        aria-label="Foire aux questions"
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: 25,
            fontWeight: "700",
            color: "#ff7e5f",
          }}
        >
          FAQ
        </h2>

        <div
          style={{
            textAlign: "left",
            maxWidth: 720,
            margin: "auto",
          }}
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: 16,
                borderBottom: "1px solid #ddd",
                paddingBottom: 10,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#ff7e5f",
                  cursor: "pointer",
                  padding: "12px 0",
                }}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {item.question}
              </button>
              {activeIndex === index && (
                <p
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                  style={{
                    marginTop: 8,
                    color: "#555",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire Contact */}
      <section
        ref={formRef}
        style={{
          maxWidth: 600,
          width: "100%",
          marginBottom: 80,
          padding: "0 20px",
          textAlign: "center",
        }}
        aria-label="Formulaire de contact"
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: 25,
            fontWeight: "700",
            color: "#ff7e5f",
          }}
        >
          Contactez-moi
        </h2>

        {submitted ? (
          <p
            style={{
              fontSize: "1.2rem",
              color: "#4caf50",
              fontWeight: "700",
            }}
          >
            Merci pour votre message, je vous réponds très vite !
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 15 }}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={contact.name}
              onChange={handleChange}
              required
              style={{
                padding: 12,
                fontSize: "1rem",
                borderRadius: 6,
                border: "1px solid #ccc",
              }}
              aria-label="Nom"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={contact.email}
              onChange={handleChange}
              required
              style={{
                padding: 12,
                fontSize: "1rem",
                borderRadius: 6,
                border: "1px solid #ccc",
              }}
              aria-label="Email"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={contact.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                padding: 12,
                fontSize: "1rem",
                borderRadius: 6,
                border: "1px solid #ccc",
                resize: "vertical",
              }}
              aria-label="Message"
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#ff7e5f",
                color: "#fff",
                fontWeight: "700",
                padding: "14px 0",
                borderRadius: 50,
                border: "none",
                fontSize: "1.1rem",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(255, 126, 95, 0.6)",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#feb47b")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#ff7e5f")
              }
              aria-label="Envoyer le message"
            >
              Envoyer
            </button>
          </form>
        )}
      </section>
      {/* Footer simple */}
      <footer
        style={{
          marginTop: "auto",
          padding: "40px 20px",
          textAlign: "center",
          color: "#aaa",
        }}
      >
        <p>
          © {new Date().getFullYear()} MonSiteEn72h – Création de sites en
          Guadeloupe
        </p>
        <p>
          <button
            onClick={() => openModal("mentions")}
            style={{
              color: "#ff7e5f",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              marginRight: 10,
            }}
          >
            Mentions légales
          </button>
          |
          <button
            onClick={() => openModal("confidentialite")}
            style={{
              color: "#ff7e5f",
              textDecoration: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              marginLeft: 10,
            }}
          >
            Politique de confidentialité
          </button>
        </p>
      </footer>

      {/* Modale */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 30,
              maxWidth: "90%",
              width: 600,
              maxHeight: "80vh",
              overflowY: "auto",
              textAlign: "left",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: modalContent }}
              style={{ color: "#333", fontSize: "1rem", lineHeight: "1.6" }}
            />
            <div style={{ textAlign: "right", marginTop: 20 }}>
              <button
                onClick={closeModal}
                style={{
                  backgroundColor: "#ff7e5f",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "10px 20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
