# FROM php:7.4-fpm-alpine
# #  php:7.4-apache

# # Установка необходимых пакетов и расширений
# RUN apk update && apk add --no-cache \
#     $PHPIZE_DEPS \
#     mysql-client \
#     && docker-php-ext-install pdo_mysql

# # Копирование вашего проекта в контейнер
# COPY . /var/www/html/

# # Убедитесь, что права доступа на директории корректны
# RUN chown -R www-data:www-data /var/www/html

# # Открытие порта 9000 для PHP-FPM
# EXPOSE 9000

# Используем официальный образ PHP с Apache
FROM php:7.4-apache

# Установка необходимых пакетов и зависимостей
RUN apt-get update && apt-get install -y \
    libzip-dev \
    && docker-php-ext-install mysqli

# Копирование вашего проекта в директорию Apache
# COPY . /var/www/html/

# Убедитесь, что права доступа на директории корректны
RUN chown -R www-data:www-data /var/www/html

# Открытие порта 80 для Apache
EXPOSE 80