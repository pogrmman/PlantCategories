function CATEGORIZEPLANT(productName) {
  let names = productName.split(" ");
  let genusName = names[0];
  let speciesName = names[1];
  var variety;
  if (names.length > 3) {
    variety = names.slice(2,-1).join(' ')
  }
  if (isTree(genusName, speciesName, variety)) {
    result = 'Tree';
  } else if (isShrub(genusName, speciesName, variety)) {
    result = 'Shrub';
  } else if (isXeric(genusName, speciesName)) {
    result = 'Xeric';
  } else if (isVine(genusName, speciesName)) {
    result = 'Vine';
  } else if (isTropical(genusName, speciesName)) {
    result = 'Tropical';
  } else if (isWoodyPer(genusName, speciesName)) {
    result = 'Woody Perennial';
  } else if (isSunPer(genusName, speciesName)) {
    result = 'Sun Perennial';
  } else if (isShadePer(genusName, speciesName)) {
    result = 'Shade Perennial';
  } else if (isFruit(genusName, speciesName)) {
    result = 'Fruit';
  } else if (isGrass(genusName, speciesName)) {
    result = 'Graminoid';
  } else if (isPalm(genusName, speciesName)) {
    result = 'Palm';
  } else if (isFern(genusName, speciesName)) {
    result = 'Fern';
  } else { result = ''; }
  return result;
}

function isTree(genusName, speciesName, varietyName) {
  let treeArray = ['Acacia', 'Acer', 'Aesculus', 'Albizia',
                   'Bauhinia', 'Carya', 'Cercis', 'Chilopsis',
                   'Cordia', 'Cornus', 'Cotinus', 'Cupressus',
                   'Diospyros', 'Ebenopsis', 'Ehretia', 'Eriobotrya',
                   'Frangula', 'Fraxinus', 'Juglans', 'Lagerstroemia',
                   'Leucaena', 'Magnolia', 'Metasequoia', 'Morus',
                   'Myrospermum', 'Olea', 'Parkinsonia', 'Pinus',
                   'Platanus', 'Populus', 'Ptelea', 'Quercus',
                   'Salix', 'Sambucus', 'Sapindus', 'Sophora',
                   'Taxodium', 'Ulmus', 'Ungnadia', 'Asimina'];
  let posExceptions = ['Ilex decidua', 'Ilex vomitoria', 'Juniperus virginiana',
                       'Prunus caroliniana', 'Prunus mexicana', 'Prunus serotina',
                       'Viburnum rufidulum', 'Viburnum obovatum'];
  let negExceptions = ['Bauhinia galpinii', 'Cordia parvifolia', 'Diospyros kaki']
  if (treeArray.includes(genusName) ^ posExceptions.includes(genusName + ' ' + speciesName)) {
    if (genusName == 'Ilex' & (varietyName == "'Bordeaux'" ^ varietyName == "'Eureka Gold'" ^
                               varietyName == "'Nana'" ^ varietyName == "'Stoke's Dwarf'" ^
                               varietyName == "var. nana 'Taylor's Rudolph'" ^ varietyName == "'Micron'")) {
      return false;
    } else if (genusName == 'Viburnum' & (varietyName == "'Densa'" ^ varietyName == "'Whorled Class'")) {
      return false;
    } else if (!negExceptions.includes(genusName + ' ' + speciesName)) {
      return true;
    } else { return false; }
  } else { return false; }
}

