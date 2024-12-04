# Python 3.8 ইমেজ ব্যবহার করছি
FROM python:3.11

# অ্যাপ ফোল্ডার তৈরি করা হচ্ছে
WORKDIR /app

# requirements.txt ফাইল কপি করা হচ্ছে এবং পিপ ব্যবহার করে ডিপেন্ডেন্সি ইনস্টল করা হচ্ছে
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# কোড কপি করা হচ্ছে
COPY . /app/

# সার্ভার রান করতে কমান্ড
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
