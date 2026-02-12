import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Book, Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getDailyVerse } from "@/data/dailyVerses";
import { bibleBooks } from "@/data/bibleBooks";
import { useLocalStorage, ReadingProgress } from "@/hooks/useLocalStorage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const dailyVerse = getDailyVerse();
  const [lastRead] = useLocalStorage<ReadingProgress | null>("lastRead", null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const lastReadBook = lastRead ? bibleBooks.find(b => b.id === lastRead.bookId) : null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const popularBooks = [
    bibleBooks.find(b => b.name === "Gênesis")!,
    bibleBooks.find(b => b.name === "Salmos")!,
    bibleBooks.find(b => b.name === "Provérbios")!,
    bibleBooks.find(b => b.name === "Mateus")!,
    bibleBooks.find(b => b.name === "João")!,
    bibleBooks.find(b => b.name === "Romanos")!,
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm text-primary-foreground/80">
              <Sparkles className="h-4 w-4" />
              Versículo do Dia
            </div>
            <blockquote className="mb-4 font-serif text-2xl md:text-3xl font-medium leading-relaxed text-primary-foreground">
              "{dailyVerse.text}"
            </blockquote>
            <p className="mb-6 text-lg font-medium text-secondary">
              {dailyVerse.reference}
            </p>
            <p className="text-sm text-primary-foreground/60 italic max-w-lg mx-auto">
              {dailyVerse.reflection}
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSearch}
            className="mx-auto mt-10 max-w-lg"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar versículos, palavras ou referências..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 rounded-full border-primary-foreground/20 bg-primary-foreground/10 pl-12 pr-4 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-secondary"
              />
            </div>
          </motion.form>
        </div>
      </section>

      <div className="container py-10 space-y-10">
        {/* Continue Reading */}
        {lastRead && lastReadBook && (
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="mb-4 font-serif text-xl font-semibold">Continuar Leitura</h2>
            <Link to={`/read/${lastRead.bookId}/${lastRead.chapter}`}>
              <Card className="group cursor-pointer border-primary/20 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
                      <Book className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-serif font-semibold text-lg">{lastReadBook.name}</p>
                      <p className="text-sm text-muted-foreground">Capítulo {lastRead.chapter}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </CardContent>
              </Card>
            </Link>
          </motion.section>
        )}

        {/* Popular Books */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl font-semibold">Livros Populares</h2>
            <Link to="/books" className="text-sm font-medium text-primary hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {popularBooks.map((book) => (
              <Link key={book.id} to={`/book/${book.id}`}>
                <Card className="group cursor-pointer border-border/50 transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5">
                  <CardContent className="flex flex-col items-center p-4 text-center">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Book className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-serif font-semibold text-sm">{book.name}</p>
                    <p className="text-xs text-muted-foreground">{book.chapters} cap.</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Quick Access */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <h2 className="mb-4 font-serif text-xl font-semibold">Acesso Rápido</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/books">
              <Card className="group cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <Book className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold">Todos os Livros</p>
                    <p className="text-sm text-muted-foreground">66 livros • AT e NT</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/devotional">
              <Card className="group cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/20">
                    <Sparkles className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold">Devocional Diário</p>
                    <p className="text-sm text-muted-foreground">Reflexão e plano de leitura</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Index;
