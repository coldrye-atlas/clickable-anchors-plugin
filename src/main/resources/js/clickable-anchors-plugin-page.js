AJS.$(document).ready(function () {

  var createAnchor = function (id) {

    return $(document.createElement("a"))
      .attr("href", "#" + id)
      .attr("alt", id)
      .addClass("clickable-anchors-plugin-link");
  };

  AJS.$("#content :header[id]").each(function (_, elt) {

    var header = $(elt);
    var anchor = createAnchor(elt.id);
    if (header.find('a').length == 0) {
      header.contents().wrap(anchor);
    }
  });
});
