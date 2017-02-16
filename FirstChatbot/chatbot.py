import logging
import tensorflow as tf

from flask import Flask, render_template
from flask_ask import Ask, request, statement, question, session
from converse import decode, decode_init


app = Flask(__name__)
ask = Ask(app, "/")
logging.getLogger("flask_ask").setLevel(logging.DEBUG)

FLAGS = tf.app.flags.FLAGS

sess = tf.Session()

@ask.launch
def launch():
    speech_text = 'Welcome. How are you?'
    return question(speech_text).reprompt(speech_text)

@ask.intent("AnswerIntent", mapping={'utterance':'Text'})
def answer(utterance):
    stripped_utterance = utterance.rstrip()
    chat_bot_response = decode(stripped_utterance, model, en_vocab, rev_fr_vocab, sess)
    return statement(chat_bot_response)  # what if a question?

if __name__ == '__main__':
    (model, fr_vocab_path, en_vocab, rev_fr_vocab, sess) = decode_init(sess)
    app.run(debug=True)
