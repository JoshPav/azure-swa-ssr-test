import React from 'react'
import Ssr from './ssr'

async function getLocations() {

  const res = await fetch('https://bjsscompetitivestandingbackend-qa.azurewebsites.net/api/locations', { cache: 'no-store'})
  return res.json()
}

async function getRecentMatches() {

  const res = await fetch('https://bjsscompetitivestandingbackend-qa.azurewebsites.net/api/matches/recent?locationId=1&offset=0&total=10', { cache: 'no-store'})
  return (await res.json()).results
}

export default async function SsrPage() {

  const locations = await getLocations()
  const recentMatches = await getRecentMatches()
  return <Ssr locations={locations} recentMatches={recentMatches} />
}
