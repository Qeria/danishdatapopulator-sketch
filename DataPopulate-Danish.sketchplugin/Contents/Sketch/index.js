var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/email.json":
/*!************************!*\
  !*** ./src/email.json ***!
  \************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = ["anjagraversen@gmail.com","gunsorern@yahoo.com","amvid@gmail.com","markussen@mail.dk","mortensen@gmail.com","laursen@mail.dk","hedegaard@mail.dk","krog@ym.com","berthelsen@yahoo.com","hald@krog.dk","nge1983@one.com","pedersen@seng.dk","nissen@yahoo.com","filip.nilsen@yousee.dk","erichsen@microsoft.com","danielsen@msn.com","knudsen@notsdk.com","skaarup@krogen.dk","ste.sommer@yahoo.com","skaarup@medmad.dk","ladefoged@expressen.se","j.skov@krak.dk","lauritsen@gmail.com","schmidt@qomo.dk","johansen@gmail.com","hoffmann@buckholm.com","isaksen@blocket.se","rmorten@one.co.uk","mattn@hitta.se","franklinmatt@hemnet.se","erik.malin@aftonbladet.se","morten.rick@eniro.se","h.hristiensen@dr.dk","gunsorern@yousee.dk","martin.schummer@yahoo.com","eddardstark@yousee.dk","rbaratheon@kongen.dk","jlannister@politiken.dk","catelyns@dba.dk","cersei.lannister@berlingske.dk","d.targaryen@one.dk","jorah.mormont@fastlight.dk","vtargaryen@got.dk","sansastark@sport.tv2.dk","arya.stark@jobnet.dk","t.greyjoy@medielogin.dk","sandor.clegane@nemlogin.dk","tyrion.lan@yousee.dk"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: onStartup, onShutdown, onSupplyDanishNames, onSupplyEmails, onSupplyPhoneNumbers, onSupplyCPRNumbers, onSupplyDates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStartup", function() { return onStartup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutdown", function() { return onShutdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyDanishNames", function() { return onSupplyDanishNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyEmails", function() { return onSupplyEmails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyPhoneNumbers", function() { return onSupplyPhoneNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyCPRNumbers", function() { return onSupplyCPRNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyDates", function() { return onSupplyDates; });
var sketch = __webpack_require__(/*! sketch */ "sketch");

var DataSupplier = sketch.DataSupplier;

var util = __webpack_require__(/*! util */ "util");

var namedata = __webpack_require__(/*! ./name.json */ "./src/name.json");

var emaildata = __webpack_require__(/*! ./email.json */ "./src/email.json");

function onStartup() {
  DataSupplier.registerDataSupplier('public.text', 'Danish Names', 'SupplyDanishNames');
  DataSupplier.registerDataSupplier('public.text', 'Phone Numbers', 'SupplyPhoneNumbers');
  DataSupplier.registerDataSupplier('public.text', 'CPR Numbers', 'SupplyCPRnumbers');
  DataSupplier.registerDataSupplier('public.text', 'Dates', 'SupplyDates');
  DataSupplier.registerDataSupplier('public.text', 'Emails', 'SupplyEmails');
}
function onShutdown() {
  DataSupplier.deregisterDataSuppliers();
}
function onSupplyDanishNames(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var dynamicData = namedata.slice(Math.floor(Math.random() * namedata.length));
  dynamicData.push.apply(dynamicData, namedata);

  while (dynamicData.length < dataCount) {
    dynamicData.push.apply(dynamicData, namedata);
  }

  shuffle(dynamicData);
  dynamicData = dynamicData.slice(0, dataCount);
  var dataIndex = 0;

  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
    dataIndex++;
  }
}
function onSupplyEmails(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var dynamicData = emaildata.slice(Math.floor(Math.random() * emaildata.length));
  dynamicData.push.apply(dynamicData, emaildata);

  while (dynamicData.length < dataCount) {
    dynamicData.push.apply(dynamicData, emaildata);
  }

  shuffle(dynamicData);
  dynamicData = dynamicData.slice(0, dataCount);
  var dataIndex = 0;

  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
    dataIndex++;
  }
}
function onSupplyPhoneNumbers(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var dataIndex = 0;

  while (dataIndex < dataCount) {
    var randomPhone = '+45 ';

    for (var j = 0; j < 8; j++) {
      randomPhone = randomPhone + parseInt(Math.random() * 10);
      if (j == 3) randomPhone = randomPhone + " ";
    }

    DataSupplier.supplyDataAtIndex(dataKey, randomPhone, dataIndex);
    dataIndex++;
  } // DataSupplier.supplyData(dataKey, dynamicData);  

}
function onSupplyCPRNumbers(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var dataIndex = 0;

  while (dataIndex < dataCount) {
    var randomCPR = getRandomCPR(new Date(1900, 0, 1), new Date());
    DataSupplier.supplyDataAtIndex(dataKey, randomCPR, dataIndex);
    dataIndex++;
  } // DataSupplier.supplyData(dataKey, dynamicData);  

}
function onSupplyDates(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var dataIndex = 0;
  var randomDate_ = getRandomDates(new Date(1950, 0, 1), new Date());

  while (dataIndex < dataCount) {
    var randomDate = new Date(randomDate_.getTime() + Math.random() * 864000000);
    var dd = randomDate.getDate();
    var mm = randomDate.getMonth() + 1; //January is 0!

    var yyyy = randomDate.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    randomDate = dd + '-' + mm + '-' + yyyy;
    DataSupplier.supplyDataAtIndex(dataKey, randomDate, dataIndex);
    dataIndex++;
  } // DataSupplier.supplyData(dataKey, dynamicData);  

}

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var getRandomCPR = function getRandomCPR(start, end) {
  var randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  var dd = randomDate.getDate();
  var mm = randomDate.getMonth() + 1; //January is 0!

  var yy = randomDate.getFullYear();

  if (yy < 2000) {
    yy = yy - 1900;
  } else {
    yy = yy - 2000;
  }

  if (yy < 10) {
    yy = '0' + yy;
  } else {
    yy = '' + yy;
  }

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  var cprDateHeader = dd + '' + mm + '' + yy;
  var cprRandomNumber = '';

  for (var j = 0; j < 4; j++) {
    cprRandomNumber = cprRandomNumber + parseInt(Math.random() * 10);
  }

  return cprDateHeader + "-" + cprRandomNumber;
};