function isShrub(genusName, speciesName, varietyName) {
  let shrubArray = ['Abelia', 'Adelia', 'Amyris', 'Buxus',
                    'Callicarpa', 'Callistemon', 'Camellia', 'Cephalanthus',
                    'Condalia', 'Elaeocarpus', 'Eysenhardtia',
                    'Fatshedera', 'Forestiera', 'Hydrangea', 'Ilex',
                    'Juniperus', 'Laurus', 'Leucophyllum',
                    'Ligustrum', 'Lindera', 'Loropetalum', 'Malphigia',
                    'Mimosa', 'Myrica', 'Myrtus', 'Nerium',
                    'Osmanthus', 'Philadelphus', 'Podocarpus', 'Rhaphiolepis',
                    'Rhododendron', 'Rhus', 'Rosa',
                    'Symphoricarpos', 'Viburnum', 'Xylosma', 'Pittosporum', 'Nandina', 
                    'Mahonia', 'Michelia', 'Gardenia', 'Forsythia', 'Elaeagnus', 'Distylium', 
                    'Rhaphiobotrya', 'Cephalotaxus'];
  let posExceptions = ['Cordia parvifolia', 'Eupatorium viburnoides', 'Hibiscus syriacus',
                       'Jasminum mesnyi', 'Lonicera fragrantissima', 'Ruellia peninsularis',
                       'Teucrium fruticans', 'Salvia ballotiflora'];
  let negExceptions = ['Ilex decidua', 'Ilex vomitoria', 'Juniperus virginiana',
                       'Mimosa strigillosa', 'Viburnum rufidulum', 'Viburnum obovatum'];
  if (shrubArray.includes(genusName) ^ posExceptions.includes(genusName + ' ' + speciesName)) {
    if (genusName == 'Ilex' & (varietyName == "'Bordeaux'" ^ varietyName == "'Eureka Gold'" ^
                               varietyName == "'Nana'" ^ varietyName == "'Stoke's Dwarf'" ^
                               varietyName == "var. nana 'Taylor's Rudolph'" ^ varietyName == "'Micron'")) {
      return true;
    } else if (genusName == 'Viburnum' & (varietyName == "'Densa'" ^ varietyName == "'Whorled Class'")) {
      return true;
    } else if (!negExceptions.includes(genusName + ' ' + speciesName)) {
      return true;
    } else { return false; }
  } else { return false; }
}

function makePredicate(genusArray, posExceptions, negExceptions) {
  return (genusName, speciesName, varietyName) => (genusArray.includes(genusName) ^
                                                   posExceptions.includes(genusName + ' ' + speciesName)) &
                                                  !negExceptions.includes(genusName + ' ' + speciesName)
}

var isXeric = makePredicate(['Adenium', 'Aeonium', 'Agave', 'Aloe',
                             'Aptenia', 'Astrophytum', 'Austrocylindropuntia', 'Cereus',
                             'Cotyledon', 'Crassula', 'Cylindropuntia', 'Dasylirion',
                             'Delosperma', 'Drosanthemum', 'Dyckia', 'Echeveria',
                             'Echinocactus', 'Echinocereus', 'Echinopsis', 'Euphorbia',
                             'Graptopetalum', 'Graptoveria', 'Gymnocalycium', 'Haworthia',
                             'Hectia', 'Hesperaloe', 'Kalanchoe', 'Lobivia',
                             'Malephora', 'Mammillaria', 'Manfreda', 'Mangave',
                             'Myrtillocactus', 'Nolina', 'Opuntia', 'Oreocereus',
                             'Pachyphytum', 'Pachyveria', 'Parodia', 'Pedilanthus',
                             'Portulacaria', 'Sedum', 'Senecio', 'Tephrocactus',
                             'Titanopsis', 'Trichocereus', 'Yucca', 'Pachycereus', 'Graptosedum',
                             'Gasteria'],
                             [], ["Euphorbia 'Diamond", 'Euphorbia pulcherrima', 'Senecio cineraria',
                                  'Senecio confusus', 'Senecio sp']);

var isVine = makePredicate(['Akebia', 'Antigonon', 'Bignonia', 'Campsis',
                            'Clitoria', 'Gelsemium', 'Ipomoea', 'Lablab',
                            'Lonicera', 'Maurandella', 'Merremia', 'Milletia',
                            'Parthenocissus', 'Passiflora', 'Podranea', 'Quisqualis',
                            'Wisteria'],
                           ['Clerodendrum thomsoniae', 'Senecio confusus', 'Solanum jasminoides',
                            'Trachelospermum jasminoides', 'Ficus pumila', 'Ficus vaccinoides'],
                           ['Lonicera fragrantissima', 'Ipomoea carnea']);

