// src/data/lessons.ts
export interface Lesson {
  id: number;
  title: string;
  content: string;
}

export const LESSONS_DATA: Lesson[] = [
  {
    id: 1,
    title: "Introduction to Mindfulness",
    content: `
Mindfulness is the art of being fully present in the moment. 
It means observing your thoughts, feelings, and sensations without judgment. 
By practicing mindfulness, you learn to respond thoughtfully instead of reacting automatically. 
This practice reduces stress, sharpens focus, and improves emotional well-being. 
Mindfulness is not about emptying your mind but about becoming aware of what is happening around and within you.
    `,
  },
  {
    id: 2,
    title: "Breathing Techniques",
    content: `
Breathing is the anchor of mindfulness practice. 
Deep, slow, and intentional breathing helps calm the nervous system and brings awareness back to the body. 
Techniques like diaphragmatic breathing, box breathing, and alternate nostril breathing can help reduce anxiety, 
improve focus, and promote relaxation. 
Making breathing exercises part of your daily routine allows you to manage emotions more effectively.
    `,
  },
  {
    id: 3,
    title: "Body Awareness",
    content: `
Mindfulness also involves connecting with your body. 
Practices such as body scanning, mindful walking, and progressive muscle relaxation teach you to notice physical sensations. 
By listening to the body, you learn how stress and emotions manifest physically and how to release them. 
Body awareness improves posture, reduces tension, and fosters deeper self-connection.
    `,
  },
  {
    id: 4,
    title: "Managing Stress",
    content: `
Stress is a natural part of life, but when unmanaged, it harms both mind and body. 
Mindfulness helps you observe stress triggers without being consumed by them. 
Through meditation, breathwork, and mindful pauses, you can train yourself to remain calm under pressure. 
Mindful stress management empowers you to respond with clarity and resilience instead of panic.
    `,
  },
  {
    id: 5,
    title: "Gratitude in Action",
    content: `
Gratitude transforms how we see the world. 
By practicing gratitude daily—through journaling, reflection, or simple acknowledgment—you cultivate positivity. 
Gratitude enhances relationships, boosts mental health, and builds resilience. 
Mindfulness and gratitude together create a cycle of awareness and appreciation that uplifts every part of life.
    `,
  },
];
