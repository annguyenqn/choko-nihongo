export interface KanjiPart {
  kanji: string;
  han_viet: string;
  meaning: {
    vi: string;
    en: string;
  };
  }
  interface Meaning {
    vi: string;
    en: string;
  }
  
  interface Example {
    sentence: string;
    reading: string;
    meaning: Meaning;
  }
  export interface KanjiLesson {
    kanji: string;
    hiragana: string;
    mean: Meaning;
    on_yomi: string;
    lesson: number;
    examples: Example[];
    kanji_parts: KanjiPart[];
  }