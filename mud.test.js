it("should serialize", async () => {
  const html = "<html><body>no mud, no lotus</body></html>";
  await expect(html).toMatchFileSnapshot(`./mud.html`);
});
