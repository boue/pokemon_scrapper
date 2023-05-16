// curl 'https://www.pokedata.io/api/cards?set_name=Jungle+1st+Edition&stats=kwan' \
// -H 'Accept: application/json, text/plain, */*' \
// -H 'Accept-Language: en' \
// -H 'Connection: keep-alive' \
// -H 'Cookie: _ga=GA1.1.1391721026.1661915310; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; _gcl_au=1.1.1427664095.1670359974; session=.eJw1zjtORDEMAMC7pOZJju34s5dZ2YktkKj2iQpxd2iYE8z3ePar7vfx6Pi86208P854DMZFHktpN0zd6RUHQlAZdZ08giyV1FvF1Tc3gPFUBTK1vbEquJVkSZIBhjGhGwdzqSuBnpWTLDsTsnB1Upj3hmSzCTD-Il93vf431KqEl3mui6fvK8TmJT7F6QTygvHzC3hVNqA.Y-gasw.wOP9Z7hFWoLv23bfvRCJaAAj0Cc; _ga_2NL1P9HJXT=GS1.1.1676155571.44.1.1676156171.0.0.0' \
// -H 'Referer: https://www.pokedata.io/set/Jungle+1st+Edition' \
// -H 'Sec-Fetch-Dest: empty' \
// -H 'Sec-Fetch-Mode: cors' \
// -H 'Sec-Fetch-Site: same-origin' \
// -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36' \
// -H 'sec-ch-ua: "Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"' \
// -H 'sec-ch-ua-mobile: ?0' \
// -H 'sec-ch-ua-platform: "macOS"' \
// --compressed

