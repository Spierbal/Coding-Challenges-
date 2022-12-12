function DNAStrand1(dna) {
  const DNACorrections = { A: "T", T: "A", G: "C", C: "G" };

  return [...dna].map(str => DNACorrections[str]).join("");
}

// Solution 2:
/* function DNAStrand(dna) {
  const DNACorrections = { A: "T", T: "A", G: "C", C: "G" };

  return dna.replace(/[ATGC]/g, char => DNACorrections[char]);
} */

// Solutions 2b:
/*  const DNACorrections = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

const DNAStrand = dna => dna.replace(/[ATCG]/g, char => DNACorrections[char]); */

/* console.log(DNAStrand("AAAA")); // --> "TTTT";
console.log(DNAStrand("ATTGC")); // --> "TAACG";
console.log(DNAStrand("GTAT")); // --> "CATA" */
