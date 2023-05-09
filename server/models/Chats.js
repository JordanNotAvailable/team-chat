const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
  chatName: {
    type: String,
    required: true,
    minlength: 3,
  },
  users: Array,
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ]
});

const Chat = model('Chat', chatSchema);

module.exports = Chat;