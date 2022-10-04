export type ExperienceEntry = {
  employer?: string;
  department?: string;
  location?: string;
  role: string;
  period: string;
  responsibilities: string[]
}

export type HighlightEntry = {
  iconKey: string;
  title: string;
  content: string;
}

export type EducationEntry = {
  title: string;
  subtitle: string;
  date: string;
  institution: string;
}

export type CertificationEntry = {
  title: string;
  date: string;
  institution: string;
}