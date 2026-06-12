export type UpcomingEventIcon = "brain" | "book-open";

export interface UpcomingEvent {
  title: string;
  status: string;
  description: string;
  details?: string[];
  icon: UpcomingEventIcon;
}

export interface PastEvent {
  year: string;
  title: string;
}

export const eventsIntro =
  "IMPMS events connect scholarship, science, and community impact—creating opportunities for supporters, partners, and donors to help expand educational access, celebrate achievement, and invest in future generations of innovators.";

export const upcomingEvents: UpcomingEvent[] = [
  {
    title: "AI Resilience",
    status: "Coming Soon",
    icon: "brain",
    description:
      "AI Resilience is an upcoming IMPMS conference exploring how communities, institutions, and innovators can respond thoughtfully to the opportunities and challenges of artificial intelligence. Centered on resilience, ethics, and long-term human impact, the conference will bring together scholars, professionals, educators, and emerging leaders for meaningful dialogue, shared learning, and future-facing collaboration.",
    details: [
      "Priority list registration details will be announced soon.",
      "Sponsorship opportunities will be announced soon for organizations and supporters interested in advancing education, innovation, and community engagement through this conference.",
    ],
  },
  {
    title: "Allama Iqbal's Vision for the 21st Century",
    status: "In Development",
    icon: "book-open",
    description:
      "IMPMS is planning a special program dedicated to the timeless vision, poetry, and thought of Allama Muhammad Iqbal. This upcoming event will explore Iqbal's continuing relevance in the 21st century, including his powerful message on faith, human identity, self discovery, knowledge, and excellence.",
    details: [
      "The format is currently being developed and may include poetry, scholarly reflections, keynote insights, youth perspectives, and meaningful discussion.",
      "Details, date, speakers, and registration information will be shared soon.",
    ],
  },
];

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
