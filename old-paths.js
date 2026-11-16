// Forwards addresses of the old 802szentkorona.hu site (Google Sites) to the matching page.
// The .hu domain forwards every path to the .com unchanged, so old search results land on
// 404.html. The page still answers with 404, so search engines drop the old addresses.
(function () {
  var rules = [
    [/^(rolunk|rólunk|csapat|csapatunk-tortenete|vezetosegnek)(\/|$)/, 'rolunk'],
    [/^(hirek|hírek|hireink|főoldal|foldal|home|csapatbal)(\/|$)/, ''],
    [/^(egyesuelet|egyesuelet-1|egyesulet|gödöllői-cserkészetért-egyesület)(\/|$)/, 'egyesulet'],
    [/^esemenynaptar(\/|$)/, 'programok'],
    [/^kapcsolat(\/|$)/, 'csatlakozom'],
    [/^kepek(\/|$)/, 'galeria']
  ];
  var path;
  try {
    path = decodeURIComponent(location.pathname).replace(/^\/+/, '').toLowerCase();
  } catch (e) {
    return;
  }
  for (var i = 0; i < rules.length; i++) {
    if (rules[i][0].test(path)) {
      location.replace('/' + rules[i][1]);
      return;
    }
  }
})();
