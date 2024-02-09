# simple-message-display



- The problem you encountered was likely due to the CORS (Cross-Origin Resource Sharing) policy enforced by web browsers. When your React application, running at `http://localhost:5173`, attempted to make a request to your Express server at `http://localhost:5000`, the browser blocked the request because it originated from a different domain.

- To resolve this issue, you needed to configure your Express server to include the proper CORS headers in its responses. By allowing requests from `http://localhost:5173` (the origin of your React application) using the `cors` middleware, you instructed the browser to permit requests from your React application to your Express server.

- Once CORS was properly configured on your Express server, the browser allowed the requests to go through, and your React application was able to fetch data from the `/messages` endpoint without encountering CORS errors.


- Postgres reailway env variables

DATABASE_PRIVATE_URL=postgresql://${{PGUSER}}:${{POSTGRES_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:5432/${{PGDATABASE}}
DATABASE_URL=postgresql://${{PGUSER}}:${{POSTGRES_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}/${{PGDATABASE}}
PGDATA=/var/lib/postgresql/data/pgdata
PGDATABASE=${{POSTGRES_DB}}
PGHOST=${{RAILWAY_TCP_PROXY_DOMAIN}}
PGPASSWORD=${{POSTGRES_PASSWORD}}
PGPORT=${{RAILWAY_TCP_PROXY_PORT}}
PGUSER=${{POSTGRES_USER}}
POSTGRES_DB=railway
POSTGRES_PASSWORD=1eC-Ffcad6FBG3aag-6D3cAbGaD2G*4G
POSTGRES_USER=postgres
SSL_CERT_DAYS=820# simple-message-display
