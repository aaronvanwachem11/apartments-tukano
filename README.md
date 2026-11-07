# Apartments Tukano website

Plain HTML site for tukanomahahual.com. English at `/`, Spanish at `/es/`. No build step: Netlify serves the files as they are.

## What's here

- `index.html`: English homepage
- `es/index.html`: Spanish homepage
- `thanks/`, `es/gracias/`: pages shown after the contact form is sent
- `privacy/`, `es/privacidad/`: privacy notice (aviso de privacidad)
- `404.html`: page-not-found
- `_drafts/`: snippets not yet in use (never served)
- `assets/css/site.css`: all styles, including the Lodgify search bar colours
- `assets/fonts/`: the two fonts, served from this site
- `assets/js/site.js`: photo gallery, date checks
- `assets/img/`: photos, sized for the web
- `sitemap.xml`, `robots.txt`: for Google
- `netlify.toml`: Netlify settings and redirects

## Put it on GitHub and Netlify

1. In the Tukano repo on GitHub, create a branch called `new-site`.
2. Upload everything in this folder to that branch, keeping the folders as they are.
3. Open a pull request into `main`. Netlify builds a preview link for it. Check the preview on your phone in both languages.
4. Merge into `main`.
5. In Netlify, link the site to the repo, branch `main`. Build command: leave empty. Publish directory: `.`
6. In Netlify, go to Domain management, add `tukanomahahual.com`, and follow the DNS steps it shows. Delete the old forwarding page at your registrar.

## After it is live

**Turn on the Netlify redirect.** Once `https://tukanomahahual.com/` opens the new site, open `netlify.toml`, remove the `#` in front of the five redirect lines near the top, and commit. Until then, the `tukanomahahual.netlify.app` address keeps working on its own.

**Contact form.** In Netlify, open Forms. The form called `contact` appears after the first deploy. Under Form notifications, add an email notification to tukano@nym.hush.com. The `language` field tells you which page it came from.

**Lodgify (not live yet).** The date picker in the hero currently opens WhatsApp with the guest's dates filled in. The Lodgify search bar is ready in `_drafts/lodgify-search-bar.html`, which Netlify never serves. Don't use it yet: it still points at Lodgify's demo rental (#16403). When the real Tukano property is set up in Lodgify, regenerate the widget under Website builder → External widgets, put the real checkout URLs into the snippet, and follow the steps at the top of that file. Then connect Google Vacation Rentals under Channels (Professional plan).

**Google Search Console.** Add `tukanomahahual.com` as a Domain property and verify it with the DNS record Google gives you. Submit `https://tukanomahahual.com/sitemap.xml`. Use URL Inspection on `/` and `/es/` and click Request indexing.

**Google Business Profile.**
- Set the website to `https://tukanomahahual.com/`.
- Remove "Located in: Hotel Museo Matan Ka'an".
- Pick the most specific lodging or apartment-rental category Google offers.
- Upload the photos in `assets/img/`.
- Ask every guest for a Google review. Reviews are the biggest factor for the map results.

**Same details everywhere.** Use exactly the same name, address and phone on the website, Google, Airbnb, Booking.com and anywhere else: Apartments Tukano, Calle Huauchinango esq. Calle Barracuda, 77976 Mahahual, Q.R., +52 983 154 2010, tukano@nym.hush.com.

**Name misuse.** Expedia lists the hotel across the street as "Apartments Tukano By 40 Cañones". Report it to Expedia so searches for your name reach you.

## Making changes

- **Prices.** The "From" prices are in both homepages, in the apartment cards and in the `priceRange` line near the top of each file.
- **WhatsApp number.** Search for `529831542010` and `+52 983 154 2010` across all files and replace both.
- **Email.** Search for `tukano@nym.hush.com` across all files.
- **Styles or script.** After changing `site.css` or `site.js`, raise the number in `?v=2` (to `?v=3`, and so on) wherever the file is linked in every `.html` file. Otherwise returning visitors keep the old file for up to a week.
- **Photos.** Replace a file in `assets/img/` with a new one of the same name and shape. Netlify updates it within a week for returning visitors, and immediately for new ones.
- **Privacy notice.** Add the legal name of the Mexican company that runs Tukano to both privacy pages.
