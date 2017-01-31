### CIS 700: Deep Learning Methods for Automated Discourse

#####HW1: Hello Alexa 
* [Super low res demo video](http://www.seas.upenn.edu/~kongjih/simecho.mp4) 
* [Alexa Skill Kit Interaction Model Reference](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interaction-model-reference)

* lambda.py: A python interface to build intent handlers and responses for Alexa. Modified from the Alexa Skill Set tutorial to say hello and a CS pickup line. 


* intent_schema.json and sample_utterances: The sample utterances file has the name of the intent on the first column followed by a possible utterance/words/sentences that the user might say to Alexa to trigger that intent. 



#####HW2: Tensorflow Tutorials
* XOR: Training a XOR model on Tensorflow. Ran experiments where we modified the activation functions and loss functions on [this implemention of xor.py](https://github.com/StephenOman/TensorFlowExamples/blob/master/xor%20nn/xor_nn.py) 

	
	|Activation Functions + Cost| Average Elapsed Time| Average Epoch |
	|:------------------------:|:---------------------------:|:-------:|
	|2 Sigmoids + Reduce Mean| 94.1s | 50420|
	|ReLU + Sigmoid + Reduce Mean| 1.53s (when lucky) | 757
	
	* The recorded elapsed time and epoch are the time and epoch that took the model to make 10 conescutive correct hypotheses
	* The second model only took 1.53 at times, but there were also times when it would not have converged while the first model was much more consistent. 

* Seq2Seq: A seq2seq model to translate from English to French. First you would need to download the necessary english and french data, tokenize it, then train the model. This could be done by:

```
$ python translate.py
``` 

Afterwards to try out the interactive decode mode by:

```
$ python translate.py --decode
```

* Ran 550 steps which resulted to a step-time 3.87 perplexity 411.19. The model paramters could be found in [Seq2Seq/checkpoint/](https://github.com/kongsally/Deep-Learning-for-Automated-Discourse/tree/master/Seq2Seq/checkpoint) and the output of checkpoints could be found in [Seq2Seq/perplexitiy_outputs](https://github.com/kongsally/Deep-Learning-for-Automated-Discourse/tree/master/Seq2Seq/perplexity_outputs)