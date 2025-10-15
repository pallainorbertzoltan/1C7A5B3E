# EduNext – Érettségi Felkészítő Platform

## Projekt áttekintés
Az **EduNext** egy modern, Next.js alapú webes tanulóplatform, amely kifejezetten az **érettségi tantárgyakra** – **magyar**, **matematika**, **történelem**, **angol** és **digitális kultúra** – koncentrál.  
A cél, hogy a diákok egyszerűen elérjék a tananyagokat, gyakoroljanak teszteket, és felkészüljenek a vizsgákra egy jól strukturált, letisztult felületen.

---

## Funkciók és oldalak

### 🏠 1. Főoldal (`/`)
- Rövid bemutatkozás az EduNext céljáról és működéséről.  
- Motiváló üzenet: *„Készülj fel az érettségire lépésről lépésre!”*  
- **Kiemelt tantárgyak** megjelenítése kártyákban.  
- Navigációs menü a tantárgyak és a kapcsolat oldal felé.  

**Tartalmi elemek:**
- Hero szekció képpel és call-to-action gombbal („Fedezd fel a tantárgyakat”).  
- Rövid ismertető a platform használatáról.

---

### 📘 2. Tantárgyak oldal (`/courses`)
- Az összes érettségi tantárgy listázása kártyák formájában:
  - **Magyar nyelv és irodalom**  
  - **Matematika**  
  - **Történelem**  
  - **Angol nyelv**  
  - **Digitális kultúra**
- Minden kártyán megjelenik:
  - Tantárgy neve  
  - Rövid leírás (pl. „Irodalmi elemzések, nyelvtani összefoglalók”)  
  - „Megnyitás” gomb  

**További lehetőség:**  
- Dinamikus oldalak: `/courses/[subject]`, ahol minden tantárgyhoz külön tananyag és mintaérettségi anyag jelenik meg.  
- Tantárgyon belül: tematikus blokkok (pl. *irodalom*, *nyelvtan*, *gyakorló tesztek*).

---

### ✉️ 3. Kapcsolat oldal (`/contact`)
- Kapcsolatfelvételi űrlap az oldal fejlesztőivel:
  - Név  
  - E-mail  
  - Üzenet  
- Adatok ideiglenesen a **konzolra** kerülnek (később API endpointtal bővíthető).  
- Egyszerű visszajelzés (pl. „Üzenet sikeresen elküldve!”).  

---

## Technológiai háttér

| Elem | Technológia / Eszköz |
|------|------------------------|
| **Frontend** | Next.js (React alapú keretrendszer) |
| **Stílusozás** | Tailwind CSS |
| **Adatkezelés** | statikus `subjects.json` vagy mock API |
| **Típuskezelés** | TypeScript (opcionális) |
| **Komponensek** | Header, Footer, Layout, SubjectCard, ContactForm |

---

## Fejlesztési terv

1. **Projekt inicializálása**  
   ```bash
   npx create-next-app@latest edunext
