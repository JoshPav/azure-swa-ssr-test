"use client"

import styles from "../../styles/Home.module.css";
import { DateTime } from "luxon";

export default function Ssr({ locations, recentMatches }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js on Azure with SSR!</a>
        </h1>

        <div>
          <h2>Locations</h2>
          {locations.map(location => <p key={`location-${location.id}`}>{JSON.stringify(location)}</p>)}
        </div>

        <div>
          <h2>Recent Matches</h2>
          {recentMatches.map(match => <p key={`match-${match.id}`}>{JSON.stringify(match)}</p>)}
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
