import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dailyVerses } from "@/data/dailyVerses";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [filter, setFilter] = useState<"all" | "old" | "new">("all");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return dailyVerses.filter(
      (v) => v.text.toLowerCase().includes(q) || v.reference.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="container py-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="mb-2 font-serif text-3xl font-bold">Buscar na Bíblia</h1>
        <p className="mb-6 text-muted-foreground">Encontre versículos por palavra-chave ou referência</p>

        <div className="relative mb-6 max-w-lg">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Digite uma palavra ou referência..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12 pl-11 rounded-xl"
          />
        </div>

        <div className="mb-6 flex gap-2">
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

        {query.trim() && (
          <p className="mb-4 text-sm text-muted-foreground">
            {results.length} resultado{results.length !== 1 ? "s" : ""} encontrado{results.length !== 1 ? "s" : ""}
          </p>
        )}

        <div className="space-y-3">
          {results.map((verse, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <p className="mb-2 text-foreground leading-relaxed">"{verse.text}"</p>
                  <p className="text-sm font-semibold text-primary">{verse.reference}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {query.trim() && results.length === 0 && (
          <div className="py-16 text-center">
            <Search className="mx-auto mb-4 h-12 w-12 text-muted-foreground/30" />
            <p className="text-muted-foreground">Nenhum resultado encontrado para "{query}"</p>
            <p className="text-sm text-muted-foreground/60 mt-1">
              A busca está disponível nos versículos carregados. Mais textos serão adicionados em breve.
            </p>
          </div>
        )}

        {!query.trim() && (
          <div className="py-16 text-center">
            <Search className="mx-auto mb-4 h-12 w-12 text-muted-foreground/30" />
            <p className="text-muted-foreground">Digite algo para buscar nos versículos da Bíblia</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SearchPage;
