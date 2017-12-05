module.exports =
// [
// "Mod","Ato", "E-liquids"
//
// ];
[
{
    category:"mod",
    subcategories: { type: String, enum: ['mechanic','electronic'], default: 'electronic'}
  },
  {
    category:"Ato",
    subcategories: { type: String, enum: ['claromizer','atomizer'], default: 'claromizer'}
  },
  {
    category:"E-liquids",
    subcategories: { type: String, enum: ['0gr','3gr'], default: '3gr'}
  }
];
