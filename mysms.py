#sudo yum install python3-pip -y
#sudo pip install boto3

# aws config (to set the region)

# #!/usr/bin/python3 (for linux)

import boto3 #module
sns = boto3.client('sns') #function
phone_number = '15555555555' #variable
sns.publish(Message='salam jahan', PhoneNumber=phone_number) #method