import json
import sys

#test code for processing streaming history files - currently opens from first argument and just prints all the data in the json (lol)

try:
    fileTest = open(sys.argv[1],"r", encoding = "utf-8")                                                    #change to later pull from spotify api - direct to streaming history json
except:
    print("The specified file could not be opened.")
    exit()

data = json.load(fileTest)
print(data)
fileTest.close()