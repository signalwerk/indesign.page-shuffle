// var order =
//   "1,419,519,520,622,35,430,485,547,412,363,427,156,348,378,168,112,57,375,36,690,409,376,268,114,104,639,613,346,669,218,674,26,403,310,214,191,624,34,574,99,176,396,554,683,317,292,715,533,499,598,414,500,345,559,215,90,722,151,318,646,279,336,37,654,353,287,542,159,98,479,653,710,560,251,320,714,410,183,223,606,207,29,305,532,595,443,484,300,158,493,571,265,676,370,557,59,338,306,119,505,325,302,355,578,120,482,228,467,106,507,525,688,631,496,101,58,28,78,252,333,349,4,107,368,362,232,208,309,468,238,406,663,590,143,679,273,566,105,487,511,562,439,632,169,573,301,55,247,108,677,239,609,597,721,97,649,460,527,67,282,475,227,81,421,103,161,92,31,384,587,549,477,461,199,278,51,354,111,489,424,644,46,481,651,664,435,87,246,689,612,523,358,125,411,588,83,182,79,185,380,173,44,341,307,276,576,377,172,611,672,643,371,225,113,47,236,337,552,9,529,569,589,211,661,652,266,391,381,245,628,178,405,128,226,96,56,383,244,64,616,617,636,697,407,357,473,141,716,6,695,229,708,69,343,314,615,255,706,332,23,633,70,275,219,283,271,290,581,641,274,63,394,33,492,626,256,447,86,14,322,250,234,210,340,577,387,116,686,563,551,645,561,564,52,543,359,456,95,385,240,248,680,365,388,593,535,629,152,610,426,72,594,568,692,514,139,291,536,258,311,89,197,286,389,618,212,494,324,130,445,117,453,184,720,422,20,625,682,157,216,334,285,254,698,329,434,88,326,43,607,49,261,490,221,451,601,495,3,470,149,719,148,213,681,133,540,50,656,508,423,398,592,298,458,12,259,32,162,516,181,165,685,75,192,8,53,374,400,635,442,231,627,703,339,630,440,110,206,604,253,723,352,367,115,284,555,237,420,190,68,166,623,319,550,124,129,446,145,94,335,483,243,530,455,408,528,76,61,350,175,13,478,80,351,174,65,27,526,30,582,272,17,233,342,709,718,2,155,472,699,457,369,724,687,386,315,316,393,74,82,7,171,193,513,583,503,402,585,522,321,288,431,436,137,638,11,10,62,701,480,524,438,599,395,425,666,433,541,91,188,437,558,665,313,84,127,142,620,196,702,448,373,449,200,539,303,596,707,548,304,100,614,432,327,361,517,109,537,264,658,570,136,220,534,187,93,270,567,118,289,469,205,150,413,230,177,45,294,521,153,122,544,464,123,471,144,712,684,198,605,308,670,154,60,249,575,331,21,655,347,586,379,673,572,134,509,263,416,642,24,202,356,600,691,498,694,170,77,224,512,299,465,54,131,497,515,186,203,360,415,85,602,293,476,675,725,671,621,372,459,135,678,713,404,553,491,328,518,163,40,146,257,297,580,209,506,267,545,48,18,147,138,364,648,195,429,201,501,452,657,217,392,584,194,222,38,25,463,704,662,556,659,277,660,397,619,538,179,441,132,546,5,269,42,502,591,164,241,71,295,454,705,667,696,19,462,22,531,428,126,504,344,700,262,717,366,235,312,323,640,242,637,401,180,510,260,66,565,280,668,15,204,39,693,330,711,466,418,634,486,444,140,296,160,281,16,647,121,603,488,579,650,450,474,167,382,73,102,41,189,608,399,390,417";

var order = "";
var idd = true; // are we using indesign?


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}


