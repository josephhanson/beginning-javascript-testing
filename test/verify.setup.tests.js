describe('Verify Setup', function() {
  it('should verify testing framework is setup correctly', function() {
    expect(true).toBe(true);
  });

  it('should verify testing is setup correctly', function() {
    var foo = new Foo();
    expect(foo.name()).toBe('foo');
  });
});