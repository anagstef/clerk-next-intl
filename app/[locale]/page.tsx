import { UserButton } from "@clerk/nextjs";
import Greeting from "./Greeting";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('Index');
  return (
    <main>
      <h1>This is a sample app built with NextJS app router</h1>
      <Greeting />
      <div style={{ padding: '20px' }}>This is a localized text: <span style={{ color: 'purple' }}>{t('title')}</span></div>
      <div style={{ padding: '20px' }}>
        <h2>Pages:</h2>
        <nav style={{ color: 'green' }}>
          <div><Link href="/about">About</Link></div>
          <div><Link href="/sign-in">Sign In</Link></div>
          <div><Link href="/sign-up">Sign Up</Link></div>
          <div><Link href="/profile">Profile</Link></div>
          <div><Link href="/protected">Protected</Link></div>
        </nav>
      </div>
      <div>
        <UserButton />
      </div>
    </main>
  )
}
