// src/data.ts

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
Mindfulness is the practice of paying attention to the present moment with openness,
curiosity, and without judgment. At its core, mindfulness means learning how to be fully
aware of our experiences — our thoughts, feelings, bodily sensations, and the environment
around us.

Often, our minds are caught in endless loops of regret about the past or worries about
the future. We replay conversations, imagine outcomes, or dwell on things that never
happened. This constant mental chatter can make us anxious, stressed, or distracted.
Mindfulness interrupts this cycle. By anchoring our attention in the present, we reduce
the power of these mental distractions and find calm clarity.

Why Mindfulness Matters
Scientific research has shown that mindfulness has profound benefits:
- Reduces stress and anxiety by calming the nervous system.
- Improves concentration, memory, and productivity.
- Strengthens emotional resilience, helping us handle challenges with balance.
- Enhances compassion and empathy toward ourselves and others.

Simple Daily Practices
Mindfulness doesn't require sitting for hours in meditation. It can be woven into everyday
life through:
- Mindful breathing: Focusing attention on the breath for a few minutes.
- Body scan: Noticing sensations across the body without trying to change them.
- Mindful walking: Paying attention to each step, the ground beneath you, and your movement.
- Eating mindfully: Noticing the textures, smells, and flavors of food.

Mindfulness is a lifelong journey, not a destination. With daily practice, it transforms
the way we live, respond, and connect to the world.
    `,
  },
  {
    id: 2,
    title: "Breathing Techniques",
    content: `
Breath is the anchor of mindfulness. It is always present, always accessible, and reflects
our inner state. When we are anxious, our breathing becomes shallow and fast. When we are
calm, our breathing is slow and steady. By learning to control our breath, we influence both
our mind and body.

Why Focus on Breath?
Breathing is one of the few bodily functions that we can both control voluntarily and that
happens automatically. This unique feature makes it a powerful gateway to regulating emotions,
reducing stress, and restoring balance.

Common Breathing Techniques
1. Diaphragmatic Breathing (Belly Breathing):
   Place one hand on your chest and the other on your belly. As you inhale deeply through
   your nose, let your belly rise while keeping your chest still. Exhale slowly. This calms
   the nervous system and improves oxygen flow.
   
2. Box Breathing:
   Inhale for a count of 4, hold for 4, exhale for 4, hold again for 4. Repeat several cycles.
   Used by athletes, speakers, and even the military to maintain focus and calm.
   
3. Alternate Nostril Breathing (Nadi Shodhana):
   Close your right nostril with your thumb, inhale through your left. Then close your left
   nostril with your finger, exhale through the right. Repeat the cycle, alternating sides.
   This balances energy and reduces anxiety.
   
4. 4-7-8 Breathing:
   Inhale for 4 counts, hold for 7, exhale for 8. This is particularly useful before sleep
   or when dealing with sudden stress.

Daily Integration
Start by dedicating 5 minutes in the morning or before sleep. Over time, you can extend
the practice to 15–20 minutes. Eventually, you'll find yourself naturally turning to your
breath during stressful situations, meetings, or even while walking.

The breath is not just air moving in and out — it is a reminder to return to the present.
    `,
  },
  {
    id: 3,
    title: "Daily Gratitude",
    content: `
Gratitude is the practice of recognizing and appreciating the good things in life. While
it may seem simple, gratitude has the power to rewire the brain, shifting our focus from
what we lack to what we already have. This creates a mindset of abundance rather than
scarcity.

The Science of Gratitude
Psychological studies show that gratitude:
- Increases happiness and overall life satisfaction.
- Reduces depression and anxiety by focusing on the positive.
- Strengthens relationships by encouraging kindness and appreciation.
- Improves physical health, including better sleep and lower blood pressure.

Gratitude Practices
1. Gratitude Journaling:
   Every day, write down three things you are grateful for. They can be big or small:
   a supportive friend, a good meal, or simply the ability to breathe.
   