var isTropical = makePredicate(['Aglaonema', 'Alocasia', 'Anthurium', 'Aphelandra',
                                'Araucaria', 'Asplenium', 'Bougainvillea', 'Calathea',
                                'Chamaedorea', 'Chlorophytum', 'Codiaeum', 'Coffaea',
                                'Cordyline', 'Davallia', 'Dieffenbachia', 'Dracaena',
                                'Epiphyllum', 'Epipremnum', 'Ficus', 'Fittonia',
                                'Howea', 'Hoya', 'Mandevilla', 'Dipladenia',
                                'Maranta', 'Microsorum', 'Monstera', 'Murraya',
                                'Musa', 'Ensete', 'Nephrolepis', 'Peperomia',
                                'Philodendron', 'Pilea', 'Platycerium', 'Plumeria',
                                'Rhaphidophora', 'Rhapis', 'Sansevieria', 'Scindapsus',
                                'Stromanthe', 'Syngonium', 'Zamioculcas', 'Ravenea', 'Schefflera'],
                               ['Euphorbia pulcherrima', 'Hibiscus rosa-sinensis', 'Jasminum nitidum',
                                'Zamia furfuracea'],
                               ['Chamaedorea microspadix', 'Chamaedorea radicalis', 'Ficus carica',
                                'Ficus pumila', 'Ficus vaccinoides', 'Philodendron selloum',
                                "Philodendron 'Xanadu'"]);

var isWoodyPer = makePredicate(['Abutilon', 'Aloysia', 'Anisacanthus', 'Buddleia',
                                'Caesalpinia', 'Fatsia', 'Galphimia', 'Malvaviscus',
                                'Tecoma', 'Tecomaria', 'Tetrapanax', 'Hamelia', 'Erythrina',
                                'Lavandula', 'Rosmarinus'],
                               ['Bauhinia galpinii', 'Cassia corymbosa', 'Eupatorium havanensis',
                                'Ipomoea carnea', 'Lippia alba', "Salvia 'Trident'"], []);

var isSunPer = makePredicate(['Achillea', 'Artemisia', 'Asclepias', 'Berlandiera',
                              'Calliandra', 'Calylophus', 'Canna', 'Caryopteris',
                              'Chrysactinia', 'Coreopsis', 'Dalea', 'Dianthus',
                              'Dicliptera', 'Dyschoriste', 'Echinacea', 'Engelmannia',
                              'Erigeron', 'Eupatorium', 'Euryops', 'Fallugia',
                              'Gaillardia', 'Hibiscus', 'Justicia', 'Lantana',
                              'Liatris', 'Melampodium', 'Oenothera', 'Penstemon',
                              'Perovskia', 'Phlomis', 'Phyla', 'Plumbago',
                              'Poliomintha', 'Rudbeckia', 'Russelia', 'Salvia',
                              'Scutellaria', 'Sphaeralcea', 'Tagetes', 'Tetraneuris',
                              'Teucrium', 'Tulbaghia', 'Verbena', 'Verbesina', 'Gaura', 'Ratibida',
                              'Pavonia', 'Monarda', 'Leucanthemum', 'Duranta', 'Datura', 
                              'Chromolaena', 'Conoclinium', 'Bulbine', 'Viguiera'],
                             ['Mimosa strigillosa', 'Wedelia texana'],
                             ['Eupatorium havanensis', 'Eupatorium viburnoides', 'Hibiscus rosa-sinensis',
                              'Hibiscus syriacus', 'Hibiscus calyphyllus', 'Salvia ballotiflora',
                              'Teucrium fruticans', "Salvia 'Amigo'", "Salvia 'Amistad'", 'Salvia guaranitica', 
                              'Salvia coccinea', 'Salvia roemeriana', 'Salvia lyrata', 'Salvia oxyphora', 'Salvia madrensis']);

