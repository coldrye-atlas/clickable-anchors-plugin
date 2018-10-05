AJS.$(document).ready(function () {

  var anchors = AJS.$("#content span.confluence-anchor-link");
  anchors.each(function (index, elt) {

    var span = $(elt);
    var anchor = $(document.createElement("a"));
    anchor.attr("href", "#" + elt.id);
    anchor.attr("alt", elt.id);
    anchor.text("#");
    anchor.addClass("clickable-anchors-plugin-link");
    anchor.appendTo(span);
  });

  var headings = AJS.$("#content :header[id]");
  headings.each(function (index, elt) {

    var heading = $(elt);
    var anchor = $(document.createElement("a"));
    anchor.attr("href", "#" + elt.id);
    heading.contents().appendTo(anchor);
    anchor.appendTo(heading);
  });
});
