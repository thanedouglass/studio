export interface Opportunity {
  id: string;
  title: string;
  principalInvestigator: string;
  department: string;
  duration: string;
  location: string;
  description: string;
  responsibilities?: string[];
  qualificationsRequired?: string[];
  applicationDeadline: string; // Could be a date string or "Rolling"
  isRollingApplication: boolean;
  contactEmail?: string;
  keywords?: string[];
  imageUrl: string;
  imageHint?: string;
  positionType: string[]; // New field

  // AI Categorized fields
  academicYear: string; // e.g., "Freshman", "Sophomore", "Junior", "Senior", "Graduate"
  researchType: string; // e.g., "Wet Lab", "Dry Lab", "Clinical", "Field Research"
  discipline: string; // e.g., "Biology", "Chemistry", "Computer Science" (used as Subject)
  experienceLevel: string; // e.g., "Beginner", "Intermediate", "Advanced" (used for Qualifications filter)
}

export const ACADEMIC_YEARS = ["All", "Freshman", "Sophomore", "Junior", "Senior", "Graduate"];
export const RESEARCH_TYPES = ["All", "Wet Lab", "Dry Lab", "Clinical", "Field Research", "Computational", "Theoretical"];
export const DISCIPLINES = ["All", "Biology", "Chemistry", "Computer Science", "Engineering", "Physics", "Mathematics", "Humanities", "Social Sciences", "Arts", "Medicine", "Urban Studies"];
export const EXPERIENCE_LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];
export const POSITION_TYPES = ["All", "Paid", "Unpaid", "Volunteer", "Research Assistant", "Fellowship", "Internship", "Shadowing"];
