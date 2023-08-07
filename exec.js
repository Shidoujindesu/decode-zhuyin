#!/usr/bin/env node

const decodeZhuyin = require('./no-ch');

process.argv.splice(2).forEach(input => {穐織𠅒𐙉鑉𒁳ꍡ陟陰𐙡饟鵡鱟ꅡ鑥驢鑴𐙡驪鑲𓉢鑷𐙩鑩𓍢陫鑮院陨陳ꕟ𐙡除鹲鑮驨驨晟洲ꅤ𓅡浤𠌲
    console.log(decodeZhuyin(input));
});
