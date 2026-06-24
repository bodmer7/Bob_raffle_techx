# IBM Bob Capsule — Sticker-Spiel für Kollegen

## 📦 Was ist das?

Ein interaktives **Capsule-Opening-Spiel** im CS:GO-Stil für IBM Bob Sticker. Spieler öffnen eine virtuelle Kapsel und ziehen einen zufälligen Bob-Sticker mit unterschiedlichen Seltenheitsstufen.

**Jetzt in Englisch!** Die UI wurde von Deutsch auf Englisch übersetzt.

---

## 🚀 Schnellstart

### Option 1: Direkt im Browser öffnen

1. Entpacke alle Dateien
2. Öffne `ui_kits/capsule-game/index.html` in einem modernen Browser (Chrome, Firefox, Edge)
3. Fertig! Das Spiel läuft komplett lokal, keine Installation nötig

### Option 2: Mit lokalem Server (empfohlen für Entwicklung)

```bash
# Im Hauptverzeichnis:
npx serve .
# Oder mit Python:
python -m http.server 8000
```

Dann öffne: `http://localhost:8000/ui_kits/capsule-game/index.html`

---

## 📁 Wichtige Dateien

```
IBM Bob Capsule/
├── ui_kits/capsule-game/
│   ├── index.html          ← HAUPTDATEI - Hier starten!
│   ├── app.jsx             ← Spiel-Logik (React)
│   ├── components.jsx      ← UI-Komponenten
│   └── data.js             ← Sticker-Daten & Seltenheiten
├── assets/stickers/        ← 48 Bob-Sticker (PNG, 256×256)
├── styles.css              ← Design-System
└── readme.md               ← Technische Dokumentation (EN)
```

---

## 🎮 Wie funktioniert das Spiel?

1. **Idle-Screen**: Zeigt die Kapsel mit "Open"-Button
2. **Spinning**: Animierte Reel mit allen Stickern scrollt durch
3. **Reveal**: Der gewonnene Sticker wird mit Effekten präsentiert
4. **Reset**: "Open again"-Button für nächste Runde

### Features:
- ✅ **5 Seltenheitsstufen** (Standard → Rare → Epic → Legendary → Exotic)
- ✅ **Gewichtete Wahrscheinlichkeiten** (60% / 25% / 10% / 4% / 1%)
- ✅ **Sound-Effekte** (WebAudio, keine externen Dateien)
- ✅ **Konfetti** bei seltenen Drops (Epic+)
- ✅ **Responsive** (optimiert für 1280×720 Kiosk-Modus)
- ✅ **Test-Modus** verfügbar (siehe unten)

---

## ⚙️ Konfiguration

### Test-Modus aktivieren

In `ui_kits/capsule-game/data.js`, Zeile 58:

```javascript
// Alle Sticker haben gleiche Chance (für Tests)
const EQUAL_ODDS = true;

// Zurück zu gewichteten Wahrscheinlichkeiten
const EQUAL_ODDS = false;
```

### Sticker hinzufügen/ändern

In `ui_kits/capsule-game/data.js`, ab Zeile 22:

```javascript
const STICKERS = [
  S("dateiname", "Sticker Name", "standard"),  // 60% Chance
  S("dateiname", "Sticker Name", "rare"),      // 25% Chance
  S("dateiname", "Sticker Name", "epic"),      // 10% Chance
  // ... weitere Sticker
];
```

**Seltenheitsstufen:**
- `standard` (blau) - MIL-SPEC - 60%
- `rare` (lila) - RESTRICTED - 25%
- `epic` (pink) - CLASSIFIED - 10%
- `legendary` (rot) - COVERT - 4%
- `exotic` (gold) - BOB LEGENDARY - 1%

### Spezial-Finishes

Für holografische oder Foil-Effekte:

```javascript
S("dateiname", "Name", "exotic", "holo"),  // Holografisch
S("dateiname", "Name", "legendary", "foil"), // Foil-Effekt
```

---

## 🎨 UI-Texte anpassen

Alle UI-Texte sind jetzt in **Englisch**. Zum Ändern, bearbeite `ui_kits/capsule-game/app.jsx`:

```javascript
// Zeile 262: Sound-Button
<span>SOUND {sound ? "ON" : "OFF"}</span>

// Zeile 272: Untertitel
<p className="sub">Open the capsule and draw your Bob.</p>

// Zeile 280: Öffnen-Button
<GameButton>Open</GameButton>

// Zeile 306: Reveal-Text
<div className="reveal-eyebrow">You drew</div>

// Zeile 316: Abholhinweis
<div className="handover">Please collect at the booth</div>

// Zeile 317: Nochmal-Button
<GameButton>Open again</GameButton>
```