2. Gratitude Meditation:
   Sit quietly, breathe deeply, and reflect on people, experiences, or opportunities you
   appreciate.
   
3. Gratitude Letters:
   Write a heartfelt message to someone who has positively impacted your life, even if you
   don't send it. The act itself deepens appreciation.
   
4. Mindful Thankfulness:
   As you go about your day, pause to notice small blessings — sunshine, laughter, music,
   or the smile of a stranger.

Daily Integration
Gratitude works best when practiced consistently. Over time, your mind naturally begins to
look for the positive in situations, making challenges feel lighter and joys more meaningful.
    `,
  },
  {
    id: 4,
    title: "Overcoming Distractions",
    content: `
In our modern world, distractions are everywhere — constant notifications, endless social
media feeds, and multitasking temptations. These distractions fragment our attention and
prevent us from fully engaging with the present moment.

### Understanding Distractions
Distractions are not just external; they also come from within. Wandering thoughts, daydreams,
and overthinking can be as disruptive as phone alerts. Mindfulness teaches us to notice when
we've drifted and gently return our attention.

Strategies for Focus
1. Single-Tasking:
   Choose one task at a time. Avoid juggling multiple tasks, which reduces efficiency and
   increases stress.
   
2. Digital Boundaries:
   Turn off unnecessary notifications. Set specific times for checking emails or messages
   instead of reacting instantly.
   
3. Mindful Pauses:
   Every hour, pause for a minute. Take a few breaths, stretch, and reset your mind.
   
4. Environment Design:
   Organize your workspace to minimize visual clutter. A clean, quiet space supports focus.

Inner Discipline
Distractions will always exist. The goal is not to eliminate them but to strengthen your
awareness and discipline. With practice, you'll find it easier to notice distractions without
being pulled away, regaining control of your attention.
    `,
  },
  {
    id: 5,
    title: "Mindful Relationships",
    content: `
Mindfulness is not just about personal well-being — it transforms how we relate to others.
When we listen with presence, speak with kindness, and observe our emotional triggers,
our relationships become deeper and healthier.

Mindful Listening
Most of us listen to reply, not to understand. Mindful listening means giving full attention
to the speaker without interrupting, judging, or planning your response. This creates trust
and makes others feel valued.

Speaking with Intention
Before speaking, pause and ask:
- Is it true?
- Is it kind?
- Is it necessary?
This simple filter prevents hurtful words and encourages compassionate communication.

Managing Emotional Triggers
Arguments often escalate because we react instantly to emotions. Mindfulness creates a space
between trigger and response, allowing us to choose patience and understanding instead of
anger.

Building Compassion
Compassion is empathy in action. It means not only understanding another's suffering but
also wishing to help. Daily mindfulness practice strengthens compassion by reminding us
that everyone experiences struggles.

Daily Practice
- In conversations, put away distractions and maintain eye contact.
- Express appreciation regularly, even for small gestures.
- Practice forgiveness — for yourself and others.

