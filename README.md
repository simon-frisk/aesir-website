# Aesir website

This is the website for [Aesir](https://aesir.se).

# Docs

This website is built with [Nextjs](https://nextjs.org/docs/getting-started), which is a framework for the library [React](https://reactjs.org/).

Lot's of content for the website comes from [Prismic](https://prismic.io/), a content management system that allow to write website content in an easy way. The content is then pulled directly into this website via Prismic's api.

The website is hosted on Vercel, which makes hosting nextjs increadibly easy. It syncs to the github master branch and automatically publishes commits to the master branch.

The basic folder structure of this repo is that files in /pages each create on page on the website (this is how nextjs works). There are some reusable components in /components, global stylesheet at /styles/global.css, and assets like images (get's hosted statically automatically) in /public. prismic-config.js contains setup for using the Prismic api.

Emails are sent using [Sendgrid](https://sendgrid.com/)

If you have ideas, thoughts, or anything else, you can mail [It Responsible](mailto://it@aesir.se).
