FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["sh","-c","envsubst '$PORT' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf.tmp && mv /etc/nginx/nginx.conf.tmp /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]