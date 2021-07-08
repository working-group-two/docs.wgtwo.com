const fs = require('fs');
const glob = require('glob');

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection, getCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const examples = addCollection("SourceExample");
    const docPages = getCollection("DocPage");

    docPages.addReference("sourceExamples", "SourceExample");

    examples.addNode({
      id: "",
      file: "",
      content: "",
    });

    glob("examples/**/*.*", (err, files) => {
      if (err !== null) {
        throw err;
      }

      files.forEach(file => {
        fs.readFile(file, "utf-8", (err, content) => {
          if (err !== null) {
            throw err;
          }

          examples.addNode({
            id: file,
            file,
            content,
          });
        })
      });
    });

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
