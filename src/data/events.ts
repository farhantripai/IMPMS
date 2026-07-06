import aiResilienceChallenge from "@/assets/events/ai-resilience-challenge.png";
import allamaIqbalVision from "@/assets/events/allama-iqbal-vision.png";
import allamaIqbalVisionHero from "@/assets/events/allama-iqbal-vision-hero.png";
import salmaTauseefPortrait from "@/assets/events/salma-tauseef-portrait.png";
import salmaTauseefWomanOfTheYear from "@/assets/events/salma-tauseef-woman-of-the-year-2024.png";

export type UpcomingEventIcon = "brain" | "book-open";

export type EventThemeIcon = "shield" | "brain" | "sparkles" | "book-open" | "lightbulb" | "heart";

export interface EventTheme {
  title: string;
  text: string;
  icon: EventThemeIcon;
}

export interface EventSchedule {
  date?: string;
  time?: string;
  venue?: string;
  dinner?: string;
}

export interface EventSpeaker {
  name: string;
  title?: string;
  bio: string;
  award?: string;
  image?: string;
  imageAlt?: string;
}
export interface EventAudience {
  title: string;
  description: string;
}

export interface UpcomingEvent {
  slug: string;
  title: string;
  subtitle?: string;
  tagline?: string;
  status: string;
  description: string;
  details?: string[];
  icon: UpcomingEventIcon;
  bannerImage: string;
  bannerAlt: string;
  pageHeroImage?: string;
  pageHeroAlt?: string;
  pageHeroWidth?: number;
  pageHeroHeight?: number;
  hideDetailBanner?: boolean;
  focusLabel?: string;
  themes?: EventTheme[];
  audienceIntro?: string;
  schedule?: EventSchedule;
  keynote?: EventSpeaker;
  registrationPrompt?: string;
  ticketNote?: string;
  audiences?: EventAudience[];
}

export interface PastEvent {
  year: string;
  title: string;
}

export const eventsIntro =
  "IMPMS events connect scholarship, science, and community impact—creating opportunities for supporters, partners, and donors to help expand educational access, celebrate achievement, and invest in future generations of innovators.";

export const upcomingEvents: UpcomingEvent[] = [
  {
    slug: "ai-resilience",
    title: "Healthcare AI Innovation Challenge",
    subtitle: "AI Resilience",
    tagline: "The Edge That Keeps You Ahead",
    status: "Coming Soon",
    icon: "brain",
    bannerImage: aiResilienceChallenge,
    bannerAlt:
      "Healthcare AI Innovation Challenge — AI Resilience, Saturday October 3, 2026 at Hilton Richardson Dallas",
    pageHeroImage: salmaTauseefWomanOfTheYear,
    pageHeroAlt: "Dr. Salma Tauseef — Woman of the Year 2024",
    pageHeroWidth: 2560,
    pageHeroHeight: 898,
    hideDetailBanner: true,
    description:
      "AI Resilience is an upcoming IMPMS conference exploring how communities, institutions, and innovators can respond thoughtfully to the opportunities and challenges of artificial intelligence. Centered on resilience, ethics, and long-term human impact, the conference will bring together scholars, professionals, educators, and emerging leaders for meaningful dialogue, shared learning, and future-facing collaboration.",
    schedule: {
      date: "Saturday, October 3, 2026",
      time: "6:00 PM to 9:30 PM",
      venue: "Hilton Richardson Dallas",
      dinner: "Dinner included",
    },
    keynote: {
      name: "Dr. Salma Tauseef",
      award: "Woman of the Year 2024 — Women in Chemicals",
      image: salmaTauseefPortrait,
      imageAlt: "Dr. Salma Tauseef, keynote speaker",
      bio: "Tauseef’s leadership, innovative vision, and dedication to advancing women in the chemicals industry have made her a true trailblazer. Her journey of perseverance and excellence has inspired so many and her extraordinary contributions have shaped the industry.",
    },
    registrationPrompt:
      "Join us for an evening focused on how AI resilience is transforming healthcare, leadership, ethics, and innovation.",
    ticketNote:
      "Ticket information will be released by email as the event date gets closer.",
    focusLabel: "Conference Focus",
    themes: [
      {
        icon: "shield",
        title: "Resilience",
        text: "Building systems and mindsets that adapt when technology, policy, and patient needs shift.",
      },
      {
        icon: "brain",
        title: "Ethics",
        text: "Examining responsible AI adoption with clarity, accountability, and human dignity at the center.",
      },
      {
        icon: "sparkles",
        title: "Innovation",
        text: "Connecting scholarship, industry, and emerging leaders to shape healthcare's next chapter.",
      },
    ],
    audienceIntro:
      "An evening designed for professionals, innovators, and partners shaping the future of healthcare AI.",
    audiences: [
      {
        title: "Healthcare Professionals",
        description:
          "Explore practical uses of AI in healthcare innovation, leadership, and patient centred systems.",
      },
      {
        title: "Technology Leaders",
        description:
          "Explore practical uses of AI in healthcare innovation, leadership, and patient centered systems.",
      },
      {
        title: "Students and Researchers",
        description:
          "Gain exposure to emerging ideas, professional networks, and real world innovation themes.",
      },
      {
        title: "Sponsors and Partners",
        description:
          "Support a timely program that connects education, innovation, and public dialogue.",
      },
    ],
    details: [
      "Priority list registration details will be announced soon.",
      "Sponsorship opportunities will be announced soon for organizations and supporters interested in advancing education, innovation, and community engagement through this conference.",
    ],
  },
  {
    slug: "allama-iqbal-vision",
    title: "Allama Iqbal's Vision for the 21st Century",
    tagline: "Exploring Iqbal's poetry, thought, faith, identity, and relevance across generations",
    status: "In Development",
    icon: "book-open",
    bannerImage: allamaIqbalVision,
    bannerAlt: "Special IMPMS Event — Allama Iqbal's Vision for the 21st Century",
    pageHeroImage: allamaIqbalVisionHero,
    pageHeroAlt: "Allama Iqbal's Vision for the 21st Century — Special IMPMS Event",
    pageHeroWidth: 2560,
    pageHeroHeight: 700,
    hideDetailBanner: true,
    description:
      "IMPMS is planning a special program dedicated to the timeless vision, poetry, and thought of Allama Muhammad Iqbal. This upcoming event will explore Iqbal's continuing relevance in the 21st century, including his powerful message on faith, human identity, self discovery, knowledge, and excellence.",
    schedule: {
      date: "Coming Soon",
      time: "To be announced",
      venue: "To be announced",
    },
    focusLabel: "Program Focus",
    themes: [
      {
        icon: "heart",
        title: "Faith & Identity",
        text: "Exploring Iqbal's enduring message on faith, human dignity, and the shaping of individual and collective identity.",
      },
      {
        icon: "lightbulb",
        title: "Self-Discovery",
        text: "Engaging with Iqbal's call for self-awareness, purpose, and the awakening of human potential across generations.",
      },
      {
        icon: "book-open",
        title: "Knowledge & Excellence",
        text: "Celebrating Iqbal's vision of knowledge, creativity, and excellence as foundations for a thoughtful 21st-century society.",
      },
    ],
    audienceIntro:
      "A program for scholars, students, and community members inspired by Iqbal's vision for faith, knowledge, and human excellence.",
    audiences: [
      {
        title: "Scholars and Educators",
        description:
          "Engage with Iqbal's poetry, philosophy, and intellectual legacy through scholarly dialogue and public reflection.",
      },
      {
        title: "Students and Youth",
        description:
          "Discover how Iqbal's message on self-discovery, purpose, and excellence speaks to emerging generations.",
      },
      {
        title: "Community Leaders",
        description:
          "Explore Iqbal's continuing relevance for faith, identity, and civic life in the 21st century.",
      },
      {
        title: "Sponsors and Partners",
        description:
          "Support a special program connecting heritage, thought, and community engagement.",
      },
    ],
    details: [
      "Program details and schedule will be announced soon.",
      "Speaker announcements will be shared with priority list members first.",
      "Priority list registration details will be announced soon.",
    ],
    registrationPrompt:
      "Join the priority list to be among the first to receive program details, speaker announcements, and registration information.",
  },
];

