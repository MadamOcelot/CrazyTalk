var Nightmare = require("nightmare");


describe("Crazy Talk", function () {

  // it("Should take me to the next page", async function (done) {
  //   Nightmare({
  //     show: true
  //   })
  //     .wait(3000)
  //     // Go to our test page route.
  //     .goto("http://localhost:8080/test")
  //     // Fills out the form inputs.
  //     .wait(5000)
  //     .insert("#input0", "Goku")
  //     .wait(500)
  //     .insert("#input1", "hardened")
  //     .wait(500)
  //     .insert("#input2", "K-Mart")
  //     .wait(500)
  //     .insert("#input3", "wanderlust")
  //     .wait(500)
  //     .insert("#input4", "Pokeball")
  //     .wait(500)
  //     .insert("#input5", "stupidly")
  //     .wait(500)
  //     .insert("#input6", "thick")
  //     .wait(500)
  //     .insert("#input7", "boil")
  //     .wait(500)
  //     .insert("#input8", "screwed")
  //     .wait(500)
  //     .insert("#input9", "rubber")
  //     .wait(500)
  //     .insert("#input10", "42")
  //     .wait(500)
  //     .type("#input11", "wanted")

  //     // Screenshots what was put into the forms before moving on.
  //     // .screenshot("UserSave.png")
  //     .wait(5000)
  //     // Clicks the submit button to take us to the next page with our stories.
  //     .click("#submitButton")
  //     .wait(5000)
  //     .end()
  // }, 70000)

  it("should save the user story", function (done) {
    return Nightmare({
      show: true
    })
      .wait(10000)
      // Go to our test page route.
      .goto("http://localhost:8080/test")
      // Fills out the form inputs.
      .wait(5000)
      .insert("#input0", "Goku")
      .wait(500)
      .insert("#input1", "hardened")
      .wait(500)
      .insert("#input2", "K-Mart")
      .wait(500)
      .insert("#input3", "wanderlust")
      .wait(500)
      .insert("#input4", "Pokeball")
      .wait(500)
      .insert("#input5", "stupidly")
      .wait(500)
      .insert("#input6", "thick")
      .wait(500)
      .insert("#input7", "boil")
      .wait(500)
      .insert("#input8", "screwed")
      .wait(500)
      .insert("#input9", "rubber")
      .wait(500)
      .insert("#input10", "42")
      .wait(500)
      .type("#input11", "wanted")

      // Screenshots what was put into the forms before moving on.
      .screenshot("UserSave.png")
      .wait(5000)
      // Clicks the submit button to take us to the next page with our stories.
      .click("#submitButton")
      .wait(5000)
      // .goto("http://localhost:8080/story")


      // Fills out User Name box to save the story.
      .type("#userNameBox", "New User")
      // Screenshots the story.
      .screenshot("BeforeSave.png")
      .click("#saveButton")
      .wait(5000)
      .screenshot("AfterSave.png")
      .wait(5000)
      .end()
      .then(function () {
        console.log("Took a screenshot of the inputs, resulting story and of the return page");
        done();
      })
      
      .catch(function (error) {
        console.error("Search failed:", error);
        done();
      })
    
  }, 60000)

});