---

## 🎵 Sound ein-/ausschalten

- **Im Spiel**: Klick auf den Sound-Button (oben rechts)
- **Standardmäßig**: Sound ist AN
- **Programmatisch**: In `app.jsx`, Zeile 347:
  ```javascript
  const [sound, setSound] = useState(true); // false für Sound AUS
  ```

---

## 🖼️ Eigene Sticker verwenden

1. Erstelle PNG-Dateien (256×256px empfohlen)
2. Speichere sie in `assets/stickers/`
3. Füge sie in `data.js` hinzu:

```javascript
S("mein-neuer-sticker", "Mein Sticker Name", "rare"),
```

**Wichtig:** Dateiname ohne `.png` Endung angeben!

---

## 🌐 Für Booth/Kiosk-Einsatz

### Vollbild-Modus

Drücke **F11** im Browser für Vollbild.

### Empfohlene Browser-Einstellungen

```javascript
// Chrome Kiosk-Modus (Windows):
chrome.exe --kiosk --app=file:///C:/Pfad/zur/index.html

// Oder mit lokalem Server:
chrome.exe --kiosk http://localhost:8000/ui_kits/capsule-game/index.html
```

### Auto-Reload nach Inaktivität

Füge in `index.html` vor `</body>` ein:

```javascript
<script>
let timeout;
function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(() => location.reload(), 60000); // 60 Sekunden
}
document.addEventListener('click', resetTimer);
resetTimer();
</script>
```

---

## 🐛 Troubleshooting

### Problem: Sticker werden nicht angezeigt
- **Lösung**: Überprüfe, ob alle Dateien im richtigen Ordner sind
- Pfad muss stimmen: `../../assets/stickers/dateiname.png`

### Problem: Sound funktioniert nicht
- **Lösung**: Browser benötigt User-Interaktion (Klick) für Audio
- Klicke einmal auf "Open", dann funktioniert der Sound

### Problem: Reel scrollt nicht
- **Lösung**: JavaScript-Fehler in der Konsole prüfen (F12)
- Stelle sicher, dass React und Babel geladen sind

### Problem: Seite lädt nicht
- **Lösung**: Verwende einen lokalen Server (siehe Schnellstart)
- Manche Browser blockieren lokale Dateien aus Sicherheitsgründen

---

## 📊 Technische Details

- **Framework**: React 18.3.1 (via CDN)
- **Transpiler**: Babel Standalone (für JSX)
- **Audio**: WebAudio API (keine externen Dateien)
- **Animationen**: CSS + requestAnimationFrame
- **Keine Dependencies**: Alles läuft im Browser

---

## 🎯 Anpassungen für verschiedene Events

### UBS Branding (bereits vorhanden)

Die Kapsel zeigt "Bobathon for UBS" mit UBS-Logo. Zum Ändern:

In `app.jsx`, Zeile 274-278:

```javascript
brand={{
  title: "Dein Event",
  subtitle: "for Company",
  logo: <YourLogo size={70} />
}}
```

### Andere Farben

Bearbeite `tokens/colors.css` für globale Farbänderungen:

```css
--ibm-blue: #0f62fe;        /* Hauptfarbe */
--code-cyan: #54c8ff;       /* Akzentfarbe */
```

---

## 📞 Support & Fragen

Bei Fragen oder Problemen:

1. Prüfe die Browser-Konsole (F12) auf Fehler
2. Lies die technische Doku: `readme.md`
3. Kontaktiere den Design-System-Maintainer

---

## 📝 Changelog

### Version 1.1 (2026-06-15)
- ✅ UI von Deutsch auf Englisch übersetzt
- ✅ Alle Texte aktualisiert (Buttons, Labels, Hinweise)
- ✅ Test-Modus-Text übersetzt

### Version 1.0
- Initiales Release mit deutschem UI
- 48 Bob-Sticker
- CS:GO-Style Capsule-Opening
- WebAudio Sound-Effekte

---

## 📄 Lizenz & Credits

**Design System**: IBM Bob Capsule  
**Sticker Art**: ChatGPT/Gemini Generated  
**Code**: Custom React Implementation  
**Fonts**: Saira Condensed (Google Fonts), IBM Plex Sans/Mono

---

**Viel Spaß beim Sticker-Ziehen! 🎮✨**