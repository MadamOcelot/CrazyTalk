var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("http://localhost:8080")
  .type("#input0", "test")
  .wait(2000)
  .type("#input1", "test")
  .wait(2000)  
  .type("#input2", "test")
  .wait(2000)
  .type("#input3", "test")
  .wait(2000)
  .type("#input4", "test")
  .wait(2000)
  .type("#input5", "test")
  .wait(2000)
  .type("#input6", "test")
  .wait(2000)
  .type("#input7", "test")
  .wait(2000)
  .type("#input8", "test")
  .wait(2000)
  .type("#input9", "test")
  .wait(2000)
  .type("#input10", "test")
  .wait(2000)
  .type("#input11", "test")
  .wait(2000)  
  .type("#input12", "test")
  .wait(2000)
  .type("#input13", "test")
  .wait(2000)
  .type("#input14", "test")
  .wait(2000)
  .click("#submitButton")
  .wait(3000)
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
