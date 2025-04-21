const mongoose = require("mongoose");

const url = process.env.TEST_MONGODB_URI;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 5,
  },
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// Note.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note);
//   });
//   mongoose.connection.close();
// });

const note = new Note({
  content: "Testing is annoying!",
  important: true,
});

note.save().then((result) => {
  console.log("note saved!", result);
  mongoose.connection.close();
});
