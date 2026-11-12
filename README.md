# Apartments Tukano website

Plain HTML site for tukanomahahual.com. English at `/`, Spanish at `/es/`. No build step: Netlify serves the files as they are.

## What's here

- `index.html`: English homepage
- `es/index.html`: Spanish homepage
- `thanks/`, `es/gracias/`: pages shown after the contact form is sent
- `privacy/`, `es/privacidad/`: privacy notice (aviso de privacidad)
- `404.html`: page-not-found
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

**Netlify address.** The site's Netlify address, `frolicking-jelly-3f63fb.netlify.app`, redirects to `https://tukanomahahual.com/` (set in `netlify.toml`). If you rename the site in Netlify, change that address in `netlify.toml` too. The old June project `tukanomahahual.netlify.app` is a separate, unused Netlify site and can be deleted.

**Email.** The domain's email (MX and webmail records) still runs on the FatCow hosting plan at Network Solutions. Don't cancel that plan unless the email moves somewhere else first.

**Contact form.** In Netlify, open Forms. The form called `contact` appears after the first deploy. Under Form notifications, add an email notification to tukano@nym.hush.com. The `language` field tells you which page it came from.

**Lodgify.** The Lodgify search bar sits on its own full-width row under the hero text and photo. It uses website ID 687595 and books rental #864379 (the Three-Bedroom, 6 units). The line under it links to the Two-Bedroom checkout (rental #864390, 2 units). The "See dates & prices" button on each apartment card opens that rental's Lodgify checkout in a new tab: `checkout.lodgify.com/en/web-4e4c357dbc/<rental id>/reservation`, with `/es/` on the Spanish page. The English snippet is in `index.html` and the Spanish one in `es/index.html`; both load `renderPortableSearchBar.js` just above `site.js`. Its colours, corners and font are set with Lodgify's CSS variables in `assets/css/site.css`. To change labels or the rental, regenerate the widget under Website builder → External widgets and replace the `#lodgify-search-bar` block on each page. Then connect Google Vacation Rentals under Channels (Professional plan).

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
- **Apartment counts and guest rules.** The counts (2 two-bedroom, 6 three-bedroom) and the extra-guest wording are in the apartment cards and the "How many people" question on both homepages. Keep them the same as Lodgify, which charges the extra-guest fee for children too.
- **WhatsApp number.** Search for `529831542010` and `+52 983 154 2010` across all files and replace both.
- **Email.** Search for `tukano@nym.hush.com` across all files.
- **Styles or script.** After changing `site.css` or `site.js`, raise the number in `?v=2` (to `?v=3`, and so on) wherever the file is linked in every `.html` file. Otherwise returning visitors keep the old file for up to a week.
- **Photos.** Replace a file in `assets/img/` with a new one of the same name and shape. Netlify updates it within a week for returning visitors, and immediately for new ones.
- **Privacy notice.** Add the legal name of the Mexican company that runs Tukano to both privacy pages.
