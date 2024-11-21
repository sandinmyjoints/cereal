import toDiffableHtml from "diffable-html";

export default {
  serialize(val, config, indentation, depth, refs, printer) {
    return toDiffableHtml(val).trim();
  },
  test(object) {
    if (typeof object !== "string") {
      return false;
    }

    const trimmed = object.trim();
    return (
      trimmed.length > 2 &&
      trimmed[0] === "<" &&
      trimmed[trimmed.length - 1] === ">"
    );
  }
};
