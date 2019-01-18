var Nightmare = require("nightmare");
var nightmare = Nightmare({ show: true });
  nightmare
  .goto("http://localhost:8080/test")
  .type("#input0", "Goku")
  .wait(500)
  .type("#input1", "hardened")
  .wait(500)  
  .type("#input2", "K-Mart")
  .wait(500)
  .type("#input3", "wanderlust")
  .wait(500)
  .type("#input4", "Pokeball")
  .wait(500)
  .type("#input5", "stupidly")
  .wait(500)
  .type("#input6", "thick")
  .wait(500)
  .type("#input7", "boil")
  .wait(500)
  .type("#input8", "screwed")
  .wait(500)
  .type("#input9", "rubber")
  .wait(500)
  .type("#input10", "42")
  .wait(500)
  .type("#input11", "wanted")
  .screenshot("UserSave.png")
  .click("#submitButton")
  .wait(1000)
  .type("#userNameBox", "New User")
  .screenshot("BeforeSave.png")
  .click("#saveButton")
  .wait(1000)
  .screenshot("AfterSave.png")
  .wait(3000)
  .end()
  .then(function() {
    console.log("Took a screenshot of the inputs, resulting story and of the return page");
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
