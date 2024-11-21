# cereal

```
$ vitest run > /dev/null && cat mud.html
<html><body>no mud, no lotus</body></html>

# Expected output
# '\n<html>\n  <body>\n    no mud, no lotus\n  </body>\n</html>\n'
```

Using toDiffableHtml directly:

```
> const { default: toDiffableHtml } = await import("diffable-html");
undefined
> toDiffableHtml("<html><body>no mud, no lotus</body></html>")
'\n<html>\n  <body>\n    no mud, no lotus\n  </body>\n</html>\n'
```
