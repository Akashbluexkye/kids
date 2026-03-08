# 📱 How Your Child Can Use This on Mobile

## Easiest Ways

### Option 1: GitHub Pages (Free, works anywhere)
1. Create a free GitHub account at github.com
2. Create a new repository, upload the 3 files: `exam-study-hub.html`, `number-slides.html`, `manifest.json`
3. Go to Settings → Pages → enable GitHub Pages
4. You'll get a URL like: `https://yourname.github.io/kids/exam-study-hub.html`
5. **On your phone**: Open that URL in Chrome or Safari
6. **Add to Home Screen**: In Safari (iOS) tap Share → Add to Home Screen. In Chrome (Android) tap menu (⋮) → Add to Home Screen
7. Now it works like an app! Tap the icon to open.

### Option 2: Same WiFi – Quick Test
1. On your Mac/laptop, open Terminal
2. Go to the kids folder: `cd ~/Documents/kids`
3. Run: `python3 -m http.server 8000`
4. Find your computer's IP: System Settings → Network (or run `ipconfig getifaddr en0`)
5. **On your phone** (same WiFi): Open browser, type: `http://YOUR-IP:8000/exam-study-hub.html`
   - Example: `http://192.168.1.5:8000/exam-study-hub.html`
6. Works as long as laptop is on and connected.

### Option 3: Netlify Drop (No account needed)
1. Go to **app.netlify.com/drop**
2. Drag and drop the entire `kids` folder
3. You'll get a link like `https://random-name.netlify.app`
4. Open that link on your phone
5. Add to Home Screen for app-like use

### Option 4: Email/WhatsApp to Yourself
1. Zip the `kids` folder
2. Email or WhatsApp the zip to yourself
3. On phone, download and unzip (use Files app or a file manager)
4. Open `exam-study-hub.html` in Chrome/Safari
5. *Note*: Some phones may block local files – Options 1 or 3 work better.

---

## Add to Home Screen (App-like)
- **iPhone**: Safari → Share button → Add to Home Screen
- **Android**: Chrome → Menu (⋮) → Add to Home Screen / Install app

This makes it open full-screen like a real app!
