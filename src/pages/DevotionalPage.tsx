import { motion } from "framer-motion";
import { Sparkles, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDailyVerse } from "@/data/dailyVerses";
import { bibleBooks } from "@/data/bibleBooks";
import { Link } from "react-router-dom";

const DevotionalPage = () => {
  const dailyVerse = getDailyVerse();

  // Simple reading plan: 1 year, ~3 chapters/day
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );

  // Calculate suggested reading
  const totalChapters = bibleBooks.reduce((sum, b) => sum + b.chapters, 0); // 1189
  const chaptersPerDay = Math.ceil(totalChapters / 365);
  const startChapter = ((dayOfYear - 1) * chaptersPerDay) % totalChapters;

  const getSuggestedReading = () => {
    let accumulated = 0;
    const readings: { book: typeof bibleBooks[0]; chapter: number }[] = [];

    for (const book of bibleBooks) {
      for (let ch = 1; ch <= book.chapters; ch++) {
        if (accumulated >= startChapter && readings.length < chaptersPerDay) {
          readings.push({ book, chapter: ch });
        }
        accumulated++;
      }
      if (readings.length >= chaptersPerDay) break;
    }
    return readings;
  };

  const suggestedReadings = getSuggestedReading();

  return (
    <div className="container py-8 max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
        <div>
          <h1 className="mb-2 font-serif text-3xl font-bold">Devocional Diário</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {today.toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Verse of the Day */}
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="gradient-hero p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-3 py-1 text-sm text-secondary">
              <Sparkles className="h-3.5 w-3.5" />
              Versículo do Dia
            </div>
            <blockquote className="mb-4 font-serif text-xl md:text-2xl font-medium leading-relaxed text-primary-foreground">
              "{dailyVerse.text}"
            </blockquote>
            <p className="font-semibold text-secondary">{dailyVerse.reference}</p>
          </div>
          <CardContent className="p-6">
            <h3 className="mb-2 font-serif font-semibold text-lg">Reflexão</h3>
            <p className="text-muted-foreground leading-relaxed">{dailyVerse.reflection}</p>
          </CardContent>
        </Card>

        {/* Reading Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-serif">
              <BookOpen className="h-5 w-5 text-primary" />
              Plano de Leitura — Bíblia em 1 Ano
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Dia {dayOfYear} de 365 — Leitura sugerida para hoje:
            </p>
            <div className="space-y-2">
              {suggestedReadings.map((r, i) => (
                <Link
                  key={i}
                  to={`/read/${r.book.id}/${r.chapter}`}
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-muted"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-medium">{r.book.name} {r.chapter}</p>
                    <p className="text-xs text-muted-foreground">{r.book.category}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 rounded-full bg-muted h-2 overflow-hidden">
              <div
                className="h-full gradient-primary rounded-full transition-all"
                style={{ width: `${(dayOfYear / 365) * 100}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground text-center">
              {Math.round((dayOfYear / 365) * 100)}% do plano concluído
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DevotionalPage;
