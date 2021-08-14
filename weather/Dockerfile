FROM ubuntu 

RUN apt-get update 
RUN apt-get install -y python3-pip
RUN pip install flask requests
ADD app.py /
WORKDIR /
EXPOSE 5000
CMD ["flask","run","--host=0.0.0.0"]
