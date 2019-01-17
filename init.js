const tables = require("./models/crazytalk");

const stories = [
    "I went out with <name> last night. I was pretty <feeling ending in -ed> to see them for the first time, but when I got to <location> I was <feeling>. They were wearing a <noun> and it looked <adverb> <adjective>. I instantly knew that I needed to <verb>. I <verb ending in -ed> out the <noun> and never looked back. That was <number> years ago, and I never <verb ending in -ed> again.",
    "It was a <adjective> and <adjective> night. <name>, a <occupation> for <location>, was on the case. The suspect, <name>, had just stolen <number> <plural noun> from the local zoo, and escaped in their <mode of transport>. Time was of the essence. If they were to be caught, there was only <number greater than 1> things that mattered: the chief thing being the size of their <noun>.",
    "I am so <adjective> because today is the coding bootcamps first ever Christmas Party! I parked on the <number>-th floor, but I noticed <name> had to park in/at <location>. Everyone brought <noun> to share. These were some of my <adjective> dishes. <name> brought <plural noun>. I thought they were a little <adjective> and I noticed <name> had <number> helpings. <name> wore a <adjective> sweater and <name> wore an ugly <holiday> sweater. Overall it was a <adjective> day.",
    "I walked into the classroom yesterday and saw <name> taking a huge <noun>. The whole place was <adjective>. I couldn't believe how <adjective> the room was. I quickly covered my <body part> and escaped through the <noun>. I made a vow that day: I would catch whoever did it and <verb> them.",
    "It finally came to us: the ultimate idea for a group project: <noun> <verb ending in -ing> <plural noun>. We would get a <letter> for sure! I immediately set out to <location> to do some research. It was there that I found a <adjective> <noun> on top of the <furniture>. I knew this was it. My key to the perfect <noun>. I had to call my group right away to tell them \"<noun><noun>!\"",
    "\"<verb> my <body part>, pigs!\" <name> yelled as he ran from the cops. \"You'll never <verb> me!\" S/He <verb past tense> the wall and <verb past tense> right on their <body part>. The cops immediately ran up and <verb past tense> them. \"You have the right to remain <noun>. Anything you say or do can be held against you in the court of <noun>.  Do you understand?\" \"The only thing I understand is <plural noun><verb ending in -ing>\"",
    "I woke up to news of NASA reporting that they had made first contact with an alien species known as the <color> <noun – plural>. They said that they come in <noun>, and that their <number>-th order of business would be to <verb> the <plural noun>. I was <past tense verb>. Their <adjective> <body part> was so different from ours. I secretly hoped that they would actually <verb> all of the <plural noun> instead.",
    "Local hero <name>, also commonly referred to as 'The <adjective><noun>', saved a busload of <plural type of person> yesterday. S/He is reported to have the power to shoot <plural noun> from their <body part>. Those helped told the hero that they felt <adverb ending in -ly> <feeling> to be saved by someone so <adjective>. This has been <name> reporting on the scene for channel <number>, more at <number> o'clock.",
    "Alyssa's favorite movie star, Tom Cruise, came into class today. He was so <verb ending in -ed> to see us. He walked right up to Alyssa and said \"<noun><verb> my <noun>,\" all while <verb ending in -ing> his <body part>. With that, he took his leave, <verb ending in -ing> off into the sunset."
];

//tables.stories.destroy({});
tables.stories.bulkCreate([
    { story: stories[0] },
    { story: stories[1] },
    { story: stories[2] },
    { story: stories[3] },
    { story: stories[4] },
    { story: stories[5] },
    { story: stories[6] },
    { story: stories[7] },
    { story: stories[8] },
]);