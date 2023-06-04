const bump = x => ((x.match(/n/g) || []).length <= 15 ? "Woohoo!" : "Car Dead");

// console.log(bump("__nn_nnnn__n_n___n____nn__nnn")); // "Woohoo!"
// console.log(bump("nnn_n__n_n___nnnnn___n__nnn__")); //, "Woohoo!");
// console.log(bump("_"));
// console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"))
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))
// console.log(bump("______n___n_"))
