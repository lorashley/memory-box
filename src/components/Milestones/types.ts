export type Milestone = {
  id: string
  title: string
  date: string
  description: string
  tags?: Tag[]
}

export enum Tag {
  // EMOTIONS
  FUNNY = 'FUNNY',
  HAPPY = 'HAPPY',
  SAD = 'SAD',
  SCARY = 'SCARY',
  PROUD = 'PROUD',
  ANGRY = 'ANGRY',

  // SUBJECTS
  FAMILY = 'FAMILY',
  FRIEND = 'FRIENDS',
  SCHOOL = 'SCHOOL',
  WORK = 'WORK',
  PET = 'PET',
  HEALTH = 'HEALTH',

  // ACTIVITIES
  LANGUAGE = 'LANGUAGE',
  SPORTS = 'SPORTS',
  MUSIC = 'MUSIC',
  ART = 'ART',
  READING = 'READING',
  WRITING = 'WRITING',
  MATH = 'MATH',
  SCIENCE = 'SCIENCE',
  PHYSICAL = 'PHYSICAL',
  SOCIAL = 'SOCIAL',

  // OCCASIONS
  BIRTHDAY = 'BIRTHDAY',
  HOLIDAY = 'HOLIDAY',
  TRAVEL = 'TRAVEL',
  FIRST = 'FIRST',
}

export enum TagCategory {
  EMOTION = 'EMOTION',
  ACTIVITY = 'ACTIVITY',
  SUBJECT = 'SUBJECT',
  OCCASION = 'OCCASION',
  FIRST = 'FIRST',
}

export type TagGroup = {
  category: TagCategory
  tags: Tag[]
}

export const TAG_GROUPS: TagGroup[] = [
  {
    category: TagCategory.EMOTION,
    tags: [Tag.HAPPY, Tag.SAD, Tag.SCARY, Tag.PROUD, Tag.ANGRY, Tag.FUNNY],
  },
  {
    category: TagCategory.ACTIVITY,
    tags: [
      Tag.PHYSICAL,
      Tag.SOCIAL,
      Tag.LANGUAGE,
      Tag.SPORTS,
      Tag.MUSIC,
      Tag.ART,
      Tag.READING,
      Tag.WRITING,
      Tag.MATH,
      Tag.SCIENCE,
    ],
  },
  {
    category: TagCategory.SUBJECT,
    tags: [Tag.FAMILY, Tag.FRIEND, Tag.SCHOOL, Tag.WORK, Tag.PET, Tag.HEALTH],
  },
  {
    category: TagCategory.OCCASION,
    tags: [Tag.FIRST, Tag.BIRTHDAY, Tag.HOLIDAY, Tag.TRAVEL],
  },
]