var getRandomDates = function getRandomDates(start, end) {
  var randomDate_ = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate_;
};

/***/ }),

/***/ "./src/name.json":
/*!***********************!*\
  !*** ./src/name.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, default */
/***/ (function(module) {

module.exports = ["Jonathan Caspersen","Gunner Sørensen","Daniel Bjerre","Anton Beck","Børge Torp","Allan Bay","Poul Bonde","Hjalmar Birk","Ferdinand Thrane","Lasse Dinesen","Christina Holm","Kristiane Callesen","Laila Thuesen","Johanne Frost","Martin Fink-Jensen","Julie Rasmussen","Marcelo Zagal","Mary Sandberg","Terese Jessen","Simon Malone","Charlotte Christiansen","Anne-Sofie Frederiksen","Jesper Poulsen","Louise Brønnum","Mikkel Larsen","Caroline Bramhelft","Siri Shadduck","Peter Yder Honore Jensen","Tue Andersen","Edd McMullin","Mirjan Karstoft","Anders Nøhr Holmstrøm","Heidi Thomasen","Ingrid Beck","Marie Espersen","Lone Thomasen","Magda Thomsen","Amanda Nedergaard","Anne Dall","Emma Kruse","Clara Svenningsen","Susan Mathiesen","Trine Klausen","Inger Kofod","Anne-Mette Bundgaard","Lissie Brøndum","Kamilla Dam","Birgitte Aagaard","Danny Andresen","Otto Laugesen","Peter Bjerg","Jesper Enevoldsen","Lucas Hermansen","Danny Hoffmann","Valdemar Antonsen","Lukas Michelsen","Leon Wulff","Martin Magnussen","Steen Bruun","Tony Steffensen","Hugo Skou","Benny Paulsen","Hjalte Haugaard","Nicolaj Bentzen","Frederik Johnsen","Arnold Abrahamsen","Ib Balle","Kenneth Christiansen","Julie Ottosen","Selma Schou","Elly Møller","Rasmus Elkjær","Verner Juhl","Lasse Balle","Osvald Vinther","David Munch","Viktor Hald","Frederik Duus","Mikael Borg","Viggo Truelsen","Otto Dall","Jette Lauritsen","Vanessa Steen","Grethe Mørch","Rikke Overgaard","Monika Thorsen","Nanny Sloth","Charlotte Vilhelmsen","Mary Gade","Rebecca Pedersen","Susanne Ovesen","Asbjørn Kofod","Ove Espersen","Andreas Sørensen","Mads Christiansen","Keld Thygesen","Simon Nygaard","Filip Dalsgaard","Kenneth Jeppesen","Torben Lauritzen","Gert Brix","Selma Mathiasen","Alma Brandt","Inger Nissen","Sif Asmussen","Line Pallesen","Johanne Madsen","Freja Dinesen","Anne-Sofie Kjær","Bitten Ravn","Elly Eriksen","Oskar Bentzen","Rasmus Vinther","Hjalmar Borg","Elias Balle","Ulrik Svendsen","Jens Karlsen","Simon Fisker","Aske Berg","Jørn Schou","Børge Daugaard","Kristina Thuesen","Karen Boysen","Oline Balle","Anne-Lise Bjerre","Christine Krogh","Monika Vinther","Nora Smidt","Esther Simonsen","Stine Frank","Betina Krogh","Ferdinand Bjerregaard","Freddy Steffensen","Hugo Fabricius","William Daugaard","Kristian Thrane","Lennart Thorup","Arvid Jespersen","Rune Thrane","Ivan Lorentzen","Mathias Hoffmann","Mai Greve","Carla Jessen","Maria Christensen","Maren Kjær","Margrethe Høj","Tina Holm","Solvej Lorentzen","Yrsa Kirk","Susan Lorentzen","Naja Brandt","Dorthea Smidt","Alma Ottosen","Sif Mouritsen","Yrsa Michelsen","Lykke Nielsen","Jasmin Laugesen","Mette Larsen","Annie Mouritsen","Isabella Mogensen","Anita Bentzen","Gunner Matthiesen","Gert Duus","Leo Albertsen","Bo Bjerre","Tim Riis","Patrick Berg","Robin Søgaard","Ferdinand Gram","Lars Enevoldsen","Gabriel Lange","Heidi Jepsen","Kirstine Johnsen","Ellen Jessen","Ragnhild Daugaard","Petrea Damgaard","Ingeborg Johannessen","Benedicte Thorsen","Erika Larsen","Naja Bæk","Henrikke Høyer","Troels Haugaard","Karsten Bjerg","Børge Leth","Rasmus Birk","Casper Eskildsen","Sofus Graversen","Viktor Mørch","Torben Adamsen","Jesper Ottesen","Esben Hammer","Melanie Hald","Agnes Frank","Jenny Rohde","Jenny Holst","Lisa Smidt","Elna Nygaard","Kristina Kjeldsen","Anni Møller","Nana Koch","Fie Ottosen","Lise Olsen","Anne-Lise Petersen","Viktoria Mouritsen","Naja Rask","Tenna Bak","Villy Villadsen","Jesper Davidsen","René Ottesen","Simon Jakobsen","Casper Ebbesen","Ulrik Birch","Bo Justesen","Niklas Petersen","Sigurd Schou","Esben Martinsen","Lykke Axelsen","Fie Leth","Agnes Hoffmann","Anja Rask","Natalie Bach","Bernt Bak","Julius Laugesen","Bruno Sommer","Oskar Pedersen","Kasper Gregersen","Ronnie Bentsen","Tim Brix","Nikolaj Bay","Johan Kristensen","Ivar Mørch","Arvid Caspersen","Benjamin Brix","Marcus Bach","Robin Juul","Aksel Kofod","Sonny Smidt","Lasse Mathiesen","Jimmy Lassen","Janus Juhl","Henry Boysen","Frederikke Hjort","Jasmin Hjorth","Vibeke Vester","Solvej Skovgaard","Edith Vinther","Anne-Mette Munk","Sif Friis","Linda Mathiasen","Meta Holst","Sofia Bang","Alexandre Manuel Vidal Pinheiro Gonçalves","Malou Skou","Camilla Fisker","Pernille Caspersen","Ellen Antonsen","Bitten Eriksen","Nanna Dall","Ingeborg Nygaard","Helle Smith","Lene Svane","Doris Storgaard","Gunnar Munch","Harry Bay","Henry Dall","Troels Justesen","Ebbe Bendixen","Lauritz Bundgaard","Flemming Storgaard","Elo Mathiesen","Casper Carlsen","Peder Høj","Katja Kjærgaard","Mie Villumsen","Lene Villumsen","Malou Abildgaard","Lotte Nicolaisen","Linette Kruse","Isabella Andreasen","Esther Dinesen","Agnete Bjerg","Mona Hougaard","Poul Mørk","Sophus Storgaard","Danny Lauritsen","Bjarne Overgaard","Gustav Hartmann","Ulf Holm","Anton Hammer","Henry Bruun","Steffen Ravn","Torkild Juhl","Jasmin Markussen","Ida Jessen","Lilly Ladefoged","Ida Johansen","Esther Høj","Helga Degn","Oline Bjerregaard","Sisse Thomsen","Else Lind","Margit Rasmussen","Villy Degn","Hans Nygaard","Gerhard Mathiesen","Villy Thomassen","Tom Bjerre","Hugo Karlsen","Chris Jansen","Oskar Boesen","Thomas Torp","Marius Bjerregaard","Nicolaj Albrechtsen","Mathias Jeppesen","Patrick Enevoldsen","Sune Olesen","Ivar Sommer","Theis Sørensen","Elias Thuesen","Peder Bisgaard","Sigurd Frank","Ditlev Petersen","Magda Hedegaard","Hedvig Mogensen","Helle Birk","Christiane Davidsen","Sussie Abrahamsen","Henriette Smith","Juliane Westergaard","Carina Nedergaard","Nora Justesen","Bianca Winther","Charlotte Henningsen","Nelly Andresen","Filippa Kofoed","Clara Damsgaard","Grethe Mølgaard","Dagmar Mathiasen","Rikke Duus","Vivian Kjær","Anne-Sofie Rohde","Lene Kofoed","Stefan Henningsen","Leo Schmidt","Robin Bæk","Anker Munk","Robert Johannessen","Oskar Bisgaard","Paul Laustsen","Lars Brandt","Toke Sommer","Gregers Munk","Frode Skov","Gunnar Henriksen","Loke Vilhelmsen","Søren Graversen","Kaj Nicolaisen","Ditlev Clemmensen","Egon Sørensen","Nicolaj Bjerregaard","Eskild Markussen","Paul Mogensen","Sara Munk","Karin Brøndum","Ella Haugaard","Erika Johannessen","Lilly Jakobsen","Stephanie Lund","Ilse Isaksen","Signe Justesen","Natalie Fuglsang","Nanna Laustsen","Rosa Ludvigsen","Natasja Truelsen","Inge Bech","Nanny Frederiksen","Ester Rasmussen","Lisbeth Kruse","Sabine Truelsen","Andrea Johannesen","Ann Hjorth","Ane Brandt","Thyge Ibsen","Christian Nedergaard","Sophus Kvist","Kresten Truelsen","Lennart Sørensen","Laust Sommer","Jonas Axelsen","Klaus Ditlevsen","Ole Lind","Jimmy Søndergaard","Markus Skaarup","Oluf Hoffmann","Kasper Toft","Bjarke Boesen","Lukas Paulsen","Svend Petersen","Ib Beck","Gert Bertelsen","Harry Johansen","René Thomassen","Viktoria Dinesen","Heidi Overgaard","Rita Rohde","Tanja Lind","Regitze Abrahamsen","Erna Laustsen","Sabine Dalgaard","Charlotte Bjørn","Lene Brodersen","Ellen Kjær","Isabella Krog","Signe Bjørn","Sigrid Boesen","Elisa Bentzen","Karla Madsen","Randi Vinther","Hedvig Frank","Helen Hartmann","Liva Ipsen","Fie Søgaard","William Munk","Olav Koch","Germund Lind","Lauritz Carlsen","Jannik Jakobsen","Viktor Rask","Jon Skov","Marc Mikkelsen","Torsten Haagensen","Sonny Frank","Allan Mogensen","Asmus Simonsen","Hjalte Christensen","Georg Dahl","Kristian Johannessen","Freddy Beck","Thorkild Olsen","Mikkel Ottosen","Thomas Henningsen","Finn Haagensen","Sandra Kristoffersen","Ragnhild Carlsen","Dorthea Asmussen","Martine Vilhelmsen","Doris Hougaard","Anni Schou","Martha Hedegaard","Sisse Hartmann","Jeanett Hjorth","Selma Lauridsen","Jette Nikolajsen","Alma Philipsen","Anne-Sofie Eriksen","Ulla Degn","Marianne Søndergaard","Luna Bach","Viktoria Hjorth","Helga Rask","Benedicte Pedersen","Sophie Philipsen","William Ibsen","Kim Nedergaard","Rune Bjerre","Bendt Thuesen","Verner Asmussen","Gert Korsgaard","Johnny Mørch","Gustav Carstensen","Ove Vester","Asger Asmussen","Melanie Frost","Cathrine Jakobsen","Lykke Henriksen","Maibritt Bjørn","Linda Koch","Benedicte Ovesen","Josefine Kirk","Helen Thomassen","Astrid Villadsen","Iben Degn","Stefan Balle","Ebbe Michelsen","Søren Bendixen","Torkild Schmidt","Felix Thøgersen","Kresten Koch","Sonny Gregersen","Alexander Lauritsen","Leon Davidsen","Olav Fisker","Johannes Espersen","Elias Philipsen","Torben Michelsen","Henning Høgh","Chris Lund","Tobias Lund","Frode Brandt","Kasper Daugaard","Ditlev Henriksen","Bendt Hermansen","Ida Høgh","Tina Balle","Hedvig Laursen","Helga Bendtsen","Mette Philipsen","Inger Nørgaard","Ragnhild Brøndum","Erna Markussen","Nikoline Kjærgaard","Cecilie Christensen","Christa Buch","Maibritt Torp","Julia Mathiesen","Simone Eskildsen","Alma Hoffmann","Helga Pallesen","Lise Søndergaard","Natasja Poulsen","Britta Bæk","Anne-Lise Laugesen","Kurt Lauritzen","Bruno Fabricius","Jacob Buhl","Jim Isaksen","Rasmus Hartmann","Thorbjørn Overgaard","Aske Ibsen","Allan Schmidt","Mathias Christoffersen","Anders Greve","Hans Axelsen","Valdemar Dinesen","Kenn Erichsen","Axel Ravn","Ulrik Dalgaard","Jeppe Hjort","Thorkild Haagensen","Silas Ovesen","Kenn Lassen","Teddy Hald","Lina Bentsen","Sisse Kragh","Katharina Ebbesen","Frida Philipsen","Margit Bonde","Ingrid Svendsen","Lotte Kruse","Gudrun Michaelsen","Thea Bang","Sisse Nedergaard","Lise-Lotte Elkjær","Christine Mathiesen","Elna Kofod","Anne-Mette Holst","Linette Søndergaard","Lise-Lotte Philipsen","Petrea Damgaard","Anja Graversen","Helena Dam","Margrethe Karlsen","Richard Lauritsen","Adam Lorenzen","Bjarne Mørch","Lauritz Kvist","Jonathan Madsen","Lasse Isaksen","John Thygesen","Jonathan Rask","Simon Søgaard","Elmer Lorenzen","Jens Ottesen","Hjalmar Boesen","Georg Mørk","Bruno Hoffmann","Sune Brix","Lennart Friis","Laust Gregersen","Oliver Mortensen","Storm Lauridsen","Jakob Ludvigsen","Ilse Johannesen","Melanie Torp","Asta Boesen","Anja Korsgaard","Lotte Rask","Petrea Degn","Simone Hald","Herdis Hald","Sidsel Bendtsen","Klara Birk","Eva Krogh","Ruth Dall","Winnie Kjeldsen","Anni Philipsen","Christina Abrahamsen","Gunhild Lindberg","Mille Lauritzen","Grethe Thrane","Bodil Johannsen","Ina Hermansen","Simon Ottosen","Jimmy Albrechtsen","Malthe Hjort","Ivan Iversen","Hjalmar Bjerregaard","Mathias Ebbesen","Johnny Busk","Bruno Juul","Kim Dalsgaard","Adam Møller","Tine Olesen","Emilie Frederiksen","Sussie Friis","Martha Lund","Erika Danielsen","Stella Justesen","Sandra Callesen","Jeanne Boesen","Linette Lauritsen","Clara Ravn","Louise Duus","Ulla Paulsen","Benedicte Pedersen","Astrid Wulff","Lillian Bundgaard","Gudrun Leth","Thomas Sebell","Marianne Brøndum","Lisa Steffensen","Erna Winther","Emilie Steffensen","Sofus Jessen","Gustav Steen","Eigil Høj","Harald Steffensen","Kenneth Abrahamsen","Sebastian Munk","Tommy Boysen","Rune Winther","Nis Davidsen","Olav Bjerg","Ditte Birch","Helena Berthelsen","Helena Høyer","Emma Carstensen","Liva Hansen","Nelly Kofod","Ida Brandt"];

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onStartup'] = __skpm_run.bind(this, 'onStartup');
that['onShutdown'] = __skpm_run.bind(this, 'onShutdown');
that['onSupplyDanishNames'] = __skpm_run.bind(this, 'onSupplyDanishNames');
that['onSupplyPhoneNumbers'] = __skpm_run.bind(this, 'onSupplyPhoneNumbers');
that['onSupplyCPRNumbers'] = __skpm_run.bind(this, 'onSupplyCPRNumbers');
that['onSupplyDates'] = __skpm_run.bind(this, 'onSupplyDates');
that['onSupplyEmails'] = __skpm_run.bind(this, 'onSupplyEmails');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=index.js.map