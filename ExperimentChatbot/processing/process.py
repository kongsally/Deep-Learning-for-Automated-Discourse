
interviewer_file = open ('interviewer.txt', 'r')
patient_file = open ('patient.txt', 'r')

interviewer_txt = interviewer_file.readlines()
patient_txt = patient_file.readlines()

processed_interviewer_file = open ('processed_interviewer.txt', 'w')
processed_patient_file = open ('processed_patient.txt', 'w')

for line in interviewer_txt:
	processed_interviewer_file.write(line.lower());

for line in patient_txt:
	processed_patient_file.write(line.lower());