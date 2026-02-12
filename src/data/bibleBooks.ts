export interface BibleBook {
  id: number;
  name: string;
  abbrev: string;
  chapters: number;
  testament: 'old' | 'new';
  category: string;
}

export const bibleBooks: BibleBook[] = [
  // Antigo Testamento - Pentateuco
  { id: 1, name: "Gênesis", abbrev: "Gn", chapters: 50, testament: "old", category: "Pentateuco" },
  { id: 2, name: "Êxodo", abbrev: "Êx", chapters: 40, testament: "old", category: "Pentateuco" },
  { id: 3, name: "Levítico", abbrev: "Lv", chapters: 27, testament: "old", category: "Pentateuco" },
  { id: 4, name: "Números", abbrev: "Nm", chapters: 36, testament: "old", category: "Pentateuco" },
  { id: 5, name: "Deuteronômio", abbrev: "Dt", chapters: 34, testament: "old", category: "Pentateuco" },
  // Históricos
  { id: 6, name: "Josué", abbrev: "Js", chapters: 24, testament: "old", category: "Históricos" },
  { id: 7, name: "Juízes", abbrev: "Jz", chapters: 21, testament: "old", category: "Históricos" },
  { id: 8, name: "Rute", abbrev: "Rt", chapters: 4, testament: "old", category: "Históricos" },
  { id: 9, name: "1 Samuel", abbrev: "1Sm", chapters: 31, testament: "old", category: "Históricos" },
  { id: 10, name: "2 Samuel", abbrev: "2Sm", chapters: 24, testament: "old", category: "Históricos" },
  { id: 11, name: "1 Reis", abbrev: "1Rs", chapters: 22, testament: "old", category: "Históricos" },
  { id: 12, name: "2 Reis", abbrev: "2Rs", chapters: 25, testament: "old", category: "Históricos" },
  { id: 13, name: "1 Crônicas", abbrev: "1Cr", chapters: 29, testament: "old", category: "Históricos" },
  { id: 14, name: "2 Crônicas", abbrev: "2Cr", chapters: 36, testament: "old", category: "Históricos" },
  { id: 15, name: "Esdras", abbrev: "Ed", chapters: 10, testament: "old", category: "Históricos" },
  { id: 16, name: "Neemias", abbrev: "Ne", chapters: 13, testament: "old", category: "Históricos" },
  { id: 17, name: "Ester", abbrev: "Et", chapters: 10, testament: "old", category: "Históricos" },
  // Poéticos
  { id: 18, name: "Jó", abbrev: "Jó", chapters: 42, testament: "old", category: "Poéticos" },
  { id: 19, name: "Salmos", abbrev: "Sl", chapters: 150, testament: "old", category: "Poéticos" },
  { id: 20, name: "Provérbios", abbrev: "Pv", chapters: 31, testament: "old", category: "Poéticos" },
  { id: 21, name: "Eclesiastes", abbrev: "Ec", chapters: 12, testament: "old", category: "Poéticos" },
  { id: 22, name: "Cantares", abbrev: "Ct", chapters: 8, testament: "old", category: "Poéticos" },
  // Profetas Maiores
  { id: 23, name: "Isaías", abbrev: "Is", chapters: 66, testament: "old", category: "Profetas Maiores" },
  { id: 24, name: "Jeremias", abbrev: "Jr", chapters: 52, testament: "old", category: "Profetas Maiores" },
  { id: 25, name: "Lamentações", abbrev: "Lm", chapters: 5, testament: "old", category: "Profetas Maiores" },
  { id: 26, name: "Ezequiel", abbrev: "Ez", chapters: 48, testament: "old", category: "Profetas Maiores" },
  { id: 27, name: "Daniel", abbrev: "Dn", chapters: 12, testament: "old", category: "Profetas Maiores" },
  // Profetas Menores
  { id: 28, name: "Oséias", abbrev: "Os", chapters: 14, testament: "old", category: "Profetas Menores" },
  { id: 29, name: "Joel", abbrev: "Jl", chapters: 3, testament: "old", category: "Profetas Menores" },
  { id: 30, name: "Amós", abbrev: "Am", chapters: 9, testament: "old", category: "Profetas Menores" },
  { id: 31, name: "Obadias", abbrev: "Ob", chapters: 1, testament: "old", category: "Profetas Menores" },
  { id: 32, name: "Jonas", abbrev: "Jn", chapters: 4, testament: "old", category: "Profetas Menores" },
  { id: 33, name: "Miquéias", abbrev: "Mq", chapters: 7, testament: "old", category: "Profetas Menores" },
  { id: 34, name: "Naum", abbrev: "Na", chapters: 3, testament: "old", category: "Profetas Menores" },
  { id: 35, name: "Habacuque", abbrev: "Hc", chapters: 3, testament: "old", category: "Profetas Menores" },
  { id: 36, name: "Sofonias", abbrev: "Sf", chapters: 3, testament: "old", category: "Profetas Menores" },
  { id: 37, name: "Ageu", abbrev: "Ag", chapters: 2, testament: "old", category: "Profetas Menores" },
  { id: 38, name: "Zacarias", abbrev: "Zc", chapters: 14, testament: "old", category: "Profetas Menores" },
  { id: 39, name: "Malaquias", abbrev: "Ml", chapters: 4, testament: "old", category: "Profetas Menores" },
  // Novo Testamento - Evangelhos
  { id: 40, name: "Mateus", abbrev: "Mt", chapters: 28, testament: "new", category: "Evangelhos" },
  { id: 41, name: "Marcos", abbrev: "Mc", chapters: 16, testament: "new", category: "Evangelhos" },
  { id: 42, name: "Lucas", abbrev: "Lc", chapters: 24, testament: "new", category: "Evangelhos" },
  { id: 43, name: "João", abbrev: "Jo", chapters: 21, testament: "new", category: "Evangelhos" },
  // Histórico
  { id: 44, name: "Atos", abbrev: "At", chapters: 28, testament: "new", category: "Histórico" },
  // Cartas de Paulo
  { id: 45, name: "Romanos", abbrev: "Rm", chapters: 16, testament: "new", category: "Cartas de Paulo" },
  { id: 46, name: "1 Coríntios", abbrev: "1Co", chapters: 16, testament: "new", category: "Cartas de Paulo" },
  { id: 47, name: "2 Coríntios", abbrev: "2Co", chapters: 13, testament: "new", category: "Cartas de Paulo" },
  { id: 48, name: "Gálatas", abbrev: "Gl", chapters: 6, testament: "new", category: "Cartas de Paulo" },
  { id: 49, name: "Efésios", abbrev: "Ef", chapters: 6, testament: "new", category: "Cartas de Paulo" },
  { id: 50, name: "Filipenses", abbrev: "Fp", chapters: 4, testament: "new", category: "Cartas de Paulo" },
  { id: 51, name: "Colossenses", abbrev: "Cl", chapters: 4, testament: "new", category: "Cartas de Paulo" },
  { id: 52, name: "1 Tessalonicenses", abbrev: "1Ts", chapters: 5, testament: "new", category: "Cartas de Paulo" },
  { id: 53, name: "2 Tessalonicenses", abbrev: "2Ts", chapters: 3, testament: "new", category: "Cartas de Paulo" },
  { id: 54, name: "1 Timóteo", abbrev: "1Tm", chapters: 6, testament: "new", category: "Cartas de Paulo" },
  { id: 55, name: "2 Timóteo", abbrev: "2Tm", chapters: 4, testament: "new", category: "Cartas de Paulo" },
  { id: 56, name: "Tito", abbrev: "Tt", chapters: 3, testament: "new", category: "Cartas de Paulo" },
  { id: 57, name: "Filemom", abbrev: "Fm", chapters: 1, testament: "new", category: "Cartas de Paulo" },
  // Cartas Gerais
  { id: 58, name: "Hebreus", abbrev: "Hb", chapters: 13, testament: "new", category: "Cartas Gerais" },
  { id: 59, name: "Tiago", abbrev: "Tg", chapters: 5, testament: "new", category: "Cartas Gerais" },
  { id: 60, name: "1 Pedro", abbrev: "1Pe", chapters: 5, testament: "new", category: "Cartas Gerais" },
  { id: 61, name: "2 Pedro", abbrev: "2Pe", chapters: 3, testament: "new", category: "Cartas Gerais" },
  { id: 62, name: "1 João", abbrev: "1Jo", chapters: 5, testament: "new", category: "Cartas Gerais" },
  { id: 63, name: "2 João", abbrev: "2Jo", chapters: 1, testament: "new", category: "Cartas Gerais" },
  { id: 64, name: "3 João", abbrev: "3Jo", chapters: 1, testament: "new", category: "Cartas Gerais" },
  { id: 65, name: "Judas", abbrev: "Jd", chapters: 1, testament: "new", category: "Cartas Gerais" },
  // Profético
  { id: 66, name: "Apocalipse", abbrev: "Ap", chapters: 22, testament: "new", category: "Profético" },
];

export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    "Pentateuco": "from-primary to-primary/70",
    "Históricos": "from-accent to-accent/70",
    "Poéticos": "from-secondary to-secondary/70",
    "Profetas Maiores": "from-primary/80 to-accent/80",
    "Profetas Menores": "from-accent/80 to-primary/60",
    "Evangelhos": "from-secondary to-primary/70",
    "Histórico": "from-accent to-secondary/70",
    "Cartas de Paulo": "from-primary/90 to-secondary/80",
    "Cartas Gerais": "from-accent/90 to-primary/70",
    "Profético": "from-secondary/90 to-accent/80",
  };
  return colors[category] || "from-primary to-accent";
};