// fetch("https://www.pokedata.io/api/cards?set_name=Jungle+1st+Edition&stats=kwan", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en",
//     "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"macOS\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin"
//   },
//   "referrer": "https://www.pokedata.io/set/Jungle+1st+Edition",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });
export const dataList = [
  // {
  //   name: "Base Set 1st Edition",
  //   light: 20.75,
  //   heavy: 21.23,
  //   cards: [
  //     {
  //       name: "Charizard Holo 4",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Charizard+Holo+4",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/charizard-holo-1st-edition-4/605253",
  //     },
  //     {
  //       name: "Blastoise Holo 2",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Blastoise+Holo+2",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/blastoise-holo-1st-edition-2/605247",
  //     },
  //     {
  //       name: "Venusaur Holo 15",
  //       type: "Holo",
  //       pokeDataLink:
  //         "  https://www.pokedata.io/card/Base+Set+1st+Edition/Venusaur+Holo+15",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/venusaur-holo-1st-edition-15/605284",
  //     },
  //     {
  //       name: "Nidoking Holo 11",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Nidoking+Holo+11",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/nidoking-holo-1st-edition-11/605272",
  //     },
  //     {
  //       name: "Chansey Holo 3",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Chansey+Holo+3",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/chansey-holo-1st-edition-3/605249",
  //     },
  //     {
  //       name: "Clefairy Holo 5",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Clefairy+Holo+5",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/clefairy-holo-1st-edition-5/605255",
  //     },
  //     {
  //       name: "Alakazam Holo 1",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Alakazam+Holo+1",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/alakazam-holo-1st-edition-1/605243",
  //     },
  //     {
  //       name: "Poliwrath Holo 13",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Poliwrath+Holo+13",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/poliwrath-holo-1st-edition-13/605278",
  //     },
  //     {
  //       name: "Raichu Holo 14",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Raichu+Holo+14",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/raichu-holo-1st-edition-14/605281",
  //     },
  //     {
  //       name: "Ninetales Holo 12",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Ninetales+Holo+12",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/ninetales-holo-1st-edition-12/605274",
  //     },
  //     {
  //       name: "Hitmonchan Holo 7",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Hitmonchan+Holo+7",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/hitmonchan-holo-1st-edition-7/605262",
  //     },
  //     {
  //       name: "Mewtwo Holo 10",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Mewtwo+Holo+10",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/mewtwo-holo-1st-edition-10/605269",
  //     },
  //     {
  //       name: "Zapdos Holo 16",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Zapdos+Holo+16",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/zapdos-holo-1st-edition-16/605286",
  //     },
  //     {
  //       name: "Gyarados Holo 6",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Gyarados+Holo+6",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/gyarados-holo-1st-edition-6/605259",
  //     },
  //     {
  //       name: "Magneton Holo 9",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Base+Set+1st+Edition/Magneton+Holo+9",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/magneton-holo-1st-edition-9/605266",
  //     },
  //   ],
  // },
  // {
  //   name: "Jungle 1st Edition",
  //   light: 20.91,
  //   heavy: 21.12,
  //   cards: [
  //     {
  //       name: "Electrode Holo 2",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Electrode+Holo+2",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/electrode-holo-1st-edition-2/641290",
  //     },

  //     {
  //       name: "Flareon Holo 3",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Flareon+Holo+3",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/flareon-holo-1st-edition-3/641293",
  //     },
  //     {
  //       name: "Jolteon Holo 4",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Jolteon+Holo+4",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/jolteon-holo-1st-edition-4/641296",
  //     },

  //     {
  //       name: "Kangaskhan Holo 5",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Kangaskhan+Holo+5",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/kangaskhan-holo-1st-edition-5/641299",
  //     },

  //     {
  //       name: "Mr. Mime Holo 6",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Mr.+Holo+6",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/mr-mime-holo-1st-edition-6/641302",
  //     },

  //     {
  //       name: "Nidoqueen Holo 7",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Nidoqueen+Holo+7",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/nidoqueen-holo-1st-edition-7/641305",
  //     },

  //     {
  //       name: "Pidgeot Holo 8",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Pidgeot+Holo+8",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/pidgeot-holo-1st-edition-8/641308",
  //     },

  //     {
  //       name: "Pinsir Holo 9",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Pinsir+Holo+9",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/pinsir-holo-1st-edition-9/641311",
  //     },

  //     {
  //       name: "Scyther Holo 10",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Scyther+Holo+10",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/scyther-holo-1st-edition-10/641314",
  //     },

  //     {
  //       name: "Snorlax Holo 11",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Snorlax+Holo+11",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/snorlax-holo-1st-edition-11/641317",
  //     },

  //     {
  //       name: "Vaporeon Holo 12",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Vaporeon+Holo+12",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/vaporeon-holo-1st-edition-12/641320",
  //     },

  //     {
  //       name: "Venomoth Holo 13",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Venomoth+Holo+13",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/venomoth-holo-1st-edition-13/641323",
  //     },

  //     {
  //       name: "Victreebel Holo 14",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Victreebel+Holo+14",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/victreebel-holo-1st-edition-14/641326",
  //     },

  //     {
  //       name: "Vileplume Holo 15",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Vileplume+Holo+15",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/vileplume-holo-1st-edition-15/641329",
  //     },

  //     {
  //       name: "Wigglytuff Holo 16",
  //       type: "Holo",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Jungle+1st+Edition/Wigglytuff+Holo+16",
  //       psaLink:
  //         "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/wigglytuff-holo-1st-edition-16/641332",
  //     },
  //   ],
  // },
  // {
  //   name: "Silver Tempest",
  //   cards: [
  //     {
  //       name: "Lugia V 186",
  //       type: "V Alternate Art Ultra Rare",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Lugia+V+186",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-lugia-v/summary/7653413",
  //     },
  //     {
  //       name: "Serena 193",
  //       type: "Trainer Full Art Ultra Rare",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Serena+193",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-serena/summary/7729854",
  //     },
  //     {
  //       name: "Lugia VSTAR 202",
  //       type: "V Star Secret Rare Rainbow",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Silver+Tempest/Lugia+VSTAR+202",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-lugia-vstar/summary/7704011",
  //     },
  //     {
  //       name: "Unown V 177",
  //       type: "V Alternate Full Art Ultra Rare",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Unown+V+177",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-unown-v/summary/7717224",
  //     },
  //     {
  //       name: "Regidrago V 184",
  //       type: "V Alternate Full Art Ultra Rare",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Unown+V+177",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-regidrago-v/summary/7727442",
  //     },
  //     {
  //       name: "Serena 207",
  //       type: "Trainer Secret Rare Rainbow",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Serena+207",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-serena/summary/7759270",
  //     },
  //     {
  //       name: "Alolan Vulpix VSTAR 197",
  //       type: "V Star Secret Rare Rainbow",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Silver+Tempest/Alolan+Vulpix+VSTAR+197",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-alolan-vulpix-vstar/summary/7732305",
  //     },
  //     {
  //       name: "Skuntank V 181",
  //       type: "V Alternate Full Art Ultra Rare",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Silver+Tempest/Skuntank+V+181",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-skuntank-v/summary/7727443",
  //     },
  //     {
  //       name: "Unown VSTAR 199",
  //       type: "V Star Secret Rare Rainbow",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Silver+Tempest/Unown+VSTAR+199",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-unown-vstar/summary/7759260",
  //     },
  //     {
  //       name: "Candice 189",
  //       type: "Trainer Full Art Ultra Rare",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Candice+189",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-candice/summary/7717484",
  //     },
  //     {
  //       name: "Wallace 194",
  //       type: "Trainer Full Art Ultra Rare",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Wallace+194",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-wallace/summary/7779542",
  //     },
  //     {
  //       name: "Regieleki VMAX 198",
  //       type: "VMAX Secret Rare Rainbow",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Silver+Tempest/Regieleki+VMAX+198",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-regieleki-vmax/summary/7763027",
  //     },
  //     {
  //       name: "Regidrago VSTAR 201",
  //       type: "V Star Secret Rare Rainbow",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Silver+Tempest/Regidrago+VSTAR+201",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-regidrago-vstar/summary/7763030",
  //     },
  //     {
  //       name: "Candice 204",
  //       type: "Trainer Secret Rare Rainbow",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Candice+204",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-candice/summary/7759261",
  //     },
  //     {
  //       name: "Furisode Girl 205",
  //       type: "Trainer Secret Rare Rainbow",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Silver+Tempest/Furisode+Girl+205",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-furisode-girl/summary/7759265",
  //     },
  //     {
  //       name: "Serperior VSTAR 196",
  //       type: "V Star Secret Rare Rainbow",
  //       pokeDataLink:
  //         "https://www.pokedata.io/card/Silver+Tempest/Serperior+VSTAR+196",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-serperior-vstar/summary/7727486",
  //     },
  //     {
  //       name: "Lance 206",
  //       type: "V Star Secret Rare Rainbow",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Lance+206",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-lance/summary/7759269",
  //     },
  //     {
  //       name: "Wallace 208",
  //       type: "V Star Secret Rare Rainbow",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Wallace+208",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-wallace/summary/7763033",
  //     },
  //     {
  //       name: "Lance 192",
  //       type: "Trainer Full Art Ultra Rare",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Lance+192",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-lance/summary/7759259",
  //     },
  //     // {
  //     //   name: "Mawile VSTAR 200",
  //     //   type: "V Star Secret Rare Rainbow",
  //     //   pokeDataLink:
  //     //     "https://www.pokedata.io/card/Silver+Tempest/Mawile+VSTAR+200",
  //     //   psaLink:
  //     //     "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-mawile-vstar/summary/7763029",
  //     // },
  //     {
  //       name: "Worker 209",
  //       type: "V Star Secret Rare Rainbow",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Worker+209",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-worker/summary/7759272",
  //     },
  //     {
  //       name: "Brandon 203",
  //       type: "Trainer Secret Rare Rainbow",
  //       pokeDataLink: "https://www.pokedata.io/card/Silver+Tempest/Brandon+203",
  //       psaLink:
  //         "https://www.psacard.com/auctionprices/tcg-cards/2022-pokemon-sword-shield-silver-tempest/full-art-brandon/summary/7763032",
  //     },
  //   ],
  // },

  {
    name: "Crown Zenith",
    cards: [
      // {
      //   name: "Comfey",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Comfey+GG14",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-comfey/summary/8152729",
      // },
      // {
      //   name: "Eevee V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Eevee+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/eevee-v/summary/8152578",
      // },
      // {
      //   name: "Hatterene V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Hatterene+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/ultra-rare/summary/58005",
      // },
      // {
      //   name: "Duraludon V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Duraludon+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/duraludon-v/summary/8152573",
      // },
      // {
      //   name: "Duraludon VMAX",
      //   type: "VMAX Full Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Duraludon+VMAX",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-duraludon-vmax/summary/8152574",
      // },
      // {
      //   name: "Solrock",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Solrock+GG15",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-solrock/summary/8152730",
      // },
      // {
      //   name: "Altaria",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Altaria+GG19",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-altaria/summary/8152737",
      // },
      // {
      //   name: "Oricorio",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Oricorio+GG04",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-oricorio/summary/8152713",
      // },
      // {
      //   name: "Mareep",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Mareep+GG34",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-mareep/summary/8152760",
      // },
      // {
      //   name: "Arceus VSTAR",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Arceus+VSTAR+GG70",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-arceus-vstar/summary/8152804",
      // },
      // {
      //   name: "Charizard V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Charizard+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/charizard-v/summary/8152467",
      // },
      // {
      //   name: "Charizard VSTAR",
      //   type: "VSTAR",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Charizard+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/charizard-vstar/summary/8152468",
      // },
      // {
      //   name: "Colress's Experiment",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Colress's+Experiment+GG59",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-colresss-experiment/summary/8152791",
      // },
      // {
      //   name: "Adaman",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Adaman+GG57",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-adaman/summary/8152789",
      // },
      // {
      //   name: "Professor's Research",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Professor's+Research+150",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-professors-research/summary/8152625",
      // },
      // {
      //   name: "Friends in Sinnoh",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Friends+in+Sinnoh+149",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-friends-sinnoh/summary/8152624",
      // },
      // {
      //   name: "Friends in Hisui",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Friends+in+Hisui+148",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-friends-hisui/summary/8152623",
      // },
      // {
      //   name: "Roxanne",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Roxanne+GG66",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-roxanne/summary/8152799",
      // },
      // {
      //   name: "Cynthia's Ambition",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Cynthia's+Ambition+GG60",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-cynthias-ambition/summary/8152792",
      // },
      // {
      //   name: "Darkrai VSTAR",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Darkrai+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-darkrai-vstar/summary/8152782",
      // },
      // {
      //   name: "Deoxys VMAX",
      //   type: "VMAX Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Deoxys+VMAX",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-deoxys-vmax/summary/8152777",
      // },
      // {
      //   name: "Deoxys VSTAR Alternate Art",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Deoxys+VSTAR+GG46",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-deoxys-vstar/summary/8152778",
      // },
      // {
      //   name: "Deoxys",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Deoxys+GG12",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-deoxys/summary/8152726",
      // },
      // {
      //   name: "Magnezone",
      //   type: "Character Rare",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Magnezone+GG18",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-magnezone/summary/8152735",
      // },
      // {
      //   name: "Magmortar",
      //   type: "Character Rare",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Magmortar+GG03",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-magmortar/summary/8152711",
      // },
      // {
      //   name: "Electivire",
      //   type: "Character Rare",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Electivire+GG08",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-electivire/summary/8152719",
      // },
      // {
      //   name: "Turtwig",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Turtwig+GG31",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-turtwig/summary/8152756",
      // },
      // {
      //   name: "Absol",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Absol+GG16",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-absol/summary/8152732",
      // },
      // {
      //   name: "Kricketune",
      //   type: "Character Rare",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Kricketune+GG02",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-kricketune/summary/8152710",
      // },
      // {
      //   name: "Hisuian Goodra",
      //   type: "Character Rare",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Hisuian+Goodra+GG21",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-hisuian-goodra/summary/8152740",
      // },
      // {
      //   name: "Ditto",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Ditto+GG22",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-ditto/summary/8152742",
      // },

      // {
      //   name: "Drapion V",
      //   type: "V Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Drapion+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-drapion-v/summary/8152781",
      // },
      // {
      //   name: "Elesa's Sparkle",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Elesa's+Sparkle+147",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-elesas-sparkle/summary/8152622",
      // },
      // {
      //   name: "Entei V",
      //   type: "V Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Entei+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-entei-v/summary/8152765",
      // },
      // {
      //   name: "Gardenia's Vigor",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Gardenia's+Vigor",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-gardenias-vigor/summary/8152793",
      // },
      // {
      //   name: "Giratina VSTAR",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Giratina+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-giratina-vstar/summary/8152803",
      // },
      // {
      //   name: "Glaceon V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Glaceon+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/glaceon-v/summary/8152503",
      // },
      // {
      //   name: "Glaceon VSTAR",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Glaceon+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-glaceon-vstar/summary/8152772",
      // },

      // {
      //   name: "Hatterene VMAX",
      //   type: "VMAX Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Hatterene+VMAX",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-hatterene-vmax/summary/8152532",
      // },
      // {
      //   name: "Manaphy",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Manaphy+GG06",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-manaphy/summary/8152715",
      // },
      // {
      //   name: "Lapras",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Lapras+GG05",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-lapras/summary/8152714",
      // },
      // {
      //   name: "Latias",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Latias+GG20",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-latias/summary/8152739",
      // },
      // {
      //   name: "Thievul",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Thievul+GG17",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-thievul/summary/8152733",
      // },
      // {
      //   name: "Diancie",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Diancie+GG13",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-diancie/summary/8152727",
      // },
      // {
      //   name: "Miltank",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Miltank+GG24",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-miltank/summary/8152745",
      // },
      // {
      //   name: "Bidoof",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Bidoof+GG29",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-bidoof/summary/8152753",
      // },
      // {
      //   name: "Bibarel",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Bibarel+GG25",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-bibarel/summary/8152746",
      // },
      // {
      //   name: "Hisuian Samurott VSTAR",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Hisuian+Samurott+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-hisuian-samurott-vstar/summary/8152784",
      // },
      // {
      //   name: "Hisuian Voltorb",
      //   type: "Character Rare",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Hisuian+Voltorb",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-hisuian-voltorb/summary/8152708",
      // },
      // {
      //   name: "Riolu",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Riolu+GG26",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-riolu/summary/8152748",
      // },
      // {
      //   name: "Cheren's Care",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Cheren's+Care+GG58",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-cherens-care/summary/8152790",
      // },
      // {
      //   name: "Grant",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Grant+GG62",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-grant/summary/8152794",
      // },
      // {
      //   name: "Hisuian Zoroark VSTAR",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Hisuian+Zoroark+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-hisuian-zoroark-vstar/summary/8152788",
      // },
      // {
      //   name: "Hoopa V",
      //   type: "V Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Hoopa+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-hoopa-v/summary/8152785",
      // },
      // {
      //   name: "Irida",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Irida+GG63",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-irida/summary/8152795",
      // },
      // {
      //   name: "Kyogre V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Kyogre+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/kyogre-v/summary/8152502",
      // },
      // {
      //   name: "Leafeon V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Leafeon+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/leafeon-v/summary/8152460",
      // },
      // {
      //   name: "Leafeon VSTAR",
      //   type: "VSTAR",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Leafeon+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/leafeon-vstar/summary/8152461",
      // },
      // {
      //   name: "Leafeon VSTAR",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Leafeon+VSTAR+GG35",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-leafeon-vstar/summary/8152762",
      // },
      // {
      //   name: "Lumineon V",
      //   type: "V Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Lumineon+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-lumineon-v/summary/8152770",
      // },
      // {
      //   name: "Melony",
      //   type: "Trainer Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Melony+GG64",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-melony/summary/8152797",
      // },
      // {
      //   name: "Mewtwo VSTAR",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Mewtwo+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-mewtwo-vstar/summary/8152776",
      // },
      // {
      //   name: "Mew V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Mew+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/mew-v/summary/8152526",
      // },
      {
        name: "Mew V GG",
        type: "Character Rare",
        pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Mew+GG10",
        psaLink:
          "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-mew/summary/8152723",
      },
      // {
      //   name: "Origin Forme Dialga VSTAR",
      //   type: "VSTAR Full Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Origin+Forme+Dialga+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-origin-forme-dialga-vstar/summary/8152801",
      // },
      // {
      //   name: "Origin Forme Palkia VSTAR",
      //   type: "VSTAR Full Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Origin+Forme+Palkia+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-origin-forme-palkia-vstar/summary/8152800",
      // },
      // {
      //   name: "Pikachu Full Art",
      //   type: "V Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Pikachu",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-pikachu/summary/8152638",
      // },
      // {
      //   name: "Pikachu Character Rare",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Pikachu+GG30",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-pikachu/summary/8152754",
      // },
      // {
      //   name: "Raikou V A",
      //   type: "V Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Raikou+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-raikou-v/summary/8152773",
      // },
      // {
      //   name: "Raihan",
      //   type: "Trainer Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Raihan+GG65",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-raihan/summary/8152798",
      // },
      // {
      //   name: "Rayquaza V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Rayquaza+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/rayquaza-v/summary/8152570",
      // },
      // {
      //   name: "Rayquaza VMAX Full Art 101",
      //   type: "VMAX Full Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Rayquaza+VMAX+101",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-rayquaza-vmax/summary/8152571",
      // },

      // {
      //   name: "Regigigas V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Regigigas+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/regigigas-v/summary/8152585",
      // },
      // {
      //   name: "Regigigas VSTAR",
      //   type: "VSTAR",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Regigigas+VSTAR+114",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/regigigas-vstar/summary/8152586",
      // },
      // {
      //   name: "Regigigas VSTAR Full Art",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Regigigas+VSTAR+GG55",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-regigigas-vstar/summary/8152787",
      // },

      // {
      //   name: "Simisear VSTAR",
      //   type: "VSTAR",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Simisear+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/simisear-vstar/summary/8152474",
      // },
      // {
      //   name: "Simisear VSTAR Full Art",
      //   type: "VSTAR Full Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Simisear+VSTAR+GG37",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-simisear-vstar/summary/8152767",
      // },

      {
        name: "Suicune V",
        type: "V Alternate Art",
        pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Suicune+V",
        psaLink:
          "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-suicune-v/summary/8152769",
      },

      // {
      //   name: "Volo",
      //   type: "Alternate Art Trainer",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Volo",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-volo/summary/8152626",
      // },
      // {
      //   name: "Zacian V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Zacian+V+095",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zacian-v/summary/8152564",
      // },
      // {
      //   name: "Zacian V A",
      //   type: "V Alternate Art",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Zacian+V+GG48",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-zacian-v/summary/8152780",
      // },
      // {
      //   name: "Zacian VSTAR",
      //   type: "VSTAR",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Zacian+VSTAR+096",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zacian-vstar/summary/8152565",
      // },
      // {
      //   name: "Zamazenta V",
      //   type: "V",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Zamazenta+V+098",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zamazenta-v/summary/8152567",
      // },
      // {
      //   name: "Zamazenta V A",
      //   type: "V Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Zamazenta+V+GG54",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-zamazenta-v/summary/8152786",
      // },
      // {
      //   name: "Zeraora VMAX Full Art",
      //   type: "VMAX Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Zeraora+VMAX+GG42",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-zeraora-vmax/summary/8152774",
      // },
      // {
      //   name: "Zeraora VSTAR Full Art",
      //   type: "VSTAR Alternate Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Zeraora+VSTAR+GG43",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-zeraora-vstar/summary/8152775",
      // },
      // {
      //   name: "Lunatone",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Lunatone+GG11",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-lunatone/summary/8152724",
      // },
      // {
      //   name: "Zeraora VSTAR",
      //   type: "VSTAR",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Zeraora+VSTAR+055",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zeraora-vstar/summary/8152521",
      // },
      // {
      //   name: "Zamazenta VSTAR",
      //   type: "VSTAR",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Zamazenta+VSTAR+099",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zamazenta-vstar/summary/8152568",
      // },
      // {
      //   name: "Zeraora V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Zeraora+V+053",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zeraora-v/summary/8152519",
      // },
      // {
      //   name: "Zeraora VMAX",
      //   type: "VMAX",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Zeraora+VMAX+054",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zeraora-vmax/summary/8152520",
      // },
      // {
      //   name: "Volcanion",
      //   type: "Ultra Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Volcanion",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/ultra-rare/summary/58135",
      // },
      // {
      //   name: "Volcarona",
      //   type: "Ultra Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Volcarona",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/ultra-rare/summary/58048",
      // },
      // {
      //   name: "Stoutland V",
      //   type: "Ultra Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Stoutland+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/ultra-rare/summary/58043",
      // },
      // {
      //   name: "Rotom V",
      //   type: "Ultra Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Rotom+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/ultra-rare/summary/58034",
      // },
      // {
      //   name: "Rotom VSTAR",
      //   type: "VSTAR",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Rotom+VSTAR",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/rotom-vstar/summary/8152512",
      // },
      // {
      //   name: "Simisear V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Simisear+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/simisear-v/summary/8152472",
      // },
      // {
      //   name: "Rayquaza VMAX Full Art 102",
      //   type: "VMAX Full Art",
      //   pokeDataLink:
      //     "https://www.pokedata.io/card/Crown+Zenith/Rayquaza+VMAX+102",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-rayquaza-vmax/summary/8152572",
      // },
      // {
      //   name: "Keldeo",
      //   type: "Character Rare",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Keldeo+GG07",
      //   psaLink:
      //     "https://www.psacard.com/errors?aspxerrorpath=/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-keldeo/summary/8152717",
      // },
      // {
      //   name: "Greedent V",
      //   type: "V",
      //   pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Greedent+V",
      //   psaLink:
      //     "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/greedent-v/summary/8152592",
      // },
    ],
  },
];

