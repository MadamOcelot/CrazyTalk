var Nightmare = require("nightmare");


describe("Crazy Talk", function () {

  it("Should take me to the next page", function () {
    return Nightmare({
      show: true
    })
      // Go to our test page route.
      .goto("http://localhost:8080/test")
      // Fills out the form inputs.
      .type("#input0", "Goku")
      .type("#input1", "hardened")
      .type("#input2", "K-Mart")
      .type("#input3", "wanderlust")
      .type("#input4", "Pokeball")
      .type("#input5", "stupidly")
      .type("#input6", "thick")
      .type("#input7", "boil")
      .type("#input8", "screwed")
      .type("#input9", "rubber")
      .type("#input10", "42")
      .type("#input11", "wanted")
      // Screenshots what was put into the forms before moving on.
      .screenshot("UserSave.png")
      // Clicks the submit button to take us to the next page with our stories.
      .click("#submitButton")
      .wait(5000)
      .type("#userNameBox", "New User")
      .screenshot("BeforeSave.png")
      .click("#saveButton")
      .wait(1000)
      .screenshot("AfterSave.png")
      .wait(3000)
      .end()
  
    .then(function () {
      console.log("Took a screenshot of the inputs, resulting story and of the return page");
    })
    .catch(function (error) {
      console.error("Search failed:", error);
    })});
});
