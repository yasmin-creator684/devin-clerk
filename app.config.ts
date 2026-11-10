export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "GamerOwl",
  description:
    "Gives you reminders of games and notifies you to claim your dailies and missions.",
  emoji: "🦉",
  accent: "#4f46e5",
  upcomingFeatures: [
    {
      title: "Game library",
      description: "Add the games you play and choose which ones to track.",
    },
    {
      title: "Daily reset reminders",
      description: "Get notified when each game's dailies reset.",
    },
    {
      title: "Mission checklist",
      description: "Tick off daily and weekly missions for each game.",
    },
    {
      title: "Reset countdowns",
      description: "See a live timer until each game's next reset.",
    },
    {
      title: "Claim streaks",
      description: "Track how many days in a row you've claimed your dailies.",
    },
    {
      title: "Event deadline alerts",
      description: "Get a heads-up before limited-time events end.",
    },
  ] satisfies Feature[],
};
