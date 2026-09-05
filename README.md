# ComponentesPC
Este es un repositorio donde se está desarrollando un sitio web de una tienda de componentes de PCs

## Tecnologías usadas
- Docker
- MySQL
- Apache

## Prepara el archivo .env
 ```sh
 # Database
DB_SERVER_NAME=mysql_db
DB_USER=YOUR-USER
DB_PASS=YOUR-PASSWORD
DB_DATABASE=componentespc
# SMTP (Send emails)
EMAIL_HOST=smtp.gmail.com
EMAIL_SMTP_AUTH=true
EMAIL_USER=YOUR-EMAIL
EMAIL_PASS=YOUR-KEY
EMAIL_SMTPSECURE=TLS
EMAIL_PORT=587
 ```

## Docker
 Ejecuta el siguiente comando para levantar los servicios que requiere la app:
 ```sh
 docker compose up -d
 ```
 
 Si requires de reconstruir la app:
 ```sh
 docker compose up -d --build
 ```