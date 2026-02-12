import { motion } from "framer-motion";
import { Star, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocalStorage, FavoriteVerse } from "@/hooks/useLocalStorage";
import { Link } from "react-router-dom";

const highlightColors: Record<string, string> = {
  yellow: "border-l-yellow-400",
  green: "border-l-green-400",
  blue: "border-l-blue-400",
  pink: "border-l-pink-400",
};

const FavoritesPage = () => {
  const [favorites, setFavorites] = useLocalStorage<FavoriteVerse[]>("favorites", []);

  const removeFavorite = (index: number) => {
    setFavorites((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 font-serif text-3xl font-bold">Meus Favoritos</h1>
        <p className="mb-6 text-muted-foreground">
          {favorites.length} versículo{favorites.length !== 1 ? "s" : ""} salvo{favorites.length !== 1 ? "s" : ""}
        </p>

        {favorites.length === 0 ? (
          <div className="py-16 text-center">
            <Star className="mx-auto mb-4 h-12 w-12 text-muted-foreground/30" />
            <p className="text-muted-foreground">Nenhum versículo salvo ainda</p>
            <p className="text-sm text-muted-foreground/60 mt-1">
              Toque em um versículo durante a leitura para salvá-lo
            </p>
            <Link to="/books">
              <Button variant="outline" className="mt-4">Começar a ler</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {favorites.map((fav, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <Card className={`border-l-4 ${highlightColors[fav.color || "yellow"] || highlightColors.yellow}`}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="mb-2 leading-relaxed">"{fav.text}"</p>
                        <Link
                          to={`/read/${fav.bookId}/${fav.chapter}`}
                          className="text-sm font-semibold text-primary hover:underline"
                        >
                          {fav.bookName} {fav.chapter}:{fav.verseNumber}
                        </Link>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeFavorite(i)} className="shrink-0 text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FavoritesPage;
