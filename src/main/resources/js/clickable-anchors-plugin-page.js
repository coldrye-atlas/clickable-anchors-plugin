AJS.$(document).ready(function () {

  var anchors = AJS.$("#content span.confluence-anchor-link");
  anchors.each(function (index, elt) {

    var anchor = $(document.createElement("a"));
    anchor.attr("href", "#" + elt.id);
    anchor.attr("alt", elt.id);
    anchor.text("#");
    anchor.addClass("clickable-anchors-plugin-link");

    AJS.$(elt).append(anchor);
  });

  var headings = AJS.$("#content :header");
  headings.each(function (index, elt) {

    var anchor = $(document.createElement("a"));
    anchor.attr("href", "#" + elt.id);
    anchor.text("#");
    anchor.addClass("clickable-anchors-plugin-link");

    AJS.$(elt).append("&nbsp;").append(anchor);
  });
});
