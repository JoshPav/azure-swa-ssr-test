import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js on Azure samples!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/ssr">
            <a className={styles.card}>
              <h2>Server-Side Rendering &rarr;</h2>
              <p>Use SSR to inject data to a page at render time.</p>
            </a>
          </Link>

          <Link href="/api-route">
            <a className={styles.card}>
              <h2>API Routes &rarr;</h2>
              <p>Create an API route to call from the app.</p>
            </a>
          </Link>

          <Link href="/image">
            <a className={styles.card}>
              <h2>Image component &rarr;</h2>
              <p>Use Next.js Image component support for responsive images.</p>
            </a>
          </Link>

          <a
            href="https://docs.microsoft.com/azure/static-web-apps/deploy-nextjs-hybrid"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Azure
              Static Web Apps.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://docs.microsoft.com/azure/static-web-apps/deploy-nextjs-hybrid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with Next.js, hosted on Azure.
        </a>
      </footer>
    </div>
  );
}