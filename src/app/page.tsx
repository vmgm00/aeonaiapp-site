import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppStoreLink, UtilityLinks } from "@/components/SiteChrome";
import { ProductImage } from "@/components/ProductImage";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <>
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Image className="hero-wordmark" src="/brand/aeonai-wordmark.png" alt="AEONAI" width={2048} height={682} sizes="(max-width: 700px) 240px, 340px" preload />
        <p className="eyebrow">Your everyday. A little more possible.</p>
        <h1 id="hero-title">Everything<br /><span>within reach.</span></h1>
        <p className="hero-description">An AI companion for everyday help.<br />Chat naturally. Speak when you want.<br className="desktop-break" /> Connect without leaving the conversation.</p>
        <div className="hero-download"><AppStoreLink /><span className="iphone-note">Designed for iPhone</span></div>
        <UtilityLinks />
      </div>
      <div className="hero-product" aria-label="AeonAI on iPhone">
        <div className="product-halo" aria-hidden="true" />
        <ProductImage className="device hero-voice" file="06_voice.png" alt="AeonAI Voice listening screen with its waveform and voice controls." priority />
        <ProductImage className="device hero-launcher" file="05_launcher.png" alt="AeonAI Chat on iPhone with the real Contacts, Voice, Messages, and Settings launcher." priority />
        <p className="composition-caption">A little help. A real connection.</p>
      </div>
    </section>
    <section id="experience" className="experience section-shell" aria-labelledby="experience-title">
      <div className="section-heading centered"><p className="eyebrow">The AeonAI experience</p><h2 id="experience-title">One conversation.<br /><span>More ways to connect.</span></h2><p>From a quick question to a familiar voice.<br />It all starts right here.</p></div>
      <div className="voice-story editorial-row">
        <div className="story-copy"><p className="eyebrow"><span className="section-number">01 /</span> Chat &amp; Voice</p><h3>Type a thought.<br />Talk it through.</h3><p>Ask for a hand with the everyday. Explore an idea in Chat, or open Voice when you&apos;d rather speak.</p><p className="quiet-copy">Your conversation, at your pace.</p></div>
        <figure className="voice-figure"><ProductImage className="glass-detail voice-detail" file="06_voice.png" alt="The real AeonAI Voice panel, showing Listening, End voice, and remaining included voice usage." /><figcaption>Speak when you want.</figcaption></figure>
      </div>
      <div className="connection-story editorial-row">
        <div className="connection-images"><figure><ProductImage className="glass-detail contacts-detail" file="07_contacts.png" alt="AeonAI Contacts with an Aeon handle, a contact request, and a saved contact." /><figcaption>Find each other with Aeon handles.</figcaption></figure><figure><ProductImage className="glass-detail messages-detail" file="08_messages.png" alt="A real person-to-person AeonAI direct message conversation with Leia." /><figcaption>A direct line to your people.</figcaption></figure></div>
        <div className="story-copy"><p className="eyebrow"><span className="section-number">02 /</span> Contacts &amp; Messages</p><h3>A familiar name.<br />A closer connection.</h3><p>Add people by their Aeon handles. Keep your contacts close and send person-to-person messages, all in AeonAI.</p><p className="quiet-copy">AI for your questions. Messages for your people.</p></div>
      </div>
    </section>
    <section id="everyday" className="everyday section-shell" aria-labelledby="everyday-title">
      <div className="planning-story editorial-row">
        <div className="story-copy"><p className="eyebrow">For the everyday</p><h2 id="everyday-title">A plan.<br />A place.<br /><span>A little inspiration.</span></h2><p>Start with what&apos;s on your mind. Plan a day, find directions, or bring music and video into the conversation.</p><p className="quiet-copy">Useful moments, just a message away.</p></div>
        <figure className="planning-figure"><ProductImage className="device planning-device" file="01_chat_day_planning.png" alt="AeonAI Chat responding to a request to plan a relaxed Saturday in Santa Monica." /><figcaption>Everyday help begins with a conversation.</figcaption></figure>
      </div>
      <div className="media-gallery">
        <figure><div className="media-heading"><span>01</span><h3>Find your way.</h3></div><ProductImage className="glass-detail maps-detail" file="02_maps_directions.png" alt="AeonAI Chat showing a directions response and an embedded map with Apple Maps and Google Maps links." /><figcaption>Maps and directions previews, in context.</figcaption></figure>
        <figure><div className="media-heading"><span>02</span><h3>Follow your curiosity.</h3></div><ProductImage className="glass-detail youtube-detail" file="03_youtube_preview.png" alt="AeonAI Chat showing a supported YouTube preview for a beginner stretching video." /><figcaption>Supported YouTube previews in Chat.</figcaption></figure>
        <figure><div className="media-heading"><span>03</span><h3>Set the mood.</h3></div><ProductImage className="glass-detail music-detail" file="04_apple_music_preview.png" alt="AeonAI Chat showing an Apple Music preview in response to a request for instrumental chill music." /><figcaption>Supported Apple Music previews, a tap away.</figcaption></figure>
      </div>
    </section>
    <section id="personal" className="personal-section" aria-labelledby="personal-title"><div className="section-shell editorial-row">
      <figure className="persona-figure"><div className="product-halo" aria-hidden="true" /><ProductImage className="device persona-device" file="09_persona.png" alt="AeonAI Persona settings showing real choices including Professor, Witty, and Helpful AI." /></figure>
      <div className="story-copy"><p className="eyebrow">Built around you</p><h2 id="personal-title">Make Aeon<br /><span>yours.</span></h2><p>A different tone. A familiar name.<br />A little more you in every conversation.</p><dl className="personal-details"><div><dt>Choose a persona.</dt><dd>Find a conversational style that fits the moment.</dd></div><div><dt>Go by your preferred name.</dt><dd>Make the conversation feel more personal.</dd></div><div><dt>Keep your controls within reach.</dt><dd>Manage your account and local AI Chat history in Settings.</dd></div></dl><Link className="text-link" href="/privacy">Explore privacy &amp; account controls <span aria-hidden="true">↗</span></Link></div>
    </div></section>
    <section id="included-access" className="included-section section-shell" aria-labelledby="included-title"><div><p className="eyebrow">Included access</p><h2 id="included-title">Available at no cost.</h2></div><div><p>Chat, Voice, Contacts, Messages, personalization, and account controls are included.</p><p className="quiet-copy">Usage limits may apply to Chat and Voice.</p></div></section>
    <section className="closing-section section-shell" aria-labelledby="closing-title"><Image className="closing-icon" src="/brand/aeonai-app-icon.png" alt="AeonAI app icon" width={100} height={100} sizes="100px" /><p className="eyebrow">Your AI companion, always within reach.</p><h2 id="closing-title">Designed for iPhone.</h2><p>Everyday help. Voice conversations.<br />A place to stay connected.</p><AppStoreLink /></section>
  </>;
}