// This version tries to optimize by only checking for "in" when looking for undefined and
// skipping the definitely fruitless NaN search. Other parts are merely cosmetic conciseness.
// Whether it is actually faster remains to be seen.
if (!Array.prototype.indexOf)
  Array.prototype.indexOf = (function(Object, max, min) {
    "use strict";
    return function indexOf(member, fromIndex) {
      if (this === null || this === undefined)
        throw TypeError("Array.prototype.indexOf called on null or undefined");

      var that = Object(this),
        Len = that.length >>> 0,
        i = min(fromIndex | 0, Len);
      if (i < 0) i = max(0, Len + i);
      else if (i >= Len) return -1;

      if (member === void 0) {
        // undefined
        for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i;
      } else if (member !== member) {
        // NaN
        return -1; // Since NaN !== NaN, it will never be found. Fast-path it.
      } // all else
      else for (; i !== Len; ++i) if (that[i] === member) return i;

      return -1; // if the value was not found, then return -1
    };
  })(Object, Math.max, Math.min);

if (idd) {
  var ProgressBar = function(/*str*/ title) {
    var w = new Window("palette", " " + title, {
        x: 0,
        y: 0,
        width: 340,
        height: 60
      }),
      pb = w.add(
        "progressbar",
        { x: 20, y: 12, width: 300, height: 12 },
        0,
        100
      ),
      st = w.add("statictext", { x: 10, y: 36, width: 320, height: 20 }, "");
    st.justify = "center";
    w.center();
    this.reset = function(msg, maxValue) {
      st.text = msg;
      pb.value = 0;
      pb.maxvalue = maxValue || 0;
      pb.visible = !!maxValue;
      w.show();
    };
    this.hit = function() {
      ++pb.value;
    };
    this.hide = function() {
      w.hide();
    };
    this.close = function() {
      w.close();
    };
  };
}
if (idd) {
  order = prompt("New Page order:", order);

  if (!order) {
    exit(0);
  }
}

// Create an array out of the list:
var pages = toSeparate(order);
var docPages = numPages();

// check if input is same as document
if (pages.length != docPages) {
  msg(
    "Page number mismatch: " +
      pages.length +
      " given, " +
      docPages +
      " in document"
  );
  exit(0);
}

// Consistency check:
sortedPages = pages.slice().sort(numericSort);
for (i = 0; i < sortedPages.length - 1; i++) {
  if (
    sortedPages[i] < sortedPages[i + 1] - 1 ||
    sortedPages[i] === sortedPages[i + 1]
  ) {
    msg("Mismatch: from " + sortedPages[i] + " to " + sortedPages[i + 1]);
    exit(0);
  }
}

// Convert from 1..x to 0..x-1:
for (i = 0; i < pages.length; i++) {
  pages[i]--;
}

// msg(
//   "All is great. I start the shuffle now. Just click OK and give it a lot of time!"
// );

var finalPages = pages.slice();

// now do the sorting
var to = pages.length - 1;

if (idd) {
  var pBar = new ProgressBar("Script Title");
  pBar.reset("Move Pages...", pages.length);
}

for (moveThis = 0; moveThis < pages.length; moveThis++) {
  // for (moveThis = pages.length - 1; moveThis >= 0; moveThis--) {
  var from = finalPages.indexOf(moveThis);

  if (idd) {
    pBar.hit();
  }
  try {
    move(from, to);
  } catch (_) {
    msg("problem with page " + moveThis + " >> " + pages[moveThis]);
    exit(0);
  }
}

if (!idd) {
  console.log(finalPages);
  console.log(finalPages[finalPages.length - 1]);
}

if (idd) {
  pBar.close();
}

msg("yay. all done...");

function toSeparate(list) {
  s = list.trim().replace(/,/g, " ").split(/\s+/g);

  for (i = 0; i < s.length; i++) {
    s[i] = parseInt(s[i]);
  }
  return s;
}

function numericSort(a, b) {
  return parseInt(a) - parseInt(b);
}

function move(from, to) {
  arraymove(finalPages, from, to);

  if (idd) {
    app.activeDocument.pages[from].move(
      LocationOptions.AFTER,
      app.activeDocument.pages[to]
    );
  }
}

// https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another
function arraymove(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

function numPages() {
  if (idd) {
    return app.activeDocument.pages.length;
  }
  return 725;
}

function msg(msg) {
  if (idd) {
    alert(msg);
    return;
  }
  console.log(msg);
}