export function getEventBySlug(slug: string): UpcomingEvent | undefined {
  return upcomingEvents.find((event) => event.slug === slug);
}

export function getEventTitle(event: UpcomingEvent): string {
  return event.subtitle ? `${event.title}: ${event.subtitle}` : event.title;
}

export function getPriorityListEvents(): UpcomingEvent[] {
  return upcomingEvents.filter((event) => event.registrationPrompt);
}

export function getEventPath(slug: string): `/events/${string}` {
  return `/events/${slug}`;
}

export const pastEvents: PastEvent[] = [
  { year: "2025", title: "IMPMS Annual Gala: Artificial Intelligence & The Future: Bridging Heritage and Innovation" },
  { year: "2024", title: "Research Milestone: Dr. Bashoo Naziruddin's Diabetes Grant" },
  { year: "2023", title: "IMPMS Annual Event 2023 featuring Dr. Muhammad M. Muhiuddin" },
  { year: "2022", title: "UTD Auditorium Dedication Honoring Dr. Basheer and Dr. Shakila Ahmed" },
  { year: "2022", title: "IMPMS Annual Event 2022 with Dr. Burçin Mutlu-Pakdil" },
  { year: "2022", title: "In Pursuit of the Smallest and Faintest Galaxies — UTD, Texas" },
  { year: "2020", title: "IMPMS Annual Function 2020 with NASA Scientist Dr. Hashima Hasan" },
  { year: "2020", title: "From Past Scholars to Innovators of Tomorrow — UTD, Texas" },
  { year: "2019", title: "Young Muslim Innovators in the Footsteps of Their Ancestors — UTD, Texas" },
  { year: "2018", title: "Stay in STEM: Supporting Today's Aspiring Youth — Plano, Texas" },
  { year: "2017", title: "Islamic Heritage and the Foundation of Renaissance — TCU, Texas" },
  { year: "2016", title: "Year of Light: Recognizing Ibn Haytham's Work — UTD, Texas" },
  { year: "2015", title: "The Great Sufi Mystique Rumi — SMU, Dallas" },
  { year: "2012", title: "The Influence of Ibn Rushd's Philosophy on the West — St. Louis University, Missouri" },
  { year: "2010", title: "Panel on contributions to the history of science by Islamic civilization — Texas A&M University" },
  { year: "2007–2009", title: "\"Great Thinkers of the Islamic World\" continuing education course at SMU" },
  { year: "2005", title: "Islamic Spain and Its Seminal Contribution to Modern Civilization — 40th International Congress on Medieval Studies, Spain" },
  { year: "2005", title: "Islamic Medieval Scholars and Their Impact on the West — SMU, Dallas" },
  { year: "2003", title: "38th International Congress on Medieval Studies" },
  { year: "2003", title: "Extremism Threat to Global Peace — Arlington, Texas" },
  { year: "2002", title: "Role of Religion in Promoting World Peace — Dallas, Texas" },
  { year: "2001", title: "Muslim Contribution to Human Civilization — Dallas, Texas" },
];
