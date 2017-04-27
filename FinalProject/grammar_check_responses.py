import grammar_check
import glob
import os
import sys  

reload(sys)  
sys.setdefaultencoding('utf8')

# cornellPath = "./cornellResponses"
# twitterPath = "./twitterResponses"
# cornellTwitterPath = "./cornellTwitterResponses"

pos2Path = "./2layer-pos"
pos3Path = "./3layer-pos"
neg2Path = "./2layer-neg"
neg3Path = "./3layer-neg"

tool = grammar_check.LanguageTool('en-US')

checkptNumbers = ["1000", "3000", "5000", "8000", "10000", "30000", "50000"]

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


for n in checkptNumbers:
	grammarCheckFile(pos2Path, n)
	grammarCheckFile(pos3Path, n)
	grammarCheckFile(neg2Path, n)
	grammarCheckFile(neg3Path, n)


