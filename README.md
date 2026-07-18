# Mohammed Othman — Developer Portfolio

Personal portfolio for [Mohammed Othman](https://github.com/M7md-oth), a
full-stack developer focused on React interfaces and e-commerce systems.

## Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The output is written to `docs/`.

## Deployment

The checked-in `docs/` production build is published from `main` by GitHub
Pages. After changing the site, run `npm run build`, commit the updated build,
and push `main`.

The workflow in `.github/workflows/deploy.yml` is retained as an optional manual
deployment path for accounts with GitHub Actions enabled.

## Design notes

The interface uses a compact editorial layout, system fonts, minimal motion, and no image-heavy assets. It includes semantic landmarks, visible keyboard focus, a skip link, responsive navigation, and reduced-motion support.

## License

The source code is available under the [MIT License](LICENSE).
