export const synonyms: Record<string, string[]> = {
    "important": ["key", "crucial", "big", "major", "vital"],
    "utilize": ["use", "make use of", "leverage", "employ"],
    "demonstrate": ["show", "prove", "reveal", "display"],
    "assist": ["help", "aid", "support", "give a hand"],
    "approximately": ["about", "around", "roughly", "nearly"],
    "subsequently": ["later", "after that", "then", "next"],
    "furthermore": ["also", "plus", "on top of that", "besides"],
    "however": ["but", "though", "yet", "although"],
    "therefore": ["so", "that's why", "hence", "thus"],
    "initiate": ["start", "begin", "kick off", "launch"],
    "terminate": ["end", "stop", "finish", "close"],
    "objective": ["goal", "aim", "target", "plan"],
    "construct": ["build", "make", "create", "form"],
    "obtain": ["get", "gain", "acquire", "snag"],
    "require": ["need", "want", "demand", "call for"],
    "reside": ["live", "stay", "dwell"],
    "numerous": ["many", "lots of", "a bunch of", "countless"],
    "attempt": ["try", "shot", "go", "effort"],
    "currently": ["now", "right now", "at the moment"],
    "sufficient": ["enough", "plenty", "adequate"],
    "entire": ["whole", "total", "full", "complete"]
};

export const idioms = [
    "at the end of the day", "in a nutshell", "long story short",
    "to be honest", "frankly speaking", "believe it or not",
    "for what it's worth", "as a matter of fact", "truth be told"
];

export const fillers = ["well,", "you know,", "actually,", "basically,", "literally,", "I mean,"];

export interface HumanizeOptions {
    tone: string;
    level: number;
    contractions: boolean;
    idioms: boolean;
    structure: boolean;
    imperfections: boolean;
}

export const humanizeText = (text: string, opts: HumanizeOptions): string => {
    const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];

    const processed = sentences.map(s => {
        let clean = s.trim();

        // 1. Synonym Replacement
        clean = replaceSynonyms(clean, opts);

        // 2. Contractions
        if (opts.contractions) {
            clean = applyContractions(clean);
        }

        // 3. Structure & Fillers
        if (opts.structure && Math.random() < (opts.level / 150)) {
            clean = addFillers(clean);
        }

        // 4. Idioms
        if (opts.idioms && Math.random() < (opts.level / 200)) {
            const idiom = idioms[Math.floor(Math.random() * idioms.length)];
            clean = `${idiom}, ${clean.charAt(0).toLowerCase() + clean.slice(1)}`;
        }

        // 5. Imperfections
        if (opts.imperfections && Math.random() < (opts.level / 300)) {
            clean = addImperfections(clean);
        }

        return clean;
    });

    return processed.join(' ');
};

const replaceSynonyms = (text: string, opts: HumanizeOptions) => {
    let words = text.split(' ');
    return words.map(w => {
        const cleanW = w.replace(/[.,!?]/g, '');
        const lowerW = cleanW.toLowerCase();
        const punctuation = w.slice(cleanW.length);

        if (synonyms[lowerW] && Math.random() < (opts.level / 100)) {
            const candidates = synonyms[lowerW];
            let replacement = candidates[Math.floor(Math.random() * candidates.length)];
            if (w[0] === w[0].toUpperCase()) {
                replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
            }
            return replacement + punctuation;
        }
        return w;
    }).join(' ');
};

const applyContractions = (text: string) => {
    const map: Record<string, string> = {
        "do not": "don't", "cannot": "can't", "is not": "isn't", "are not": "aren't",
        "will not": "won't", "have not": "haven't", "has not": "hasn't",
        "I am": "I'm", "we are": "we're", "they are": "they're", "you are": "you're",
        "it is": "it's", "that is": "that's", "there is": "there's"
    };

    let out = text;
    for (const [key, val] of Object.entries(map)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        out = out.replace(regex, (match) => {
            return match[0] === match[0].toUpperCase() ? val.charAt(0).toUpperCase() + val.slice(1) : val;
        });
    }
    return out;
};

const addFillers = (text: string) => {
    const filler = fillers[Math.floor(Math.random() * fillers.length)];
    if (!text.includes(',')) {
        return `${filler} ${text.charAt(0).toLowerCase() + text.slice(1)}`;
    }
    return text;
};

const addImperfections = (text: string) => {
    if (text.length > 5) {
        const idx = Math.floor(Math.random() * (text.length - 2)) + 1;
        const chars = text.split('');
        const temp = chars[idx];
        chars[idx] = chars[idx + 1];
        chars[idx + 1] = temp;
        return chars.join('');
    }
    return text;
};
