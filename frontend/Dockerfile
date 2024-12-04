# Node 16 ইমেজ ব্যবহার করছি
FROM node:18

# অ্যাপ ফোল্ডার তৈরি করা হচ্ছে
WORKDIR /app

# package.json কপি করা হচ্ছে এবং npm install দিয়ে ডিপেন্ডেন্সি ইনস্টল করা হচ্ছে
COPY package.json package-lock.json /app/
RUN npm install --legacy-peer-deps

# কোড কপি করা হচ্ছে
COPY . /app/

# অ্যাপ স্টার্ট করতে কমান্ড
CMD ["npm","run","dev","--","--host"]
