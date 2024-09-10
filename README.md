# Deploy Locally [Development]

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Deploy On Server [Production] - PM2

## Install NGINX on the server [Debian Based Obviously obviously]
```bash
sudo apt-get update
sudo apt-get install nginx
```

## Allow Nginx
```bash
sudo ufw allow 'Nginx Full'
```

## Edit Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/default
```

```yaml
server {
  listen 80;
  listen [::]:80;
  server_name nigga.com www.nigga.com;
  return 301 https://$server_name$request_uri;
}

server {
  listen 443 ssl;
  listen [::]:443 ssl;
  server_name nigga.com www.nigga.com;
  
  ssl_certificate <location to key>;
  ssl_certificate_key <location to private key>;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  
  }
  
  location ~ /.well-known {
    allow all;
  }
}
```

## Validate and Restart Nginx
```bash
sudo nginx -t
sudo systemctl restart nginx
```

## Setup nigga.com
```bash
yarn build
yarn global add pm2

pm2 start npm --name "wock" --start
```


# Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
