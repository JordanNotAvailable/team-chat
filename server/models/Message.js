const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  messageId: {
    type: String,
  },
  sender: {
    type: String,
  },
  text: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Message = model("Message", messageSchema);

// module.exports = Message;