When relationships are approached mindfully, they become a source of support, growth,
and joy.
    `,
  },
];

export interface Quiz {
  lessonId: number;
  question: string;
  options: { A: string; B: string; C: string; D: string };
  correctOption: "A" | "B" | "C" | "D";
}

// ✅ QUIZZES
export const QUIZZES_DATA: Quiz[] = [
  // 🔹 Lesson 1: Introduction to Mindfulness
  { lessonId: 1, question: "Mindfulness means focusing on?", options: { A: "Past", B: "Future", C: "Present", D: "Dreams" }, correctOption: "C" },
  { lessonId: 1, question: "Which is NOT part of mindfulness?", options: { A: "Judging thoughts", B: "Awareness", C: "Breath focus", D: "Body scanning" }, correctOption: "A" },
  { lessonId: 1, question: "A simple daily practice of mindfulness is?", options: { A: "Multitasking", B: "Deep breathing", C: "Overthinking", D: "Avoiding feelings" }, correctOption: "B" },
  { lessonId: 1, question: "Mindfulness helps reduce?", options: { A: "Stress", B: "Awareness", C: "Focus", D: "Kindness" }, correctOption: "A" },
  { lessonId: 1, question: "Mindfulness improves?", options: { A: "Distraction", B: "Productivity", C: "Sleep issues", D: "Confusion" }, correctOption: "B" },
  { lessonId: 1, question: "Mindfulness increases?", options: { A: "Anxiety", B: "Clarity", C: "Procrastination", D: "Noise" }, correctOption: "B" },
  { lessonId: 1, question: "The opposite of mindfulness is?", options: { A: "Presence", B: "Awareness", C: "Mindlessness", D: "Calmness" }, correctOption: "C" },
  { lessonId: 1, question: "Mindfulness can be practiced by?", options: { A: "Anyone", B: "Only monks", C: "Only doctors", D: "Only children" }, correctOption: "A" },
  { lessonId: 1, question: "Which of these is a mindfulness technique?", options: { A: "Daydreaming", B: "Deep breathing", C: "Constant talking", D: "Complaining" }, correctOption: "B" },
  { lessonId: 1, question: "Mindfulness develops?", options: { A: "Focus & calm", B: "Laziness", C: "Confusion", D: "Stress" }, correctOption: "A" },
  { lessonId: 1, question: "Mindfulness is about?", options: { A: "Being fully present", B: "Forgetting", C: "Escaping", D: "Overthinking" }, correctOption: "A" },
  { lessonId: 1, question: "Daily mindfulness should last at least?", options: { A: "1 min", B: "10 min", C: "1 hr", D: "5 hrs" }, correctOption: "B" },
  { lessonId: 1, question: "Mindfulness is most effective when?", options: { A: "Practiced daily", B: "Practiced once", C: "Avoided", D: "Rushed" }, correctOption: "A" },
  { lessonId: 1, question: "Which improves mindfulness?", options: { A: "Meditation", B: "Scrolling endlessly", C: "Overeating", D: "Complaining" }, correctOption: "A" },
  { lessonId: 1, question: "Mindfulness helps regulate?", options: { A: "Emotions", B: "Weather", C: "Economy", D: "Technology" }, correctOption: "A" },
  { lessonId: 1, question: "Breathing exercises help?", options: { A: "Calm the mind", B: "Increase stress", C: "Forget problems", D: "Lose focus" }, correctOption: "A" },
  { lessonId: 1, question: "Mindfulness is about?", options: { A: "Judging thoughts", B: "Noticing thoughts", C: "Ignoring thoughts", D: "Forcing thoughts" }, correctOption: "B" },
  { lessonId: 1, question: "Mindfulness improves?", options: { A: "Memory", B: "Confusion", C: "Anger", D: "Worry" }, correctOption: "A" },
  { lessonId: 1, question: "Mindfulness can help with?", options: { A: "Happiness", B: "Clarity", C: "Stress relief", D: "All of the above" }, correctOption: "D" },
  { lessonId: 1, question: "Mindfulness practice begins with?", options: { A: "Awareness of breath", B: "Ignoring breath", C: "Sleeping", D: "Forcing calm" }, correctOption: "A" },

  // 🔹 Lesson 2: Breathing Techniques
  { lessonId: 2, question: "Which breathing technique focuses on slow, deep breaths from the diaphragm?", options: { A: "Box breathing", B: "Shallow chest breathing", C: "Diaphragmatic breathing", D: "Rapid panting" }, correctOption: "C" },
  { lessonId: 2, question: "Box breathing typically follows which pattern of counts?", options: { A: "4-4-4-4 (inhale-hold-exhale-hold)", B: "2-2-2-2", C: "6-2-6-2", D: "1-1-1-1" }, correctOption: "A" },
  { lessonId: 2, question: "Which breathing is commonly used in yoga?", options: { A: "Kapalabhati", B: "Hyperventilation", C: "Random shallow breaths", D: "Holding indefinitely" }, correctOption: "A" },
  { lessonId: 2, question: "Alternate nostril breathing helps with?", options: { A: "Balancing energy", B: "Stress increase", C: "Sleep loss", D: "Confusion" }, correctOption: "A" },
  { lessonId: 2, question: "Deep breathing improves?", options: { A: "Circulation", B: "Stress levels", C: "Clarity", D: "All of the above" }, correctOption: "D" },
  { lessonId: 2, question: "What happens when you shallow breathe constantly?", options: { A: "Relaxation", B: "Anxiety & fatigue", C: "Focus", D: "Calmness" }, correctOption: "B" },
  { lessonId: 2, question: "Which part of the body should rise during diaphragmatic breathing?", options: { A: "Chest", B: "Shoulders", C: "Stomach", D: "Feet" }, correctOption: "C" },
  { lessonId: 2, question: "What is the main benefit of box breathing?", options: { A: "Increased stress", B: "Focus and calm", C: "Confusion", D: "Overthinking" }, correctOption: "B" },
  { lessonId: 2, question: "A quick way to calm down anxiety is?", options: { A: "Shallow breathing", B: "Holding breath too long", C: "Deep slow breathing", D: "Ignoring breath" }, correctOption: "C" },
  { lessonId: 2, question: "Breathing exercises help improve?", options: { A: "Memory", B: "Blood oxygen levels", C: "Stress", D: "All of the above" }, correctOption: "D" },
  { lessonId: 2, question: "Which technique uses equal inhale and exhale counts?", options: { A: "Ujjayi breath", B: "Equal breathing (Sama Vritti)", C: "Hyperventilation", D: "Fast panting" }, correctOption: "B" },
  { lessonId: 2, question: "4-7-8 breathing is designed to help?", options: { A: "Falling asleep", B: "Losing focus", C: "Daydreaming", D: "Overthinking" }, correctOption: "A" },
  { lessonId: 2, question: "Breath-holding techniques should be practiced?", options: { A: "Recklessly", B: "Safely and mindfully", C: "Only underwater", D: "Not at all" }, correctOption: "B" },
  { lessonId: 2, question: "Mindful breathing is best practiced?", options: { A: "While rushing", B: "With awareness", C: "Ignoring body", D: "During anger" }, correctOption: "B" },
  { lessonId: 2, question: "Long exhalations activate?", options: { A: "Stress response", B: "Parasympathetic nervous system (relaxation)", C: "Anxiety", D: "Confusion" }, correctOption: "B" },
  { lessonId: 2, question: "Breathing through the nose helps?", options: { A: "Filter and warm air", B: "Stress increase", C: "Shallow breathing", D: "Noise" }, correctOption: "A" },
  { lessonId: 2, question: "Pursed-lip breathing is especially useful for?", options: { A: "Asthma/COPD", B: "Stress increase", C: "Rage", D: "Fatigue only" }, correctOption: "A" },
  { lessonId: 2, question: "Breathing awareness develops?", options: { A: "Mind-body connection", B: "Distraction", C: "Confusion", D: "Forgetfulness" }, correctOption: "A" },
  { lessonId: 2, question: "What should you focus on during mindful breathing?", options: { A: "Breath sensation", B: "Worries", C: "Dreams", D: "Future plans" }, correctOption: "A" },
  { lessonId: 2, question: "Consistent breathing practice leads to?", options: { A: "Calm focus", B: "Increased stress", C: "Sleep loss", D: "Confusion" }, correctOption: "A" },

  // 🔹 Lesson 3: Daily Gratitude
  { lessonId: 3, question: "Gratitude is best described as?", options: { A: "Recognizing and appreciating blessings", B: "Ignoring what you have", C: "Focusing on problems", D: "Comparing with others" }, correctOption: "A" },
  { lessonId: 3, question: "Daily gratitude practice helps improve?", options: { A: "Stress and anxiety", B: "Sleep", C: "Relationships", D: "All of the above" }, correctOption: "D" },
  { lessonId: 3, question: "Which tool is often used for gratitude practice?", options: { A: "Gratitude journal", B: "Television", C: "Social media feed", D: "Complaining list" }, correctOption: "A" },
  { lessonId: 3, question: "A simple gratitude habit is to?", options: { A: "Write 3 things you're thankful for", B: "Ignore your blessings", C: "Focus only on stress", D: "Compare yourself with others" }, correctOption: "A" },
  { lessonId: 3, question: "Gratitude shifts focus from?", options: { A: "Scarcity to abundance", B: "Joy to sadness", C: "Love to hate", D: "Rest to stress" }, correctOption: "A" },
  { lessonId: 3, question: "Which emotion is strengthened by gratitude?", options: { A: "Anger", B: "Envy", C: "Joy", D: "Fear" }, correctOption: "C" },
  { lessonId: 3, question: "Gratitude helps in building?", options: { A: "Weaker bonds", B: "Stronger relationships", C: "Isolation", D: "Loneliness" }, correctOption: "B" },
  { lessonId: 3, question: "Gratitude can improve?", options: { A: "Physical health", B: "Mental wellbeing", C: "Resilience", D: "All of the above" }, correctOption: "D" },
  { lessonId: 3, question: "When is a good time to practice gratitude?", options: { A: "Morning", B: "Evening", C: "Anytime", D: "Only on holidays" }, correctOption: "C" },
  { lessonId: 3, question: "Gratitude reduces?", options: { A: "Depression", B: "Stress", C: "Negative thinking", D: "All of the above" }, correctOption: "D" },
  { lessonId: 3, question: "Which of these is an act of gratitude?", options: { A: "Thanking someone sincerely", B: "Ignoring kindness", C: "Taking credit unfairly", D: "Complaining" }, correctOption: "A" },
  { lessonId: 3, question: "Gratitude journaling works best when done?", options: { A: "Consistently", B: "Rarely", C: "Once in a lifetime", D: "Never" }, correctOption: "A" },
  { lessonId: 3, question: "Practicing gratitude daily builds?", options: { A: "Hope and optimism", B: "Fear", C: "Doubt", D: "Confusion" }, correctOption: "A" },
  { lessonId: 3, question: "Which neurotransmitter is linked to gratitude?", options: { A: "Dopamine", B: "Serotonin", C: "Both A and B", D: "None" }, correctOption: "C" },
  { lessonId: 3, question: "Gratitude makes you more?", options: { A: "Resentful", B: "Compassionate", C: "Angry", D: "Envious" }, correctOption: "B" },
  { lessonId: 3, question: "Gratitude helps in handling?", options: { A: "Failure and setbacks", B: "Laziness", C: "Overeating", D: "Daydreaming" }, correctOption: "A" },
  { lessonId: 3, question: "Expressing gratitude out loud strengthens?", options: { A: "Relationships", B: "Isolation", C: "Conflict", D: "Silence" }, correctOption: "A" },
  { lessonId: 3, question: "Which phrase represents gratitude?", options: { A: "Thank you", B: "I wish I had more", C: "Nothing is enough", D: "Why me?" }, correctOption: "A" },
  { lessonId: 3, question: "Daily gratitude creates a mindset of?", options: { A: "Abundance", B: "Lack", C: "Comparison", D: "Negativity" }, correctOption: "A" },
  { lessonId: 3, question: "Gratitude practice should be?", options: { A: "Simple and consistent", B: "Complicated", C: "Rare", D: "Avoided" }, correctOption: "A" },

  // 🔹 Lesson 4: Managing Stress
  { lessonId: 4, question: "What is stress?", options: { A: "A natural response of the body to challenges", B: "A permanent disease", C: "Only affects weak people", D: "Always negative" }, correctOption: "A" },
  { lessonId: 4, question: "Which hormone is released during stress?", options: { A: "Cortisol", B: "Melatonin", C: "Insulin", D: "Dopamine" }, correctOption: "A" },
  { lessonId: 4, question: "Chronic stress can lead to?", options: { A: "Weakened immune system", B: "Better sleep", C: "Increased joy", D: "More relaxation" }, correctOption: "A" },
  { lessonId: 4, question: "Which practice helps reduce stress immediately?", options: { A: "Mindful breathing", B: "Skipping meals", C: "Worrying more", D: "Avoiding rest" }, correctOption: "A" },
  { lessonId: 4, question: "What happens to breathing under stress?", options: { A: "Becomes shallow and rapid", B: "Remains steady", C: "Stops completely", D: "Becomes musical" }, correctOption: "A" },
  { lessonId: 4, question: "Which habit reduces stress?", options: { A: "Exercise and meditation", B: "Overworking", C: "Alcohol abuse", D: "Ignoring health" }, correctOption: "A" },
  { lessonId: 4, question: "Gratitude helps stress by?", options: { A: "Reducing negativity", B: "Building positivity", C: "Shifting perspective", D: "All of the above" }, correctOption: "D" },
  { lessonId: 4, question: "The 'fight or flight' response is?", options: { A: "Body's reaction to threats", B: "Relaxation method", C: "Stress reduction exercise", D: "Calm breathing" }, correctOption: "A" },
  { lessonId: 4, question: "Which daily habit can reduce stress?", options: { A: "Mindfulness practice", B: "Skipping rest", C: "Overthinking", D: "Ignoring problems" }, correctOption: "A" },
  { lessonId: 4, question: "Stress most affects which system?", options: { A: "Nervous system", B: "Digestive system", C: "Respiratory system", D: "All of the above" }, correctOption: "D" },
  { lessonId: 4, question: "What should be avoided when stressed?", options: { A: "Alcohol and drugs", B: "Healthy food", C: "Exercise", D: "Meditation" }, correctOption: "A" },
  { lessonId: 4, question: "Poor sleep leads to?", options: { A: "Increased stress", B: "Less stress", C: "Better calm", D: "No effect" }, correctOption: "A" },
  { lessonId: 4, question: "Mindful awareness during stress helps by?", options: { A: "Observing calmly", B: "Suppressing feelings", C: "Avoiding reality", D: "Forcing calmness" }, correctOption: "A" },
  { lessonId: 4, question: "A quick grounding technique during stress is?", options: { A: "Deep breathing for a few minutes", B: "Shouting loudly", C: "Running endlessly", D: "Ignoring emotions" }, correctOption: "A" },
  { lessonId: 4, question: "Which type of thinking worsens stress?", options: { A: "Catastrophic thinking", B: "Gratitude thinking", C: "Hopeful thinking", D: "Positive thinking" }, correctOption: "A" },
  { lessonId: 4, question: "Journaling helps stress by?", options: { A: "Processing thoughts healthily", B: "Increasing anxiety", C: "Erasing memories", D: "Avoiding problems" }, correctOption: "A" },
  { lessonId: 4, question: "Self-compassion in stress management means?", options: { A: "Treating yourself kindly", B: "Blaming yourself", C: "Ignoring needs", D: "Increasing pressure" }, correctOption: "A" },
  { lessonId: 4, question: "Which diet supports stress reduction?", options: { A: "Balanced with fruits and vegetables", B: "Excess caffeine", C: "Skipping meals", D: "Only junk food" }, correctOption: "A" },
  { lessonId: 4, question: "When stress feels overwhelming, you should?", options: { A: "Reach out for support", B: "Keep it bottled up", C: "Stay silent always", D: "Ignore responsibilities" }, correctOption: "A" },
  { lessonId: 4, question: "Overall, stress can be managed by?", options: { A: "Healthy habits and mindfulness", B: "Avoidance", C: "Constant worrying", D: "Overthinking" }, correctOption: "A" },

  // 🔹 Lesson 5: Gratitude in Action
  { lessonId: 5, question: "What is gratitude?", options: { A: "Focusing on what you lack", B: "Appreciation for what you have", C: "Forgetting the past", D: "Ignoring challenges" }, correctOption: "B" },
  { lessonId: 5, question: "Which of the following is a gratitude practice?", options: { A: "Complaining daily", B: "Keeping a gratitude journal", C: "Watching negative news", D: "Ignoring blessings" }, correctOption: "B" },
  { lessonId: 5, question: "How does gratitude affect happiness?", options: { A: "Decreases happiness", B: "No impact", C: "Increases happiness & positivity", D: "Causes stress" }, correctOption: "C" },
  { lessonId: 5, question: "Which part of the brain is strengthened by gratitude?", options: { A: "Amygdala", B: "Prefrontal cortex", C: "Occipital lobe", D: "Inner ear" }, correctOption: "B" },
  { lessonId: 5, question: "How does gratitude impact relationships?", options: { A: "Weakens them", B: "Strengthens them", C: "No effect", D: "Destroys them" }, correctOption: "B" },
  { lessonId: 5, question: "Gratitude can reduce?", options: { A: "Stress", B: "Anxiety", C: "Depression", D: "All of the above" }, correctOption: "D" },
  { lessonId: 5, question: "Which statement shows gratitude?", options: { A: "I never have enough", B: "I appreciate what I have today", C: "Nothing works for me", D: "I want more always" }, correctOption: "B" },
  { lessonId: 5, question: "When is the best time to practice gratitude?", options: { A: "Only during success", B: "Daily, even in small moments", C: "Never", D: "Only in crises" }, correctOption: "B" },
  { lessonId: 5, question: "Which habit supports gratitude?", options: { A: "Mindful reflection", B: "Constant comparison", C: "Complaining", D: "Ignoring positives" }, correctOption: "A" },
  { lessonId: 5, question: "What is a gratitude journal?", options: { A: "A book of problems", B: "A diary of things you're thankful for", C: "A financial record", D: "A list of complaints" }, correctOption: "B" },
  { lessonId: 5, question: "Gratitude affects sleep by?", options: { A: "Improving sleep quality", B: "Destroying sleep", C: "Preventing rest", D: "No effect" }, correctOption: "A" },
  { lessonId: 5, question: "What type of thinking is linked to gratitude?", options: { A: "Positive thinking", B: "Negative thinking", C: "Overthinking", D: "Blaming" }, correctOption: "A" },
  { lessonId: 5, question: "Gratitude shifts focus from?", options: { A: "Problems to blessings", B: "Abundance to lack", C: "Peace to chaos", D: "Joy to sadness" }, correctOption: "A" },
  { lessonId: 5, question: "Gratitude rewires the brain toward?", options: { A: "Negativity", B: "Positivity", C: "Confusion", D: "Fear" }, correctOption: "B" },
  { lessonId: 5, question: "Which activity builds gratitude?", options: { A: "Meditation on thankfulness", B: "Dwelling on mistakes", C: "Envying others", D: "Holding grudges" }, correctOption: "A" },
  { lessonId: 5, question: "How does gratitude affect physical health?", options: { A: "Boosts immunity & lowers stress", B: "Increases blood pressure", C: "Causes fatigue", D: "Weakens body" }, correctOption: "A" },
  { lessonId: 5, question: "Which phrase reflects gratitude?", options: { A: "I am thankful for this meal", B: "I hate everything today", C: "Nothing goes my way", D: "Life is unfair" }, correctOption: "A" },
  { lessonId: 5, question: "Why does gratitude build resilience?", options: { A: "It helps find strength in challenges", B: "It denies reality", C: "It avoids growth", D: "It ignores problems" }, correctOption: "A" },
  { lessonId: 5, question: "Gratitude is most effective when?", options: { A: "Practiced consistently", B: "Once a year", C: "Forced on others", D: "Ignored" }, correctOption: "A" },
  { lessonId: 5, question: "Overall gratitude leads to?", options: { A: "More joy, less stress, stronger relationships", B: "Constant negativity", C: "Isolation", D: "Hopelessness" }, correctOption: "A" },
];