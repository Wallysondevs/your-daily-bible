// Sample Bible text for demonstration - Gênesis 1 and João 1
// In a full app, this would be loaded from a comprehensive JSON file

export interface Verse {
  number: number;
  text: string;
}

export interface Chapter {
  bookId: number;
  chapter: number;
  verses: Verse[];
}

const sampleChapters: Record<string, Chapter> = {
  "1-1": {
    bookId: 1, chapter: 1,
    verses: [
      { number: 1, text: "No princípio, criou Deus os céus e a terra." },
      { number: 2, text: "A terra era sem forma e vazia; e havia trevas sobre a face do abismo, e o Espírito de Deus pairava sobre a face das águas." },
      { number: 3, text: "Disse Deus: Haja luz. E houve luz." },
      { number: 4, text: "Viu Deus que a luz era boa; e fez separação entre a luz e as trevas." },
      { number: 5, text: "Chamou Deus à luz Dia e às trevas, Noite. Houve tarde e manhã, o primeiro dia." },
      { number: 6, text: "E disse Deus: Haja um firmamento no meio das águas, e haja separação entre águas e águas." },
      { number: 7, text: "Fez, pois, Deus o firmamento e separação entre as águas debaixo do firmamento e as águas sobre o firmamento. E assim se fez." },
      { number: 8, text: "Chamou Deus ao firmamento Céus. Houve tarde e manhã, o segundo dia." },
      { number: 9, text: "E disse Deus: Ajuntem-se as águas debaixo dos céus num só lugar, e apareça a porção seca. E assim se fez." },
      { number: 10, text: "À porção seca chamou Deus Terra e ao ajuntamento das águas, Mares. E viu Deus que isso era bom." },
      { number: 11, text: "E disse Deus: Produza a terra erva verde, erva que dê semente, árvore frutífera que dê fruto segundo a sua espécie, cuja semente esteja nela sobre a terra. E assim se fez." },
      { number: 12, text: "A terra, pois, produziu erva verde, erva que dava semente segundo a sua espécie e árvore que dava fruto, cuja semente estava nela, segundo a sua espécie. E viu Deus que isso era bom." },
      { number: 13, text: "Houve tarde e manhã, o terceiro dia." },
      { number: 14, text: "E disse Deus: Haja luminares no firmamento dos céus, para fazerem separação entre o dia e a noite; sejam eles para sinais e para estações, e para dias e anos." },
      { number: 15, text: "E sejam para luminares no firmamento dos céus, para alumiar a terra. E assim se fez." },
      { number: 16, text: "Fez Deus os dois grandes luminares: o luminar maior para governar o dia, e o luminar menor para governar a noite; e fez também as estrelas." },
      { number: 17, text: "E Deus os pôs no firmamento dos céus para alumiar a terra," },
      { number: 18, text: "para governar o dia e a noite e para fazer separação entre a luz e as trevas. E viu Deus que isso era bom." },
      { number: 19, text: "Houve tarde e manhã, o quarto dia." },
      { number: 20, text: "E disse Deus: Produzam as águas abundantemente répteis de alma vivente; e voem as aves sobre a face da expansão dos céus." },
      { number: 21, text: "E Deus criou as grandes baleias, e todo réptil de alma vivente que as águas abundantemente produziram conforme as suas espécies, e toda ave de asas conforme a sua espécie. E viu Deus que era bom." },
      { number: 22, text: "E Deus os abençoou, dizendo: Frutificai, e multiplicai-vos, e enchei as águas nos mares; e as aves se multipliquem na terra." },
      { number: 23, text: "Houve tarde e manhã, o quinto dia." },
      { number: 24, text: "E disse Deus: Produza a terra alma vivente conforme a sua espécie; gado, e répteis, e bestas-feras da terra conforme a sua espécie. E assim se fez." },
      { number: 25, text: "E fez Deus as bestas-feras da terra conforme a sua espécie, e o gado conforme a sua espécie, e todo o réptil da terra conforme a sua espécie. E viu Deus que era bom." },
      { number: 26, text: "E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo réptil que se move sobre a terra." },
      { number: 27, text: "E criou Deus o homem à sua imagem; à imagem de Deus o criou; macho e fêmea os criou." },
      { number: 28, text: "E Deus os abençoou e Deus lhes disse: Frutificai, e multiplicai-vos, e enchei a terra, e sujeitai-a; e dominai sobre os peixes do mar, e sobre as aves dos céus, e sobre todo o animal que se move sobre a terra." },
      { number: 29, text: "E disse Deus: Eis que vos tenho dado toda erva que dá semente e que está sobre a face de toda a terra e toda árvore em que há fruto de árvore que dá semente; ser-vos-ão para mantimento." },
      { number: 30, text: "E a todo animal da terra, e a toda ave dos céus, e a todo réptil da terra, em que há alma vivente, toda a erva verde lhes será para mantimento. E assim se fez." },
      { number: 31, text: "E viu Deus tudo quanto tinha feito, e eis que era muito bom. Houve tarde e manhã, o sexto dia." },
    ],
  },
  "43-1": {
    bookId: 43, chapter: 1,
    verses: [
      { number: 1, text: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus." },
      { number: 2, text: "Ele estava no princípio com Deus." },
      { number: 3, text: "Todas as coisas foram feitas por intermédio dele, e sem ele nada do que foi feito se fez." },
      { number: 4, text: "Nele estava a vida, e a vida era a luz dos homens." },
      { number: 5, text: "A luz resplandece nas trevas, e as trevas não prevaleceram contra ela." },
      { number: 6, text: "Houve um homem enviado por Deus, cujo nome era João." },
      { number: 7, text: "Este veio como testemunha, para que testificasse da luz, para que todos cressem por meio dele." },
      { number: 8, text: "Não era ele a luz, mas veio para que testificasse da luz." },
      { number: 9, text: "Ali estava a luz verdadeira, que alumia a todo homem que vem ao mundo." },
      { number: 10, text: "Estava no mundo, e o mundo foi feito por intermédio dele, e o mundo não o conheceu." },
      { number: 11, text: "Veio para o que era seu, e os seus não o receberam." },
      { number: 12, text: "Mas a todos quantos o receberam deu-lhes o poder de serem feitos filhos de Deus: aos que creem no seu nome," },
      { number: 13, text: "os quais não nasceram do sangue, nem da vontade da carne, nem da vontade do varão, mas de Deus." },
      { number: 14, text: "E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade, e vimos a sua glória, glória como do unigênito do Pai." },
    ],
  },
  "19-23": {
    bookId: 19, chapter: 23,
    verses: [
      { number: 1, text: "O Senhor é o meu pastor; nada me faltará." },
      { number: 2, text: "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas." },
      { number: 3, text: "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome." },
      { number: 4, text: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam." },
      { number: 5, text: "Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda." },
      { number: 6, text: "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias." },
    ],
  },
};

export function getChapter(bookId: number, chapter: number): Chapter | null {
  const key = `${bookId}-${chapter}`;
  return sampleChapters[key] || null;
}

export function generatePlaceholderChapter(bookId: number, chapter: number): Chapter {
  const verseCount = Math.floor(Math.random() * 20) + 10;
  const verses: Verse[] = Array.from({ length: verseCount }, (_, i) => ({
    number: i + 1,
    text: `[Versículo ${i + 1} do capítulo ${chapter} — O texto completo da versão ARA será adicionado em breve. Este é um placeholder para demonstrar a funcionalidade de leitura.]`,
  }));
  return { bookId, chapter, verses };
}