var isShadePer = makePredicate(['Acanthus', 'Agapanthus', 'Alpinia', 'Asparagus',
                                'Aspidistra', 'Ceratostigma', 'Colocasia', 'Crinum',
                                'Curcuma', 'Dianella', 'Dietes', 'Hedychium',
                                'Heuchera', 'Hippeastrum', 'Hymenocallis', 'Ligularia',
                                'Liriope', 'Rhodophiala', 'Rivina', 'Ruellia',
                                'Tradescantia', 'Viola', 'Zephyranthes', 'Hemerocallis', 
                                'Farfugium', 'Cestrum', 'Xanthosoma'],
                               ['Hibiscus calyphyllus', 'Philodendron selloum', "Philodendron 'Xanadu'",
                                'Salvia guaranitica', "Salvia 'Amigo'", "Salvia 'Amistad'",
                                'Salvia coccinea', 'Salvia roemeriana', 'Salvia lyrata',
                                'Salvia oxyphora', 'Salvia madrensis', "Salvia 'Wendy's", 'Wedelia trilobata'],
                               ['Asparagus officinalis', 'Ruellia peninsularis']);

var isFruit = makePredicate(['Citrus', 'Fragaria', 'Malus', 'Morus',
                             'Prunus', 'Punica', 'Pyrus', 'Rubus', 'Vitis'],
                            ['Diospyros kaki', 'Ficus carica'],
                            ['Prunus caroliniana', 'Prunus mexicana', 'Prunus serotina']);

var isGrass = makePredicate(['Acorus', 'Andropogon', 'Bouteloua', 'Bambusa',
                             'Calamagrostis', 'Carex', 'Chasmanthium', 'Cyperus', 
                             'Cymbopogon', 'Indocalamus', 'Juncus', 'Melica',
                              'Melnis', 'Miscanthus', 'Muhlenbergia', 'Otatea',
                              'Panicum', 'Pennisetum', 'Phyllostachys', 'Poa',
                              'Sasa', 'Schizachyrium', 'Sorghastrum', 'Stipa',
                              'Tripsacum', 'Festuca', 'Cortaderia'], [], []);

var isPalm = makePredicate(['Butia', 'Chamaerops', 'Cycas', 'Dioon',
                            'Livistona', 'Phoenix', 'Sabal', 'Trachycarpus',
                            'Washingtonia', 'Zamia'],
                          ['Chamaedorea microspadix', 'Chamaedorea radicalis'],
                          ['Zamia furfuracea']);

var isFern = makePredicate(['Adiantum', 'Astrolepis', 'Athyrium', 'Cheilanthes',
                            'Cyrtomium' , 'Dryopteris', 'Marsilea', 'Microlepia',
                            'Pellaea', 'Pteris', 'Thelypteris', 'Woodwardia'],[],[]);

function CATEGORIZEGROUNDCOVER(productName) {
  let names = productName.split(" ");
  let genusName = names[0];
  let speciesName = names[1];
  var variety;
  if (names.length > 3) {
    variety = names.slice(2,-1).join(' ')
  }
  if (isGroundcover(genusName, speciesName, variety)) {
    return 'Groundcover';
  } else { return ''; }
}

function isGroundcover(genusName, speciesName, variety) {
  let groundArray = ['Ajuga', 'Aptenia', 'Carex', 'Delosperma',
                     'Dichondra', 'Drosanthemum', 'Dyschoriste', 'Hedera',
                     'Lysimachia', 'Malephora', 'Muehlenbeckia', 'Myoporum',
                     'Ophiopogon', 'Oxalis', 'Phyla', 'Sedum',
                     'Vinca'];
  let posArray = ['Ficus vaccinoides', 'Ficus pumila', 'Stemodia tomentosa',
                  'Teucrium aroanum', 'Trachelospermum asiaticum', 'Tradescantia pallida',
                  'Tradescantia sillamontana', 'Tradescantia zebrina', "Tradescantia 'Pale"];
  return (genusName == 'Teucrium' & speciesName == 'chamaedrys' & variety == "'Prostratum'") ^
         groundArray.includes(genusName) ^
         posArray.includes(genusName + ' ' + speciesName); 
}

function isFourInch(size) {
  return ['4"','4in','QT'].includes(size);
}

