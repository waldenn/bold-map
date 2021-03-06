{
   "_id": "_design/barcode",
   "views": {
       "bin_guid": {
           "reduce": "_sum",
           "map": "function(doc) {\n  if (doc.bin_guid) {\n    emit(doc.bin_guid, 1);\n  }\n// API\n if (doc.bin_uri) {\n    emit(doc.bin_uri, 1);\n  }\n}"
       },
       "lineage": {
           "reduce": "_sum",
           "map": "function(doc) {\n  var path = [];\n\n  if (doc.phylum_reg || doc.phylum_name) {\n    if (doc.phylum_reg) {\n      path.push(doc.phylum_reg);\n    }\n   // API\n   if (doc.phylum_name) {\n      path.push(doc.phylum_name);\n    }\n \n    if (doc.class_reg) {\n      path.push(doc.class_reg);\n    }\n   // API\n   if (doc.class_name) {\n      path.push(doc.class_name);\n    }\n    if (doc.order_reg) {\n      path.push(doc.order_reg);\n    }\n   // API\n   if (doc.order_name) {\n      path.push(doc.order_name);\n    }\n     if (doc.species_reg) {\n      path.push(doc.species_reg);\n    }\n  // API\n   if (doc.species_name) {\n      path.push(doc.species_name);\n    }\n    emit(path, 1);\n  }\n\n}"
       },
       "accession": {
           "map": "function(doc) {\n  if (doc.accession) {\n     emit(doc.accession, null);\n  }\n}"
       },
       "country": {
           "reduce": "_sum",
           "map": "function(doc) {\n  if (doc.country_reg) {\n     emit(doc.country_reg, 1);\n  }\n // API\n if (doc.country) {\n     emit(doc.country, 1);\n  }\n}"
       },
       "inst_reg": {
           "reduce": "_sum",
           "map": "function(doc) {\n  if (doc.inst_reg) {\n     var inst = doc.inst_reg.replace(/\"/g, '');\n     emit(inst, 1);\n  }\n// API\n if (doc.institution_storing) {\n     var inst = doc.institution_storing(/\"/g, '');\n     emit(inst, 1);\n  }\n}"
       },
       "museumid": {
           "map": "function(doc) {\n  if (doc.museumid) {\n     emit(doc.museumid, null);\n  }\n}"
       },
       "sampleid": {
           "map": "function(doc) {\n  if (doc.sampleid) {\n     emit(doc.sampleid, null);\n  }\n}"
       },
       "catalognum": {
           "map": "function(doc) {\n  if (doc.catalognum) {\n     emit(doc.catalognum, null);\n  }\n}"
       }
   },
   "language": "javascript"
}