class URLize {
  getInfo () {
    return {
      id: 'urlize',
      name: 'URLize',
      blocks: [
        {
          opcode: 'url',
          blockType: Scratch.BlockType.REPORTER,
          text: 'URLize [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'example.com'
            }
          }
        }
      ]
    };
  }

  url (args) {
    return /^([a-z]{2,}):/.test(args.URL) ? args.URL : ('http://' + args.URL);
  }
}

Scratch.extensions.register(new Fetch());