import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, Star, Copy, Share2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bibleBooks } from "@/data/bibleBooks";
import { getChapter, generatePlaceholderChapter, Verse } from "@/data/sampleVerses";
import { useLocalStorage, FavoriteVerse, ReadingProgress } from "@/hooks/useLocalStorage";
import { useToast } from "@/hooks/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const highlightColors = [
  { name: "Amarelo", value: "yellow", class: "bg-yellow-200/50" },
  { name: "Verde", value: "green", class: "bg-green-200/50" },
  { name: "Azul", value: "blue", class: "bg-blue-200/50" },
  { name: "Rosa", value: "pink", class: "bg-pink-200/50" },
];

const ReadingPage = () => {
  const { bookId, chapter } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [fontSize, setFontSize] = useState(18);
  const [favorites, setFavorites] = useLocalStorage<FavoriteVerse[]>("favorites", []);
  const [, setLastRead] = useLocalStorage<ReadingProgress | null>("lastRead", null);

  const book = bibleBooks.find((b) => b.id === Number(bookId));
  const chapterNum = Number(chapter);

  useEffect(() => {
    if (book && chapterNum) {
      setLastRead({ bookId: book.id, chapter: chapterNum, timestamp: new Date().toISOString() });
    }
  }, [book, chapterNum, setLastRead]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [bookId, chapter]);

  if (!book) {
    return (
      <div className="container py-16 text-center">
        <p className="text-muted-foreground">Livro não encontrado.</p>
        <Link to="/books"><Button variant="link">Voltar</Button></Link>
      </div>
    );
  }

  const chapterData = getChapter(book.id, chapterNum) || generatePlaceholderChapter(book.id, chapterNum);
  const hasPrev = chapterNum > 1;
  const hasNext = chapterNum < book.chapters;

  const isFavorite = (verseNum: number) =>
    favorites.some((f) => f.bookId === book.id && f.chapter === chapterNum && f.verseNumber === verseNum);

  const getFavoriteColor = (verseNum: number) =>
    favorites.find((f) => f.bookId === book.id && f.chapter === chapterNum && f.verseNumber === verseNum)?.color;

  const toggleFavorite = (verse: Verse, color?: string) => {
    if (isFavorite(verse.number)) {
      setFavorites((prev) => prev.filter(
        (f) => !(f.bookId === book.id && f.chapter === chapterNum && f.verseNumber === verse.number)
      ));
      toast({ title: "Removido dos favoritos" });
    } else {
      setFavorites((prev) => [...prev, {
        bookId: book.id, bookName: book.name, chapter: chapterNum,
        verseNumber: verse.number, text: verse.text,
        color: color || "yellow", savedAt: new Date().toISOString(),
      }]);
      toast({ title: "Adicionado aos favoritos ⭐" });
    }
  };

  const copyVerse = (verse: Verse) => {
    navigator.clipboard.writeText(`${verse.text} — ${book.name} ${chapterNum}:${verse.number}`);
    toast({ title: "Versículo copiado!" });
  };

  const shareVerse = (verse: Verse) => {
    const text = `"${verse.text}" — ${book.name} ${chapterNum}:${verse.number}`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      toast({ title: "Texto copiado para compartilhar!" });
    }
  };

  const getHighlightClass = (verseNum: number) => {
    const color = getFavoriteColor(verseNum);
    if (!color) return "";
    return highlightColors.find((c) => c.value === color)?.class || "";
  };

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-3">
          <Link to={`/book/${book.id}`}>
            <Button variant="ghost" size="sm"><ChevronLeft className="mr-1 h-4 w-4" />{book.name}</Button>
          </Link>
          <span className="font-serif font-semibold">Capítulo {chapterNum}</span>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={() => setFontSize(Math.max(14, fontSize - 2))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xs text-muted-foreground w-6 text-center">{fontSize}</span>
            <Button variant="ghost" size="icon" onClick={() => setFontSize(Math.min(28, fontSize + 2))}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Verses */}
      <div className="container max-w-2xl py-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <h1 className="mb-8 font-serif text-2xl font-bold text-center">
            {book.name} {chapterNum}
          </h1>

          <div className="space-y-4" style={{ fontSize: `${fontSize}px`, lineHeight: 1.8 }}>
            {chapterData.verses.map((verse) => (
              <Popover key={verse.number}>
                <PopoverTrigger asChild>
                  <p
                    className={`cursor-pointer rounded-md px-2 py-0.5 transition-colors hover:bg-muted/60 ${getHighlightClass(verse.number)}`}
                  >
                    <sup className="mr-1 text-xs font-bold text-primary/70">{verse.number}</sup>
                    {verse.text}
                  </p>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-2" align="start">
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" onClick={() => toggleFavorite(verse)}>
                      <Star className={`h-4 w-4 ${isFavorite(verse.number) ? "fill-secondary text-secondary" : ""}`} />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => copyVerse(verse)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => shareVerse(verse)}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <div className="mx-1 h-5 w-px bg-border" />
                    {highlightColors.map((c) => (
                      <button
                        key={c.value}
                        className={`h-5 w-5 rounded-full border-2 ${c.class} ${getFavoriteColor(verse.number) === c.value ? "border-foreground" : "border-transparent"}`}
                        onClick={() => toggleFavorite(verse, c.value)}
                        title={c.name}
                      />
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between">
            {hasPrev ? (
              <Button variant="outline" onClick={() => navigate(`/read/${book.id}/${chapterNum - 1}`)}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Capítulo {chapterNum - 1}
              </Button>
            ) : <div />}
            {hasNext && (
              <Button onClick={() => navigate(`/read/${book.id}/${chapterNum + 1}`)}>
                Capítulo {chapterNum + 1} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReadingPage;
