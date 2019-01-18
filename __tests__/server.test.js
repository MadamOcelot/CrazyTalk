var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("http://localhost:8080/test")
  .type("#input0", "test")
  .wait(500)
  .type("#input1", "test")
  .wait(500)  
  .type("#input2", "test")
  .wait(500)
  .type("#input3", "test")
  .wait(500)
  .type("#input4", "test")
  .wait(500)
  .type("#input5", "test")
  .wait(500)
  .type("#input6", "test")
  .wait(500)
  .type("#input7", "test")
  .wait(500)
  .type("#input8", "test")
  .wait(500)
  .type("#input9", "test")
  .wait(500)
  .type("#input10", "test")
  .wait(500)
  .type("#input11", "test")
  .click("#submitButton")
  .wait(3000)
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
