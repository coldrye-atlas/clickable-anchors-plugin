AJS.$(document).ready(function () {

  var createAnchor = function (id) {

    return $(document.createElement("a"))
      .attr("href", "#" + id)
      .attr("alt", id)
      .addClass("clickable-anchors-plugin-link");
  };

  AJS.$("#content span.confluence-anchor-link").each(function (_, elt) {

    createAnchor(elt.id)
      .text("#")
      .appendTo(elt);
  });

  AJS.$("#content :header[id]").each(function (_, elt) {

    createAnchor(elt.id)
      .append($(elt).contents())
      .appendTo(elt);
  });
});
