import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Book } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { bibleBooks, getCategoryColor } from "@/data/bibleBooks";

const BookDetailPage = () => {
  const { bookId } = useParams();
  const book = bibleBooks.find((b) => b.id === Number(bookId));

  if (!book) {
    return (
      <div className="container py-16 text-center">
        <p className="text-muted-foreground">Livro não encontrado.</p>
        <Link to="/books"><Button variant="link">Voltar aos livros</Button></Link>
      </div>
    );
  }

  const chapters = Array.from({ length: book.chapters }, (_, i) => i + 1);

  return (
    <div className="container py-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/books">
          <Button variant="ghost" size="sm" className="mb-4 -ml-2">
            <ArrowLeft className="mr-1 h-4 w-4" /> Voltar
          </Button>
        </Link>

        <div className="mb-8 flex items-center gap-4">
          <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${getCategoryColor(book.category)}`}>
            <Book className="h-7 w-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-serif text-3xl font-bold">{book.name}</h1>
            <p className="text-muted-foreground">{book.category} • {book.testament === "old" ? "Antigo Testamento" : "Novo Testamento"} • {book.chapters} capítulos</p>
          </div>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
          {chapters.map((ch) => (
            <Link key={ch} to={`/read/${book.id}/${ch}`}>
              <Card className="group cursor-pointer border-border/50 transition-all hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5">
                <CardContent className="flex items-center justify-center p-3">
                  <span className="font-semibold text-sm group-hover:text-primary">{ch}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BookDetailPage;