const jungleNonHolos = [
  {
    name: "Bellsprout 49",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Bellsprout+49",
    psaLink:
      "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/bellsprout-1st-edition-49/605295",
  },
  {
    name: "Butterfree 33",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Butterfree+33",
  },
  {
    name: "Clefable 17",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Clefable+17",
  },
  {
    name: "Clefable Holo 1",
    type: "Holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Clefable+Holo+1",
    psaLink:
      "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-jungle/clefable-holo-1/641285",
  },
  {
    name: "Cubone 50",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Cubone+50",
    psaLink:
      "https://www.psacard.com/cardfacts/non-sports-cards/1999-nintendo-pokemon-game/cubone-1st-edition-50/605296",
  },
  {
    name: "Dodrio 34",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Dodrio+34",
  },
  {
    name: "Eevee 51",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Eevee+51",
  },
  {
    name: "Electrode 18",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Electrode+18",
  },
  {
    name: "Exeggcute 52",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Exeggcute+52",
  },
  {
    name: "Exeggutor 35",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Exeggutor+35",
  },
  {
    name: "Fearow 36",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Fearow+36",
  },
  {
    name: "Flareon 19",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Flareon+19",
  },
  {
    name: "Gloom 37",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Gloom+37",
  },
  {
    name: "Goldeen 53",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Goldeen+53",
  },
  {
    name: "Jigglypuff 54",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Jigglypuff+54",
  },
  {
    name: "Jolteon 20",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Jolteon+20",
  },
  {
    name: "Kangaskhan 21",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Kangaskhan+21",
  },
  {
    name: "Lickitung 38",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Lickitung+38",
  },
  {
    name: "Mankey 55",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Mankey+55",
  },
  {
    name: "Marowak 39",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Marowak+39",
  },
  {
    name: "Meowth 56",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Meowth+56",
  },
  {
    name: "Mr. Mime 22",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Mr.+22",
  },
  {
    name: "Nidoqueen 23",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Nidoqueen+23",
  },
  {
    name: "Nidoran F 57",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Nidoran+57",
  },
  {
    name: "Nidorina 40",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Nidorina+40",
  },
  {
    name: "Oddish 58",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Oddish+58",
  },
  {
    name: "Paras 59",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Paras+59",
  },
  {
    name: "Parasect 41",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Parasect+41",
  },
  {
    name: "Persian 42",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Persian+42",
  },
  {
    name: "Pidgeot 24",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Pidgeot+24",
  },
  {
    name: "Pikachu 60",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Pikachu+60",
  },
  {
    name: "Pinsir 25",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Pinsir+25",
  },
  {
    name: "Seaking 46",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Seaking+46",
  },
  {
    name: "Snorlax 27",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Snorlax+27",
  },
  {
    name: "Poke Ball 64",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Poke+64",
  },
  {
    name: "Primeape 43",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Primeape+43",
  },
  {
    name: "Rapidash 44",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Rapidash+44",
  },
  {
    name: "Rhydon 45",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Rhydon+45",
  },
  {
    name: "Rhyhorn 61",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Rhyhorn+61",
  },
  {
    name: "Scyther 26",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Scyther+26",
  },
  {
    name: "Spearow 62",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Spearow+62",
  },
  {
    name: "Tauros 47",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Tauros+47",
  },
  {
    name: "Vaporeon 28",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Vaporeon+28",
  },
  {
    name: "Venomoth 29",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Venomoth+29",
  },
  {
    name: "Venonat 63",
    type: "Non-holo",
    pokeDataLink: "https://www.pokedata.io/card/Jungle+1st+Edition/Venonat+63",
  },
  {
    name: "Victreebel 30",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Victreebel+30",
  },
  {
    name: "Vileplume 31",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Vileplume+31",
  },
  {
    name: "Weepinbell 48",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Weepinbell+48",
  },
  {
    name: "Wigglytuff 32",
    type: "Non-holo",
    pokeDataLink:
      "https://www.pokedata.io/card/Jungle+1st+Edition/Wigglytuff+32",
  },
];

