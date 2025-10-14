# EduNext – Tanulóplatform

## Rövid leírás
Az **EduNext** egy egyszerű, háromoldalas tanulóplatform **Next.js** alapon.  
Célja, hogy felhasználók könnyen böngésszék a kurzusokat és kapcsolatba léphessenek az oldal készítőivel.

---

## Oldalak

### 1. Főoldal (`/`)
- Rövid bemutatkozás és ajánlott kurzusok.  
- Navigáció a többi oldalra.

### 2. Kurzusok (`/courses`)
- Összes kurzus listázása kártyákban.  
- Minden kurzushoz cím, leírás és „Részletek” gomb.

### 3. Kapcsolat (`/contact`)
- Egyszerű űrlap: név, e-mail, üzenet.  
- Adatok ideiglenesen a konzolra kerülnek.

---

## Technológia
- **Next.js + React**  
- **Tailwind CSS** stílushoz  
- (Opcionálisan) **TypeScript** a típusbiztonságért

---

## Fejlesztési lépések
1. Projekt létrehozása: `npx create-next-app edunext`
2. Tailwind beállítása  
3. Oldalak és komponensek (Header, Footer, CourseCard) elkészítése  
4. Adatok beolvasása JSON-ból vagy mock API-ból  

---

## Bővítési lehetőségek
- Bejelentkezés  
- Haladás követése  
- Admin felület kurzusok kezelésére
