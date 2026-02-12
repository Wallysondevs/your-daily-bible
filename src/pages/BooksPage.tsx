import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { bibleBooks, getCategoryColor } from "@/data/bibleBooks";

const BooksPage = () => {
  const [filter, setFilter] = useState<"all" | "old" | "new">("all");

  const filteredBooks = bibleBooks.filter(
    (book) => filter === "all" || book.testament === (filter === "old" ? "old" : "new")
  );

  const categories = [...new Set(filteredBooks.map((b) => b.category))];

  return (
    <div className="container py-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 font-serif text-3xl font-bold">Livros da Bíblia</h1>
        <p className="mb-6 text-muted-foreground">66 livros organizados por testamento e categoria</p>

        {/* Filter */}
        <div className="mb-8 flex gap-2">
          {([["all", "Todos"], ["old", "Antigo Testamento"], ["new", "Novo Testamento"]] as const).map(([key, label]) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(key)}
              className="rounded-full"
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category) => {
            const books = filteredBooks.filter((b) => b.category === category);
            return (
              <section key={category}>
                <h2 className="mb-3 font-serif text-lg font-semibold text-primary">{category}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {books.map((book, i) => (
                    <motion.div
                      key={book.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                    >
                      <Link to={`/book/${book.id}`}>
                        <Card className="group cursor-pointer border-border/50 transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5">
                          <CardContent className="p-4">
                            <div className={`mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${getCategoryColor(category)}`}>
                              <Book className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <p className="font-serif font-semibold text-sm truncate">{book.name}</p>
                            <p className="text-xs text-muted-foreground">{book.chapters} capítulos</p>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default BooksPage;