export const POKE_DATA_DOMAIN = "https://www.pokedata.io";

const crownZenithBench = [
  {
    name: "Lunatone",
    type: "Character Rare",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Lunatone+GG11",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-lunatone/summary/8152724",
  },
  {
    name: "Zeraora VSTAR",
    type: "VSTAR",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Zeraora+VSTAR+055",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zeraora-vstar/summary/8152521",
  },
  {
    name: "Zamazenta VSTAR",
    type: "VSTAR",
    pokeDataLink:
      "https://www.pokedata.io/card/Crown+Zenith/Zamazenta+VSTAR+099",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zamazenta-vstar/summary/8152568",
  },
  {
    name: "Zeraora V",
    type: "V",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Zeraora+V+053",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zeraora-v/summary/8152519",
  },
  {
    name: "Zeraora VMAX",
    type: "VMAX",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Zeraora+VMAX+054",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/zeraora-vmax/summary/8152520",
  },
  {
    name: "Volcanion",
    type: "Ultra Rare",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Volcanion",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/ultra-rare/summary/58135",
  },
  {
    name: "Volcarona",
    type: "Ultra Rare",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Volcarona",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/ultra-rare/summary/58048",
  },
  {
    name: "Stoutland V",
    type: "Ultra Rare",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Stoutland+V",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/ultra-rare/summary/58043",
  },
  {
    name: "Rotom V",
    type: "Ultra Rare",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Rotom+V",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/ultra-rare/summary/58034",
  },
  {
    name: "Rotom VSTAR",
    type: "VSTAR",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Rotom+VSTAR",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/rotom-vstar/summary/8152512",
  },
  {
    name: "Simisear V",
    type: "V",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Simisear+V",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/simisear-v/summary/8152472",
  },
  {
    name: "Rayquaza VMAX Full Art 102",
    type: "VMAX Full Art",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Rayquaza+VMAX+102",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-rayquaza-vmax/summary/8152572",
  },
  {
    name: "Keldeo",
    type: "Character Rare",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Keldeo+GG07",
    psaLink:
      "https://www.psacard.com/errors?aspxerrorpath=/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/full-art-keldeo/summary/8152717",
  },
  {
    name: "Greedent V",
    type: "V",
    pokeDataLink: "https://www.pokedata.io/card/Crown+Zenith/Greedent+V",
    psaLink:
      "https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/greedent-v/summary/8152592",
  },
];
