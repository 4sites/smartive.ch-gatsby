#!/bin/bash

# Check for variables
export WORKER_CONNECTIONS=${WORKER_CONNECTIONS:-1024}
export HTTP_PORT=${HTTP_PORT:-80}
export NGINX_CONF=/etc/nginx/mushed.conf

export PUBLIC_PATH=${PUBLIC_PATH:-/pub}

export GZIP_TYPES=${GZIP_TYPES:-application/javascript application/x-javascript application/rss+xml text/javascript text/css image/svg+xml}
export GZIP_LEVEL=${GZIP_LEVEL:-6}

export CACHE_IGNORE=${CACHE_IGNORE:-html}
export CACHE_PUBLIC=${CACHE_PUBLIC:-ico|jpg|jpeg|png|gif|svg|js|jsx|css|less|swf|eot|ttf|otf|woff|woff2|webp}
export CACHE_PUBLIC_EXPIRATION=${CACHE_PUBLIC_EXPIRATION:-1y}

# Build config
cat <<EOF > $NGINX_CONF
daemon              off;
worker_processes    1;
user                root;

events {
  worker_connections $WORKER_CONNECTIONS;
}

http {
  include       mime.types;
  default_type  application/octet-stream;

  keepalive_timeout  15;
  autoindex          off;
  server_tokens      off;
  port_in_redirect   off;
  sendfile           off;
  tcp_nopush         on;
  tcp_nodelay        on;

  client_max_body_size 64k;
  client_header_buffer_size 16k;
  large_client_header_buffers 4 16k;

  ## Cache open FD
  open_file_cache max=10000 inactive=3600s;
  open_file_cache_valid 7200s;
  open_file_cache_min_uses 2;

  ## Gzipping is an easy way to reduce page weight
  gzip                on;
  gzip_vary           on;
  gzip_proxied        any;
  gzip_types          $GZIP_TYPES;
  gzip_buffers        16 8k;
  gzip_comp_level     $GZIP_LEVEL;

  access_log         /dev/stdout;

  server {
    listen $HTTP_PORT;
    root $PUBLIC_PATH;

    index index.html;
    autoindex off;
    charset off;

    error_page 404 /404.html;

    add_header X-Frame-Options SAMEORIGIN;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://ssl.google-analytics.com https://maps.google.com https://maps.google.ch https://maps.googleapis.com; img-src 'self' data: https://www.google-analytics.com https://ssl.google-analytics.com https://maps.gstatic.com https://maps.google.com https://maps.googleapis.com https://*.medium.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-src 'none'; object-src 'none'";
    add_header X-Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://ssl.google-analytics.com https://maps.google.com https://maps.google.ch https://maps.googleapis.com; img-src 'self' data: https://www.google-analytics.com https://ssl.google-analytics.com https://maps.gstatic.com https://maps.google.com https://maps.googleapis.com https://*.medium.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-src 'none'; object-src 'none'";
    add_header Referrer-Policy no-referrer-when-downgrade;

    location /team {
        return 301 /agentur;
    }
    location /arbeiten {
        return 301 /projekte;
    }
    location /does {
        return 301 /projekte;
    }
    location /is {
        return 301 /agentur;
    }
    location /helps {
        return 301 /kontakt;
    }
    location = /cases {
        return 301 /projekte;
    }

    location ~* \.($CACHE_IGNORE)$ {
        add_header Cache-Control "no-store";
        expires    off;
    }

    location ~* (?:\.($CACHE_PUBLIC)|^\/static\/.*\/path---[A-Za-z0-9-]+\.json)$ {
        add_header Cache-Control "public";
        expires +$CACHE_PUBLIC_EXPIRATION;
    }

    rewrite ^(.+)/+\$ \$1 permanent;

    try_files \$uri \$uri/index.html =404;
  }

  server {
    server_name www.smartive.ch smartive.cloud www.smartive.cloud;
    return 301 \$scheme://smartive.ch\$request_uri;
  }
}

EOF

[ "" != "$DEBUG" ] && cat $NGINX_CONF;

mkdir -p /run/nginx/
chown -R root:root /var/lib/nginx

exec nginx -c $NGINX_CONF
