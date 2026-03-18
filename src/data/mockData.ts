// ─── Types ────────────────────────────────────────────────────────────────────

export type Student = {
  studentID: string;
  vorname: string;
  nachname: string;
  email: string;
  semester: number;
  studiengang: string;
  hochschuleID: string;
  premiumAboID?: string;
  kursIDs: string[];
  lerngruppenIDs: string[];
};

export type Kurs = {
  kursID: string;
  kursname: string;
  dozent: string;
};

export type Fach = {
  fachID: string;
  name: string;
  color: string;
};

export type Lerngruppe = {
  gruppenID: string;
  gruppenName: string;
  mitgliederanzahl: number;
  erstelldatum: string;
  fachID: string;
  tutorenID?: string;
  kursID?: string;
  mitglieder: string[]; // student names
};

export type Tutor = {
  tutorenID: string;
  vorname: string;
  nachname: string;
  fachIDs: string[];
  rating: number;
  bewertungen: number;
};

export type Hochschule = {
  hochschuleID: string;
  name: string;
  gruendungsdatum: string;
  stadt: string;
};

export type PremiumAbo = {
  premiumAboID: string;
  status: 'aktiv' | 'inaktiv';
  preis: number;
  laengeInTagen: number;
  abschlussDatum: string;
};

export type Buchung = {
  buchungsID: string;
  datum: string;
  tutorenID: string;
  lerngruppenID: string;
};

// ─── Fächer ───────────────────────────────────────────────────────────────────

export const faecher: Fach[] = [
  { fachID: 'f1', name: 'Mathematik', color: '#6C63FF' },
  { fachID: 'f2', name: 'Informatik', color: '#10B981' },
  { fachID: 'f3', name: 'BWL', color: '#F59E0B' },
  { fachID: 'f4', name: 'Physik', color: '#EF4444' },
  { fachID: 'f5', name: 'Medizin', color: '#EC4899' },
];

// ─── Hochschulen ──────────────────────────────────────────────────────────────

export const hochschulen: Hochschule[] = [
  { hochschuleID: 'h1', name: 'TU München', gruendungsdatum: '1868', stadt: 'München' },
  { hochschuleID: 'h2', name: 'Uni Heidelberg', gruendungsdatum: '1386', stadt: 'Heidelberg' },
  { hochschuleID: 'h3', name: 'FU Berlin', gruendungsdatum: '1948', stadt: 'Berlin' },
  { hochschuleID: 'h4', name: 'LMU München', gruendungsdatum: '1472', stadt: 'München' },
];

// ─── Kurse ────────────────────────────────────────────────────────────────────

export const kurse: Kurs[] = [
  { kursID: 'k1', kursname: 'Analysis II', dozent: 'Prof. Dr. Hoffmann' },
  { kursID: 'k2', kursname: 'Algorithmen & Datenstrukturen', dozent: 'Prof. Dr. Fischer' },
  { kursID: 'k3', kursname: 'BWL Grundlagen', dozent: 'Prof. Dr. Bauer' },
  { kursID: 'k4', kursname: 'Lineare Algebra', dozent: 'Prof. Dr. Klein' },
  { kursID: 'k5', kursname: 'Experimentalphysik I', dozent: 'Prof. Dr. Wagner' },
];

// ─── Lerngruppen ──────────────────────────────────────────────────────────────

export const lerngruppen: Lerngruppe[] = [
  {
    gruppenID: 'lg1',
    gruppenName: 'Mathe Study Crew',
    mitgliederanzahl: 6,
    erstelldatum: '2026-01-15',
    fachID: 'f1',
    tutorenID: 't1',
    kursID: 'k1',
    mitglieder: ['Max Müller', 'Anna Schmidt', 'Jonas Weber', 'Lena Becker', 'Felix Braun', 'Maria Klein'],
  },
  {
    gruppenID: 'lg2',
    gruppenName: 'Code Ninjas',
    mitgliederanzahl: 4,
    erstelldatum: '2026-02-01',
    fachID: 'f2',
    tutorenID: 't1',
    kursID: 'k2',
    mitglieder: ['Max Müller', 'Tim Richter', 'Sophie Lange', 'David Krause'],
  },
  {
    gruppenID: 'lg3',
    gruppenName: 'BWL Basics',
    mitgliederanzahl: 5,
    erstelldatum: '2026-01-20',
    fachID: 'f3',
    tutorenID: 't2',
    kursID: 'k3',
    mitglieder: ['Anna Schmidt', 'Jan Hoffmann', 'Lisa Müller', 'Paul Weber', 'Nina Fischer'],
  },
  {
    gruppenID: 'lg4',
    gruppenName: 'Physik Pro',
    mitgliederanzahl: 3,
    erstelldatum: '2026-02-10',
    fachID: 'f4',
    tutorenID: 't3',
    kursID: 'k5',
    mitglieder: ['Jonas Weber', 'Lukas Schäfer', 'Emma Koch'],
  },
];

// ─── Tutoren ──────────────────────────────────────────────────────────────────

export const tutoren: Tutor[] = [
  {
    tutorenID: 't1',
    vorname: 'Lisa',
    nachname: 'Braun',
    fachIDs: ['f1', 'f2'],
    rating: 4.9,
    bewertungen: 42,
  },
  {
    tutorenID: 't2',
    vorname: 'Tom',
    nachname: 'Schulz',
    fachIDs: ['f3'],
    rating: 4.7,
    bewertungen: 28,
  },
  {
    tutorenID: 't3',
    vorname: 'Sara',
    nachname: 'Kline',
    fachIDs: ['f4', 'f1'],
    rating: 4.8,
    bewertungen: 35,
  },
];

// ─── Buchungen ────────────────────────────────────────────────────────────────

export const buchungen: Buchung[] = [
  { buchungsID: 'b1', datum: '2026-03-22', tutorenID: 't1', lerngruppenID: 'lg1' },
  { buchungsID: 'b2', datum: '2026-03-25', tutorenID: 't2', lerngruppenID: 'lg3' },
  { buchungsID: 'b3', datum: '2026-03-28', tutorenID: 't3', lerngruppenID: 'lg4' },
];

// ─── PremiumAbo ───────────────────────────────────────────────────────────────

export const premiumAbo: PremiumAbo = {
  premiumAboID: 'p1',
  status: 'aktiv',
  preis: 9.99,
  laengeInTagen: 30,
  abschlussDatum: '2026-04-15',
};

// ─── Current User ─────────────────────────────────────────────────────────────

export const currentStudent: Student = {
  studentID: 's1',
  vorname: 'Max',
  nachname: 'Müller',
  email: 'max.mueller@tum.de',
  semester: 4,
  studiengang: 'Informatik',
  hochschuleID: 'h1',
  premiumAboID: 'p1',
  kursIDs: ['k1', 'k2'],
  lerngruppenIDs: ['lg1', 'lg2'],
};

// ─── Helper: get Fach by ID ───────────────────────────────────────────────────

export function getFach(fachID: string): Fach | undefined {
  return faecher.find((f) => f.fachID === fachID);
}

export function getTutor(tutorenID: string): Tutor | undefined {
  return tutoren.find((t) => t.tutorenID === tutorenID);
}

export function getKurs(kursID: string): Kurs | undefined {
  return kurse.find((k) => k.kursID === kursID);
}