var isBamboo = makePredicate(['Bambusa', 'Phyllostachys', 'Indocalamus', 'Otatea', 'Sasa'], [], []);

var isShadeShrub = makePredicate(['Hydrangea', 'Camellia', 'Rhododendron', 'Fatsia', 'Tetrapanax', 'Gardenia'], [], []);

var isShadeGrassy = makePredicate(['Carex', 'Chasmanthium', 'Acorus'], [], []);

var isCycad = makePredicate(['Cycas', 'Dioon', 'Zamia'], [], []);

var isBogPlant = makePredicate(['Equisetum', 'Cyperus', 'Juncus'], ['Hibiscus coccineus', 'Hibiscus dasycalyx', 'Hibiscus moscheutos'], []);

var isTurksAisle = makePredicate(['Abutilon', 'Malvaviscus'], ['Hibiscus calyphyllus'], ['Abutilon palmeri']);

var isWoodySect5 = makePredicate(['Galphimia', 'Abutilon'], ['Bauhinia galpinii', 'Cassia corymbosa', 'Caesalpinia mexicana', "Salvia 'Trident'"], 
                                 ['Abutilon palmeri'])

var isTropColor = makePredicate(['Mandevilla', 'Dipladenia', 'Bougainvillea', 'Ixora'], 
                                ['Hibiscus rosa-sinensis'], []);

var isXericSect2 = makePredicate(['Agave', 'Yucca', 'Hesperaloe', 'Dasylirion', 'Pedilanthus', 'Aptenia', 'Delosperma', 'Malephora', 'Mangvae', 'Hansara', 'Manfreda', 'Nolina', 'Portulaca'], [], []);

function SECTION(plant, categories) {
  let plantName = plant.split(' '); 
  let plantSize = plantName[plantName.length - 1];
  let genusName = plantName[0];
  let speciesName = plantName[1];
  let plantCategories = categories.split(', ');
  if ((plantCategories.includes('Palm') ^ plantCategories.includes('Tree')) & plantCategories.includes('3 gal & up')) {
    return 'Section 6';
  } else if (plantCategories.includes('Annual') ^ (isFourInch(plantSize) & !plantCategories.includes('Xeric')) ^ 
            (isFourInch(plantSize) & !plantCategories.includes('Tropical')) ^ 
             isTropColor(genusName, speciesName)) {
    return 'Section 1';
  } else if (plantCategories.includes('Tropical') ^ (plantCategories.includes('Xeric') & isFourInch(plantSize))) {
    return 'Section 7';
  } else if (((plantCategories.includes('Native Cultivar') ^ plantCategories.includes('Texas Native')) & 
               plantCategories.includes('Sun Perennial')) ^ (plantCategories.includes('Graminoid') & !isShadeGrassy(genusName)) ^
              plantCategories.includes('Vine') ^ plantCategories.includes('Woody Perennial') ^
              (plantCategories.includes('Shade Perennial') & plantCategories.includes('Groundcover')) ^
              (plantCategories.includes('Fruit') & plantCategories.includes('3 gal & up'))) {
    return 'Section 3';
  } else if (plantCategories.includes('Shade Perennial') ^ isBamboo(genusName) ^ isShadeShrub(genusName) ^ 
             isShadeGrassy(genusName) ^ isCycad(genusName) ^ plantCategories.includes('Fern')) {
    return 'Section 4';
  } else if (plantCategories.includes('Shrub') ^ (plantCategories.includes('Tree') & plantCategories.includes('1 & 2 Gal') ^
             isBogPlant(genusName, speciesName) ^ isTurksAisle(genusName, speciesName) ^ isWoodySect5(genusName, speciesName) ^
             genusName == 'Sedum' ^ genusName == 'Aloe' ^ genusName == 'Rubus')) {
    return 'Section 5';
  } else if (isXericSect2(genusName) ^ plantCategories.includes('Sun Perennial')) {
    return 'Section 2';
  } else if (plantCategories.includes('Xeric')) {
    return 'Section 7';
  } else if (plantCategories.includes('Bedding Plants')) {
    return 'Section 1';
  } else { return 'Unknown'; }
}
