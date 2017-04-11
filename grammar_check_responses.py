import grammar_check
import glob
import os
import sys  

reload(sys)  
sys.setdefaultencoding('utf8')

cornellPath = "./cornellResponses"
twitterPath = "./twitterResponses"
cornellTwitterPath = "./cornellTwitterResponses"

tool = grammar_check.LanguageTool('en-US')


def grammarCheckFile(filePath, checkpt):
	for filename in glob.glob(os.path.join(filePath, 'dialogue_a_' + checkpt)):
		newFileName = filename.replace(filePath +"/", "corrected_")
		newFile = open(filePath +"/" + newFileName, 'w')

		oldFile = open(filename, 'r')
		dialogues = oldFile.readlines()
		for i,line in enumerate(dialogues):
			if i % 2 == 0:
				newFile.write(line)
			else:
				line = line.encode('ascii', 'ignore')
				matches = tool.check(line)
				if len(matches):
					line = grammar_check.correct(line, matches)
				newFile.write(line)
		newFile.close()

checkptNumbers = ["1000", "5000", "10000", "50000","100000", "120000"]

for n in checkptNumbers:
	grammarCheckFile(cornellPath, n)
	grammarCheckFile(twitterPath, n)
	grammarCheckFile(cornellTwitterPath, n)


