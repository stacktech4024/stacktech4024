# Totem Pool — PHP & MySQL Social Feed

**Web Application · PHP · MySQL · PDO · HTML5 · CSS3**

[← Academic portfolio](../ACADEMIC_PORTFOLIO.md)

Totem Pool is a small database-backed social feed built to practice full-stack web development. The interface has been captured running in both **desktop and mobile** layouts. The original screenshots are being reviewed for public posting; this case study summarizes observed behaviour and source-code features without uploading the assessed submission.

## What the app demonstrates

| Area | Implementation |
| --- | --- |
| Accounts | Registration form, username/email validation, duplicate checks |
| Password handling | `password_hash()` when registering and `password_verify()` when logging in |
| Sessions | Session regeneration at login, authenticated feed access, logout |
| Posting | Create text posts, display feed with usernames and timestamps |
| Social interaction | Like count, prevent duplicate likes in application logic, delete own posts |
| Database | PDO prepared statements for form-driven lookups/writes; joins to display posts and authors |
| Front end | Styled forms, feed cards, buttons, hover states, and mobile layout using a CSS media query |

### Actual interface evidence collected

I captured these four views from the working application:

1. **Desktop feed:** Post editor, posts from demonstration accounts, likes and owner-specific delete buttons.
2. **Mobile feed:** Stacked cards and a responsive header.
3. **Login:** Email and password form.
4. **Registration:** Username, email and password form.

The revised desktop/mobile captures use ordinary demonstration posts, with no HTML-script test text in the feed. The original image assets are held outside this public README until publication approval and a final privacy check.

## Security-related techniques practiced

- Parameterized SQL queries through PDO.
- User output encoded with `htmlspecialchars()`.
- Password hashes rather than plaintext password storage.
- A deletion query that includes the authenticated account's user ID.

These are useful techniques but **do not constitute a security audit**. Next improvements include CSRF tokens, confirmed database uniqueness constraints, integration tests and a reproducible database setup. The database schema and connection-library configuration were not part of the supplied source bundle.

## Front-end and CSS

The `styles.css` file uses a green-and-neutral colour palette, readable forms, rounded post cards, differentiated action buttons and a `max-width: 600px` media query to adapt the feed for narrower screens. **CSS is explicitly part of the project**.

## What I learned

I practiced combining HTML forms, PHP validation, authenticated sessions, SQL data access and responsive CSS in a single user-facing application.

*Academic case study. Screenshots and full graded source are retained for publication review rather than posted automatically.*