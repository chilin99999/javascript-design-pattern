let factory;

class Factory {
  constructor(name) {
    this.name = name;
  }
}

function createFactory() {
  if (!factory) {
    factory = new Factory();
  }
  return factory;
}

export default createFactory;
