# INKOGNITO — Likha toh likha, kisne likha?

A fun, Gen-Z themed website for the INKOGNITO pen brand. Pure HTML/CSS/JS — no build tools, no dependencies. Free to host on GitHub Pages.

## Files
- `index.html` — all page content (Home, Category, Offers, Reviews, Support)
- `style.css` — theme, layout, glossy buttons, animations
- `script.js` — mobile menu, scroll-based active tab, "Buy Now" toast
- `assets/logo.png` — brand logo (used as navbar logo, favicon, footer logo)

## How to run locally
Just double-click `index.html`, or in a terminal:
```
cd inkognito
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## How to deploy on GitHub Pages (free)

1. **Create a new GitHub repo** (e.g. `inkognito-website`) — public.
2. **Upload these files** to the repo root: `index.html`, `style.css`, `script.js`, and the `assets/` folder (with `logo.png` inside).
   - Easiest way: on the repo page, click **Add file → Upload files**, drag all files/folders in, and commit.
   - Or via git:
     ```
     git init
     git add .
     git commit -m "Initial commit - INKOGNITO website"
     git branch -M main
     git remote add origin https://github.com/<your-username>/inkognito-website.git
     git push -u origin main
     ```
3. Go to your repo **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, select `main` and folder `/ (root)`, then **Save**.
6. Wait 1–2 minutes. Your site will be live at:
   ```
   https://<your-username>.github.io/inkognito-website/
   ```

That's it — 100% free hosting, no server needed.

## Notes
- All product images are drawn with pure CSS (no external image files needed except the logo) so the site loads fast.
- Fonts (`Baloo 2`, `Poppins`) load free from Google Fonts.
- "Buy Now" buttons currently just show an "added to cart" confirmation — hook them up to a real cart/payment provider (e.g. Razorpay, Instamojo) when you're ready to actually sell.
