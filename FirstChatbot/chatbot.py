import logging
import tensorflow as tf
import translateSteps

from flask import Flask, render_template
from flask_ask import Ask, request, statement, question, session


app = Flask(__name__)
ask = Ask(app, "/")
logging.getLogger("flask_ask").setLevel(logging.DEBUG)

FLAGS = tf.app.flags.FLAGS
# FLAGS.data_dir = "tf_data_dir"
# FLAGS.train_dir = "tf_checkpoints"

with tf.Session() as sess:
    # Create model and load parameters.
    (model, in_vocab, out_vocab) = translateSteps.init_decode(sess)

@ask.launch
def launch():
    speech_text = 'Welcome. How are you?'
    return question(speech_text).reprompt(speech_text)

@ask.intent("AnswerIntent")
def answer(utterance):
    stripped_utterance = utterance.rstrip()
    chat_bot_response = str(translateSteps.decode_sentence(sess, model, in_vocab, out_vocab, stripped_utterance))
    return statement(chat_bot_response)  # what if a question?

if __name__ == '__main__':
    app.run(debug=True)
