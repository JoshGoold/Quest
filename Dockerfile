# Stage 1: Build React App
FROM node:16-alpine AS build
WORKDIR /resume-react
COPY /quest-app ./quest-app
RUN cd quest-app && \
    npm install && \
    npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome &&\
    npm install react-router-dom &&\
    npm run build 
    


# Stage 2: Serve React App
FROM nginx:alpine
COPY --from=build /resume-react/quest-app/dist /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/conf.d /etc/nginx/conf.d/

# Install Supervisor
RUN apk add --no-cache supervisor

# Copy Supervisor configuration
COPY config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose port 80
EXPOSE 8080

# Start Supervisor to manage services
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
